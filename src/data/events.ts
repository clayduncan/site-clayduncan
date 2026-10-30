export type EventStatus = 'upcoming' | 'past';

export interface EventVenueAddress {
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

export interface EventItem {
  slug?: string;
  title: string;
  date: string;
  startDateTime?: string;
  endDateTime?: string;
  displayTime?: string;
  location: string;
  venueAddress?: EventVenueAddress;
  format: 'in-person' | 'online';
  audience: string;
  status: EventStatus;
  summary?: string;
  takeaways?: string[];
  supportingCopy?: string;
  image?: string;
  registrationUrl?: string;
  registrationLabel?: string;
  registrationText?: string;
  offerValidFrom?: string;
}

const realtor101Summary =
  'A practical, no-jargon session on using AI without losing your voice, relationships, or humanity.';

const aiSuccessSystemSummary =
  'A practical AI setup agents can use immediately, leading into the upcoming AI Systems: Quick Builds sessions.';

const aiSuccessSystemTakeaways = [
  'How AI got to this point and why it matters now',
  'The differences between chats, projects, custom GPTs, and artifacts',
  'Custom instruction rules agents can plug in immediately',
  'Practical tools for beginning daily AI workflows',
];

const reloPackageSummary =
  'A focused Quick Build where Clay creates a complete relocation package from a mock out-of-city buyer scenario in less than 30 minutes.';

const reloPackageTakeaways = [
  'A beginning-to-end relocation package workflow',
  'A finished email to the potential client with the package delivered',
  'A step-by-step instructional guide for reference after the course',
];

const listingPresentationSummary =
  'A focused Quick Build on crafting a stronger listing presentation REALTORS® can use to win more listing conversations.';

const listingPresentationTakeaways = [
  'A practical structure for a listing presentation',
  'AI-assisted preparation for seller conversations',
  'Messaging that helps REALTORS® communicate value clearly',
];

export const events: EventItem[] = [
  {
    title: 'The AI Success System',
    date: '2026-05-14',
    startDateTime: '2026-05-14T10:00:00-04:00',
    displayTime: '10:00 AM ET',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary: aiSuccessSystemSummary,
    takeaways: [
      'A ChatGPT that speaks your love language',
      'One prompt that turns a phone photo into a clean blue-hour listing image in under a minute',
      'Custom instruction rules agents can plug in immediately',
      'A copy-and-paste toolkit delivered at the end',
    ],
    registrationUrl:
      'https://nam11.safelinks.protection.outlook.com/?url=https%3A%2F%2Fus02web.zoom.us%2Fwebinar%2Fregister%2FWN_JqgkLSwHSLeqVIUrwWLZMg%23%2Fregistration&data=05%7C02%7CClay%40princetonmortgage.com%7C964a704115d841a4182d08deab6f6a0d%7Cace3f3ba553340ec831be164d8efe73f%7C0%7C0%7C639136692215656991%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=QiGL%2Fg%2BD4nP77lef7fCs%2BmKvxjN9dZLlvdvsfpm9LaQ%3D&reserved=0',
  },
  {
    title: 'Quick Build: RELO Package',
    date: '2026-05-28',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary: reloPackageSummary,
    takeaways: reloPackageTakeaways,
    registrationUrl:
      'https://us02web.zoom.us/webinar/register/WN_ybQGvqu7TyGbB6vpMmZ-EQ',
  },
  {
    title: 'The Realtor AI Success System',
    date: '2026-06-11',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary: aiSuccessSystemSummary,
    takeaways: aiSuccessSystemTakeaways,
    registrationUrl:
      'https://us02web.zoom.us/webinar/register/WN_EPZr_jgGSLO41ga7j9JL4Q',
  },
  {
    title: 'Quick Build: Listing Presentation',
    date: '2026-06-25',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary: listingPresentationSummary,
    takeaways: listingPresentationTakeaways,
  },
  {
    title: 'Quick Build: RELO Package',
    date: '2026-07-09',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary: reloPackageSummary,
    takeaways: reloPackageTakeaways,
  },
  {
    title: 'Quick Build: Gamma',
    date: '2026-07-23',
    startDateTime: '2026-07-23T09:00:00-05:00',
    displayTime: '9:00 AM CT',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary:
      'A focused Quick Build on Gamma: how to set it up, run it, and use it to produce client-ready materials in a fraction of the time.',
    takeaways: [
      'Setting up Gamma',
      'Best settings and features to know',
      'Creating presentations from a simple prompt',
      'Editing and customizing presentations',
      'Practical ways REALTORS® can use Gamma in their business',
    ],
    supportingCopy:
      'Agents will walk away knowing how to create listing presentations, buyer guides, seller guides, relocation packages, market reports, and more, all in significantly less time. This is the same presentation platform we used to build the Listing Presentation and Relocation Package resources featured in our previous AI Quick Builds.',
  },
  {
    slug: '2026-08-06-listing-presentation',
    title: 'Quick Build: Listing Presentation',
    date: '2026-08-06',
    startDateTime: '2026-08-06T09:00:00-05:00',
    displayTime: '9:00 AM CT',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'past',
    summary: listingPresentationSummary,
    takeaways: listingPresentationTakeaways,
  },
  {
    slug: '2026-08-13-claytools-ai',
    title: 'ClayTools.AI Setup and Training',
    date: '2026-08-13',
    startDateTime: '2026-08-13T12:00:00-05:00',
    displayTime: '12:00 PM CT',
    location: 'TwinsREALTY',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary:
      'A hands-on setup session to get you up and running on ClayTools.ai, the hub of AI-powered tools for listing agents.',
    takeaways: [
      'Setting up your agent profile (your photo, branding, and preferred lender)',
      'A walkthrough of the current tools: Relo Package Generator, Listing Presentation Generator, CMA Generator, Caravan Tool, and Targeted Market Analysis',
      'Running your first package start to finish',
    ],
    supportingCopy:
      'Agents will leave with their account fully configured and ready to use on their next listing.',
  },
  {
    title: 'VAREP National Convention: The Age of Intelligence',
    date: '2026-10-26',
    location: 'Hyatt Regency Jacksonville Riverfront, Jacksonville, FL',
    format: 'in-person',
    audience: 'Housing Professionals',
    status: 'past',
    summary:
      'Clay delivered the keynote The Age of Intelligence at the VAREP National Convention, exploring how AI is changing the way we work. He demonstrated the shift from asking questions to connecting tools and delegating workflows, including a daily Breakfast Brief, while keeping human judgment, accountability, and trust at the center.',
    takeaways: [
      'Moving from asking and collaborating to creating, connecting, and delegating',
      'Connecting email, calendars, contacts, and CRM information into practical workflows',
      'Defining outcomes, access, and approvals while retaining professional judgment',
    ],
    supportingCopy:
      'The keynote encouraged attendees to start with one useful workflow and build on it each week.',
  },
  {
    title: 'VAREP National Convention: Build Your Personal AI Assistant',
    date: '2026-10-27',
    location: 'Hyatt Regency Jacksonville Riverfront, Jacksonville, FL',
    format: 'in-person',
    audience: 'Housing Professionals',
    status: 'past',
    summary:
      'Clay and Levi led a hands-on VAREP National Convention breakout on building a personal AI assistant. The training covered a main assistant, a daily Breakfast Brief connected to email and calendars, and a Mini-Me profile keeper, with practical guardrails for permissions, privacy, and approval before taking action.',
    takeaways: [
      'Setting up a main assistant and connecting the tools you use',
      'Personalizing a Breakfast Brief with meetings, follow-ups, deadlines, and daily priorities',
      'Building a Mini-Me profile keeper so assistants understand your work and preferences',
      'Reviewing permissions and requiring approval for consequential actions',
    ],
    supportingCopy:
      'The session included a companion setup guide and a bonus introduction to a Pareto CRM assistant.',
  },
  {
    title: 'The Age of Intelligence',
    date: '2026-11-18',
    startDateTime: '2026-11-18T11:00:00-06:00',
    endDateTime: '2026-11-18T12:30:00-06:00',
    displayTime: '11:00 AM to 12:30 PM CT',
    location:
      'BHHS Rise Real Estate, 3603 South Memorial Parkway, Huntsville, AL 35801',
    venueAddress: {
      streetAddress: '3603 South Memorial Parkway',
      addressLocality: 'Huntsville',
      addressRegion: 'AL',
      postalCode: '35801',
      addressCountry: 'US',
    },
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'upcoming',
    summary:
      'AI is changing how real estate gets done, and it is moving fast. Join Clay and Levi Duncan for a new way to see your business and your time, and learn how an AI helper can save you hours every week. This talk is not a tech class.',
    takeaways: [
      'A clear picture of how fast AI is changing real estate and lending',
      'Why the agents who adopt it early will pull ahead',
      'A real look at what a personal AI assistant does in a day',
      'A new way to think about your time and what only you should be doing',
      'Confidence about where to start, without needing to be a tech person',
    ],
  },
  {
    title: 'Future of AI in Real Estate',
    date: '2026-05-21',
    startDateTime: '2026-05-21T12:00:00-05:00',
    displayTime: '12:00 PM CT',
    location: 'Gunters Landing Clubhouse, Guntersville, AL',
    venueAddress: {
      streetAddress: '1000 Gunters Landing Road',
      addressLocality: 'Guntersville',
      addressRegion: 'AL',
      postalCode: '35976',
      addressCountry: 'US',
    },
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary:
      'A 15-minute opening briefing for the Marshall County Board of REALTORS® on what is changing with AI in real estate and what agents should understand now.',
    takeaways: [
      'A practical update on where AI is moving in the real estate industry',
      'What REALTORS® should understand before the tools become everyday infrastructure',
      'A concise opener for the one-hour Marshall County Board of REALTORS® meeting',
    ],
    registrationText: 'No registration required',
  },
  {
    title: 'The AI Success System',
    date: '2026-05-12',
    startDateTime: '2026-05-12T10:00:00-05:00',
    displayTime: '10:00 AM CT',
    location: 'Alabama Dream Team Realty',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: aiSuccessSystemSummary,
  },
  {
    title: 'Quick Build: RELO Package',
    date: '2026-05-07',
    startDateTime: '2026-05-07T11:00:00-05:00',
    displayTime: '11:00 AM CST',
    location: 'KW Horizon',
    venueAddress: {
      streetAddress: '2105 Mastin Lake Road NE, Suite A',
      addressLocality: 'Huntsville',
      addressRegion: 'AL',
      postalCode: '35810',
      addressCountry: 'US',
    },
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: reloPackageSummary,
    takeaways: reloPackageTakeaways,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-25',
    location: 'Leading Edge Real Estate Group - Decatur',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-12',
    location: 'Green Mountain Realty',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-10',
    location: 'RE/MAX Unlimited',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-06',
    location: 'Better Homes and Gardens',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-03-03',
    location: 'RE/MAX Platinum',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-02-26',
    location: 'Five Star Real Estate Agency',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for Homebuyers - Free Intro Course 101',
    date: '2026-02-21',
    location: 'Alley Suite at Stovehouse Event Center',
    format: 'in-person',
    audience: 'Homebuyers',
    status: 'past',
    summary:
      'A beginner-friendly workshop on how AI can help buyers and sellers move through the home search with more confidence.',
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-02-16',
    location: 'RE/MAX Unlimited - Blackwell',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-02-12',
    location: 'Stovehouse Event Center - Alley Suite',
    venueAddress: {
      streetAddress: '3414 Governors Drive SW',
      addressLocality: 'Huntsville',
      addressRegion: 'AL',
      postalCode: '35805',
      addressCountry: 'US',
    },
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
  {
    title: 'AI for REALTORS® 102 - From Instructions to Infrastructure',
    date: '2026-02-10',
    location: 'RE/MAX Alliance',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary:
      'A practical session on setting voice, building an AI project, and giving clearer instructions so AI works the way professionals expect.',
  },
  {
    title: 'AI for REALTORS® 101 - Introductory Course',
    date: '2026-01-15',
    location: 'TwinsREALTY',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'past',
    summary: realtor101Summary,
  },
];

const sortByDateAsc = (a: EventItem, b: EventItem) =>
  (a.startDateTime ?? a.date).localeCompare(b.startDateTime ?? b.date);

const sortByDateDesc = (a: EventItem, b: EventItem) =>
  (b.startDateTime ?? b.date).localeCompare(a.startDateTime ?? a.date);

export const getEventAnchorId = (event: EventItem) => event.slug ?? event.date;

export const upcomingEvents = events
  .filter((event) => event.status === 'upcoming')
  .sort(sortByDateAsc);
export const pastEvents = events
  .filter((event) => event.status === 'past')
  .sort(sortByDateDesc);
