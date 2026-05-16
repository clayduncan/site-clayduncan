# ClayDuncan.com AEO Crawler Audit

**Date:** May 16, 2026  
**Site:** https://www.clayduncan.com/  
**Scope:** robots.txt crawler access, llms.txt hygiene, post-DMG performance-pattern documentation, and formatting cleanup.

## Summary

- **robots.txt result:** Green. No checked AI crawler is blocked. Existing named crawler blocks allow retrieval while preserving `/admin/` and `/api/` exclusions.
- **llms.txt result:** Green. The file is present, uses production `https://www.clayduncan.com/` URLs, frames the site as Clay Duncan's canonical personal authority hub, uses the locked brand language "Duncan Mortgage Group, powered by Princeton Mortgage," and contains no Wix-era URLs.
- **Formatting result:** Green. `src/styles/global.css` formatting drift from the Pass 1 `@font-face` addition was corrected by Prettier with no semantic CSS changes.

## Bot-by-Bot Status

| Bot               | Provider / use                                     | Status              | Notes                                                                          |
| ----------------- | -------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| GPTBot            | OpenAI / ChatGPT training                          | Allowed             | Explicit named block with `Allow: /`; `/admin/` and `/api/` remain disallowed. |
| ClaudeBot         | Anthropic / Claude training                        | Allowed             | Explicit named block with `Allow: /`; `/admin/` and `/api/` remain disallowed. |
| PerplexityBot     | Perplexity                                         | Allowed             | Explicit named block with `Allow: /`; `/admin/` and `/api/` remain disallowed. |
| Google-Extended   | Google AI training controls                        | Allowed             | Explicit named block with `Allow: /`; `/admin/` and `/api/` remain disallowed. |
| CCBot             | Common Crawl                                       | Allowed by wildcard | Covered by `User-agent: *` with `Allow: /`; no specific disallow exists.       |
| Applebot-Extended | Apple Intelligence controls                        | Allowed by wildcard | Covered by `User-agent: *` with `Allow: /`; no specific disallow exists.       |
| Bingbot           | Bing / Microsoft Copilot / partner search surfaces | Allowed             | Explicit named block with `Allow: /`; `/admin/` and `/api/` remain disallowed. |

## robots.txt Details

The current robots file includes a global allow rule and explicit allow blocks for the major retrieval and answer-engine crawlers already in use by the site. No `Disallow` directive targets the audited AI crawlers. The only protected paths are `/apply/` in the wildcard block and `/admin/` plus `/api/` in crawler-specific blocks.

No robots.txt changes were required in this audit.

## llms.txt Details

The current `public/llms.txt` passes the checklist:

- Present in repo and intended for root serving at `https://www.clayduncan.com/llms.txt`.
- Uses production `https://www.clayduncan.com/` URLs only.
- Frames `clayduncan.com` as Clay Duncan's personal authority hub.
- Uses "Duncan Mortgage Group, powered by Princeton Mortgage" for brand framing.
- Does not use "Team Duncan" or "Duncan Mortgage Team."
- Lists the key authority pages: homepage, About, REALTOR AI Training, Mortgage Hub and child pages, Reviews, Blog, Events, and Join Us.
- Contains no decommissioned Wix URLs.

No llms.txt changes were required in this audit.

## Changes Made

- Formatted `src/styles/global.css` with Prettier. The diff only normalizes quote style in the `@font-face` declarations added in Pass 1.
- Added this audit report.
- Updated `docs/strategy/aeo-seo-strategy.md` with post-DMG ecosystem standards.

## Related Implementation Commits

- Pass 1: `88bd899` — self-hosted Inter Variable and Source Serif 4 font files plus `@font-face` declarations.
- Pass 2: `e0ea90a` — font preloads, GA4 defer pattern, and inline critical CSS via `global.css?inline`.
- Pass 3: this audit report and strategy standard update are committed together in the Pass 3 commit.

## Recommended Cadence

Run this crawler and `llms.txt` audit annually, or sooner if one of these changes occurs:

- A major AI crawler announces a new user agent.
- Google, OpenAI, Anthropic, Perplexity, Apple, or Microsoft changes crawler guidance.
- A new Duncan-related site launches.
- The site changes canonical brand framing, domain structure, or authority-page architecture.
