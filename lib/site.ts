import type { PosterSite } from '@/lib/types';

/**
 * Demo-Boyz poster. Facts from the Facebook page captured into Studio
 * prospect 712b003f-0de1-4ae8-a73c-34c24e310f2a on 15 Oct 2026.
 * Photos are the rooms that page posted. No reviews, no ticket number.
 */
const photo = (name: string) => `/${name}`;

const phone = { display: '(250) 681-0511', href: 'tel:+12506810511' };
const email = { display: 'kyle@demo-boyz.com', href: 'mailto:kyle@demo-boyz.com' };

export const site: PosterSite = {
  slug: 'demo-boyz',
  brand: 'Demo-Boyz',
  owner: 'Kyle',
  tagline: 'General contracting in Kelowna. Houses and commercial work.',
  city: 'Kelowna',
  province: 'BC',
  region: 'Kelowna',
  industry: 'Construction',
  website: 'https://www.facebook.com/p/Demo-Boyz-61588474913250',
  phone,
  email,
  theme: {
    navy: '#0E0E0E',
    lake: '#4A4A4A',
    cyan: '#D6D6D6',
    mist: '#F6F6F6',
    slate: '#1C1C1C',
    muted: '#5A5A5A',
    line: '#E4E4E4',
    ink: '#141414',
  },
  logo: {
    src: photo('logo-light.png'),
    alt: 'Demo-Boyz',
    width: 2172,
    height: 724,
  },
  favicon: photo('favicon.png'),
  placeLabel: 'Work in',
  otherPlace: 'Other Okanagan',
  hero: {
    photo: photo('hero-kitchen.jpg'),
    mobilePhoto: photo('hero-kitchen-mobile.jpg'),
    alt: 'Demo-Boyz crew demoing a walnut kitchen, pry bar and saw in hand.',
    kicker: 'Kelowna homeowners',
    line1: 'We gut kitchens.',
    line2: '',
    accent: 'Then we rebuild.',
    objectPosition: '50% 40%',
  },
  secondHero: {
    photo: photo('hero-bath.jpg'),
    mobilePhoto: photo('hero-bath-mobile.jpg'),
    alt: 'Demo-Boyz crew pulling tile in a bathroom.',
    kicker: 'Kelowna homeowners',
    line1: 'We gut bathrooms.',
    accent: 'Then we rebuild.',
  },
  filmLabel: 'The work',
  ownerPanel: {
    photo: photo('crew.jpg'),
    alt: 'The Demo Boyz, arms crossed in a gutted room.',
    kicker: 'The crew',
    title: 'The Demo Boyz.',
    paragraphs: [
      'We are the Demo Boyz. General contracting for houses and commercial work in Kelowna.',
      'Call (250) 681-0511 or email kyle@demo-boyz.com.',
    ],
    callLabel: 'Call the Demo Boyz',
    aboutLabel: 'About us',
  },
  feature: { kicker: 'Still in the studs', title: 'Kitchen, framing, and the rough-in.' },
  faq: {
    kicker: 'Before you call',
    title: 'Ask it straight.',
    items: [
      {
        question: 'Where are you based?',
        answer: 'Kelowna, British Columbia. 302-540 Lawrence Ave, Kelowna, BC V1Y 6L7.',
      },
      {
        question: 'Who do I email?',
        answer: 'kyle@demo-boyz.com.',
      },
      {
        question: 'What number do I call?',
        answer: '(250) 681-0511. That reaches the Demo Boyz.',
      },
      {
        question: 'What work do you take?',
        answer: 'Houses and commercial work. Kitchens, framing, rough-in, bathrooms, and the full renovation.',
      },
    ],
  },
  request: {
    kicker: 'Start here',
    title: 'Tell us the room.',
    intro: 'Kelowna, the job, and a number we can reach. If it is urgent, call (250) 681-0511.',
  },
  serviceFormTitle: 'Tell us the town.',
  serviceFormIntro: 'If it is happening now, call (250) 681-0511. Use the form when it can wait for a reply.',
  servicesIntro: { kicker: 'The work', title: 'Houses, commercial, and the rooms in between.' },
  visit: { kicker: 'On site', title: 'The work we take.' },
  areaFormIntro: 'Call (250) 681-0511 if it is happening now.',
  about: {
    hero: {
      photo: photo('kitchen.jpg'),
      alt: 'Wood kitchen cabinets and a coffered ceiling, mid-renovation.',
      kicker: 'Demo-Boyz · Kelowna',
      line1: 'Demo',
      line2: '',
      accent: 'Boyz.',
      objectPosition: '50% 45%',
    },
    still: {
      photo: photo('crew.jpg'),
      alt: 'The Demo Boyz, arms crossed in a gutted room.',
      label: 'The crew',
      kicker: 'The crew',
      title: 'The Demo Boyz.',
    },
    lede: 'We are a Kelowna general contractor. Houses and commercial work.',
    intro: 'You deal with the Demo Boyz. Call (250) 681-0511 or email kyle@demo-boyz.com. We are at 302-540 Lawrence Ave.',
    points: [
      { title: 'The phone', body: '(250) 681-0511', href: phone.href },
      { title: 'The email', body: 'kyle@demo-boyz.com', href: email.href },
      {
        title: 'The address',
        body: '302-540 Lawrence Ave, Kelowna, BC V1Y 6L7.',
      },
      {
        title: 'The crew',
        body: 'The Demo Boyz. The same crew that opens the walls builds them back.',
      },
    ],
    photoNote: {
      kicker: 'On site',
      title: 'The rooms we open.',
      body: 'Kitchens, framing, rough-in, and the crew on the demo. This is the work.',
    },
  },
  contact: {
    kicker: 'Request service',
    title: 'Tell us the room.',
    paragraphs: [
      'Call the Demo Boyz at (250) 681-0511, or email kyle@demo-boyz.com.',
      'Leave the room and a number. We will call you back.',
    ],
  },
  footer: {
    headline: 'Demo-Boyz. Kelowna.',
    blurb: 'General contracting. Houses, commercial work, kitchens, framing, and rough-in.',
    legal: 'Demo-Boyz. 302-540 Lawrence Ave, Kelowna, BC V1Y 6L7. (250) 681-0511. kyle@demo-boyz.com.',
    servicesLabel: 'Work',
    townsLabel: 'Town',
  },
  form: {
    jobs: [
      { value: 'Residential', title: 'A house', detail: 'A home in Kelowna. Kitchen, walls, or the whole renovation.' },
      { value: 'Commercial', title: 'A commercial space', detail: 'We take commercial work as well as houses.' },
      { value: 'Kitchen', title: 'The kitchen', detail: 'Cabinets, the island, the room with the lake in the windows.' },
      { value: 'Framing', title: 'Walls still open', detail: 'Studs, sheathing, a room taken back to the frame.' },
      { value: 'Rough-in', title: 'Wire and pipe', detail: 'Electrical and plumbing before the drywall.' },
      { value: 'Renovation', title: 'The whole renovation', detail: 'A room taken apart and built back.' },
    ],
    timings: [
      { value: 'Urgent — need assistance now', title: 'Now' },
      { value: 'As soon as available', title: 'This week' },
      { value: 'Planning a future project', title: 'Planning it' },
    ],
    prompts: ["Where's the house?", "What's the room?", 'How do we reach you?'],
    stepLabels: ['Town', 'The job', 'Your number'],
    townNote: 'We are in Kelowna. Say if the house is further out.',
    jobNote: 'Name the room. Kitchen, bath, framing, or the whole renovation.',
    contactNote: 'A first and last name, and a phone that gets answered.',
    nameError: 'Add a last name so the Demo Boyz know who to ask for.',
    notesPlaceholder: 'Which room, and is the work still open?',
    submitLabel: 'Send it to the Demo Boyz',
    successTitle: 'Request received.',
    successBody: 'The Demo Boyz will call you back.',
    messageLead: 'Demo-Boyz request.',
  },
  services: [
    {
      slug: 'residential',
      href: '/residential',
      nav: 'Residential',
      title: 'Residential',
      seoTitle: 'Residential construction in Kelowna',
      description: 'Demo-Boyz builds and renovates houses in Kelowna, from the kitchen to the open walls.',
      eyebrow: 'Houses',
      headline: 'Houses, from the kitchen out.',
      lede: 'We take the whole house. A kitchen on the lake, then the same kind of room taken back to studs.',
      points: [
        { title: 'The house', body: 'Homes in Kelowna, from a single room to the full renovation.' },
        { title: 'The standard', body: 'A lived-in kitchen, and the framing behind it, held to the same line.' },
      ],
      expect: ['Name the house and the room.', 'Leave a number that gets answered.', 'Urgent work: call (250) 681-0511.'],
      photo: photo('residential.jpg'),
      filmLine: 'A Kelowna kitchen, still mid-renovation.',
    },
    {
      slug: 'commercial',
      href: '/commercial',
      nav: 'Commercial',
      title: 'Commercial',
      seoTitle: 'Commercial construction in Kelowna',
      description: 'Demo-Boyz takes commercial construction in Kelowna alongside residential work.',
      eyebrow: 'Commercial',
      headline: 'Commercial, same standard.',
      lede: 'We build commercial and residential. Open walls, wire, and pipe, held to the same line as the house.',
      points: [
        { title: 'The space', body: 'Shops, offices, and commercial rooms in Kelowna.' },
        { title: 'The work', body: 'Open walls, wire, and pipe. The same crew, a different address.' },
      ],
      expect: ['Say what the space is.', 'Say whether the walls are still open.', 'Leave a callback number.'],
      photo: photo('commercial.jpg'),
      filmLine: 'Open walls. Same crew, commercial room.',
    },
    {
      slug: 'kitchens',
      href: '/kitchens',
      nav: 'Kitchens',
      title: 'Kitchens',
      seoTitle: 'Kitchen renovations in Kelowna',
      description: 'Kitchen renovations in Kelowna. Wood cabinets, a coffered ceiling, and the lake in the windows.',
      eyebrow: 'Kelowna',
      headline: 'The kitchen with the lake in the windows.',
      lede: 'We open kitchens and build them back. Wood cabinets, stone tile, a coffered ceiling, and the lake through the glass.',
      points: [
        { title: 'While you live in it', body: 'The kitchen can stay in use while the work is open.' },
        { title: 'What we build', body: 'Coffered ceiling, wood cabinets, stone tile, and the view.' },
      ],
      expect: ['Name the room.', 'We cover Kelowna.', 'Call (250) 681-0511 if it cannot wait.'],
      photo: photo('hero-kitchen.jpg'),
      mobilePhoto: photo('hero-kitchen-mobile.jpg'),
      filmLine: 'Our crew, mid-demo.',
    },
    {
      slug: 'framing',
      href: '/framing',
      nav: 'Framing',
      title: 'Framing',
      seoTitle: 'Framing in Kelowna',
      description: 'Framing in Kelowna. Studs, sheathing, and the ceiling opened before the drywall goes back.',
      eyebrow: 'Kelowna',
      headline: 'The walls are still open.',
      lede: 'We take the room back to studs. Sheathing, plates, and the ceiling grid stay exposed until the frame is right.',
      points: [
        { title: 'The frame', body: 'Studs, OSB, and a ceiling opened for the work.' },
        { title: 'Before the board', body: 'We leave the walls open until the frame, wire, and pipe are done.' },
      ],
      expect: ['Say which room.', 'We call the number you leave.', 'Urgent work: (250) 681-0511.'],
      photo: photo('framing.jpg'),
      filmLine: 'Studs, sheathing, and the ceiling still open.',
    },
    {
      slug: 'rough-in',
      href: '/rough-in',
      nav: 'Rough-in',
      title: 'Rough-in',
      seoTitle: 'Rough-in in Kelowna',
      description: 'Rough-in in Kelowna. Electrical and plumbing in the open walls, before the drywall.',
      eyebrow: 'Kelowna',
      headline: 'Wire and pipe, before the board.',
      lede: 'We run the electrical and the plumbing while the walls are open. Cable, boxes, and lines, before the board goes on.',
      points: [
        { title: 'Electrical', body: 'Cable runs and boxes in the studs.' },
        { title: 'Plumbing', body: 'Lines in the same open wall, before the drywall.' },
      ],
      expect: ['Name the room.', 'Say if the walls are still open.', 'Leave a number that gets answered.'],
      photo: photo('rough.jpg'),
      filmLine: 'Cable, boxes, and pipe in the studs.',
    },
    {
      slug: 'renovations',
      href: '/renovations',
      nav: 'Renovations',
      title: 'Renovations',
      seoTitle: 'Renovations in Kelowna',
      description: 'Renovations in Kelowna. A room taken back to studs, then built back.',
      eyebrow: 'The whole room',
      headline: 'Taken apart. Built back.',
      lede: 'We take the room apart and build it back. Open studs on one visit. The kitchen in use on the next.',
      points: [
        { title: 'Before the board', body: 'Studs, sheathing, wire, and pipe.' },
        { title: 'The room in use', body: 'Wood cabinets, stone tile, coffered ceiling, lake in the glass.' },
      ],
      expect: ['Name the room.', 'Say how far along it is.', 'We call the number you leave.'],
      photo: photo('renovation.jpg'),
      filmLine: 'The same renovation, from the studs to the kitchen.',
    },
  ],
  areas: [
    {
      slug: 'kelowna',
      href: '/service-areas/kelowna',
      name: 'Kelowna',
      seoTitle: 'Demo-Boyz in Kelowna',
      description: 'Demo-Boyz is based in Kelowna, British Columbia, at 302-540 Lawrence Ave.',
      headline: 'Kelowna. Our town.',
      lede: 'We are based in Kelowna. 302-540 Lawrence Ave, V1Y 6L7.',
      body: [
        'Houses and commercial rooms across the city, including the ones that look out at the lake.',
        'Call (250) 681-0511.',
      ],
      jobs: ['Residential', 'Commercial', 'Kitchens', 'Framing', 'Rough-in', 'Renovations'],
      photo: photo('visit.jpg'),
    },
  ],
};

export function service(slug: string) {
  return site.services.find((item) => item.slug === slug);
}

export function area(slug: string) {
  return site.areas.find((item) => item.slug === slug);
}
