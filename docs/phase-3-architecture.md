# Phase Three Architecture

## Decisions

- Phase Three work shipped from `main` through Netlify after local verification.
- MDX and sitemap support are active. Blog content uses the Astro content collection, and sitemap output is generated during production builds.
- The public brand is `Clay Duncan` because the domain is `clayduncan.com`.
- Levi Duncan should not receive a page in this phase. The likely future structure is separate personal sites connected through a Duncan Mortgage Group property.
- Wix cutover and redirect mapping are separate operational tasks.

## Content System Priorities

1. AEO homepage.
2. Core page/schema helpers.
3. High-priority Huntsville pages for VA loans, jumbo loans, medical professional mortgage guidance, and complex mortgage guidance.
4. Blog/category structure focused on REALTOR® AI education, event recaps, and selective mortgage strategy.
5. Focused support resources only where they add high-quality AEO value.

## Image Conventions

Use structured public image folders:

- `public/images/people/`
- `public/images/pages/`
- `public/images/events/`
- `public/images/social/`

Name files descriptively with lowercase words and hyphens, including the subject and year when useful:

- `clay-duncan-headshot-2026.jpg`
- `ai-for-realtors-workshop-huntsville-2026.jpg`

Alt text should identify the person, place, or event in plain language. Prefer useful context over keyword stuffing.

## Schema Conventions

Schema lives in `src/data/schema.ts` and should be composed from canonical site data in `src/data/site.ts` and compliance data in `src/data/compliance.ts`.

Use page-level JSON-LD for:

- Person
- ProfessionalService
- Organization
- WebSite
- BreadcrumbList
- FAQPage
- Article, once blog templates exist
- LoanOrCredit or Service on product and service pages where appropriate

Every AEO page should clearly answer who Clay helps, what the page covers, where the service applies, and the next step.
