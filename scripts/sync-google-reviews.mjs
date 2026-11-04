#!/usr/bin/env node
// Sync Google reviews into src/data/reviews.ts from a JSON snapshot.
// Usage: node scripts/sync-google-reviews.mjs <path/to/clay-google-latest.json>
// JSON: { "fetchedAt": ISO, "rating": 5.0, "count": 35,
//         "reviews": [{ "id", "author", "date": "YYYY-MM-DD", "rating": 1-5, "text" }] }
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(root, 'src/data/reviews.ts');
const input = process.argv[2];
if (!input) { console.error('usage: sync-google-reviews.mjs <json>'); process.exit(2); }
const data = JSON.parse(fs.readFileSync(input, 'utf8'));
if (typeof data.rating !== 'number' || !Number.isInteger(data.count) || !Array.isArray(data.reviews))
  throw new Error('JSON must have numeric rating, integer count, reviews[]');

let src = fs.readFileSync(file, 'utf8');
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, ' ').trim();
const existing = [...src.matchAll(/author:\s*'((?:[^'\\]|\\.)*)'[\s\S]*?date:\s*'([^']*)'/g)]
  .map((m) => ({ author: norm(m[1].replace(/\\'/g, "'")), month: m[2].slice(0, 7) }));
const ids = new Set([...src.matchAll(/id:\s*'([^']*)'/g)].map((m) => m[1]));
const isDup = (r) => (r.id && ids.has(r.id)) ||
  existing.some((e) => e.author === norm(r.author) && e.month === String(r.date).slice(0, 7));

const q = (s) => JSON.stringify(String(s)).replace(/'/g, "\\'").replace(/^"|"$/g, "'").replace(/\\"/g, '"');
const added = data.reviews
  .filter((r) => r.author && r.date && r.text && !isDup(r))
  .sort((a, b) => String(b.date).localeCompare(String(a.date)));
if (added.length) {
  const block = added.map((r) => `  {\n${r.id ? `    id: ${q(r.id)},\n` : ''}    author: ${q(r.author)},\n    rating: ${Math.round(r.rating ?? 5)},\n    date: ${q(r.date)},\n    source: 'Google',\n    text: ${q(r.text)},\n  },\n`).join('');
  src = src.replace(/export const reviews: Review\[\] = \[\n/, (m) => m + block);
}
const before = src;
src = src.replace(/ratingValue:\s*[\d.]+,/, `ratingValue: ${Number(data.rating).toFixed(1)},`)
  .replace(/reviewCount:\s*\d+,/, `reviewCount: ${data.count},`);
const statsChanged = src !== before;
if (added.length || statsChanged)
  src = src.replace(/Last verified: \d{4}-\d{2}-\d{2}/, `Last verified: ${new Date().toISOString().slice(0, 10)}`);
if (!src.includes('id?: string')) src = src.replace('export interface Review {\n', 'export interface Review {\n  id?: string;\n');
fs.writeFileSync(file, src);
console.log(JSON.stringify({ added: added.map((r) => `${r.author} (${r.date})`), rating: data.rating, count: data.count }));
