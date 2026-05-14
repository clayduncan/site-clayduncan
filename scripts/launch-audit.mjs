import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(fs.existsSync(dist), 'dist/ does not exist. Run npm run build first.');

const htmlFiles = [];

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(filePath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(filePath);
    }
  }
};

if (fs.existsSync(dist)) {
  walk(dist);
}

const routeForFile = (filePath) =>
  `/${path
    .relative(dist, filePath)
    .replace(/index\.html$/, '')
    .replaceAll(path.sep, '/')}`;

const routeExists = (url) => {
  const cleanUrl = url.split('#')[0].split('?')[0];

  if (!cleanUrl || cleanUrl === '/') return true;
  if (cleanUrl.endsWith('/')) {
    return fs.existsSync(path.join(dist, cleanUrl, 'index.html'));
  }

  return (
    fs.existsSync(path.join(dist, cleanUrl)) ||
    fs.existsSync(path.join(dist, `${cleanUrl}/index.html`))
  );
};

const missingInternalLinks = [];
const noindexRoutes = [];
const forbiddenMatches = [];

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const route = routeForFile(htmlFile);

  if (/name="robots" content="[^"]*noindex/.test(html)) {
    noindexRoutes.push(route);
  }

  if (html.includes('loan-officer-recruiting')) {
    forbiddenMatches.push(route);
  }

  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const url = match[1];
    const isExternal =
      url.startsWith('http') ||
      url.startsWith('mailto:') ||
      url.startsWith('tel:') ||
      url.startsWith('data:') ||
      url.startsWith('#') ||
      url.startsWith('/_astro/');

    if (!isExternal && url.startsWith('/') && !routeExists(url)) {
      missingInternalLinks.push(`${route} -> ${url}`);
    }
  }
}

const sitemapPath = path.join(dist, 'sitemap-0.xml');
assert(fs.existsSync(sitemapPath), 'dist/sitemap-0.xml does not exist.');

const sitemap = fs.existsSync(sitemapPath)
  ? fs.readFileSync(sitemapPath, 'utf8')
  : '';
const sitemapUrls = [
  ...sitemap.matchAll(/<loc>https:\/\/www\.clayduncan\.com([^<]+)<\/loc>/g),
].map((match) => match[1]);

const llmsPath = path.join(root, 'public/llms.txt');
const llms = fs.existsSync(llmsPath) ? fs.readFileSync(llmsPath, 'utf8') : '';

assert(
  htmlFiles.length === 29,
  `Expected 29 built HTML files, found ${htmlFiles.length}.`,
);
assert(sitemapUrls.includes('/join-us/'), 'Sitemap must include /join-us/.');
assert(sitemapUrls.includes('/blog/'), 'Sitemap must include /blog/.');
assert(
  sitemapUrls.includes('/resources/va-loan-checklist-redstone-arsenal/'),
  'Sitemap must include the Redstone Arsenal VA loan checklist resource.',
);
assert(
  sitemapUrls.includes('/resources/va-certificate-of-eligibility-documents/'),
  'Sitemap must include the VA COE and documentation resource.',
);
assert(
  sitemapUrls.includes('/resources/va-funding-fee-exemptions-refunds/'),
  'Sitemap must include the VA funding fee resource.',
);
assert(
  sitemapUrls.includes(
    '/resources/va-appraisal-minimum-property-requirements/',
  ),
  'Sitemap must include the VA appraisal and MPR resource.',
);
assert(
  sitemapUrls.includes('/resources/va-closing-costs-allowable-fees/'),
  'Sitemap must include the VA closing costs and allowable fees resource.',
);
assert(
  sitemapUrls.includes('/resources/va-entitlement-second-use-loans/'),
  'Sitemap must include the VA entitlement and second-use resource.',
);
assert(
  sitemapUrls.includes(
    '/resources/jumbo-vs-conforming-loans-huntsville-madison/',
  ),
  'Sitemap must include the jumbo vs conforming resource.',
);
assert(
  sitemapUrls.includes('/resources/jumbo-loan-reserves-asset-documentation/'),
  'Sitemap must include the jumbo reserves and asset documentation resource.',
);
assert(
  sitemapUrls.includes('/resources/jumbo-loan-relocation-huntsville/'),
  'Sitemap must include the jumbo relocation planning resource.',
);
assert(
  sitemapUrls.includes('/resources/buying-home-before-medical-job-starts/'),
  'Sitemap must include the medical professional pre-start-date resource.',
);
assert(
  sitemapUrls.includes('/resources/medical-professional-student-loans-mortgage/'),
  'Sitemap must include the medical professional student-loan resource.',
);
assert(
  sitemapUrls.includes('/resources/medical-professional-loan-vs-conventional/'),
  'Sitemap must include the medical professional comparison resource.',
);
assert(
  sitemapUrls.includes('/resources/job-change-offer-letter-mortgage/'),
  'Sitemap must include the job change and offer letter mortgage resource.',
);
assert(
  sitemapUrls.includes('/resources/self-employed-mortgage-documentation/'),
  'Sitemap must include the self-employed mortgage documentation resource.',
);
assert(
  sitemapUrls.includes(
    '/blog/how-realtors-can-use-ai-without-losing-the-human-side-of-real-estate/',
  ),
  'Sitemap must include the first live blog post.',
);
assert(!sitemapUrls.includes('/404.html'), 'Sitemap must exclude /404.html.');
assert(
  !noindexRoutes.includes('/blog/'),
  '/blog/ must be indexable now that the first post is live.',
);
assert(noindexRoutes.includes('/404.html'), '/404.html must be noindex.');
assert(
  missingInternalLinks.length === 0,
  `Missing internal links:\n${missingInternalLinks.join('\n')}`,
);
assert(
  forbiddenMatches.length === 0,
  `Found development-only loan-officer-recruiting text in built HTML:\n${forbiddenMatches.join('\n')}`,
);
assert(
  llms.includes('https://www.clayduncan.com/join-us/'),
  'llms.txt must include /join-us/.',
);
assert(
  llms.includes('https://www.clayduncan.com/blog/'),
  'llms.txt must include /blog/.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/va-loan-checklist-redstone-arsenal/',
  ),
  'llms.txt must include the Redstone Arsenal VA loan checklist resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/va-certificate-of-eligibility-documents/',
  ),
  'llms.txt must include the VA COE and documentation resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/va-funding-fee-exemptions-refunds/',
  ),
  'llms.txt must include the VA funding fee resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/va-appraisal-minimum-property-requirements/',
  ),
  'llms.txt must include the VA appraisal and MPR resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/va-closing-costs-allowable-fees/',
  ),
  'llms.txt must include the VA closing costs and allowable fees resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/va-entitlement-second-use-loans/',
  ),
  'llms.txt must include the VA entitlement and second-use resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/jumbo-vs-conforming-loans-huntsville-madison/',
  ),
  'llms.txt must include the jumbo vs conforming resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/jumbo-loan-reserves-asset-documentation/',
  ),
  'llms.txt must include the jumbo reserves and asset documentation resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/jumbo-loan-relocation-huntsville/',
  ),
  'llms.txt must include the jumbo relocation planning resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/buying-home-before-medical-job-starts/',
  ),
  'llms.txt must include the medical professional pre-start-date resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/medical-professional-student-loans-mortgage/',
  ),
  'llms.txt must include the medical professional student-loan resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/medical-professional-loan-vs-conventional/',
  ),
  'llms.txt must include the medical professional comparison resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/job-change-offer-letter-mortgage/',
  ),
  'llms.txt must include the job change and offer letter mortgage resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/resources/self-employed-mortgage-documentation/',
  ),
  'llms.txt must include the self-employed mortgage documentation resource.',
);
assert(
  llms.includes(
    'https://www.clayduncan.com/blog/how-realtors-can-use-ai-without-losing-the-human-side-of-real-estate/',
  ),
  'llms.txt must include the first live blog post.',
);

const result = {
  htmlFileCount: htmlFiles.length,
  sitemapUrls,
  noindexRoutes,
  missingInternalLinks,
};

if (failures.length > 0) {
  console.error(JSON.stringify({ ...result, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ...result, status: 'passed' }, null, 2));
