# AEO Spot Check - 2026-05-09

## Scope

This spot check records the automated web/search baseline for the 10-query AEO panel in `docs/strategy/aeo-testing-harness.md`.

This is not a full logged-in answer-engine panel. ChatGPT Search, Perplexity, Google AI Overviews, and Microsoft Copilot should still be checked manually using `docs/strategy/aeo-query-tracking.csv`.

## Summary

Clay is already showing useful search visibility for medical professional mortgage, jumbo mortgage, and AI training queries. The largest remaining gap is VA / Redstone Arsenal visibility, where national and local competitor pages still dominate.

Google still showed the old Wix-era `/about-me` page in branded searches. A redirect from `/about-me/` to `/about/` was added so both slash and no-slash variants consolidate into the current About page.

## 10-Query Baseline

| Query                                    | Observed Result                                                                                                                         |                  Clay / Site Status | Notes                                                                                                | Recommended Next Action                                                                                                                        |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Who is Clay Duncan?                      | Broad name results were dominated by other public Clay Duncan entities, including the composer/Wikipedia result.                        |                           Not clear | This is an entity-disambiguation issue, not just a page issue.                                       | Keep reinforcing `Clay Duncan = Huntsville mortgage loan originator at Princeton Mortgage` in schema, llms.txt, GBP, LinkedIn, and About copy. |
| Clay Duncan mortgage Huntsville          | Search surfaced Clay-related profiles and the old `/about-me` page.                                                                     |                             Partial | The old Wix URL is still indexed and should consolidate into `/about/`.                              | Redirect `/about-me/` to `/about/`; monitor branded search after recrawl.                                                                      |
| best VA lender near Redstone Arsenal     | Results were dominated by VA Loan Network, VA.gov / military-adjacent sources, Capital Home Mortgage, Redstone FCU, and other VA pages. |                                 Gap | Clay was not prominent in the observed results.                                                      | Build a VA supporting resource: Redstone Arsenal VA loan checklist / PCS buyer guide.                                                          |
| VA loan Huntsville Alabama               | Results showed national/local VA competitors such as Capital Home Mortgage, VA Loan Network, Redstone FCU, and New American Funding.    |                                 Gap | Clay has a strong page, but the query is competitive and not yet visible enough.                     | Add one supporting VA resource and internal links back to `/huntsville/va-loans/`.                                                             |
| medical professional mortgage Huntsville | Clay's medical professional mortgage page appeared for this query variant.                                                              |                              Strong | This page is already aligned with a high-specificity AEO/SEO opportunity.                            | Keep page updated; consider one FAQ or checklist later if search impressions justify it.                                                       |
| jumbo loans Huntsville Alabama           | Clay's jumbo page appeared for query variants, alongside Capital Home Mortgage and jumbo-specific competitors.                          |                              Strong | This is a good early indicator for the jumbo page.                                                   | Leave current page in place; consider a jumbo planning checklist later.                                                                        |
| AI training for REALTORS Huntsville      | Clay's REALTOR AI training page appeared for query variants.                                                                            |                              Strong | The AI training positioning is registering.                                                          | Continue supporting with events, recaps, and the blog.                                                                                         |
| Clay Duncan AI training                  | Search surfaced the old `/about-me` result and Clay's LinkedIn; Clay's AI positioning is present through related pages/profiles.        |                             Partial | Branded AI association is improving, but old Wix URL is still noise.                                 | Redirect old page; continue publishing AI event recaps.                                                                                        |
| Duncan Mortgage Group                    | Results were mixed with other Duncan / mortgage entities.                                                                               |                             Partial | The entity is new and needs repeated off-site and on-site reinforcement.                             | Keep header, schema, llms.txt, and homepage FAQ wording consistent.                                                                            |
| Princeton Mortgage Clay Duncan           | Results surfaced LinkedIn, org/profile sites, and Princeton-related third-party profiles.                                               | Strong off-site, partial site-owned | Third-party profiles help entity validation, but the Clay site should be the canonical owned source. | Continue linking Clay site from GBP, LinkedIn, and Princeton profiles where possible.                                                          |

## Highest-Value Next Content Recommendation

The next SEO/AEO content asset should be a VA-supporting resource, not another broad page.

Recommended page:

- `/resources/va-loan-checklist-redstone-arsenal/`

Implementation status:

- Built after this baseline as the first VA-supporting AEO resource.

Recommended angle:

- Redstone Arsenal VA loan document checklist
- COE, eligibility, funding fee, disability exemption, PCS timeline, offer strategy, and local Huntsville/Madison buying context
- Strong internal links to `/huntsville/va-loans/` and `/huntsville/mortgage-guidance/`

Reason:

Clay is already visible for medical, jumbo, and AI training queries. VA / Redstone remains the largest strategic gap and maps directly to Clay's priority positioning.
