export interface Review {
  id: string;
  author: string;
  reviewerInfo: string;
  isLocalGuide?: boolean;
  date: string;
  rating: number;
  text: string;
  positiveAttributes?: string[];
  services?: string[];
  topics: string[];
  featured?: boolean;
}

export interface ReviewTopic {
  name: string;
  count: number;
}

export const reviewsSummary = {
  rating: 4.4,
  totalReviews: 11,
  ratingDistribution: {
    5: 9,
    4: 0,
    3: 1,
    2: 0,
    1: 1,
  },
  topics: [
    { name: 'All', count: 11 },
    { name: 'furnace', count: 4 },
    { name: 'unit', count: 3 },
    { name: 'furnace installation', count: 2 },
    { name: 'company to work with', count: 2 },
    { name: 'email', count: 2 },
    { name: 'questions', count: 2 },
  ] as ReviewTopic[],
};

export const reviews: Review[] = [
  {
    id: 'laura-myers',
    author: 'Laura Myers',
    reviewerInfo: '1 review',
    date: '4 years ago',
    rating: 5,
    text: 'Richard came out to do a service call and was very professional and was able to explain everything. The unit was 30 years old and needed replaced. He did not pressure the sale, gave the quote and suggested to look around for prices and call him if I wanted to use On The Mark Mechanical. Rick was able to do the install the very next day! He rearranged his schedule to accommodate and by 5:00 PM the unit was up and running, cooling the house down. Both men are very professional and friendly. Richard is very responsive to text, phone and email. Thank you Richard and Rick for the exceptional work.',
    positiveAttributes: ['Responsiveness', 'Quality', 'Professionalism', 'Value'],
    services: ['Install AC'],
    topics: ['unit', 'email'],
    featured: true,
  },
  {
    id: 'matt-crigger',
    author: 'Matt Crigger',
    reviewerInfo: 'Local Guide · 47 reviews · 63 photos',
    isLocalGuide: true,
    date: '4 years ago',
    rating: 5,
    text: 'HOLY COW! BEST. SERVICE. CALL. EVER!! I called at 8:44 AM when my AC unit was going in and out and eventually quit on the hottest more muggy day of the year! Richard answered the phone and said he was in the area already and would be at my house "within the hour". WHAT!? SERIOUSLY!!? *mic drop* (He told me they shoot to be onsite the day of the call.) I was HOPING he\'d be here by the end of the day. I was working in my home office when he knocked on the door (only 45 minutes later). He had already fixed something on the outside unit and it was working! Super quick. Super friendly! CALL THEM! Seriously. Don\'t even think about someone else. I won\'t ever again. Richard and "On the Mark" are now "my guys" when it comes to my HVAC and all mechanical stuff. Done.',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['HVAC system maintenance', 'Repair HVAC'],
    topics: ['unit'],
    featured: true,
  },
  {
    id: 'hk-parrot',
    author: 'HK Parrot',
    reviewerInfo: '6 reviews',
    date: '4 years ago',
    rating: 5,
    text: "I have used 'On the Mark' for more than 20 years, both for service and system replacements. Today was the 5th system they have replaced (all different sites) and as in the past, the install was done very professionally, the clean up was superb, and the price was more than just 'competitive'. On the Mark is my 'go to' whenever I have need of HVAC service.",
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['HVAC system maintenance', 'Install AC', 'Repair HVAC'],
    topics: ['furnace installation'],
    featured: true,
  },
  {
    id: 'kristen-burrill',
    author: 'Kristen Burrill',
    reviewerInfo: '3 reviews',
    date: '3 years ago',
    rating: 5,
    text: 'Best service I have received from an HVAC company, hands down. Referred them to the restaurant I work for and since they specialize in refrigeration, they were able to help. Plus installed a whole a/c and furnace for my parents with the best price when they were in desperate need. Cannot recommend enough',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    topics: ['furnace'],
    featured: true,
  },
  {
    id: 'terri-augustine',
    author: 'Terri Augustine',
    reviewerInfo: '2 reviews · 3 photos',
    date: 'Edited 3 years ago',
    rating: 5,
    text: 'Today we had a new air conditioner and furnace installed. Great company to work with, and the price was great too. Very professional and friendly. I have definitely have found my future HVAC company.',
    positiveAttributes: ['Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Install AC', 'Heating system installation'],
    topics: ['furnace', 'furnace installation', 'company to work with'],
    featured: true,
  },
  {
    id: 'zuzana-tomas',
    author: 'Zuzana Tomas',
    reviewerInfo: 'Local Guide · 25 reviews · 2 photos',
    isLocalGuide: true,
    date: '3 years ago',
    rating: 5,
    text: "Terry was able to fix our unit in minutes and explained everything clearly. We thought we'd for sure have to replace our 30-year old unit, and we were delighted to find out that a repair was possible!",
    topics: ['unit'],
  },
  {
    id: 'ian-draft',
    author: 'Ian Draft',
    reviewerInfo: '5 reviews · 1 photo',
    date: '4 years ago',
    rating: 5,
    text: 'Great company to work with. No hassle at all and a great price! Was able to work with me and my budget. Super happy with my new furnace and AC!',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality'],
    services: ['Install AC'],
    topics: ['furnace', 'furnace installation', 'company to work with'],
  },
  {
    id: 'james-kipker',
    author: 'James Kipker',
    reviewerInfo: '5 reviews',
    date: '3 years ago',
    rating: 5,
    text: 'Very professional answered all my questions and went above what he had to do to take care of my service they will be the only people I call',
    topics: ['questions'],
  },
  {
    id: 'mallory-matthews',
    author: 'mallory matthews',
    reviewerInfo: '4 reviews',
    date: '3 years ago',
    rating: 5,
    text: 'Great customer service and great value!! Terry was very knowledgeable and helpful!',
    positiveAttributes: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['Heating system installation', 'A/C system repair', 'Heating system repair'],
    topics: ['furnace installation'],
  },
  {
    id: 'chris-gomez',
    author: 'Chris Gomez',
    reviewerInfo: 'Local Guide · 36 reviews · 1 photo',
    isLocalGuide: true,
    date: '3 years ago',
    rating: 3,
    text: 'Got an estimate for replacement furnace and AC. They were very friendly, answered my questions, I sensed they were genuine with their recommendations. I received the estimate via email, and I followed up via email with questions - twice. After not hearing from them, I called the office and again they were very friendly and said they would call me back or email with additional answers. Never heard from them again. I went with a different company, but wish they would have been better with communication so I could have considered their estimate more seriously.',
    topics: ['furnace', 'email', 'questions'],
  },
  {
    id: 'wellers-weddings',
    author: 'Wellers Weddings',
    reviewerInfo: '4 reviews · 3 photos',
    date: '3 years ago',
    rating: 1,
    text: 'Terrible service. Have been calling them for two months trying to get a repair on a new unit. They do not return calls.',
    services: ['A/C system repair', 'Service not listed'],
    topics: ['unit'],
  },
];
