# ClayDuncan.com AEO Testing Harness

Last updated: 2026-05-09

## Purpose

This harness measures how answer engines understand Clay Duncan, clayduncan.com, Duncan Mortgage Group, and Clay's core specialties before more content is added.

The goal is not traffic reporting. The goal is answer accuracy, citation presence, and entity association.

## Engines To Test

Run the query set against:

- ChatGPT Search
- Perplexity
- Google Search with AI Overviews when available
- Microsoft Copilot / Bing

If an engine does not return a cited answer, still record whether Clay, Princeton Mortgage, Duncan Mortgage Group, or clayduncan.com appeared anywhere in the response.

## What To Record

Use `aeo-query-tracking.csv`.

For each query and engine, record:

- Date tested
- Engine
- Query
- Clay mentioned: Yes / No
- clayduncan.com cited: Yes / No
- Cited URL
- Position in citations, if visible
- Answer accuracy score
- Entity clarity score
- Competitor or source cited instead
- Notes
- Recommended next action

## Scoring

### Answer Accuracy Score

- `0` - Wrong or misleading answer
- `1` - Partially accurate but incomplete or vague
- `2` - Accurate enough, but missing important Clay-specific context
- `3` - Accurate and specific to Clay, Princeton Mortgage, location, and service

### Entity Clarity Score

- `0` - Clay Duncan is not understood as the correct entity
- `1` - Clay is mentioned but role/company/location are unclear
- `2` - Clay is correctly tied to mortgage, Huntsville, or Princeton Mortgage
- `3` - Clay is correctly tied to mortgage origination, Princeton Mortgage, Huntsville/North Alabama, NMLS, and the relevant specialty

## Query Classes

The 50-query set is grouped into:

- Entity and branded queries
- Mortgage hub queries
- VA and Redstone Arsenal queries
- Jumbo and complex mortgage queries
- Medical professional mortgage queries
- REALTOR AI training queries
- Loan officer growth queries
- Reviews and trust queries
- Local service area queries
- Comparison and early-stage borrower queries

## How To Interpret Results

### Build A Page When

- A query has clear borrower or partner intent
- Clay is not mentioned or cited
- Competitors, directories, Reddit, or generic sources answer instead
- The topic is already part of Clay's real service model
- The answer needs a canonical Clay-owned source

### Do Not Build A Page When

- The query is too broad or rate-driven
- A national aggregator structurally owns the answer
- The topic belongs to Levi or a future Duncan Mortgage Group site
- The content would be thin or duplicative

## First Content Decisions Likely To Come From This

Expected high-value next-page candidates:

- VA loan checklist near Redstone Arsenal
- Medical professional mortgage questions in Huntsville
- Jumbo loan planning checklist for Huntsville and Madison
- Complex mortgage document checklist
- AI Success System recap or explainer
- REALTOR AI training event recap

## Testing Cadence

Run the full 50-query panel:

- Once now for baseline
- Again 30 days after any major content or schema pass
- Quarterly after that

Run a short 10-query spot check after:

- Publishing a new page
- Updating major schema
- Updating Google Business Profile
- Publishing a new blog post or event recap

## Short 10-Query Spot Check

Use these for fast post-update testing:

1. Who is Clay Duncan?
2. Clay Duncan mortgage Huntsville
3. best VA lender near Redstone Arsenal
4. VA loan Huntsville Alabama
5. medical professional mortgage Huntsville
6. jumbo loans Huntsville Alabama
7. AI training for REALTORS Huntsville
8. Clay Duncan AI training
9. Duncan Mortgage Group
10. Princeton Mortgage Clay Duncan

## Decision Rule

After each test cycle, build only from evidence.

The next content page should be the page that fills the highest-value answer gap where:

- The query has real intent
- Clay has real authority
- The current answer engine result is weak, generic, or competitor-owned
- The site can provide a clearer, more trustworthy answer than what currently appears
