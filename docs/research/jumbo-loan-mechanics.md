---
title: Jumbo Loan Mechanics and Planning (Universal Underwriting)
file_path: /docs/research/jumbo-loans/jumbo-loan-mechanics.md
date_checked: 05-09-2026
audience: Internal writer reference. Source-of-truth document for building reader-facing pages targeted at higher-income North Alabama buyers crossing the conforming loan limit.
companion_file: This is the universal-mechanics companion to a separate research packet covering Huntsville and Madison County local market context. Local applications (county-specific limits, neighborhood price points, local appraiser dynamics, AHFA program interactions) live in the local-context file.

scope_exclusions:
  - No content on manufactured housing, manufactured homes, mobile homes, or jumbo programs secured by manufactured collateral. This packet is for site-built real-property residential transactions only.
  - No tax advice. All tax questions route to "consult a CPA."
  - No financial planning advice. RSU exercise, retirement liquidation, asset allocation route to "consult a financial advisor."
  - No legal advice. Entity structure, trust, and estate questions route to "consult an attorney."

compliance_flags:
  - YMYL content. Every factual claim is sourced. Hedge guidelines as "typical of the jumbo segment," "common across major jumbo investors," "varies by investor," or "subject to investor overlay." Never frame a jumbo guideline as "the rule."
  - Distinguish QM jumbo from non-QM jumbo throughout.
  - Distinguish federal rule (CFPB, FHFA) from investor guideline norm from individual lender overlay throughout.
  - No rate quotes. Rate-structure explanations only.
  - No promises about loan placement, approval, or appraisal outcome.
  - Equal Housing Lender, NMLS ID, and Alabama state mortgage license disclosures must appear on any reader-facing page derived from this material.

source_update_cadence:
  - FHFA conforming loan limits: refresh annually in late November when FHFA announces the next year's limits. Effective January 1.
  - CFPB QM thresholds (APR-APOR spreads, HOEPA points-and-fees triggers, HPML smaller-loan appraisal exemption): refresh annually in mid-December when CFPB issues annual threshold rules. Effective January 1.
  - Fannie Mae and Freddie Mac Selling Guide guidance: refresh quarterly. Both publish multiple updates per year.
  - Investor-specific jumbo guidelines: continuously variable. Verify with the loan officer's investor contacts at the time of any reader-facing claim.
  - USPAP: open-ended model since 2024 Edition. Monitor Appraisal Standards Board for new effective dates rather than assuming a two-year cycle.
---

# Jumbo Loan Mechanics and Planning

A source-backed reference packet on the universal mechanics of jumbo mortgage lending. Covers what defines jumbo, how investors underwrite it, what reserves and documentation are typically expected, how income is qualified, and how appraisal and offer strategy work on higher-priced homes. Written for an internal writer audience producing reader-facing pages for higher-income North Alabama buyers (executives, engineers, physicians, business owners, relocation buyers, senior defense contractors, federal civilians) who are crossing the conforming loan limit.

The companion local-context file covers Huntsville and Madison County submarket dynamics. Universal mechanics (definitions, underwriting framework, reserves, asset documentation, income types, DTI, credit, appraisal mechanics, offer strategy) stay here. Local applications stay there.

---

## 1. Official Sources

All URLs accessed 05-09-2026 unless noted.

### 1.1 Federal Housing Finance Agency (FHFA)

- FHFA conforming loan limit announcement page (annual hub): https://www.fhfa.gov/data/conforming-loan-limit
- FHFA 2026 conforming loan limit announcement (released 11-25-2025): https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026
- 2026 county-by-county loan limit list (XLSX): https://www.fhfa.gov/document/d/cll/fullcountyloanlimitlist2026_hera-based_final_flat.xlsx
- 2026 conforming loan limit map: https://www.fhfa.gov/data/dashboard/conforming-loan-limit-values-map
- 2026 calculation methodology addendum (PDF): https://www.fhfa.gov/document/d/cll/fhfa-cll-addendum-cy2026.pdf
- 2026 FAQs (PDF): https://www.fhfa.gov/document/d/cll/fhfa-cll-faqs-2026.pdf

### 1.2 Fannie Mae Selling Guide (referenced as the conforming floor jumbo investors deviate from)

- Fannie Mae Selling Guide hub: https://selling-guide.fanniemae.com/
- B3-3.5 Self-Employment Income: https://selling-guide.fanniemae.com/sel/b3-3.5/self-employment-income
- B3-3.6-03 Income or Loss Reported on IRS Form 1040, Schedule C: https://selling-guide.fanniemae.com/sel/b3-3.6-03/income-or-loss-reported-irs-form-1040-schedule-c
- B3-3.3-02 Bonus, Commission, Overtime, and Tip Income: https://selling-guide.fanniemae.com/sel/b3-3.3-02/bonus-commission-overtime-and-tip-income
- B3-3.3-07 Restricted Stock Units and Restricted Stock Employment Income: https://selling-guide.fanniemae.com/sel/b3-3.3-07/restricted-stock-units-and-restricted-stock-employment-income
- B3-4.2-02 Depository Accounts (large-deposit rule): https://selling-guide.fanniemae.com/sel/b3-4.2-02/depository-accounts
- Fannie Mae Form 1084 Cash Flow Analysis (PDF): https://singlefamily.fanniemae.com/media/7746/display
- Fannie Mae 2026 conforming loan limit notice: https://capitalmarkets.fanniemae.com/mortgage-backed-securities/fhfa-announces-conforming-loan-limit-values-2026
- Reconsideration of Value (ROV) initiative: https://singlefamily.fanniemae.com/initiative-updates/reconsideration-value-rov

### 1.3 Freddie Mac Single-Family Seller/Servicer Guide

- Freddie Mac Selling Guide hub: https://guide.freddiemac.com/
- Section 5303 (additional employed income): https://guide.freddiemac.com/app/guide/section/5303.4
- Appraiser Independence Requirements FAQ: https://sf.freddiemac.com/faqs/appraiser-independence-requirements-faq

### 1.4 CFPB Ability-to-Repay / Qualified Mortgage Rule

- 12 CFR 1026.43 (Minimum standards for transactions secured by a dwelling): https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-E/section-1026.43
- CFPB ATR/QM resource page: https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/ability-repay-qualified-mortgage-rule/
- CFPB ATR/QM Small Entity Compliance Guide (April 2021, PDF): https://files.consumerfinance.gov/f/documents/cpfb_atr-qm_small-entity_compliance-guide.pdf
- 2021 General QM Final Rule (Federal Register, mandatory compliance delay to 10-01-2022): https://www.federalregister.gov/documents/2021/04/30/2021-09028/qualified-mortgage-definition-under-the-truth-in-lending-act-regulation-z-general-qm-loan-definition

### 1.5 CFPB / Federal Reserve / OCC Annual Threshold Rules for 2026

- Regulation Z annual threshold adjustments (HOEPA and QM, Federal Register 12-15-2025, effective 01-01-2026): https://www.federalregister.gov/documents/2025/12/15/2025-22773/truth-in-lending-regulation-z-annual-threshold-adjustments-credit-cards-hoepa-and-qualified
- HPML smaller-loan appraisal exemption ($34,200 for 2026): https://www.consumerfinance.gov/about-us/newsroom/agencies-announce-dollar-thresholds-for-smaller-loan-exemption-from-appraisal-requirements-for-higher-priced-mortgage-loans-2025/
- 12 CFR 1026.35 (Higher-Priced Mortgage Loans): https://www.consumerfinance.gov/rules-policy/regulations/1026/35/

### 1.6 Appraisal Standards

- Appraisal Foundation USPAP overview (current edition: 2024, open-ended effective date): https://appraisalfoundation.org/pages/uspap
- Appraisal Foundation Practicing Appraisers resources: https://appraisalfoundation.org/pages/practicing-appraisers
- Fannie Mae Property Valuation FAQs (covers AIR specifics): https://singlefamily.fanniemae.com/property-valuation/faqs-property-valuation
- Interagency Guidance on Reconsiderations of Value of Residential Real Estate (referenced through ABA Banking Journal coverage): https://bankingjournal.aba.com/2025/05/reconsideration-of-value-rov-a-critical-component-of-appraisal-review/

### 1.7 Anti-Money Laundering / Source-of-Funds

- FinCEN guidance hub: https://www.fincen.gov/resources/statutes-regulations/guidance
- Anti-Money Laundering Program and SAR Filing Requirements for Residential Mortgage Lenders and Originators (Final Rule 2012, $5,000 SAR threshold): https://www.federalregister.gov/documents/2012/02/14/2012-3074/anti-money-laundering-program-and-suspicious-activity-report-filing-requirements-for-residential
- FinCEN Residential Real Estate Rule (effective 03-01-2026, replaces prior GTOs with nationwide reporting framework): referenced through Old Republic Title summary at https://www.oldrepublictitle.com/blog/fincen-final-rule/

### 1.8 Industry Data

- MBA 2026 Mortgage Finance Forecast (10-19-2025 release): https://www.mba.org/news-and-research/newsroom/news/2025/10/19/mba-forecast--total-single-family-mortgage-originations-to-increase-8-percent-to--2.2-trillion-in-2026
- Inside Mortgage Finance Jumbo topic page: https://www.insidemortgagefinance.com/topics/3706-jumbo
- Inside Mortgage Finance 2026 conforming loan limit coverage: https://www.insidemortgagefinance.com/articles/236032-fhfa-announces-2026-conforming-loan-limits

### 1.9 IRS Guidance Relevant to Underwriting Documentation

- IRS U.S. Taxation of Stock-Based Compensation (RSU treatment as W-2 wage income at vesting): https://www.irs.gov/newsroom/us-taxation-of-stock-based-compensation-received-by-nonresident-aliens-youtube-video-text-script
- IRS Publication 525 (Taxable and Nontaxable Income, governs RSU and stock comp characterization): https://www.irs.gov/forms-pubs/about-publication-525
- IRS Publication 535 / Schedule C instructions (self-employment income reporting): https://www.irs.gov/forms-pubs/about-schedule-c-form-1040

### 1.10 Sample Published Investor and Lender Jumbo Programs (Illustrative)

These are illustrative samples of how individual jumbo investors and lenders structure their programs. They are not "the jumbo rule."

- Chase: https://www.chase.com/personal/mortgage/education/financing-a-home/how-to-qualify-for-jumbo-mortgage-loan
- Wells Fargo: https://www.wellsfargo.com/mortgage/learn/what-is-a-jumbo-loan/
- PennyMac (10.01% down on jumbo up to $2M, with own-funds minimum): https://www.pennymac.com/jumbo-home-loans
- Rocket Mortgage Jumbo Smart: https://www.rocketmortgage.com/learn/jumbo-loan
- JMAC Lending (non-QM ZUMA programs): https://www.jmaclending.com/products-nonqm
- NASB non-QM (bank statement, 1099, asset depletion, ITIN): https://www.nasb.com/lending/solutions/non-qm-loans/non-qm-loan-faqs

---

## 2. Plain-English Summary

Most U.S. mortgages are conforming loans, meaning they fit inside the dollar limits Fannie Mae and Freddie Mac are allowed by law to buy. For 2026, the baseline conforming limit on a one-unit property is $832,750 across most of the country, with a higher ceiling of $1,249,125 in counties FHFA has designated high-cost. (Source: FHFA, 11-25-2025 announcement.) When a buyer's loan amount crosses that limit, the loan is no longer conforming. It becomes a jumbo loan, which is a non-agency, non-government-backed product held in portfolio by banks or aggregated by private investors and securitized as private-label mortgage-backed securities.

The key thing to understand about jumbo is that there is no single rulebook. With conforming loans, Fannie and Freddie publish detailed selling guides that almost all originators follow. With jumbo, every individual investor sets its own guidelines. Reserve requirements, DTI ceilings, asset documentation rules, allowable income types, and even down payment minimums vary materially across jumbo investors. Two lenders quoting the same borrower on the same loan can land in different places because they place loans with different investors that read the same file differently. Throughout this packet, where ranges appear, those ranges describe what is "typical of the jumbo segment" or "common across major jumbo investors," not "the rule."

Most jumbo loans today are originated as Qualified Mortgages (QM), meaning they satisfy the Ability-to-Repay rule under 12 CFR 1026.43 with full income and asset documentation. There is also a meaningful non-QM jumbo segment for borrowers whose income story does not fit traditional documentation: bank statement loans for self-employed borrowers with strong cash flow but heavily-deducted returns, 1099-only loans, asset depletion or asset utilization loans for asset-rich retirees, foreign national programs, and ITIN programs. Non-QM is not subprime. It is alternative documentation, with its own real costs in rate, down payment, and reserve premiums.

For a typical full-doc QM jumbo borrower, expectations cluster as follows. Credit scores of 700 to 740 or higher tend to unlock the best pricing. Down payments of 10 to 20 percent are common, with stronger pricing at 20 percent and above. Reserves of 6 to 12 months of full PITIA (principal, interest, taxes, insurance, association dues) are typical, scaling up to 18 or 24 months as loan amount climbs above $1 to $2 million or as additional financed properties are involved. DTI ceilings tend to fall in the 43 to 49 percent range, with compensating factors (high reserves, strong credit, lower LTV) opening the upper end. Income documentation is full: two years of tax returns, two years of W-2s, recent pay stubs, two months of asset statements with all pages, and source documentation for any deposit larger than 50 percent of monthly qualifying income.

The other major jumbo-specific concerns are appraisal and timing. Many jumbo investors require two appraisals on loan amounts above a stated threshold, often $1 million, $1.5 million, or $2 million. When two appraisals come in at different values, the lower one typically governs. On higher-priced homes generally, comp scarcity is a structural risk: fewer sales mean fewer recent comparable transactions, which means broader appraiser judgment and more variability. Jumbo files take longer to underwrite than agency loans because most run through manual underwriting, so 30 to 45 days is a common contract timeline expectation. The Appraiser Independence Requirements (AIR) limit who can communicate with the appraiser about value, and those limits apply to jumbo just as they apply to agency.

The right move for someone considering a jumbo purchase is to start the planning conversation 3 to 6 months before shopping, run the conforming-versus-jumbo math against realistic price points, identify the income documentation path early, document any RSU and bonus history, and complete a verified-income, verified-asset (VIVA) pre-approval before writing offers in any competitive submarket.

---

## 3. Defining Jumbo: The Conforming Threshold and What Crosses It

### 3.1 The 2026 Conforming Loan Limit

The Federal Housing Finance Agency announced the 2026 conforming loan limit values on 11-25-2025. For one-unit properties, the baseline limit across most of the United States is $832,750, an increase of $26,250 from the 2025 baseline of $806,500. The increase reflects a 3.26 percent rise in the FHFA House Price Index between Q3 2024 and Q3 2025. Source: FHFA, 11-25-2025: https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026

The 2026 baseline limits for properties with multiple units are:

- 1-unit: $832,750
- 2-unit: $1,066,000
- 3-unit: $1,288,875
- 4-unit: $1,601,450

Source: FHFA county loan limit list, https://www.fhfa.gov/document/d/cll/fullcountyloanlimitlist2026_hera-based_final_flat.xlsx

The high-cost area ceiling, applicable in counties where 115 percent of the local median home value exceeds the baseline, is set at 150 percent of the baseline. For 2026, that ceiling is $1,249,125 for one-unit properties. Statutorily designated areas (Alaska, Hawaii, Guam, U.S. Virgin Islands) carry the ceiling figure as their baseline limit. Source: FHFA, 11-25-2025.

The annual cycle: FHFA typically announces the next calendar year's CLL values in late November, effective for loans delivered to Fannie Mae or Freddie Mac with pool issue dates on or after January 1. Lenders increasingly adopt the next-year limits in advance once announced. Source: Fannie Mae 2026 announcement, https://capitalmarkets.fanniemae.com/mortgage-backed-securities/fhfa-announces-conforming-loan-limit-values-2026

### 3.2 Alabama County Treatment

All Alabama counties, including Madison, Limestone, Morgan, Marshall, Jackson, DeKalb, Cullman, Jefferson, Shelby, Mobile, and Baldwin, are at the baseline 2026 conforming limit of $832,750 for one-unit properties. None of these counties carries an FHFA high-cost designation. Loan amounts above $832,750 on a one-unit Alabama property are jumbo. Source: FHFA 2026 county loan limit list (Alabama section), https://www.fhfa.gov/document/d/cll/fullcountyloanlimitlist2026_hera-based_final_flat.xlsx

This matters for two practical reasons. First, the high-balance conforming category that exists in designated high-cost counties (loans above the baseline but at or below the local high-cost limit, eligible for agency execution but priced differently) does not apply in Alabama. A one-unit Alabama loan is either conforming at or below $832,750 or jumbo above it. Second, relocation buyers moving to North Alabama from high-cost counties experience a ceiling drop. A loan amount that was high-balance conforming in Santa Clara, Fairfax, or Suffolk County may be jumbo in Madison County for the same buyer at a similar price point.

### 3.3 High-Cost Counties Most Relevant to North Alabama Relocation Traffic (2026)

Relocation buyers from these counties may not need to be educated on jumbo mechanics if their prior loan was high-balance conforming. The framing for them is that the same loan amount in Madison County is jumbo because Madison is at the baseline.

At the $1,249,125 ceiling in 2026: Alameda, Contra Costa, Los Angeles, Marin, Orange, San Benito, San Francisco, San Mateo, Santa Clara, Santa Cruz (CA); New York County and most Bay Area-equivalent designated counties; Nantucket and Dukes Counties (MA); and similar coastal high-cost designations. Other California counties with elevated but sub-ceiling limits in 2026 include San Diego ($1,104,000), Ventura ($1,035,000), Napa ($1,017,750), San Luis Obispo ($1,000,500), Monterey ($994,750), Santa Barbara ($941,850), and Sonoma ($897,000). Source for California-specific limits: https://www.sammamishmortgage.com/california-conforming-loan-limits/ accessed 05-09-2026.

The full county-by-county table is in the FHFA 2026 list referenced above. The writer should pull current limits from FHFA directly when producing reader-facing content, since limits change every November.

### 3.4 What Actually Triggers Jumbo

The jumbo threshold is the loan amount, not the purchase price. Two consequences follow:

- A buyer with a high purchase price and a large down payment may stay conforming. Example: a $1,050,000 purchase in Madison County with 25 percent down is a $787,500 loan, which is conforming.
- A buyer with a moderate purchase price and a low down payment may go jumbo if the loan amount exceeds the limit. Example: a $920,000 purchase in Madison County with 5 percent down would yield a $874,000 loan amount, which exceeds the 2026 baseline of $832,750 and is jumbo.

The math: purchase price minus down payment equals base loan amount. Financed mortgage insurance, financed VA funding fees, or financed FHA upfront mortgage insurance premiums, where applicable, increase total loan amount and can push a loan from conforming into jumbo. Seller concessions credited toward closing costs do not reduce loan amount; they typically reduce cash to close. (Note: jumbo programs almost always use private mortgage insurance, not financed agency MI, when LTV exceeds 80 percent and MI is required at all. Many jumbo programs avoid MI entirely by structuring around a higher down payment.)

### 3.5 Why Borrowers May Move into Jumbo Territory

- Purchase price exceeds what a conforming loan amount can fund with the buyer's available down payment
- The buyer prefers to keep down payment lower (often to retain liquidity) and finance more of the purchase price
- The buyer cannot or does not want to liquidate retirement, brokerage, or RSU positions to bring the loan amount under the conforming limit (any decision involving liquidation should route to the buyer's CPA and financial advisor for tax and asset-allocation review)
- Cash-out refinance proceeds push the new loan above the conforming limit
- Construction-to-permanent loan converts at a permanent loan amount above the conforming limit
- The buyer prefers a specific jumbo product feature (rate, ARM structure, prepay flexibility, interest-only option) that conforming does not offer

### 3.6 When Jumbo May Not Be Necessary (Structural Alternatives)

Before defaulting to jumbo, the loan officer should walk a borrower through structural alternatives. Each has tradeoffs.

**Increase the down payment to bring the loan amount under the conforming limit.** Tradeoff: liquidity is reduced. The reserve cushion after closing is smaller. If those funds came from a brokerage or retirement account, liquidation may have tax consequences (route to CPA).

**Conforming first mortgage plus piggyback HELOC or fixed second.** The 80/10/10 and 80/15/5 structures finance the purchase with two loans, keeping the first mortgage at or below the conforming limit and using a second-lien product (HELOC or fixed second) for the gap. Tradeoffs: blended rate of the two loans versus the all-in jumbo rate; second-lien rate exposure if HELOC; refinance optionality on each lien; borrower has two loans to manage; potential PMI implications if first-lien LTV is above 80 percent (though piggyback structures are typically designed to keep the first lien at exactly 80 percent LTV to avoid MI).

**Bring seller concessions in to offset closing costs.** This frees borrower cash for down payment but does not change the loan amount unless the cash freed is then redirected to down payment. Concession limits vary by occupancy and LTV.

**Bridge from sale of prior home.** When the timing works, sale proceeds bring down payment up high enough to keep the loan amount conforming. When the timing does not work, bridge financing is the bridge. Bridge product mechanics, contingency structures, and exit-loan timing live in a separate planning conversation.

The right structural choice depends on the borrower's liquidity priorities, tax situation, and rate environment. The loan officer's role is to model each path clearly. The decision to liquidate any non-cash asset to support a real estate transaction is a tax and financial planning decision that routes to the CPA and financial advisor.

---

## 4. The Jumbo Underwriting Framework

### 4.1 Non-Conforming, Not Government-Backed

Jumbo is non-conforming, meaning the loan amount exceeds the FHFA conforming limit and the loan is not eligible for purchase by Fannie Mae or Freddie Mac. Jumbo is also not government-backed: it is not insured by FHA, guaranteed by VA, or guaranteed by USDA. (Note: VA and FHA do offer their own jumbo or high-balance executions in designated high-cost areas, but those programs sit outside the private jumbo segment and are not the focus of this packet.)

Jumbo loans are held in portfolio by banks (Chase, Wells Fargo, Bank of America, Citi, U.S. Bank, regional banks) or aggregated by private investors and securitized as private-label mortgage-backed securities (PLMBS). Because there is no agency uniformity, investor identity matters more in jumbo than in conforming. Two jumbo lenders pulling guidelines from two different investors will read the same borrower file with meaningfully different conclusions. Source for portfolio dynamics: Bankrate jumbo rate page, https://www.bankrate.com/mortgages/jumbo-loan-rates/ accessed 05-09-2026.

### 4.2 QM Jumbo

Most jumbo loans originated today are Qualified Mortgages (QM). Under the Ability-to-Repay rule at 12 CFR 1026.43, a creditor must make a reasonable, good-faith determination that the consumer can repay the loan according to its terms. Loans that meet the QM definition gain certain liability protections. (Source: 12 CFR 1026.43, https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-E/section-1026.43)

The General QM definition was amended effective 03-01-2021, with mandatory compliance starting 10-01-2022. The amendment replaced the prior 43 percent DTI hard cap with a price-based threshold tied to the spread between the loan's annual percentage rate (APR) and the average prime offer rate (APOR) for a comparable transaction. (Source: CFPB ATR/QM Small Entity Compliance Guide, April 2021: https://files.consumerfinance.gov/f/documents/cpfb_atr-qm_small-entity_compliance-guide.pdf; Federal Register Final Rule on mandatory compliance delay: https://www.federalregister.gov/documents/2021/04/30/2021-09028/qualified-mortgage-definition-under-the-truth-in-lending-act-regulation-z-general-qm-loan-definition)

For 2026, the General QM APR-APOR spread thresholds (effective 01-01-2026) are:

- 2.25 or more percentage points for a first-lien transaction with a loan amount equal to or greater than $137,958 (this is the threshold relevant to jumbo)
- 3.5 or more percentage points for a first-lien transaction with a loan amount between $82,775 and $137,958
- 6.5 or more percentage points for a first-lien transaction with a loan amount less than $82,775

(Source: Federal Register, Truth in Lending Annual Threshold Adjustments effective 01-01-2026: https://www.federalregister.gov/documents/2025/12/15/2025-22773/truth-in-lending-regulation-z-annual-threshold-adjustments-credit-cards-hoepa-and-qualified)

For jumbo, the practical effect: a fully-documented full-doc jumbo loan that prices well under APOR plus 2.25 points is a Safe Harbor QM, providing the strongest liability protection to the creditor. Most large bank portfolio jumbo executions are structured this way. A jumbo loan that prices above that spread is a Higher-Priced Covered Transaction QM, which provides only a rebuttable presumption of compliance with ATR.

QM jumbo is full-doc by nature: verified income from W-2s, pay stubs, tax returns, and verbal verification of employment; verified assets from depository and investment statements; full appraisal; full underwriting analysis. The core protections that make a loan QM (limit on points and fees, no negative amortization or balloon features in the General QM category, fully-amortizing payments, term not exceeding 30 years, underwriting at the maximum payment within the first five years for ARMs) all apply.

Why most large bank portfolios prefer QM jumbo: QM jumbo loans carry safe-harbor (or at minimum, rebuttable-presumption) ATR protection, are easier to securitize into private-label MBS that investors will buy, and align with bank examiner expectations for prime portfolio loans. The pricing premium that non-QM carries reflects that institutional preference.

### 4.3 Non-QM Jumbo

The non-QM jumbo segment exists for borrowers who don't fit traditional documentation but have strong assets, cash flow, or credit. Non-QM is not subprime. It is alternative documentation under the Ability-to-Repay rule, with its own real costs in rate, down payment, and reserve premiums.

Major non-QM jumbo product types:

- **Bank statement loans.** Self-employed borrowers qualify off 12 or 24 months of personal or business bank statement deposits, with an expense factor applied. Common borrower scenarios: business owners with strong cash flow but heavily-deducted Schedule C, S-corp owners who pay themselves modest salaries, partners with K-1 income that does not reflect distributions. (Source for product mechanics: NASB Non-QM FAQ, https://www.nasb.com/lending/solutions/non-qm-loans/non-qm-loan-faqs)
- **1099 income loans.** Independent contractors and 1099-NEC earners qualify off 12 or 24 months of 1099s rather than tax returns. (Source: NASB 1099 loan guide, https://www.nasb.com/blog/detail/what-are-the-1099-loan-requirements-for-self-employed-individuals)
- **Asset depletion / asset utilization loans.** Borrowers qualify by dividing eligible liquid assets by a set number of months (commonly 360, sometimes shorter) to derive a synthetic monthly income figure. Useful for retirees with significant liquid assets and light current income. (Source: LegalClarity overview, https://legalclarity.org/what-is-a-jumbo-loan-requirements-and-how-it-works/)
- **Asset-based lending.** Some private banks and portfolio investors qualify high-net-worth borrowers solely on liquid assets without conventional income analysis.
- **P&L only loans.** CPA-prepared profit and loss statements substitute for tax returns. Used for self-employed borrowers when bank statement averaging does not reflect cash flow accurately.
- **Foreign national jumbo.** Non-U.S. citizens without U.S. credit history qualify on foreign credit, foreign income, and foreign asset documentation. OFAC clearance required; specific countries and entities are excluded. (Source: Doss Law foreign national lending overview, https://www.dosslaw.com/doss-guides/mortgage-loans-to-foreign-nationals/)
- **ITIN jumbo.** Borrowers who file U.S. taxes under an Individual Taxpayer Identification Number rather than a Social Security Number. Documentation typically requires unexpired ITIN, U.S. or alternative credit, and proof of U.S. or foreign income.
- **Recent-credit-event jumbo.** Post-bankruptcy or post-foreclosure borrowers with shorter seasoning than QM jumbo allows. Typical seasoning may be reduced to 2 to 4 years on non-QM versus 4 to 7 years on QM, depending on the credit event and investor.

Common borrower profiles in the North Alabama market who might route to non-QM jumbo: physicians early in private practice with thin two-year tax-return history but strong cash flow, business owners with heavily-deducted Schedule C, retirees with significant liquid assets but light current income, foreign-national contractor spouses, sole proprietors transitioning from W-2 employment.

Typical non-QM premiums (varies by investor):

- Rate premium: roughly 50 to 200 basis points above comparable QM jumbo, depending on documentation type, credit, and reserves
- Down payment minimum: typically 15 to 25 percent, with stronger pricing at 25 percent and above
- Reserve premium: often 6 to 12 months PITIA at minimum, frequently 12 to 24 months on larger non-QM loan amounts

(Source: LendFriend non-QM jumbo overview, https://www.lendfriendmtg.com/learning-center/jumbo-non-qm-mortgage-down-payments-explained)

Non-QM is not a workaround. It is a separate product with separate ATR documentation pathways and separate pricing. Borrowers who could qualify QM should usually do so unless a specific structural reason argues for non-QM.

### 4.4 Investor Variability: How to Talk About It

Reader-facing content must repeatedly anchor every guideline as "typical of the jumbo segment," "common across major jumbo investors," "varies by investor," or "subject to investor overlay." Never frame a guideline as "the jumbo rule." Investor variability is structural to the segment.

Why ranges, not single numbers, are honest:

- One investor may require 12 months PITIA in reserves at $1.2 million loan amount. Another may require 6. A third may require 18 with multiple financed properties.
- One investor may cap DTI at 43 percent. Another at 49.99 percent with reserves above 12 months.
- One investor may haircut a brokerage account to 70 percent of value when counting toward reserves. Another to 80. A third may take 100 percent of money market and 75 percent of equity-heavy positions.
- One investor may count vested RSU shares as a reserve asset at 70 percent of value. Another may not count them at all until liquidated to a USD account.

The role of the loan officer in jumbo is matching borrower to investor. The same borrower file can produce a "no" at one investor and a "yes" at another simply because the second investor's program is structured around the borrower's asset and income mix in a way the first investor's program is not. This is why a borrower comparing only one or two jumbo lenders is undershopping. It is also why "I was pre-approved by the big bank" is not always portable to a different jumbo lender, because the big bank's approval was specific to that bank's investor placement.

---

## 5. Reserve Requirements

### 5.1 Typical Reserve Tiers

Reserves are measured in months of full PITIA: principal, interest, taxes, insurance, and homeowners or condominium association dues. Typical jumbo investor ranges across the segment, by loan amount:

- Loans up to roughly $1 million: commonly 6 months PITIA
- Loans roughly $1 to $1.5 million: commonly 6 to 12 months
- Loans roughly $1.5 to $2 million: commonly 12 months
- Loans above $2 million: commonly 12 to 24 months, sometimes higher
- Investment property jumbo: commonly 6 to 12 months on the subject plus 2 to 6 months on each additional financed property

(Sources for tier ranges: Shining Star Funding jumbo reserves guide, https://shiningstarfunding.com/jumbo-loan/jumbo-loan-reserves/; Lower.com jumbo down payment guide, https://www.lower.com/mortgages/jumbo-loan/what-down-payment-do-you-need-for-a-jumbo-loan; PennyMac jumbo product page, https://www.pennymac.com/jumbo-home-loans; Rocket Mortgage Jumbo Smart, https://www.rocketmortgage.com/learn/jumbo-loan)

Reserves typically scale with three drivers:

- **Loan amount.** More reserves required as loan amount climbs.
- **Property type.** Primary residence carries the lowest reserve expectation; second home is typically higher; investment property is higher still.
- **Number of financed properties.** Each additional financed property the borrower owns typically adds an incremental reserve obligation.

Investor-specific add-ons commonly include:

- Cash-out refinance: more reserves than rate-and-term
- Adjustable-rate or interest-only loans: often calculated against fully-amortizing PITIA rather than the actual interest-only payment
- Departing residence with retained ownership: additional months of PITIA on the prior property
- Multiple subject-property structure (e.g., 2-4 unit jumbo): incremental reserves per unit

### 5.2 What Counts as Reserves

Acceptable assets for reserves vary by investor. Common treatment:

- **Checking and savings:** typically 100 percent of balance counted
- **Money market accounts and CDs:** typically 100 percent
- **Brokerage / non-retirement investment accounts:** typically 60 to 80 percent of value, varies by investor and concentration
- **Retirement accounts (401(k), 403(b), 457, IRA, Roth IRA, SEP-IRA, SIMPLE):** typically 60 to 70 percent of vested balance, with caveats (some investors require the borrower to be of age for penalty-free distribution to count at the higher percentage)
- **Stocks, bonds, ETFs, mutual funds held outright:** typically 60 to 80 percent of value
- **Cash value of life insurance:** some investors count, some do not
- **529 accounts:** typically not counted, since the borrower is not the beneficiary
- **Crypto:** wildly varying treatment. Many jumbo investors exclude entirely. Some count at steep haircuts. Some require liquidation to a USD account before counting. Treat as not counted unless the loan officer confirms otherwise with the specific investor.
- **Trust assets:** varies by trust structure and accessibility. Revocable trusts where the borrower is settlor and trustee may count at full value. Irrevocable trust assets may not count, or may count partially with trustee documentation. Trust documentation review is required. Trust questions route to attorney.
- **Business accounts:** typically not counted unless the borrower is the sole owner of the business and a CPA letter confirms that withdrawal would not adversely affect business operations. Even then, withdrawal can create downstream income concerns.

(Sources: Fannie Mae B3-4.2-02 Depository Accounts as a baseline reference for investor asset treatment, https://selling-guide.fanniemae.com/sel/b3-4.2-02/depository-accounts; Lower.com jumbo asset overview, https://www.lower.com/mortgages/jumbo-loan/what-down-payment-do-you-need-for-a-jumbo-loan; Shining Star Funding, https://shiningstarfunding.com/jumbo-loan/jumbo-loan-reserves/)

### 5.3 What Does Not Count

- **Funds required for cash to close.** Reserves are measured after the down payment, closing costs, and prepaid items have been paid. Money used for closing is not available as reserve cushion.
- **Borrowed funds.** Most jumbo investors exclude borrowed funds from reserves. Limited exceptions exist: some investors allow loans secured against the borrower's own assets (margin loans against a brokerage account, secured personal loans), but this is investor-specific. 401(k) loan proceeds generally cannot count toward reserves.
- **Gift funds after the gift is given but not yet seasoned.** Until the gift has been received, sourced, and seasoned in the borrower's account per investor seasoning rules, the gifted funds may not count.
- **Funds from the subject transaction.** Cash-out refinance proceeds generally cannot count as reserves on the same transaction. Sale proceeds from a departing residence have specific timing rules.

(Sources: Fannie Mae B3-4.2-02 large-deposit and verification framework, applied as floor reference; Shining Star Funding, https://shiningstarfunding.com/jumbo-loan/jumbo-loan-reserves/)

### 5.4 Reserve Documentation

Standard documentation expectations across the jumbo segment:

- **Two-month asset window.** Two months of full-page statements for every account being used. Every page, even blank pages, even pages that are repetitive disclosures, with the account holder's name visible.
- **Year-to-date documentation** for accounts where the most recent statement is more than 30 days old at the time of submission.
- **Verification of Deposit (VOD)** as alternative documentation in some programs, though many jumbo investors prefer statements.
- **Investment account quarterly statements plus most-recent online activity printout** to confirm current balance. Most jumbo investors will not accept a quarterly statement alone if it is more than 30 days stale.
- **Retirement account statements plus terms-of-withdrawal documentation** showing the borrower's vesting schedule and the conditions under which funds can be accessed (for asset-counting purposes, not income).

The 60-day asset documentation window is the default in jumbo. Funds need to have been in the borrower's seasoned accounts for at least 60 days, with the source of any large deposit during that window documented.

---

## 6. Asset Documentation Deep-Dive

### 6.1 Large Deposits

Across the jumbo segment, "large deposit" generally means a single deposit that triggers source-of-funds documentation requirements. The threshold varies by investor and is commonly anchored to a percentage of monthly qualifying income.

The Fannie Mae floor (used as a reference baseline by many jumbo investors): a large deposit is a single deposit that exceeds 50 percent of the total monthly qualifying income for the loan. (Source: Fannie Mae Selling Guide B3-4.2-02 Depository Accounts: https://selling-guide.fanniemae.com/sel/b3-4.2-02/depository-accounts)

Many jumbo investors apply lower thresholds (25 to 50 percent of monthly qualifying income) given the larger loan amounts. Some apply absolute dollar thresholds. Treat any deposit above 25 percent of monthly qualifying income as one that may require sourcing documentation.

Sourcing requirements: the borrower must produce a paper trail showing the origin of the deposit. Common sources and how they document:

- **Paycheck deposits:** typically self-evident on the statement; the deposit amount matches a pay stub already in the file.
- **Bonus deposits:** employer documentation (bonus letter, statement breaking out bonus from base) tied to the deposit date and amount.
- **Tax refunds:** IRS notice or filed return matching the deposit.
- **Sale of personal property (vehicle, jewelry, equipment):** bill of sale signed by buyer and seller, plus evidence of cleared check or wire from the buyer.
- **Transfer between borrower's own accounts:** statements from the source account showing the matching debit. The lender will want both sides of the transfer.
- **Sale of investments:** brokerage transaction confirmation showing the sale, plus the wire or transfer to the depository account.
- **Loan proceeds from a secured asset:** documentation of the loan (margin loan, secured personal loan, HELOC draw on existing primary residence). The new monthly payment is then factored into DTI.
- **Cash deposits:** generally cannot be sourced and may be excluded from available funds. Cash businesses with appropriate tax reporting may be able to source through deposit logs, but this is investor-specific and usually slow.

Note on the Bank Secrecy Act and FinCEN: financial institutions are required to file Currency Transaction Reports for cash deposits over $10,000, and to file Suspicious Activity Reports on transactions of $5,000 or more that appear suspicious. Structuring deposits below $10,000 to avoid CTR filing is itself a federal crime. Source-of-funds documentation in mortgage underwriting is a separate process from BSA/AML reporting, but they sit on top of each other. Lenders that originate jumbo are RMLOs subject to FinCEN AML and SAR rules. (Source: Federal Register, AML Program and SAR Filing Requirements for Residential Mortgage Lenders and Originators: https://www.federalregister.gov/documents/2012/02/14/2012-3074/anti-money-laundering-program-and-suspicious-activity-report-filing-requirements-for-residential)

The 60-day window: most jumbo investors look at the most recent 60 days of account activity. Deposits during that window are scrutinized. Funds sitting in the account for more than 60 days are typically considered seasoned.

### 6.2 Retirement Accounts

Treatment of retirement assets across the jumbo segment varies widely. General patterns:

- **401(k), 403(b), 457, traditional IRA, Roth IRA, SEP-IRA, SIMPLE:** typically counted at 60 to 70 percent of vested balance for reserve purposes
- **Vested vs unvested balance:** only vested balance counts. Unvested employer match or profit-sharing not yet vested is excluded.
- **Age and penalty-free distribution:** some investors haircut more aggressively if the borrower is not age-eligible for penalty-free distribution (under 59 1/2 for traditional accounts, with exceptions for 457, separation-of-service rules, and so on). Some investors require the borrower to demonstrate the ability to access funds without triggering hardship-distribution restrictions.
- **401(k) loans:** most jumbo investors do not allow 401(k) loan proceeds for cash to close. Some investors do, with documentation. The new 401(k) loan repayment may or may not factor into DTI depending on investor.

Required documentation:

- Most recent quarterly statement
- Online activity report or pending transactions printout if the most recent statement is more than 30 days old
- Plan terms-of-withdrawal documentation showing the vesting schedule and access conditions
- For self-directed accounts, custodian confirmation

Decisions about whether to liquidate retirement assets, take a 401(k) loan, or leave retirement balances intact carry significant tax and penalty implications. These decisions route to the borrower's CPA and financial advisor.

### 6.3 Brokerage and Non-Retirement Investment Accounts

- **Stocks, bonds, ETFs, mutual funds in a taxable brokerage account:** typically counted at 60 to 80 percent of value for reserve purposes. Investor haircut depends on portfolio composition (more conservative haircut on equity-heavy portfolios than on bond-heavy portfolios).
- **Restricted Stock Units (RSUs), vested:** sometimes treated as a brokerage asset at the same haircut as other equities. Sometimes excluded unless the shares have been delivered (post-vest) and are sitting in the borrower's account. RSU treatment varies more across jumbo investors than any other asset class.
- **RSUs, unvested:** generally not counted as an asset. Future vesting schedules can support continuance of the income stream (Section 7), but unvested RSUs themselves are not on hand.
- **Stock options (ISOs and NSOs):** generally not counted as assets until exercised. Unvested options are not counted. Vested-but-unexercised options carry exercise cost and tax exposure that complicates valuation. Routing to financial advisor and CPA is appropriate before any exercise decision.
- **Concentrated single-stock positions:** investors may apply a steeper haircut to brokerage accounts where a single position represents more than 25 to 50 percent of account value, given concentration risk. Some investors will require partial diversification or liquidation as a condition of counting the asset.
- **Crypto:** wildly varying treatment. Many jumbo investors exclude entirely. Some count at steep haircuts (40 to 60 percent of value). Some require liquidation to a USD account and 60-day seasoning before counting. Crypto-collateralized loans against the borrower's coin holdings are a separate non-QM product, not standard asset documentation.

(Sources for RSU treatment: Fannie Mae Selling Guide B3-3.3-07: https://selling-guide.fanniemae.com/sel/b3-3.3-07/restricted-stock-units-and-restricted-stock-employment-income; Bridgepoint Funding RSU summary: https://bpfund.com/how-fannie-mae-and-freddie-mac-treat-rsu-income-in-2025/; LendFriend non-QM jumbo overview, https://www.lendfriendmtg.com/learning-center/jumbo-non-qm-mortgage-down-payments-explained)

### 6.4 Gift Funds

Gift funds are allowable on most jumbo loans, with stricter documentation than agency.

Standard documentation across the segment:

- **Gift letter** signed by the donor, stating the dollar amount, identifying the donor relationship, and confirming that the funds are a gift with no expectation of repayment.
- **Donor's bank statement** showing the source of the gifted funds (typically two months of statements showing the funds in the donor's account before the transfer).
- **Evidence of transfer** from the donor (canceled check, wire confirmation, transfer record).
- **Evidence of receipt** in the borrower's account (deposit on the borrower's statement matching the donor's debit).

Donor relationship requirements: typically family (parents, grandparents, siblings, children, in-laws), sometimes domestic partner, sometimes employer. Most jumbo investors do not allow gifts from interested parties (real estate agent, seller, builder).

Borrower contribution requirements: many jumbo programs require a minimum borrower contribution from the borrower's own funds before gift funds can be applied. PennyMac, for example, requires that at least 5 percent of the down payment come from the borrower's own funds on its jumbo program. (Source: PennyMac jumbo home loans, https://www.pennymac.com/jumbo-home-loans) Other investors may require 10 percent borrower own funds or no minimum, depending on program.

Gift tax implications: the IRS publishes annual gift tax exclusion limits. Gifts above the annual exclusion may require the donor to file a gift tax return (Form 709), though typically with no actual tax owed unless the donor's lifetime exclusion has been exhausted. The borrower (recipient) does not pay tax on gifts received. All gift tax questions route to the donor's and borrower's CPAs.

### 6.5 Business Assets and CPA Letters

When can business accounts be used for cash to close or reserves?

Most jumbo investors require the borrower to be the sole owner (or majority owner) of the business and require a CPA letter confirming that withdrawal of the funds would not adversely affect the business. Some investors will accept a borrower-prepared statement plus a CPA-prepared business profile.

The standard CPA letter typically addresses:

- Confirmation that the borrower owns the business and the percentage owned
- Confirmation that the funds being withdrawn are available to the borrower without adversely impacting business operations
- Acknowledgment of the borrower's intended use of funds

Risk: withdrawing business funds creates downstream income concerns. If the business shows reduced cash flow on the next year's tax return because the borrower extracted operating capital, the lender may need to re-evaluate qualifying income on a refinance or subsequent loan. The CPA should be in the loop on the optics of the withdrawal as well as the math.

CPA letter content and form vary by investor. The CPA's professional judgment about what to write is the CPA's call. The mortgage lender does not direct the CPA's work product.

### 6.6 Foreign Assets and Cross-Border Considerations

For borrowers with foreign assets being used for U.S. real estate transactions:

- **Documentation of foreign assets:** statements from the foreign institution holding the assets, translated into English by a certified translator if not originally in English.
- **Currency conversion:** the lender will convert at a current exchange rate. Investors typically require documentation of the conversion rate used.
- **OFAC compliance:** all jumbo lenders run OFAC screening on borrowers and donors. Income from countries on the OFAC sanctioned list will not be credited. Borrowers from sanctioned countries or with diplomatic immunity to sanctioned regimes are typically not eligible. (Source: NQM Funding foreign national lending overview, https://www.nqmf.com/texas-foreign-national-loans-helping-international-buyers-invest-in-u-s-property/; Doss Law guide to foreign national lending, https://www.dosslaw.com/doss-guides/mortgage-loans-to-foreign-nationals/)
- **FinCEN expectations:** RMLOs are subject to FinCEN AML, customer-identification, and SAR filing requirements. Source-of-funds documentation on foreign assets is part of that compliance posture, not just underwriting.
- **Transfer timing:** most foreign-national jumbo programs require funds to arrive in a U.S. bank at least 10 days before closing. Some require longer.

Tax treaty implications, foreign tax credits, entity ownership across borders, and trust structures route to the borrower's tax advisor and immigration attorney. The mortgage lender is not in that lane.

---

## 7. Income Underwriting for Jumbo Borrowers

### 7.1 W-2 Base Salary

Standard documentation across the jumbo segment:

- Most recent two pay stubs covering 30 days of earnings
- Two years of W-2s
- Verbal verification of employment (VVOE) within 10 days of closing
- Two years of federal tax returns (1040 with all schedules) on most jumbo programs, even for W-2 borrowers. Many jumbo investors require tax returns to confirm income consistency and to surface any non-W-2 income that affects qualification.

Year-to-date and trailing two-year averaging:

- Stable W-2 income typically uses the most recent year's W-2 and current YTD pay stubs to confirm continuance at the same level
- Variable components (overtime, bonus, commission, restricted stock) are averaged separately
- Recent raises and promotions are typically supportive when documented by employer letter and reflected in YTD pay stubs

Treatment of recent job changes:

- Probationary periods on new employment: most jumbo investors require the probationary period to have ended before counting the income, or require documentation of a non-conditional offer with start date within a defined window
- Job changes within the same field: typically supportive, treated as continuous employment in the field
- Job changes across fields: may trigger investor scrutiny, with some investors requiring 6 to 12 months in the new field before counting income

Defense contractor relevance: for North Alabama buyers in the cleared defense contractor community, transitions between primes (LMT to BA to NOC, for example) within the same security clearance category and same work scope are typically treated as same-field transitions.

### 7.2 Bonus and Commission Income

Across the jumbo segment, two-year history is the typical floor for counting bonus or commission income. (Source: Fannie Mae Selling Guide B3-3.3-02: https://selling-guide.fanniemae.com/sel/b3-3.3-02/bonus-commission-overtime-and-tip-income)

- **History of receipt:** two years consecutive is the typical requirement. Some investors will consider 12 to 24 months with positive offsetting factors (recent promotion, structured commission plan, employer letter confirming continuance).
- **Continuance:** must be likely to continue for at least the next three years. Employer documentation supporting continuation expectations is standard.
- **Calculation:** typically a 24-month average of bonus or commission income. Some investors use the lesser of the most recent year or the two-year average if a declining trend is evident. Most investors will not use the higher of two years if the trend is declining.
- **Year-to-date prorated comparison:** lenders compare YTD bonus or commission to prior years. A YTD figure that significantly trails the prior year's pace can prompt the investor to use the lower figure for qualification.
- **Documentation:** W-2s with a breakdown showing bonus or commission separately, employer letter on the bonus or commission structure, year-to-date pay stubs.

Common jumbo borrower scenarios for bonus and commission:

- Defense contractor performance bonuses (annual performance bonus, profit sharing, retention bonus)
- Physician productivity bonuses (RVU-based, collections-based)
- Sales commissions (technology sales, medical device sales, real estate professionals as borrowers)
- Investment banking and consulting bonuses (where year-to-year variability is high and trend analysis matters)

### 7.3 Self-Employed Income

Self-employed jumbo borrowers face the most documentation-heavy path on the QM side.

Standard documentation across the jumbo segment for full-doc QM:

- Two years of personal federal tax returns (1040) with all schedules
- Two years of business tax returns where the business is filed separately:
  - 1120 for C-corp
  - 1120S for S-corp
  - 1065 for partnership / multi-member LLC
- Two years of K-1s for partners and S-corp shareholders
- Year-to-date profit and loss statement, often required to be CPA-prepared or CPA-reviewed
- Year-to-date business balance sheet
- Verification of business existence (Secretary of State filing, business license, CPA letter)

Income calculation framework:

The lender starts with net taxable income from Schedule C, K-1, or 1120/1120S and applies the Fannie Mae Form 1084 cash flow analysis methodology (used as a baseline reference even on jumbo). Common add-backs:

- Depreciation (non-cash expense)
- Depletion (non-cash expense, mostly relevant for borrowers with mineral interests or oil and gas income)
- Business use of home (non-cash expense)
- Amortization (non-cash expense)
- Casualty loss (non-recurring)
- Mortgage or notes payable in less than 1 year (subtract)

(Source: Fannie Mae Form 1084 Cash Flow Analysis: https://singlefamily.fanniemae.com/media/7746/display)

The challenge of heavy deductions: a borrower whose Schedule C shows $400,000 of revenue and $360,000 of deductions has $40,000 of qualifying net income, regardless of cash flow. This is why heavily-deducted self-employed borrowers often route to non-QM bank statement or P&L only loans, where qualification looks at cash flow rather than taxable income.

Common self-employed jumbo borrower scenarios in North Alabama:

- Physicians in private practice (sole proprietor, S-corp, or partnership)
- Attorneys in solo practice or partnership
- Business owners (C-corp, S-corp, LLC)
- Real estate investors with Schedule E rental income
- Federal contractors operating under their own LLC

The CPA letter and what it can and cannot do:

A CPA letter can supplement tax returns by confirming business ownership, year-to-date financials, the borrower's draw history, and the nature of business expenses. A CPA letter cannot replace tax returns on full-doc QM jumbo. On non-QM P&L only loans, a CPA-prepared P&L can substitute for tax returns by program design, but the program type is different.

### 7.4 RSU and Stock Compensation as Income

RSU income treatment varies more across jumbo investors than any other income category. The Fannie Mae floor (effective 03-01-2024 under SEL-2023-11) provides a baseline reference:

**Time-based RSUs:**

- Minimum 12-month history of receipt required
- Continuance documentation: vesting schedule must show at least 3 years of remaining vests
- Calculation: 24-month average of vested RSU income, using the 200-day moving average of stock price to value future income

**Performance-based RSUs:**

- Minimum 24-month history typically required
- 12 to 24 months may be considered with positive offsetting factors
- Same continuance and calculation framework

(Source: Fannie Mae Selling Guide B3-3.3-07: https://selling-guide.fanniemae.com/sel/b3-3.3-07/restricted-stock-units-and-restricted-stock-employment-income; Bridgepoint Funding summary of agency RSU treatment: https://bpfund.com/how-fannie-mae-and-freddie-mac-treat-rsu-income-in-2025/)

Documentation typically required:

- Vesting schedule from the employer (or the equity-management platform: Schwab Stock Plan Services, Fidelity Stock Plan Services, E\*TRADE / Morgan Stanley Equity Edge, Carta)
- History of vested-and-sold RSUs (or vested-and-held, with 1099-B and W-2 supplements)
- Brokerage statements showing RSU vesting activity over the qualifying period
- Employer offer letter or compensation summary confirming the RSU component of total compensation
- W-2 box 12 code V (for non-qualified stock option exercises) and box 14 RSU breakdown where the employer provides one
- Tax returns showing the W-2 wage income that includes vested RSU value

(Sources for RSU tax treatment: IRS U.S. Taxation of Stock-Based Compensation: https://www.irs.gov/newsroom/us-taxation-of-stock-based-compensation-received-by-nonresident-aliens-youtube-video-text-script; Schwab RSU tax guide: https://www.schwab.com/learn/story/rsu-taxes-and-psu-taxes; IRS Publication 525.)

Why RSU income treatment varies so much across jumbo investors: RSU income is volatile (tied to stock price), recurrence depends on the employer continuing the grant program, and post-vest behavior (sell vs hold) creates valuation questions on reserves. Some investors apply more conservative haircuts. Some require longer history. Some require employer continuation letters. Some will not count RSUs at all and require borrowers to qualify on base salary plus traditional bonus.

Investor-specific RSU guidelines should be confirmed by the loan officer with the specific investor placement before pre-approval. A borrower whose qualifying capacity depends meaningfully on RSU income should know which investors will accept their RSU history before falling in love with a price point.

Common RSU borrower scenarios in the relocation buyer pool:

- Tech sector relocation buyers from the Bay Area, Seattle, Austin: Google, Apple, Microsoft, Amazon, Meta, Tesla, Nvidia, Salesforce, and similar large-cap RSU-heavy compensation programs
- Senior defense contractors: Lockheed Martin (LMT), Boeing (BA), Northrop Grumman (NOC), RTX (formerly Raytheon), Leidos (LDOS), General Dynamics (GD) all grant RSUs to senior staff. Defense contractor RSUs typically vest over 3 to 4 years and are tied to publicly-traded stock prices.

Decisions about when to vest, sell, or hold RSU shares carry tax and financial planning implications that route to the borrower's CPA and financial advisor. The mortgage lender's role is documenting the income, not advising on the strategy.

### 7.5 Other Income Types

- **Rental income from a departing residence:** counted at typically 75 percent of gross rent (vacancy and maintenance factor) when supported by a signed lease or by the rent loss schedule on Schedule E from prior years' tax returns. Some investors require the departing residence to have at least 30 percent equity for the full rental offset to apply. Where 30 percent equity is not met, the full PITIA on the departing residence may be added to the borrower's debts without rental offset.
- **Rental income from existing rental portfolio:** typically counted at 75 percent of gross rent or net rental income from Schedule E, whichever is investor-specified. Two years of tax returns establish history.
- **Rental income from a property being purchased (investment jumbo):** typically supported by appraisal-derived market rent (Form 1007 single-family rent comparable, or 1025 small income property appraisal) at 75 percent.
- **Investment income (dividends, interest):** typically requires 24-month history of receipt to count, with continuance documentation showing the underlying assets are expected to continue producing the income.
- **Capital gains:** generally not used unless the borrower can document a recurring pattern over 2 to 3 years and the underlying asset base supports continuation.
- **Trust income:** distribution history (typically 24 months), trust documentation showing the borrower's beneficial interest, and continuance documentation.
- **Alimony, child support, separate maintenance:** court order or written agreement, history of receipt typically 6 to 12 months, continuance documentation showing the obligation will continue for at least 3 more years.
- **Social Security, pension, retirement distribution income:** continuance documentation. Gross-up rules apply where the income is not subject to federal tax (typical gross-up factor of 25 percent, varies by investor).
- **Disability income (VA, SSDI, private disability):** continuance documentation. Tax-free disability income may be grossed up.
- **Royalty and licensing income:** typically requires 12 to 24 months of history and documentation of expected continuance.
- **Note income:** seller-financed notes held by the borrower require documentation of the note, the payor's payment history, and continuance.

### 7.6 Restricted Income Sources

Some income sources are typically not allowable in jumbo, regardless of investor:

- Boarder income, roommate income (some agency programs allow with documentation; jumbo typically does not)
- Cash businesses without tax filing
- Crypto trading "income" without consistent reporting on tax returns
- Income from gaming or lottery winnings
- Income from illegal activity in any state, regardless of state law (cannabis-business income is investor-specific and often excluded under federal mortgage guidelines; cannabis income questions route to the loan officer's specific investor)

---

## 8. Debt-to-Income (DTI) and Residual Income

### 8.1 DTI Ceilings in Jumbo

Typical jumbo DTI ceilings across the segment fall in the 43 to 49 percent range, with significant variation by investor, loan amount, reserves, and credit profile. (Sources: Chase, https://www.chase.com/personal/mortgage/education/financing-a-home/how-to-qualify-for-jumbo-mortgage-loan; Fifth Third 2026 jumbo guide, https://www.53.com/content/fifth-third/en/financial-insights/personal/home-ownership/what-is-a-jumbo-loan.html; PennyMac jumbo home loans, https://www.pennymac.com/jumbo-home-loans; Rocket Mortgage Jumbo Smart, https://www.rocketmortgage.com/learn/jumbo-loan)

The post-2021 General QM rule eliminated the 43 percent DTI hard cap from the General QM definition and replaced it with a price-based threshold tied to APR-APOR spread. (Source: 12 CFR 1026.43; Federal Register General QM mandatory compliance rule: https://www.federalregister.gov/documents/2021/04/30/2021-09028/qualified-mortgage-definition-under-the-truth-in-lending-act-regulation-z-general-qm-loan-definition) The practical effect on jumbo: full-doc QM jumbo loans no longer need to fall under 43 percent DTI to be QM. They need to fall under the applicable APR-APOR spread thresholds for safe harbor or rebuttable presumption.

Despite the rule change, many jumbo investors hold to lower DTI ceilings as overlays. A common pattern:

- 43 percent DTI as a default ceiling for many bank portfolio jumbo programs
- 45 to 49 percent DTI permitted with compensating factors (high credit score, reserves above 12 months PITIA, lower LTV, larger down payment)
- Some non-QM jumbo programs allow up to 50 percent DTI as a base ceiling

Compensating factors that allow higher DTI typically include:

- Credit score significantly above the floor (760+ versus a 700 floor)
- Reserves significantly above the requirement (18 to 24 months versus a 6 to 12 month requirement)
- Lower LTV (60 percent versus 80 percent)
- Larger down payment (30 to 40 percent versus 20 percent)
- High residual income after housing payment

### 8.2 What Counts in DTI

Across the jumbo segment, DTI numerator includes:

- Proposed PITIA on the subject property: principal, interest, property taxes, homeowners insurance, mortgage insurance (where applicable), HOA dues
- Existing mortgage payments on retained properties (with rental offsets where allowable per Section 7)
- Auto loans (monthly payment, not balance)
- Student loans (typically the actual payment if on an income-driven plan with documentation; some investors use 0.5 to 1 percent of outstanding balance if no payment is documented)
- Credit cards (minimum payment from the most recent statement, not balance)
- Personal loans (monthly payment)
- Court-ordered payments (alimony, child support; typically subtracted from income rather than added to debts on most jumbo investor calculations, though this varies)
- Guaranteed debt on co-signed loans (with payment-history exclusions where allowed: typically requires 12 months of documented on-time payments by the primary obligor)
- 401(k) loan repayments (sometimes excluded; varies by investor)
- Lease payments (vehicle leases, equipment leases)
- Buy-now-pay-later balances (Affirm, Klarna, Afterpay) when reported to credit bureaus

DTI denominator is qualifying income as calculated in Section 7.

### 8.3 Residual Income Concepts

VA-style residual income calculations (where the borrower's income after housing and major obligations must exceed a regional minimum based on family size) are not standard in QM jumbo. However:

- Some portfolio jumbo investors apply residual income as a compensating factor when DTI is at the upper end of the range
- The concept matters at high payment levels because two borrowers with identical DTI can have very different absolute dollar residual income (a $20,000 monthly income at 45 percent DTI leaves $11,000 of monthly residual; a $10,000 monthly income at 45 percent DTI leaves $5,500)
- Residual income strength can support higher DTI tolerance with investors that consider it

---

## 9. Credit Profile Expectations

### 9.1 Score Tiers

Typical jumbo investor credit floors across the segment:

- Most jumbo investors: 700 minimum
- Some investors: 680 minimum with compensating factors
- Best pricing tier: 740 or higher
- Some non-QM jumbo programs: 660 to 680 with significant rate and down payment premiums

(Sources: Chase, https://www.chase.com/personal/mortgage/education/financing-a-home/how-to-qualify-for-jumbo-mortgage-loan; Lower.com, https://www.lower.com/mortgages/jumbo-loan/how-to-qualify-for-a-jumbo-loan; NerdWallet, https://www.nerdwallet.com/mortgages/mortgage-rates/jumbo)

The credit score tier structure for pricing typically steps at 700, 720, 740, 760, and 780+. Each tier above 700 typically corresponds to incremental pricing improvement. The interaction of credit score with loan amount and LTV: jumbo lenders typically require higher credit scores at higher LTV (e.g., 720 minimum for 90 percent LTV, 700 minimum for 80 percent LTV), and may apply additional scrutiny at very high loan amounts ($2 million and above).

The tri-merge representative score (the middle of the three bureau scores when three are pulled, or the lower of two when two are pulled) is typically the score used. Most jumbo investors require all three bureau scores to be pulled at application.

### 9.2 Tradeline Depth

Most jumbo investors require established credit, with thin-file borrowers facing additional scrutiny:

- Typically 3 or more open and active tradelines
- At least one tradeline with 24 or more months of payment history
- Authorized user tradelines: treated cautiously. Some investors discount or exclude AU tradelines. Some count them at full weight if the borrower can demonstrate the underlying behavior is theirs (joint household, joint financial management).
- Thin-file borrowers: some non-QM jumbo investors will accept non-traditional credit (verified rental history from a third-party source, utility payment history, insurance payment history) as substitute tradelines. QM jumbo typically does not accept non-traditional credit.

### 9.3 Recent Credit Events

Seasoning requirements for jumbo are generally longer than agency. Typical jumbo segment patterns:

- **Bankruptcy:** 4 to 7 years from discharge for QM jumbo; some non-QM jumbo programs as short as 2 to 4 years from discharge
- **Foreclosure:** typically 7 years for QM jumbo; some non-QM jumbo as short as 3 to 4 years
- **Short sale or deed-in-lieu:** typically 4 to 7 years for QM jumbo; non-QM may be shorter
- **Late payments in the most recent 12 to 24 months:** any recent 30-day late on a mortgage is typically disqualifying for QM jumbo. Two or more 30-day lates on revolving accounts in 12 months trigger investor scrutiny. 60-day or worse lates in the most recent 12 months are often disqualifying.
- **Recent collections, charge-offs, judgments, tax liens:** typically must be paid before closing, with documentation. Medical collections may be treated more leniently by some investors.

### 9.4 Fraud Alerts and Identity Theft for High-Net-Worth Borrowers

Higher-income borrowers are disproportionately targeted by identity theft. Two practical implications for jumbo underwriting:

- **Frozen credit:** the borrower must lift the credit freeze with all three bureaus before the lender can pull credit. This is a borrower-controlled action; lift the freeze at application and again at any subsequent credit pull (most jumbo files are pulled at application and again before closing).
- **Active fraud alert:** if the borrower has an active fraud alert on the credit file, the lender's loan officer or processor will need to contact the borrower at the phone number on file to verify the application is legitimate. Closing timeline can be impacted if the contact number on the credit bureau is stale.
- **Identity theft remediation in process:** if the borrower is actively disputing fraudulent accounts on the credit file at the time of application, the investor may pause the file until resolution. Resolved disputes documented with bureau letters generally do not block underwriting.

---

## 10. Appraisal Risk on Higher-Priced Homes

### 10.1 Appraiser Independence Requirements (AIR)

The Appraiser Independence Requirements were adopted by Fannie Mae and Freddie Mac in October 2010 to replace the Home Valuation Code of Conduct. AIR is the operative framework for all conforming and most jumbo originations. AIR is also reinforced by Regulation Z Section 1026.42 (TILA-AIR) and applies regardless of agency eligibility for many investor purposes.

Core AIR principles:

- **No coercion or influence on the appraiser's value conclusion** by the borrower, listing agent, buyer's agent, loan officer, or anyone whose compensation depends on loan closing
- **No direct communication about value** between loan production staff and the appraiser
- **AMC intermediary:** most lenders use Appraisal Management Companies to interface with appraisers, providing structural separation between loan production and the appraisal assignment
- **Appraisers must be licensed or certified** in the state where the property is located
- **Real estate agents may communicate with the appraiser** about market data, recent comparable sales, and property condition. AIR does not prohibit agent-appraiser communication. AIR prohibits coercion and value-targeted communication.

(Sources: Fannie Mae Property Valuation FAQs, https://singlefamily.fanniemae.com/property-valuation/faqs-property-valuation; Freddie Mac AIR FAQ, https://sf.freddiemac.com/faqs/appraiser-independence-requirements-faq; Fannie Mae AIR detail, https://www.myamc.com/fannie-mae-air)

AIR violations have real consequences: investor repurchase demands, regulatory action, and reputational damage. Loan officers, listing agents, and buyer's agents should treat the appraiser-AMC interface as the exclusive valuation channel and stay out of value-targeted conversations.

### 10.2 USPAP

The Uniform Standards of Professional Appraisal Practice are the ethical and performance standards every state-licensed and state-certified appraiser must follow on federally-related transactions. The current edition is the 2024 Edition USPAP, which became effective 01-01-2024 and operates under an open-ended model (no fixed expiration). Appraisers are still required to complete a 7-Hour USPAP Update course every two calendar years to maintain credentialing. (Source: The Appraisal Foundation USPAP overview: https://appraisalfoundation.org/pages/uspap)

USPAP Standards 1 through 4 (real property development, reporting, and appraisal review) are the standards relevant to mortgage appraisals. The Ethics Rule, Competency Rule, and Scope of Work Rule are binding on every appraisal assignment. (Source: 2024 USPAP Standards 1-4: http://www.mvfairhousing.com/pdfs/hudpolicies/2024_USPAP_STANDARDS_1-4.pdf)

The Appraisal Standards Board adopted Advisory Opinion 41 on 04-23-2026, providing guidance on appraiser use of technology including AVMs, regression and statistical software, and generative AI. AO-41 is advisory rather than binding but signals where the standards are heading. (Source: The Appraisal Foundation: https://appraisalfoundation.org/pages/uspap)

### 10.3 The Two-Appraisal Threshold

Most jumbo investors require two appraisals on loan amounts above a stated threshold. The threshold varies by investor and is commonly set at:

- $1 million on some investor programs
- $1.5 million on many programs
- $2 million on others
- Some investors apply two-appraisal requirements based on combined loan amount when there are multiple subject properties or when the borrower is also financing additional properties simultaneously

(Sources: AAA Capital Funding jumbo overview, https://aaacapitalfunding.com/mortgage-loan-programs/jumbo-loans/; Carlyle Financial jumbo requirements, https://www.carlylefinancial.com/blog/jumbo-requirements-checklist-ensure-approval/)

When two appraisals are required and arrive at different values, the lower of the two is typically used for loan-to-value calculations. This is conservative and can create a pricing or qualification problem if the lower appraisal is materially below the contract price. Some investors permit a desk-review of the second appraisal in lieu of a second full-form appraisal; this is investor-specific.

The cost implication for the borrower: two full appraisals roughly doubles the appraisal fee (often $700 to $1,500 each for high-priced homes, depending on geography and complexity).

### 10.4 Comp Scarcity in High-Priced Submarkets

Higher-priced homes face a structural challenge: fewer high-priced sales mean fewer recent comparable sales. The appraiser has less data to work with, and the value conclusion is more dependent on judgment.

Common appraisal complications on higher-priced homes:

- **Custom and unique architecture:** custom homes with high-end finishes inappropriate to the surrounding market may not appraise to the cost of construction. A $1.4 million custom home in a neighborhood where most homes are $700,000 to $900,000 carries appraisal risk.
- **Acreage and rural-luxury risk:** properties with significant acreage have fewer direct comparable sales. Appraisers may broaden the geographic radius and time window or apply qualitative adjustments.
- **Lakefront and view-premium risk:** view premiums are notoriously hard to quantify. Two homes a half-mile apart with and without lake or mountain views can carry $200,000+ value differences that the appraiser must support with comps that may not exist.
- **Older luxury vs new luxury comp pool fragmentation:** an older luxury home in an established neighborhood and a new luxury home in a recent development may be hard to comp against each other. Appraisers may struggle to find comps within the standard one-mile, six-month window and may need to use broader radius or older sales with time adjustments.

How appraisers handle limited comps:

- Broaden the geographic search radius (often to 2 to 5 miles, sometimes more on rural-luxury)
- Extend the comparable sale time window (often to 6 to 12 months instead of the 3 to 6 month default)
- Apply quantitative time adjustments to older sales reflecting market trends
- Use qualitative adjustments for unique features
- Consider listings and pending sales as supporting evidence (not primary value indicators, but as market activity)

### 10.5 Reconsideration of Value (ROV)

When an appraisal comes in low and the borrower or buyer's agent has factual or comparable-sale information not reflected in the report, the borrower can request a Reconsideration of Value through the lender. ROV is the structured channel for raising appraisal concerns. (Source: Fannie Mae ROV initiative: https://singlefamily.fanniemae.com/initiative-updates/reconsideration-value-rov; Class Valuation ROV overview: https://www.classvaluation.com/blog/reconsideration-of-value-how-to-dispute-an-appraisal/; Mortgage Research, https://www.mortgageresearch.com/articles/reconsideration-of-value-appraisal/)

The ROV process across the industry:

- Borrower or agent submits factual concerns and supporting comparable sales to the lender (not directly to the appraiser; AIR prohibits direct communication)
- Lender reviews the submission for completeness and AIR compliance
- Lender forwards the formal ROV request to the appraiser through the AMC
- Appraiser reviews the submitted information and provides a thorough, documented response
- Resolution must be completed before closing

The borrower's and Realtor's role: provide the lender with three or more recently-sold comparable properties in close proximity that support a higher value, plus documentation of property upgrades, condition, or square footage that may have been missed in the original report. Listings and pending sales are far less persuasive than recently-closed sales.

Investor discretion: the ROV process does not guarantee a value change. The appraiser must consider the new information and respond. If the appraiser stands by the original value with documented support, the lender typically accepts that conclusion.

The Interagency Guidance on Reconsiderations of Value of Residential Real Estate, issued by the federal banking agencies, sets supervisory expectations that lenders maintain a clear ROV process accessible to borrowers. (Source via ABA Banking Journal: https://bankingjournal.aba.com/2025/05/reconsideration-of-value-rov-a-critical-component-of-appraisal-review/)

### 10.6 Permissible Communications with the Appraiser

What buyer's agents and listing agents can do without violating AIR:

- Provide market data, comparable sales, and property condition information to the appraiser
- Provide access to the property and answer factual questions about features, upgrades, and history
- Be present during the appraisal inspection
- Discuss neighborhood characteristics and recent market trends

What is prohibited under AIR:

- Suggesting a target value
- Communicating the contract price as a value to be reached
- Pressuring the appraiser to come in at value
- Threatening or implying consequences if the appraiser does not reach a particular value
- Selecting or influencing the selection of the specific appraiser

The line is value-targeted communication. Factual market data is permissible. "Here are three recent sales within a half mile" is fine. "We need this to come in at $1,250,000" is not.

### 10.7 Property Types That Add Appraisal Risk on Jumbo

- **New construction in submarkets with heavy ongoing development:** appraisers may struggle to value new construction when most comps are older resales in the same neighborhood. Builder-provided cost approach data helps but is not always determinative.
- **Custom homes with high-end finishes inappropriate to the surrounding market:** see Section 10.4.
- **Properties with extensive recent renovation:** post-renovation value may not fully appraise if the comps do not support the renovation premium.
- **Significant acreage:** comp pool typically smaller; rural-residential appraisal training is a separate competency.
- **Mixed-use or non-conforming uses:** zoning issues and use questions can complicate the appraisal.
- **Non-warrantable condos in jumbo:** condo projects that fail Fannie Mae or Freddie Mac warrantability tests (concentration limits, commercial-use percentage, owner-occupancy ratios, project finances) are typically only financeable through non-QM jumbo or specific portfolio investors.
- **Co-ops:** rare in Alabama. Relevant for relocation buyers from New York City who may already understand co-op underwriting; the share-loan mechanics are different from standard residential and most North Alabama lenders are not set up for co-ops.

---

## 11. Offer Strategy and Pre-Approval Planning

### 11.1 Pre-Approval Before Offer

Pre-qualification versus pre-approval matters more in jumbo than in conforming.

- **Pre-qualification:** typically a quick conversation with stated income and assets, no document review. Carries little weight with sellers in a competitive jumbo market.
- **Pre-approval:** requires document submission (income, assets, credit) and lender review with a written commitment subject to property and final underwriting. Most jumbo offers should be backed by pre-approval, not pre-qualification.
- **Verified-Income, Verified-Asset (VIVA) pre-approval:** a stronger form where the lender has actually reviewed and verified the underlying documentation, not just the borrower's stated information. Some lenders go further with full underwriting review of the borrower file before property identification. In competitive higher-priced markets, VIVA or fully-underwritten pre-approval is often the differentiator that gets an offer accepted.
- **Investor-locked pre-approval vs. lender pre-approval contingent on investor placement:** some jumbo lenders pre-approve subject to subsequent investor placement. The risk is that the file is approvable on paper but the specific investor the lender intends to place with may have an overlay that triggers a re-quote. Verify with the loan officer what investor the pre-approval is anchored to.
- **Pre-approval expiration:** typically 90 to 120 days. Re-verification of credit, employment, and assets is required before closing if the pre-approval has aged. Major life events (job change, large debt addition, large credit pull) within the pre-approval window can require re-underwriting.

### 11.2 Cash-Gap Planning

Cash to close on a jumbo transaction is materially higher than agency.

- **Down payment:** 10 to 25 percent or more of purchase price
- **Closing costs:** typically 2 to 5 percent of loan amount (lender fees, title fees, appraisal fees, recording, transfer taxes where applicable, prepaid interest, prepaid taxes and insurance)
- **Reserves required after closing:** 6 to 24 months PITIA depending on investor and loan amount

The cash-gap problem: borrowers sometimes expect the lender to finance more than the investor will, or assume reserves can be partially funded by liquid assets that are then needed for closing. Both create surprises late in the process.

How to model cash to close conservatively at the start of the search:

- Down payment at the higher end of the borrower's expected range (e.g., assume 20 percent if 10 to 20 percent is in play)
- Closing costs at 4 percent of loan amount
- Reserves at the upper end of investor expectation (12 months PITIA at minimum on larger jumbo, 18 to 24 months above $1.5 million)
- Earnest money deposit (typically 1 to 3 percent of purchase price in North Alabama; higher in some submarkets)

Liquidity sequencing: what to liquidate first, what to leave intact for reserves. Decisions about which assets to draw down first carry tax consequences (capital gains realization, retirement penalty exposure, tax-bracket bumping). These decisions route to the borrower's CPA and financial advisor. The mortgage lender's role is providing the cash-to-close target and the reserve target so the CPA and financial advisor can model around accurate numbers.

### 11.3 Earnest Money

Earnest money expectations on higher-priced Alabama transactions:

- Typically 1 to 3 percent of purchase price in standard transactions
- Sometimes higher (5 to 10 percent) in highly competitive submarkets or in negotiated sales
- The borrower's earnest money source must be seasoned per investor rules. If the earnest money is sourced from a recently-deposited gift or transfer, source documentation will be required.

Earnest money interacts with appraisal and inspection contingencies. Where contingencies are waived or limited, the earnest money becomes more exposed to loss if the deal falls apart for an excluded reason.

### 11.4 Inspection and Appraisal Contingency Strategy

- **Inspection period:** higher-priced homes often have more findings (more square footage, more systems, more potential for deferred maintenance). Inspection often produces meaningful negotiation leverage.
- **Appraisal contingency:** the standard contract contingency lets the borrower walk if the appraised value comes in below contract price by an amount that affects financing. Waiving the appraisal contingency exposes the borrower to a cash-gap obligation if the appraisal is low.
- **Appraisal gap coverage clauses:** common in competitive submarkets. The buyer agrees to bring additional cash to close up to a stated cap if the appraisal is below contract price. The buyer's exposure is the difference between contract price and appraised value, up to the cap, in addition to the planned down payment. Borrowers should understand the math before agreeing to a gap clause: a $50,000 appraisal gap at 80 percent LTV financing means the buyer brings the full $50,000 in cash, on top of the planned down payment.
- **Balance:** competitive offer strength versus buyer protection. The right balance depends on the borrower's cash position, the specific market dynamics, and the buyer's tolerance for risk.

### 11.5 Contract Timeline Considerations

Jumbo transactions typically take 30 to 45 days from contract acceptance to closing, sometimes longer with portfolio investors. Reasons:

- Most jumbo loans run through manual underwriting rather than automated underwriting, which takes longer
- Two-appraisal requirements at higher loan amounts add appraisal-cycle time
- Asset documentation review on jumbo is more thorough (every account, every page, every large deposit sourced)
- Investor-specific conditions can add cycle time at the back end of underwriting

Tight closing timelines on jumbo are risky. A 21-day or 25-day close is achievable on some files but compresses every step. A 30 to 45 day timeline is generally healthier and reduces the risk of running out of contingency windows.

---

## 12. The Pre-Offer Planning Checklist (Synthesized)

A sequential checklist a buyer can actually use, structured by time horizon. This is the synthesis section: the planning sequence that pulls Sections 3 through 11 into actionable line items.

### 12.1 Six to Twelve Months Before Shopping

- Pull a full credit report from all three bureaus and review for accuracy. Dispute and remediate any errors.
- Review credit utilization (target under 30 percent, ideally under 10 percent on revolving accounts), recent inquiries, and tradeline depth.
- Stabilize employment if a change is contemplated. Same-field changes are typically supportive, but cross-field changes can complicate qualification within the first 6 to 12 months.
- Begin organizing two years of full personal tax returns and, for self-employed borrowers, two years of business tax returns (1120, 1120S, 1065 with K-1s).
- Begin organizing two years of W-2s, 1099s, K-1s, and recent pay stubs.
- Begin tracking RSU vesting and brokerage activity. Pull the full vesting schedule from the equity-management platform.
- Review retirement and brokerage account statements for clarity and completeness.
- Review trust documentation if applicable (and consult the attorney who drafted the trust about what may be needed).

### 12.2 Three to Six Months Before Shopping

- Engage a loan officer for a planning conversation (not yet pre-approval).
- Identify the realistic loan amount range and the conforming-versus-jumbo decision. Run the math at three potential price points.
- Identify whether a structural alternative (larger down payment, piggyback) keeps the deal conforming, and model the tradeoffs.
- Identify the cash-to-close target and reserve target.
- Identify the income documentation path: full-doc QM jumbo versus non-QM (bank statement, 1099, asset depletion).
- Avoid new credit, large purchases, or job changes.
- Begin the asset seasoning clock: funds need a 60-day paper trail. Consolidate scattered accounts now if a clean view will be helpful at application.

### 12.3 One to Three Months Before Shopping

- Complete a verified-income, verified-asset (VIVA) pre-approval.
- Have the equivalent of a "Certificate of Eligibility for Jumbo": a pre-approval letter with stated maximum, with the investor placement noted by the loan officer.
- Confirm reserve target is met after cash to close is set aside.
- Confirm DTI math at the target purchase price.
- Identify a buyer's agent with experience in the target submarket and price range.
- Verify property tax assumptions for the target submarket. Property taxes vary by jurisdiction within North Alabama.
- Verify homeowners insurance availability and approximate cost. Insurance availability can be a real constraint on rural-luxury or wildfire-exposed properties; less of a constraint in standard suburban Madison County, but verify.

### 12.4 At Offer

- Pre-approval letter ready, dated within the lender's standard freshness window.
- Cash-to-close confirmed and source-documented for the seasoning window.
- Earnest money source seasoned (60 days minimum recommended).
- Realtor briefed on contingency strategy, including any planned waiver or appraisal-gap coverage.
- Closing timeline negotiated to allow full jumbo underwriting (30 to 45 days; tighter only with extreme caution).

### 12.5 Under Contract

- Order inspection promptly. Higher-priced homes warrant more thorough inspection (separate HVAC, roof, foundation, well/septic where applicable, pool/spa, structural).
- Order the appraisal through the lender's AMC. No buyer-appraiser communication about value.
- Submit final documentation to underwriting promptly. Respond to underwriter conditions within 24 to 48 hours.
- Keep employment, credit, and assets stable through closing. No new credit, no new large debts, no large unexplained deposits.
- Confirm wire instructions in person or by verified phone call to a number obtained independently from the title company. Wire fraud is the largest single risk in real estate transactions and has accelerated in 2025 to 2026 with deepfake-enabled phishing. Treat any email-only wire instruction as suspect.

---

## 13. Real Borrower Questions (AEO-Targeted)

Phrased in the borrower's own voice, with the underlying intent and the precise factual answer surfaced. These should be replicated on reader-facing pages with FAQPage schema.

### 13.1 What is a jumbo loan?

A jumbo loan is a residential mortgage with a loan amount greater than the FHFA conforming loan limit for the county where the property is located. For 2026, the baseline conforming limit is $832,750 across most of the country, with a higher ceiling of $1,249,125 in counties FHFA designates high-cost. Loan amounts above the applicable limit are jumbo. (Source: FHFA, https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026)

### 13.2 What's the difference between a jumbo loan and a conforming loan?

A conforming loan meets the dollar limits and underwriting standards Fannie Mae and Freddie Mac follow. Conforming loans can be sold to Fannie or Freddie, which gives lenders standardized guidelines and a deep liquid secondary market. A jumbo loan exceeds the conforming dollar limit, is held in portfolio by banks or aggregated by private investors, and follows individual investor guidelines rather than Fannie/Freddie's. Jumbo loans typically require higher credit scores, higher down payments, more reserves, and more documentation.

### 13.3 What's the conforming loan limit in Alabama?

For 2026, the conforming loan limit in every Alabama county is $832,750 for a one-unit property. Alabama has no FHFA-designated high-cost counties. Loans above $832,750 on a one-unit Alabama property are jumbo. (Source: FHFA 2026 county limits, https://www.fhfa.gov/document/d/cll/fullcountyloanlimitlist2026_hera-based_final_flat.xlsx)

### 13.4 What's the conforming loan limit in Madison County, Alabama?

Madison County, Alabama is at the baseline 2026 conforming limit of $832,750 for a one-unit property. The high-balance conforming category does not apply in Madison County because the county is not FHFA-designated high-cost. Loans above $832,750 on a one-unit property in Madison County are jumbo.

### 13.5 Do jumbo loans require 20 percent down?

No. Many jumbo investors allow 10 to 15 percent down with strong credit and reserves. Some allow as little as 10.01 percent down on loan amounts up to $2 million with full qualification (PennyMac, Wells Fargo, and Rocket Mortgage all publish programs at this level). The best pricing tier typically sits at 20 percent down or higher. Down payment minimums and pricing tiers vary by investor.

### 13.6 What credit score do I need for a jumbo loan?

Most jumbo investors require a 700 minimum, with some accepting 680 with compensating factors. The best pricing typically requires 740 or higher, with further pricing improvements at 760 and 780+. Some non-QM jumbo programs accept scores as low as 660 with significant rate and down payment premiums.

### 13.7 How much in reserves do I need for a jumbo loan?

Typical jumbo reserves across the segment fall in the 6 to 12 month range of full PITIA for primary residence loans up to roughly $1.5 million, scaling to 12 to 24 months on larger loan amounts. Investment property jumbo and second home jumbo typically require more. The exact requirement varies by investor.

### 13.8 Are jumbo rates higher than conforming?

Not always. Historically jumbo rates were higher, but that has narrowed and at times reversed in the post-pandemic environment. As of late 2025 and early 2026, jumbo and conforming rates are often within 25 basis points of each other, and at times jumbo has priced lower than conforming for very strong borrower profiles. Rate spreads vary by investor, borrower profile, and market conditions. (Sources: Bankrate, https://www.bankrate.com/mortgages/jumbo-loan-rates/; Experian, https://www.experian.com/blogs/ask-experian/jumbo-mortgage-rates/)

### 13.9 Can I use RSUs to qualify for a jumbo loan?

Often yes, with documentation. Most jumbo investors will count RSU income with at least a 12-month history for time-based RSUs (24 months for performance-based) plus a vesting schedule showing at least 3 years of remaining vests. The income calculation typically averages the trailing 24 months and applies a 200-day moving average of the stock price. RSU treatment varies more across investors than any other income category, so confirm with the loan officer's specific investor placement before relying on RSU income for qualification. (Source: Fannie Mae B3-3.3-07 as a baseline reference: https://selling-guide.fanniemae.com/sel/b3-3.3-07/restricted-stock-units-and-restricted-stock-employment-income)

### 13.10 Can I use stock options to qualify?

Generally no for unexercised options. Stock options are not counted as assets until exercised. Vested-but-unexercised options carry exercise cost and tax exposure that complicates valuation. Once exercised and the resulting shares have been received and held, the shares may be counted as a brokerage asset under standard rules. Decisions about when to exercise options route to the borrower's CPA and financial advisor.

### 13.11 How are bonuses counted on a jumbo loan?

Across the jumbo segment, bonus and commission income typically requires a 24-month consecutive history, documented continuance for the next 3 years, and is calculated as a 24-month average. Declining trends prompt the lender to use the lower of the most recent year or the two-year average. Documentation includes W-2s, year-to-date pay stubs, and an employer letter on bonus structure. (Source: Fannie Mae B3-3.3-02: https://selling-guide.fanniemae.com/sel/b3-3.3-02/bonus-commission-overtime-and-tip-income)

### 13.12 Can I get a jumbo loan as a self-employed borrower?

Yes. Two paths exist: full-doc QM jumbo with two years of personal and business tax returns plus year-to-date P&L, or non-QM jumbo using bank statement loans, 1099-only loans, P&L only loans, or asset depletion programs that qualify on cash flow or assets rather than tax-return-derived income. Non-QM typically carries premium rate, down payment, and reserve requirements.

### 13.13 What's a bank statement loan?

A non-QM mortgage program where the borrower qualifies based on 12 or 24 months of personal or business bank statement deposits rather than tax returns. The lender averages deposits, applies an expense factor (typically 50 percent for business statements, lower for personal statements), and uses the result as qualifying income. Common for self-employed borrowers whose tax-return income does not reflect actual cash flow due to legitimate business deductions. Bank statement loans typically require 15 to 25 percent down and 700+ credit, with rate premium versus QM jumbo. (Source: NASB Non-QM FAQ: https://www.nasb.com/lending/solutions/non-qm-loans/non-qm-loan-faqs)

### 13.14 Can I avoid jumbo with a piggyback HELOC?

Sometimes. The 80/10/10 structure pairs a conforming first mortgage at or below the conforming limit with a 10 percent second-lien HELOC or fixed second, and the borrower brings 10 percent down. The blended rate of the two loans versus the all-in jumbo rate is the math to run. HELOC rates are variable and tied to short-term indexes; fixed seconds carry less rate risk but typically higher initial rates. Piggyback structures can be efficient when the loan amount is just over the conforming limit, but break down at significantly larger jumbo amounts.

### 13.15 Do jumbo loans require two appraisals?

Often, on loans above a threshold that varies by investor (commonly $1 million, $1.5 million, or $2 million). Below the threshold, a single appraisal is typical. When two appraisals are required and arrive at different values, the lower value is typically used. Some investors permit a desk-review of the second appraisal in lieu of a full second form.

### 13.16 What if my jumbo appraisal comes in low?

The borrower has options: increase the down payment to bridge the gap, renegotiate the contract price with the seller, walk away if an appraisal contingency exists, or request a Reconsideration of Value through the lender if there are factual errors or missed comparable sales the appraiser did not consider. The ROV process is the structured channel, and AIR rules require the request go through the lender to the appraiser, not directly. ROV does not guarantee a value change; the appraiser must consider the new information and respond. (Source: Fannie Mae ROV initiative: https://singlefamily.fanniemae.com/initiative-updates/reconsideration-value-rov)

### 13.17 How long does a jumbo loan take to close?

Typically 30 to 45 days from contract acceptance to closing, sometimes longer with portfolio investors or non-QM programs. Tighter timelines are achievable on clean files but compress every step.

### 13.18 Can I use gift funds on a jumbo loan?

Yes, generally, with stricter documentation than agency. Standard requirements include a signed gift letter from the donor, two months of donor bank statements showing the source of funds, evidence of transfer, and evidence of receipt. Many jumbo programs also require a minimum borrower contribution from the borrower's own funds (commonly 5 percent on loans where higher gift contributions are otherwise allowed). (Source: PennyMac jumbo home loans: https://www.pennymac.com/jumbo-home-loans)

### 13.19 How are 401(k) and IRA assets treated on a jumbo loan?

Vested retirement balances are typically counted at 60 to 70 percent of value for reserves purposes (varies by investor). 401(k) loan proceeds are generally not allowed for cash to close on QM jumbo, though some non-QM programs permit them. Decisions about whether to liquidate retirement assets carry tax and penalty implications and route to the borrower's CPA and financial advisor.

### 13.20 Can foreign nationals get jumbo loans?

Yes, through specific foreign national jumbo programs. Documentation typically includes valid passport or visa, foreign credit (where U.S. credit is not established), foreign income documentation translated into English, OFAC clearance, and foreign assets transferred to a U.S. bank account at least 10 days before closing. Down payment minimums of 25 to 30 percent are typical. (Source: Doss Law guide: https://www.dosslaw.com/doss-guides/mortgage-loans-to-foreign-nationals/)

### 13.21 Can physicians get jumbo loans without 20 percent down?

Yes, through physician-specific jumbo programs offered by some banks and portfolio lenders. Physician loan programs typically allow 0 to 10 percent down with no PMI for residents, fellows, and attending physicians, with eligibility usually requiring an MD, DO, DDS, DMD, OD, or similar credential and an executed employment contract. Physician programs are not standard jumbo investor offerings; they are bank-specific portfolio products. Confirm program availability and eligibility with the loan officer.

### 13.22 Are there jumbo loans for first-time buyers?

Yes. There is no first-time buyer disqualification for jumbo. The same credit, income, asset, and reserve requirements apply. First-time buyer programs offered by state housing finance agencies (in Alabama, AHFA) typically focus on low-to-moderate income borrowers and do not apply to jumbo. AHFA program interactions are addressed in the local-context companion file.

---

## 14. Common Misconceptions and Mistakes

- **"Jumbo always requires 20 percent down."** Many jumbo programs allow 10 percent or 15 percent down with strong compensating factors.
- **"Jumbo rates are always significantly higher than conforming."** The spread varies and has at times been negative (jumbo cheaper than conforming) for very strong borrowers in the post-pandemic environment.
- **"All jumbo loans are non-QM."** Most jumbo today is QM. Non-QM is a meaningful but minority segment.
- **"Jumbo means luxury."** Jumbo is purely a loan-amount classification. A $900,000 home in a high-cost county may be conforming, while a $900,000 home in Alabama is jumbo.
- **"I can use any income on a jumbo loan."** Bonus, commission, RSU, and self-employed income have specific seasoning, history, and continuance requirements. Income that does not meet investor requirements is not counted, period.
- **"My CPA letter will solve my self-employed income problem."** CPA letters supplement but do not replace tax-return analysis on full-doc QM jumbo. CPA letters are stronger on non-QM programs that are designed to use them.
- **"Crypto counts as reserves."** Treatment varies wildly. Most jumbo investors do not count crypto. Some count at steep haircuts. Some require liquidation to USD before counting.
- **"I can keep the cash gift in my account without sourcing it."** Gift funds require a paper trail: gift letter, donor bank statement, evidence of transfer, evidence of receipt.
- **"Jumbo lenders will pull my full credit only once."** Credit is typically pulled at application and again before closing. Recent credit changes (new accounts, large balance increases, late payments) between the two pulls can derail the file.
- **"I should get my pre-approval right before I write an offer."** Jumbo pre-approval is a multi-week process. Starting late costs deals in competitive markets.
- **"I can pay down debt at the closing table to fix DTI."** Sometimes works for credit cards, but creates a paper-trail and reserve issue if not planned. The funds used to pay down debt come from somewhere the lender will need to see.
- **"A bank statement loan is just easier."** Bank statement loans carry real rate, down payment, and reserve premiums. They are not a workaround. They are a separate non-QM product with separate costs.
- **"Jumbo and Non-QM are the same thing."** Confused frequently. Jumbo is a loan-amount classification (above conforming limit). Non-QM is a documentation-method classification (alternative to full-doc QM). QM jumbo is the dominant segment; non-QM jumbo is a separate product category.
- **"A relocation package will cover all my closing costs."** Not always. Relocation packages vary from full reimbursement of typical costs to capped allowances that cover only a portion. Verify with the relocation provider, in writing, before assuming.
- **"I can put my new home in my LLC at closing."** Investment property and primary residence rules differ. Some LLC vesting is allowed on non-QM investor jumbo. Most QM jumbo for primary residence does not allow LLC vesting at closing. Entity structure questions route to attorney.

---

## 15. Do / Don't Guidance

### Do

- Engage a loan officer for a planning conversation 3 to 6 months before shopping
- Pull and review your own credit report before pre-approval
- Document RSU vesting, brokerage activity, and bonus history early
- Confirm the realistic loan amount range and the conforming-versus-jumbo decision before shopping
- Understand cash to close and reserve requirements before falling in love with a price point
- Choose a buyer's agent experienced in the target submarket and price range
- Verify wire instructions in person or by verified phone, never by email
- Lock the rate at the appropriate point in the process for the chosen investor

### Don't

- Don't change jobs or employment structure during the application or closing window
- Don't open new credit in the 90 days before pre-approval or between pre-approval and closing
- Don't move money between accounts in the 60 days before application without keeping a paper trail
- Don't pay down collections without loan officer guidance (paying a collection can re-age it on the credit file and tank a score temporarily)
- Don't liquidate retirement or brokerage positions without modeling the tax consequence first (route to CPA)
- Don't assume crypto, foreign assets, or business funds will count without lender confirmation
- Don't waive contingencies in a competitive offer without understanding the cash-gap exposure
- Don't accept the first jumbo lender's pricing without comparing. Investor variability is significant and the same borrower file can produce different terms at different lenders
- Don't rely on a relocation package to cover everything. Read the fine print

---

## 16. Suggested FAQ Questions and Answers (FAQPage Schema-Ready)

Written in answer-first AEO format. Drop into FAQPage schema on the primary checklist page.

**Q: What is a jumbo loan?**
A: A jumbo loan is a residential mortgage with a loan amount above the FHFA conforming limit for the county where the property is located. For 2026, the baseline conforming limit is $832,750 in most U.S. counties, with a higher ceiling of $1,249,125 in counties FHFA has designated high-cost. Loans above the applicable limit are jumbo and follow individual investor guidelines rather than Fannie Mae or Freddie Mac standards.

**Q: What is the 2026 jumbo loan threshold in Madison County, Alabama?**
A: For 2026, the jumbo threshold in Madison County, Alabama is any loan amount above $832,750 on a one-unit property. Madison County is at the FHFA baseline conforming limit; it is not designated high-cost.

**Q: How much credit score do I need for a jumbo loan in 2026?**
A: Most jumbo investors require a 700 minimum credit score, with the best pricing typically reserved for borrowers with scores of 740 or higher. Some lenders accept 680 with compensating factors, and select non-QM jumbo programs accept scores as low as 660 with rate and down payment premiums. Specific minimums vary by investor.

**Q: Do jumbo loans really require 20 percent down?**
A: No. Many jumbo programs allow 10 to 15 percent down with strong credit, reserves, and full documentation. Some major lenders (PennyMac, Wells Fargo, Rocket Mortgage) offer jumbo programs with as little as 10.01 percent down on loan amounts up to $2 million. The best pricing tier typically sits at 20 percent down or higher.

**Q: How many months of reserves do I need for a jumbo mortgage?**
A: Typical jumbo investor reserve requirements range from 6 to 12 months of full PITIA (principal, interest, taxes, insurance, association dues) on primary residence loans up to roughly $1.5 million, scaling to 12 to 24 months on larger loan amounts. Investment property and second home jumbo typically require more. Reserves are measured after the down payment and closing costs are paid.

**Q: Can I use RSUs as income to qualify for a jumbo loan?**
A: Yes, often. Most jumbo investors will count RSU income with at least 12 months of receipt history for time-based RSUs (24 months for performance-based) and a vesting schedule showing at least 3 more years of vests ahead. The income calculation typically averages the trailing 24 months and uses the 200-day moving average of stock price. RSU treatment varies more across investors than any other income category, so confirm with your loan officer's specific investor placement.

**Q: Are jumbo loan rates higher than conforming rates?**
A: Not necessarily anymore. Historically jumbo rates were higher, but the spread has narrowed and at times reversed in the post-pandemic period. As of late 2025 and early 2026, jumbo and conforming rates often sit within 25 basis points of each other, and very strong borrower profiles can sometimes price jumbo below conforming. Rate spreads vary by investor, borrower profile, and market conditions.

**Q: How long does a jumbo loan take to close?**
A: Plan for 30 to 45 days from contract acceptance to closing. Some files can close faster on tight timelines, but jumbo files typically require manual underwriting, more thorough document review, and sometimes two appraisals on larger loan amounts, all of which take longer than typical agency-loan automated underwriting.

**Q: What is a non-QM jumbo loan?**
A: A non-QM jumbo loan is a jumbo loan that uses alternative documentation rather than full tax-return-based qualification. Common non-QM types include bank statement loans for self-employed borrowers, 1099-only loans for independent contractors, asset depletion loans for asset-rich borrowers with light current income, foreign national loans, and ITIN loans. Non-QM is not subprime; it is alternative documentation under the Ability-to-Repay rule. Non-QM typically carries a rate, down payment, and reserve premium versus full-doc QM jumbo.

**Q: What if my jumbo loan appraisal comes in low?**
A: Several options. The borrower can increase the down payment to bridge the gap, renegotiate the contract price with the seller, walk away if an appraisal contingency exists, or request a Reconsideration of Value through the lender. The ROV process is the structured channel for raising appraisal concerns. Direct communication between the borrower or agents and the appraiser about value is prohibited by Appraiser Independence Requirements.

**Q: Do I need two appraisals on a jumbo loan?**
A: Sometimes. Many jumbo investors require two appraisals on loan amounts above a threshold that varies by program (commonly $1 million, $1.5 million, or $2 million). When two appraisals are required and arrive at different values, the lower value is typically used for loan-to-value calculations. Below the threshold, a single appraisal is standard.

**Q: Can I use gift funds for a jumbo loan down payment?**
A: Generally yes, with stricter documentation than agency loans. Standard requirements include a signed gift letter from the donor, two months of donor bank statements showing the source of funds, evidence of transfer, and evidence of receipt in the borrower's account. Many jumbo programs also require a minimum borrower contribution from the borrower's own funds, commonly 5 percent of the down payment.

**Q: How are 401(k) and IRA assets treated on a jumbo loan?**
A: Vested retirement balances are typically counted at 60 to 70 percent of value when used for reserves, varying by investor. Whether to liquidate retirement assets to support a real estate transaction is a tax and financial planning decision that should be made with a CPA and financial advisor, not the mortgage lender.

**Q: Can I get a jumbo loan if I'm self-employed?**
A: Yes. Two paths exist: full-doc QM jumbo with two years of personal and business tax returns plus year-to-date P&L, or non-QM jumbo using bank statement, 1099-only, P&L only, or asset depletion programs that qualify on cash flow or assets rather than tax-return-based income. Non-QM is often the right path for self-employed borrowers with strong cash flow but heavily-deducted tax returns.

**Q: What's the difference between a jumbo loan and a non-conforming loan?**
A: A jumbo loan is a type of non-conforming loan. "Non-conforming" means a loan that does not meet Fannie Mae or Freddie Mac eligibility standards, for any reason. Jumbo means specifically that the loan amount exceeds the conforming dollar limit. Other reasons a loan may be non-conforming include alternative documentation (non-QM), property characteristics that fail agency rules (non-warrantable condo, mixed use), or borrower characteristics that fail agency rules (foreign national, recent credit event).

---

## 17. Suggested Page Sections and Page Splitting Recommendation

The user's stated bias is to start with one strong checklist page and split only if research depth and search-intent distinctness justify it. The recommendation here:

### 17.1 Recommended Primary Page: Jumbo Loan Planning Checklist for Huntsville and Madison County Buyers

H2 sections to include on the primary page:

- What Counts as a Jumbo Loan in Madison County (with the 2026 threshold called out)
- Conforming vs Jumbo: Which Path Fits Your Loan Amount
- The Jumbo Pre-Approval Process: Why It Takes Longer
- Cash to Close and Reserve Planning
- Income Documentation: W-2, Self-Employed, RSU, Bonus, Commission
- Credit and DTI Expectations on Jumbo
- The Two-Appraisal Threshold and What It Means
- Offer Strategy in Higher-Priced Submarkets
- The 6-Month, 3-Month, 1-Month, and At-Offer Checklist
- FAQ
- What This Page Doesn't Cover (with hard stops on tax, financial planning, and entity advice and routing language)

The full checklist is the reason a buyer lands on the page. The supporting H2 sections give the buyer the context to make sense of the checklist line items.

### 17.2 Recommended Future Support Pages (Build Only When Justified by Search Intent)

Three to five distinct future support pages this packet's content supports:

1. **Jumbo vs Conforming Loans in Alabama.** Stands alone if the keyword research shows distinct searches around "jumbo vs conforming" with state qualifiers. Includes structural alternatives (piggyback, larger down) more deeply than the primary page can.

2. **Jumbo Loan Reserve and Asset Documentation Guide.** Stands alone for borrowers who already understand jumbo basics and need depth on what counts as reserves and how to document complex asset situations (RSU vesting, retirement haircuts, gift funds, business accounts).

3. **Income Documentation for Self-Employed and RSU-Heavy Jumbo Borrowers.** Stands alone for the self-employed and tech-relocation segments who need depth on full-doc QM, bank statement loans, and the RSU income calculation.

4. **Jumbo Appraisal Strategy on Higher-Priced North Alabama Homes.** Stands alone for the high-end submarket where comp scarcity and ROV strategy meaningfully affect outcomes. This page would lean partly on the local-context research file.

5. **Jumbo Loan Planning for Relocation Buyers Moving to Huntsville.** Stands alone if the relocation buyer pool is large enough to justify (likely yes given the Redstone Arsenal and federal civilian relocation traffic). Includes the high-cost-county-to-baseline transition framing, the relocation package interaction with jumbo planning, and the timing constraints of relocation closings.

The primary checklist page should ship first. Support pages should be evaluated quarterly against keyword research, GSC impression data, and the volume of actual inbound questions on each subtopic.

### 17.3 Content Best Handled Inline vs Deferred

Best handled inline on the primary checklist page (because the buyer needs the context to use the checklist):

- The 2026 conforming limit and the Madison County status
- The conforming-versus-jumbo decision framework
- The pre-approval process and timeline
- The high-level cash-to-close and reserves picture
- The high-level income documentation picture
- The two-appraisal threshold concept
- The do/don't list

Best deferred to focused support pages (because depth would overwhelm the primary page):

- Full RSU income calculation methodology (200-day moving average, time-based vs performance-based, investor variability)
- Full asset-depletion loan mechanics
- Foreign national jumbo specifics
- Multi-financed-property reserve stacking math
- Detailed appraisal contingency and ROV walkthrough

---

## 18. Risks, Caveats, and Overclaiming Language to Avoid

Organized by topic area. Statements that should never appear without hedging are flagged with "HEDGE." Statements that should never appear at all are flagged with "EXCLUDE."

### 18.1 Conforming Loan Limits

- HEDGE: any reference to the conforming limit should specify the year (2026), the property type (one-unit), and "for most U.S. counties" since exceptions exist
- EXCLUDE: claiming the limit will or will not change next year. Limits are announced by FHFA each November.

### 18.2 Jumbo Underwriting Guidelines

- HEDGE: every jumbo guideline should be framed as "typical of the jumbo segment," "common across major jumbo investors," "varies by investor," or "subject to investor overlay"
- EXCLUDE: framing any jumbo guideline as "the rule" or "the standard" without investor context
- EXCLUDE: stating specific minimums as if universal (e.g., "you need 20 percent down" or "you need a 700 credit score")

### 18.3 Rate and Pricing Statements

- HEDGE: rate environment statements should be tied to a date and framed as "as of" with reference to a published source
- EXCLUDE: rate quotes for a specific borrower, "you'll get X rate," or any commitment of pricing
- EXCLUDE: "no closing costs" as a feature claim. Closing costs exist in every loan; they may be paid by the borrower, the lender (in exchange for a higher rate), or the seller. CFPB has flagged "no closing cost" overclaim as misleading advertising.

### 18.4 Approval and Eligibility Statements

- HEDGE: any "you qualify for" or "you'll be approved" framing needs to be replaced with "may qualify subject to underwriting and investor placement"
- EXCLUDE: guarantees of approval, including "guaranteed pre-approval"
- EXCLUDE: commitments about loan amount, loan terms, or specific investor placement before underwriting is complete

### 18.5 Appraisal Statements

- HEDGE: appraisal value expectations must be framed as "subject to appraisal" with no implied target value
- EXCLUDE: any statement that implies the appraisal will or should reach a particular value
- EXCLUDE: any communication directly with the appraiser about value, by anyone whose compensation depends on loan closing
- EXCLUDE: language that suggests the lender, AMC, or borrower can "request" or "ensure" a particular appraisal value

### 18.6 Tax, Financial Planning, and Legal Statements

- EXCLUDE: tax advice of any kind. All tax questions route to "consult a CPA." This includes RSU vesting strategy, retirement liquidation, gift tax implications, mortgage interest deduction, capital gains realization, depreciation strategy, and any state-specific tax question.
- EXCLUDE: financial planning advice. Asset allocation, retirement liquidation, RSU exercise, brokerage rebalancing, and the question of whether to liquidate or hold any non-cash asset routes to "consult a financial advisor."
- EXCLUDE: legal advice. Entity structure, trust formation, LLC ownership of real property, prenuptial implications, divorce-related transfers, and estate planning route to "consult an attorney."

### 18.7 Required Compliance Disclosures

- Equal Housing Lender disclosure must appear on any reader-facing page or marketing material
- NMLS ID for the loan officer and the company must appear
- Alabama state mortgage license disclosure must appear (Princeton Mortgage holds the relevant Alabama license)
- ATR/QM disclosures on full-doc jumbo are required at application, not in marketing material
- Non-QM disclosure requirements where applicable (specific to the program)
- AIR caution language for buyers and Realtors should appear on any page that discusses the appraisal process

### 18.8 Manufactured and Mobile Housing

- EXCLUDE: any reference to manufactured housing, manufactured homes, mobile homes, or jumbo programs secured by manufactured collateral. This packet and any reader-facing material derived from it covers site-built real-property residential transactions only.

### 18.9 Foreign National and Cross-Border Statements

- HEDGE: foreign national jumbo program features vary substantially across investors. Specific program features should be confirmed with the investor.
- EXCLUDE: any commitment to lend to borrowers from OFAC-sanctioned countries
- EXCLUDE: tax-treaty or immigration advice (route to attorney and CPA)

### 18.10 RSU and Stock Compensation

- HEDGE: RSU income treatment varies more across jumbo investors than any other income category. Reader-facing claims about RSU qualification must be hedged with "varies by investor" framing.
- EXCLUDE: tax advice about RSU exercise, vesting, or sale strategy
- EXCLUDE: any implied recommendation about when to vest or sell

---

## 19. Open Questions for Human Verification

Items the research could not confirm with primary sources or that depend on real-time investor-specific data. The writer should verify with the loan officer's investor contacts, AHFA, or a CPA / financial advisor partner before publishing claims that depend on these.

1. **Specific 2026 reserve requirements at named jumbo investors above $2 million loan amount.** Investor guidelines vary continuously and are typically not published publicly with full specificity. The 12 to 24 month range cited is a segment generalization. Confirm with the loan officer's specific investor sheets.

2. **Specific 2026 RSU income calculation methodology at named portfolio jumbo investors.** The Fannie Mae floor (12 month time-based, 24 month performance-based, 200-day moving average) is documented. Bank portfolio investors may apply more conservative or more flexible calculations. Confirm with named investors before making claims about RSU treatment.

3. **Specific 2026 two-appraisal thresholds at named jumbo investors.** The threshold ranges from $1 million to $2 million plus across the segment. Confirm with named investors before making specific threshold claims.

4. **Whether and how Princeton Mortgage's investor lineup treats specific income types** (RSU, asset depletion, business assets) at the time of any reader-facing publication.

5. **AHFA program interaction with jumbo loan amounts.** AHFA programs are typically aimed at low-to-moderate income borrowers and do not interact with jumbo, but program scope changes should be verified before any reader-facing claim. (Local-context companion file.)

6. **Current Alabama state mortgage license disclosure requirements** for any reader-facing page. Confirm with compliance.

7. **Title-company-specific wire-fraud protocols** in Madison County and surrounding counties. Wire instructions verification language should reference the title company's actual protocol.

8. **The current Alabama-specific contingency and earnest-money norms** for higher-priced submarkets. Local Realtor confirmation will sharpen any reader-facing claim.

9. **Whether the FinCEN Residential Real Estate Rule (effective 03-01-2026) affects any reader-facing material.** The rule applies primarily to non-financed transfers to legal entities and trusts in residential real estate, with reporting handled by title companies. It is unlikely to affect financed jumbo transactions directly, but the writer should confirm that any reader-facing reference to "all-cash" or "entity-purchased" alternative paths flags the new reporting framework appropriately.

10. **Specific employer compensation summary language** at large RSU-issuing employers (defense primes, tech FAANG-class) that supports continuance documentation. Pattern templates may be helpful for borrowers but should be vetted against current employer letters before publication.

---

## 20. Cross-Reference Note to Local-Context Companion File

The companion local-context research file should cover:

- Madison County and surrounding-county current home price data (median, mean, distribution by submarket)
- Higher-priced North Alabama neighborhoods and their typical price points (Hampton Cove, Madison/Town Madison, Providence, downtown Huntsville, Cummings Research Park-adjacent professional housing, Monte Sano, Owens Cross Roads, the Huntsville/Madison luxury submarket, and lake-adjacent Lake Guntersville housing)
- Local appraiser dynamics and the AMC pool active in North Alabama
- Local Realtor network considerations for the higher-priced submarket
- Local builder dynamics (custom builders, semi-custom, production at the higher end)
- AHFA and state program interactions (likely minimal at jumbo amounts but worth confirming for completeness)
- Madison County, Limestone County, Morgan County, Marshall County, Jackson County, DeKalb County property tax rates, homestead exemption rules, and timing of escrow setup
- Local insurance availability dynamics, including any wind/hail or wildfire premium considerations relevant to North Alabama submarkets
- Relocation buyer profiles specific to Redstone Arsenal, federal contractor sites, and Cummings Research Park
- Defense contractor RSU concentration in the local market and how that interacts with jumbo income documentation locally
- The relationship between jumbo pricing in North Alabama versus higher-cost markets for relocation buyers
- Local title company protocols for wire fraud prevention

The two files together should provide complete coverage. Universal mechanics here. Local applications there.

---

_End of packet._
