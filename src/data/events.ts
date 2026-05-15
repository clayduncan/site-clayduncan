export type EventStatus = 'upcoming' | 'past';

export interface EventVenueAddress {
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

export interface EventItem {
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
  summary: string;
  takeaways?: string[];
  image?: string;
  registrationUrl?: string;
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

export const events: EventItem[] = [
  {
    title: 'The AI Success System',
    date: '2026-05-14',
    startDateTime: '2026-05-14T10:00:00-04:00',
    displayTime: '10:00 AM ET',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'upcoming',
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
    status: 'upcoming',
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
    title: 'Quick Build: RELO Package',
    date: '2026-05-28',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'upcoming',
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
    status: 'upcoming',
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
    status: 'upcoming',
    summary:
      'A focused Quick Build on crafting a stronger listing presentation REALTORS® can use to win more listing conversations.',
    takeaways: [
      'A practical structure for a listing presentation',
      'AI-assisted preparation for seller conversations',
      'Messaging that helps REALTORS® communicate value clearly',
    ],
    registrationUrl:
      'https://us02web.zoom.us/webinar/register/WN_X0KJ-3Q0S9aJ4ag47OuNBw',
  },
  {
    title: 'Quick Build: RELO Package',
    date: '2026-07-09',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'upcoming',
    summary: reloPackageSummary,
    takeaways: reloPackageTakeaways,
    registrationUrl:
      'https://us02web.zoom.us/webinar/register/WN_yQ-QlewpQ_2sMU-s4UM0Xw',
  },
  {
    title: 'Quick Build: Target Market Campaign',
    date: '2026-07-23',
    location: 'Online via Zoom',
    format: 'online',
    audience: 'REALTORS®',
    status: 'upcoming',
    summary:
      'A focused Quick Build on using AI to identify the likely buyer profile for a listing and shape a marketing campaign around that audience.',
    takeaways: [
      'A target-market profile for a specific listing',
      'Messaging angles built around the likely buyer',
      'Campaign ideas REALTORS® can adapt for listing marketing',
    ],
    registrationUrl:
      'https://us02web.zoom.us/webinar/register/WN_oE3ZkZoiTga4eHbRbuuMwQ',
  },
  {
    title: 'Quick Build: RELO Package',
    date: '2026-08-06',
    startDateTime: '2026-08-06T12:00:00-05:00',
    displayTime: '12:00 PM CT',
    location: 'Trip Twin Realty',
    format: 'in-person',
    audience: 'REALTORS®',
    status: 'upcoming',
    summary: reloPackageSummary,
    takeaways: reloPackageTakeaways,
    registrationText: 'Registration details coming',
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

export const upcomingEvents = events.filter(
  (event) => event.status === 'upcoming',
);
export const pastEvents = events.filter((event) => event.status === 'past');
