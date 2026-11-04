export interface Review {
  id?: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  source: string;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
  source: string;
}

// Single source for every review count/star rating on the site (home, about, reviews, JSON-LD, llms.txt). Updated weekly by scripts/sync-google-reviews.mjs. Last verified: 2026-11-04
export const aggregateRating: AggregateRating = {
  ratingValue: 5.0,
  reviewCount: 37,
  bestRating: 5,
  worstRating: 1,
  source: 'Google Business Profile',
};

export const reviews: Review[] = [
  {
    author: 'Angelica Reyes - REALTOR',
    rating: 5,
    date: '2026-11-03',
    source: 'Google',
    text: 'I absolutely enjoyed attending Clays Ai Class. So much info on how to elevate your business with Ai and he did it was so much enthusiasm and excitement which made the class even better.',
  },
  {
    author: 'John Miller',
    rating: 5,
    date: '2026-10-31',
    source: 'Google',
    text: 'We were lucky enough to have Clay at one of our national conventions as a speaker on AI. He crushed it! Our members are all speaking how impactful the knowledge he presented will impact their businesses. The knowledge and energy Clay brings to the stage is nothing short of needed for anyone looking to bring value to their community.',
  },
  {
    author: 'Kevin Strawter',
    rating: 5,
    date: '2026-10-30',
    source: 'Google',
    text: 'Phenomenal class! Keep up the good work!!',
  },
  {
    author: 'Harley Kenney',
    rating: 5,
    date: '2026-09-01',
    source: 'Google',
    text: 'Clay and Levi are an absolute pleasure to work with.  Their AI tools and cutting edge technology make them a great option for your home buying needs! They work hard and are easily reached when needed.  I recommend them to all my clients!',
  },
  {
    author: 'Brenda King',
    rating: 5,
    date: '2026-07-01',
    source: 'Google',
    text: 'We had a wonderful training with Clay and Levi!!! Thank you so much for being so great about sharing with us!',
  },
  {
    author: 'Rebecca Davis',
    rating: 5,
    date: '2026-07-01',
    source: 'Google',
    text: 'Clay did an excellent job teaching us how to better use AI in our daily work. He explained concepts in a clear, practical way and shared useful tips that we could start applying immediately. His knowledge, enthusiasm, and ability to make a complex topic easy to understand made the session both engaging and valuable. I walked away with a much better understanding of how AI can improve efficiency and productivity.',
  },
  {
    author: 'Johnnie Ring',
    rating: 5,
    date: '2026-07-01',
    source: 'Google',
    text: 'Clay has been so helpful learning information to help me help my clients!',
  },
  {
    author: 'Areal Duncan',
    rating: 5,
    date: '2026-06-01',
    source: 'Google',
    text: 'Extremely informative and engaging. Didn\'t feel like a class but more like an open conversation of guiding steps on how to build something great for your business. 10/10 would recommend!',
  },
  {
    author: 'Jorge Paramo',
    rating: 5,
    date: '2026-06-01',
    source: 'Google',
    text: 'Absolutely amazing, fun and informative!! Highly recommend!',
  },
  {
    author: 'Brylie Mason',
    rating: 5,
    date: '2026-06-01',
    source: 'Google',
    text: 'I learned so much ! Clay was informative the slide show also provided a lot of information . I would highly recommend!!',
  },
  {
    author: 'Marty Paulson',
    rating: 5,
    date: '2026-06-01',
    source: 'Google',
    text: 'Detailed presentation with lots of new to me info shared',
  },
  {
    author: 'Jimmy Schubert',
    rating: 5,
    date: '2026-05-01',
    source: 'Google',
    text: 'Great Training....thank you',
  },
  {
    author: 'Jennifer Uptain',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Clay & Levi provided such a fun & informative session.   They are truly experts in their field.',
  },
  {
    author: 'chris webb',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Very thorough and informative presentation!\nGives everyone a great view of how AI can change your life. Great presentation!',
  },
  {
    author: 'Lydia Hayes',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Amazing class. Learned a lot about AI',
  },
  {
    author: 'Josie Gentle',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great AI class!',
  },
  {
    author: 'Khrista Dees',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great presentation and learned quite a bit .',
  },
  {
    author: 'Ainsley Runels',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Absolutely great class!',
  },
  {
    author: 'Jasmine Hanonu AL Real Estate Agent',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great info presented by Clay and Levi! Excited to level up my business with what I learned!',
  },
  {
    author: 'D Edmonson',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'We had a really great time attending Princeton mortgage’s ai class. Clay was a phenomenal teacher.',
  },
  {
    author: 'Anthony Jones',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great Course by Clay and his team. Very informative and helpful.',
  },
  {
    author: 'The Dollarhide Team Green Mountain Realty',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great Information!  Clay and Levi are very informative and have a great class!  Can’t wait to learn more in the 102 class!',
  },
  {
    author: 'Abby Stone Cranor',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Clay and Levi were so great! Gave a lot of helpful tips on how to better use ChatGPT to further my real estate career.',
  },
  {
    author: 'Bill Nelson',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'Just spent the morning learning about AI from Clay- overwhelmingly good information to help take my business to the next level.',
  },
  {
    author: 'Teri Harriman, GRI',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'This was a very informative class. Great for us who barely know how to use AI! A lot of good information that is useable!',
  },
  {
    author: 'Kelly Rankey',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: ': “Clay was incredibly informative and provided clear, actionable strategies to help grow your business. His insights make it easy to work smarter, not harder. Highly recommended for anyone looking to elevate their results.”',
  },
  {
    author: 'Cort Christie',
    rating: 5,
    date: '2026-02-01',
    source: 'Google',
    text: 'I’ve known Clay for a long time, and this experience reinforced exactly why I trust him.\nEven though Clay wasn’t licensed in the state where my son was purchasing his home, he still took the time to help us navigate the mortgage process. He reviewed details, answered questions, and helped make sure my son was getting a fair deal and fully understood the options in front of him.\nThere was no obligation for Clay to do any of this… he simply wanted to help us make a smart decision. That level of integrity and willingness to serve says everything about how he operates.\nIf you’re looking for someone who genuinely cares about people, communicates clearly, and puts your best interest first, Clay is the kind of professional you want in your corner.',
  },
  {
    author: 'Jaime Sallis',
    rating: 5,
    date: '2026-02-01',
    source: 'Google',
    text: 'Clay and Levi were a joy to have in our office.  The information I and the agents acquired is useful and valuable.  Looking forward to working with them both in the future.',
  },
  {
    author: 'Kyle Krch',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'In the past 12 months, I’ve referred 18 homebuyers to Clay and his team, and the consistency has been outstanding. Every transaction has closed successfully, and my clients consistently report great rates, clear communication, and a smooth, professional experience from start to finish… all resulting in five-star reviews. I continue to send business Clay’s way because I trust him with my clients. If you’re looking for a lender who delivers and follows through, I highly recommend Clay and his team.',
  },
  {
    author: 'toby bright',
    rating: 5,
    date: '2026-02-01',
    source: 'Google',
    text: 'I’ve purchased multiple properties over the years, including second homes and investment properties, and this was one of the smoothest transactions I’ve experienced. Clay helped me close a complicated jumbo loan for my second home purchase in Scaly Mountain, NC, and handled the entire process with clarity, proactive communication, and precision. Large, out-of-state loans can get complicated, but I always knew exactly where things stood and what to expect next. Clay delivered exactly what he promised. If you’re buying a second home or investment property and want a lender who communicates clearly and inspires confidence, I highly recommend him.',
  },
  {
    author: 'Lisa Zibas',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'I had the opportunity to attend Princeton Mortgage’s AI for REALTORS® 101 today — and wow! Clay is a true expert. From planning social media content to developing personalized listing presentations, I picked up so many new tools that will help me increase efficiency and raise the bar for my clients. Excited to put this knowledge to work. Thanks, Clay!',
  },
  {
    author: 'Anthony Bellman',
    rating: 5,
    date: '2026-03-01',
    source: 'Google',
    text: 'I really enjoyed the AI training with Clay and Levi. It was straight to the point, practical, and actually useful for what we do day to day in real estate. I walked away with tools I can start using immediately in my business. If you’re an agent looking to stay ahead and work smarter, I definitely recommend attending one of their trainings. Great value and well worth the time.',
  },
  {
    author: 'Renee Tripp',
    rating: 5,
    date: '2026-02-01',
    source: 'Google',
    text: 'Clay and Levi were a wealth of generous knowledge! They both have very effective communication, and are excellent teachers- Looking forward to attending more workshops with them in the future as well as mortgage Lending experiences.',
  },
  {
    author: 'Jaz Hanonu Real Estate Agent - Loving Huntsville',
    rating: 5,
    date: '2026-04-01',
    source: 'Google',
    text: 'Great info presented by Clay and Levi! Excited to level up my business with what I learned!',
  },
];
