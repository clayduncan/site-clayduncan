import { aggregateRating } from '../data/reviews';
import { site } from '../data/site';

export const prerender = true;

const keyPages = [
  ['Homepage', `${site.url}/`],
  ['About', `${site.url}/about/`],
  ['Reviews', `${site.url}/reviews/`],
  ['Events', `${site.url}/events/`],
  ['REALTOR AI Training', `${site.url}/realtor-ai-training/`],
  ['Why Join Clay', `${site.url}/join-us/`],
  [
    'Mortgage Guidance in Huntsville',
    `${site.url}/huntsville/mortgage-guidance/`,
  ],
  ['VA Loans in Huntsville', `${site.url}/huntsville/va-loans/`],
  ['Jumbo Loans in Huntsville', `${site.url}/huntsville/jumbo-loans/`],
  [
    'Medical Professional Mortgage in Huntsville',
    `${site.url}/huntsville/medical-professional-mortgage/`,
  ],
  [
    'Complex Mortgage Guidance in Huntsville',
    `${site.url}/huntsville/complex-mortgage-guidance/`,
  ],
  [
    'VA Loan Checklist Near Redstone Arsenal',
    `${site.url}/resources/va-loan-checklist-redstone-arsenal/`,
  ],
  [
    'VA Certificate of Eligibility and Documents',
    `${site.url}/resources/va-certificate-of-eligibility-documents/`,
  ],
  [
    'VA Funding Fee, Exemptions, and Refunds',
    `${site.url}/resources/va-funding-fee-exemptions-refunds/`,
  ],
  [
    'VA Appraisal and Minimum Property Requirements',
    `${site.url}/resources/va-appraisal-minimum-property-requirements/`,
  ],
  [
    'VA Closing Costs and Allowable Fees',
    `${site.url}/resources/va-closing-costs-allowable-fees/`,
  ],
  [
    'VA Entitlement and Second Use VA Loans',
    `${site.url}/resources/va-entitlement-second-use-loans/`,
  ],
  [
    'Jumbo vs Conforming Loans in Huntsville and Madison',
    `${site.url}/resources/jumbo-vs-conforming-loans-huntsville-madison/`,
  ],
  [
    'Jumbo Loan Reserves and Asset Documentation',
    `${site.url}/resources/jumbo-loan-reserves-asset-documentation/`,
  ],
  [
    'Jumbo Loan Relocation Planning for Huntsville',
    `${site.url}/resources/jumbo-loan-relocation-huntsville/`,
  ],
  [
    'Buying a Home Before Your Medical Job Starts',
    `${site.url}/resources/buying-home-before-medical-job-starts/`,
  ],
  [
    'Student Loans and Medical Professional Mortgages',
    `${site.url}/resources/medical-professional-student-loans-mortgage/`,
  ],
  [
    'Medical Professional Loan vs Conventional Loan',
    `${site.url}/resources/medical-professional-loan-vs-conventional/`,
  ],
  [
    'Job Change and Offer Letter Mortgage',
    `${site.url}/resources/job-change-offer-letter-mortgage/`,
  ],
  [
    'Self-Employed Mortgage Documentation',
    `${site.url}/resources/self-employed-mortgage-documentation/`,
  ],
  ['Blog', `${site.url}/blog/`],
  [
    'How REALTORS Can Use AI Without Losing the Human Side of Real Estate',
    `${site.url}/blog/how-realtors-can-use-ai-without-losing-the-human-side-of-real-estate/`,
  ],
];

const body = `# Clay Duncan

## About

Clay Duncan is a Huntsville, Alabama mortgage loan originator with Team Duncan, powered by Princeton Mortgage, specializing in VA loans for Redstone Arsenal and the Huntsville military community, AI education and training for REALTORS®, and loan officer growth leadership. Clay helps homebuyers make confident mortgage decisions, helps real estate professionals use AI in useful ways, and helps loan officers evaluate growth opportunities.

## Key Facts

- Website: ${site.url}/
- Phone: ${site.phone}
- Email: ${site.email}
- Brand: Team Duncan, powered by Princeton Mortgage
- Company: ${site.company.name}
- NMLS: ${site.nmlsId}
- NMLS Consumer Access: https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/${site.nmlsId}
- Branch Address:
  ${site.branch.company}
  ${site.branch.street}
  ${site.branch.city}, ${site.branch.state} ${site.branch.postalCode}
  Branch NMLS #${site.branch.nmls}
- Google Business Profile: https://www.google.com/maps?cid=9332843875946390997
- Google Reviews: ${aggregateRating.reviewCount} five-star reviews
- LinkedIn: https://www.linkedin.com/in/theclayduncan
- YouTube: https://www.youtube.com/@TheClayDuncan
- Instagram: https://www.instagram.com/theclayduncan/

## Key Pages

${keyPages.map(([label, url]) => `- ${label}: ${url}`).join('\n')}

## Service Area

${site.serviceArea.join('; ')}.

## Preferred Entity Description

Clay Duncan is a Huntsville mortgage loan originator with Team Duncan, powered by Princeton Mortgage, NMLS #${site.nmlsId}, specializing in VA loans, REALTOR® AI education, and loan officer growth leadership.
`;

export function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
