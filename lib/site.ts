import type { PosterSite } from '@/lib/types';

/**
 * Demo-Boyz poster. Facts from the Facebook page captured into Studio
 * prospect 712b003f-0de1-4ae8-a73c-34c24e310f2a on 15 Oct 2026.
 * Photos are the rooms that page posted.
 * Google reviews live in lib/google-reviews.ts. They are manually collected, not a live profile score.
 */
const photo = (name: string) => `/${name}`;

const phone = { display: '250 899 - BOYZ', button: '250 899 - BOYZ', href: 'tel:+12508992699' };
const email = { display: 'kyle@demo-boyz.com', href: 'mailto:kyle@demo-boyz.com' };

export const site: PosterSite = {
  slug: 'demo-boyz',
  brand: 'Demo-Boyz',
  owner: 'Kyle',
  tagline: 'Demolition in Kelowna. Interior, exterior, and taking houses down.',
  city: 'Kelowna',
  province: 'BC',
  region: 'Kelowna',
  industry: 'Demolition',
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
    photo: photo('hero-kitchen-demo.png'),
    mobilePhoto: photo('hero-kitchen-demo.png'),
    alt: 'Demo-Boyz crew gutting a kitchen, pry bar in hand and drywall coming off the wall.',
    kicker: 'Kelowna homeowners',
    line1: 'We gut kitchens.',
    line2: '',
    accent: "We don't rebuild.",
    objectPosition: '50% 40%',
  },
  secondHero: {
    photo: photo('hero-bath-demo.png'),
    mobilePhoto: photo('hero-bath-demo.png'),
    alt: 'Demo-Boyz crew stripping tile and drywall in a bathroom.',
    kicker: 'Kelowna homeowners',
    line1: 'We gut bathrooms.',
    accent: "We don't rebuild.",
  },
  filmLabel: 'The work',
  ownerPanel: {
    photo: photo('founders-studio.png'),
    alt: 'The Demo Boyz, arms crossed in front of the studio logo.',
    kicker: 'The crew',
    title: 'The Demo Boyz.',
    paragraphs: [
      'We are the Demo Boyz. Demolition in Kelowna. We take it apart. We do not build it back.',
      'Call 250 899 - BOYZ or email kyle@demo-boyz.com.',
    ],
    callLabel: 'Call the Demo Boyz',
    aboutLabel: 'About us',
  },
  feature: { kicker: 'The work', title: 'Demo. Not the finish.' },
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
        answer: '250 899 - BOYZ. That reaches the Demo Boyz.',
      },
      {
        question: 'What work do you take?',
        answer:
          'Demolition, inside and out, including taking a house down. Selective deconstruction. Flooring removal. Certified abatement. If it has to come out, we do it.',
      },
      {
        question: 'Do you build it back?',
        answer: 'No. We do not build, and we do not do finishing work.',
      },
    ],
  },
  request: {
    kicker: 'Start here',
    title: 'Tell us what comes out.',
    intro: 'Kelowna, the job, and a number we can reach. If it is urgent, call 250 899 - BOYZ.',
  },
  serviceFormTitle: 'Tell us the town.',
  serviceFormIntro: 'If it is happening now, call 250 899 - BOYZ. Use the form when it can wait for a reply.',
  servicesIntro: { kicker: 'The work', title: 'We take it out. We do not finish it.' },
  visit: { kicker: 'On site', title: 'The work we take.' },
  areaFormIntro: 'Call 250 899 - BOYZ if it is happening now.',
  about: {
    hero: {
      photo: photo('kitchen.jpg'),
      alt: 'A Kelowna kitchen opened up, before anyone builds it back.',
      kicker: 'Demo-Boyz · Kelowna',
      line1: 'Demo',
      line2: '',
      accent: 'Boyz.',
      objectPosition: '50% 45%',
    },
    still: {
      photo: photo('founders-studio.png'),
      alt: 'The Demo Boyz, arms crossed in front of the studio logo.',
      label: 'The crew',
      kicker: 'The crew',
      title: 'The Demo Boyz.',
    },
    lede: 'We are a Kelowna demolition crew. Interior, exterior, and the whole house.',
    intro: 'You deal with the Demo Boyz. Call 250 899 - BOYZ or email kyle@demo-boyz.com. We are at 302-540 Lawrence Ave.',
    points: [
      { title: 'The phone', body: '250 899 - BOYZ', href: phone.href },
      { title: 'The email', body: 'kyle@demo-boyz.com', href: email.href },
      {
        title: 'The address',
        body: '302-540 Lawrence Ave, Kelowna, BC V1Y 6L7.',
      },
      {
        title: 'The crew',
        body: 'The Demo Boyz. We take the room apart and stop there.',
      },
    ],
    photoNote: {
      kicker: 'On site',
      title: 'The rooms we open.',
      body: 'Interior demo, floors coming up, and the openings we seal. This is the work.',
    },
  },
  contact: {
    kicker: 'Request service',
    title: 'Tell us what comes out.',
    paragraphs: [
      'Call the Demo Boyz at 250 899 - BOYZ, or email kyle@demo-boyz.com.',
      'Leave the room and a number. We will call you back.',
    ],
  },
  footer: {
    headline: 'Demo-Boyz. Kelowna.',
    blurb: 'Demolition, selective deconstruction, flooring removal, and certified abatement. Not building or finishing.',
    legal: 'Demo-Boyz. 302-540 Lawrence Ave, Kelowna, BC V1Y 6L7. 250 899 - BOYZ. kyle@demo-boyz.com.',
    servicesLabel: 'Work',
    townsLabel: 'Town',
  },
  form: {
    jobs: [
      { value: 'Demolition', title: 'Demolition', detail: 'Interior, exterior, or the house coming down.' },
      { value: 'Selective deconstruction', title: 'Selective deconstruction', detail: 'Take out what goes. Leave what stays.' },
      { value: 'Flooring removal', title: 'Flooring removal', detail: 'Tile, carpet, or the floor coming up. Not the new floor.' },
      { value: 'Abatement', title: 'Abatement', detail: 'Certified abatement, with the demo.' },
    ],
    timings: [
      { value: 'Urgent — need assistance now', title: 'Now' },
      { value: 'As soon as available', title: 'This week' },
      { value: 'Planning a future project', title: 'Planning it' },
    ],
    prompts: ["Where's the house?", 'What comes out?', 'How do we reach you?'],
    stepLabels: ['Town', 'The job', 'Your number'],
    townNote: 'We are in Kelowna. Say if the house is further out.',
    jobNote: 'Demolition, selective deconstruction, flooring removal, or abatement.',
    contactNote: 'A first and last name, and a phone that gets answered.',
    nameError: 'Add a last name so the Demo Boyz know who to ask for.',
    notesPlaceholder: 'What has to come out, and what stays?',
    submitLabel: 'Send it to the Demo Boyz',
    successTitle: 'Request received.',
    successBody: 'The Demo Boyz will call you back.',
    messageLead: 'Demo-Boyz request.',
  },
  services: [
    {
      slug: 'demolition',
      href: '/demolition',
      nav: 'Demolition',
      title: 'Demolition',
      seoTitle: 'Demolition in Kelowna',
      description: 'Interior demolition, exterior demolition, and taking houses down in Kelowna. Demo-Boyz does not build or finish.',
      eyebrow: 'Interior and exterior',
      headline: 'Interior, exterior, or the whole house.',
      lede: 'We gut rooms, strip the outside, or take the house down. We stop before the build and the finish.',
      points: [
        { title: 'Interior', body: 'Kitchens, bathrooms, and the rooms between. Taken apart, not rebuilt.' },
        { title: 'Exterior and the house', body: 'The outside, and taking the whole house down.' },
      ],
      expect: ['Say what has to come out.', 'Leave a number that gets answered.', 'Urgent work: call 250 899 - BOYZ.'],
      photo: photo('hero-kitchen.jpg'),
      mobilePhoto: photo('hero-kitchen-mobile.jpg'),
      filmLine: 'Interior demo. Pry bar and saw.',
    },
    {
      slug: 'selective-deconstruction',
      href: '/selective-deconstruction',
      nav: 'Selective deconstruction',
      title: 'Selective deconstruction',
      seoTitle: 'Selective deconstruction in Kelowna',
      description: 'Selective deconstruction in Kelowna. We take out what goes and leave what stays.',
      eyebrow: 'What stays',
      headline: 'Take out what goes. Leave what stays.',
      lede: 'Selective deconstruction is the careful tear-out. The rest of the house stays standing.',
      points: [
        { title: 'What goes', body: 'The room, the wall, or the piece that has to come out.' },
        { title: 'What stays', body: 'We work around the structure and the finishes you are keeping.' },
      ],
      expect: ['Say what comes out and what stays.', 'We cover Kelowna.', 'Call 250 899 - BOYZ if it cannot wait.'],
      photo: photo('open-room.jpg'),
      filmLine: 'One room opened. The rest left standing.',
    },
    {
      slug: 'flooring-removal',
      href: '/flooring-removal',
      nav: 'Flooring removal',
      title: 'Flooring removal',
      seoTitle: 'Flooring removal in Kelowna',
      description: 'Flooring removal in Kelowna. Tile, carpet, and the floor taken up. Not the new floor.',
      eyebrow: 'Floors',
      headline: 'The floor comes up.',
      lede: 'We pull tile, carpet, and the floor that is coming out. We do not lay the new one.',
      points: [
        { title: 'What we pull', body: 'Tile, carpet, hardwood, and the underlayment that has to go.' },
        { title: 'Where we stop', body: 'The subfloor. Installing the new floor is not our work.' },
      ],
      expect: ['Name the floor that is coming up.', 'Say what stays underneath.', 'Urgent work: 250 899 - BOYZ.'],
      photo: photo('hero-bath.jpg'),
      mobilePhoto: photo('hero-bath-mobile.jpg'),
      filmLine: 'Tile coming up.',
    },
    {
      slug: 'abatement',
      href: '/abatement',
      nav: 'Abatement',
      title: 'Abatement',
      seoTitle: 'Certified abatement in Kelowna',
      description: 'Demo-Boyz is certified for abatement in Kelowna.',
      eyebrow: 'Certified',
      headline: 'Certified for abatement.',
      lede: 'We are certified for abatement. Containment and removal, done with the demo.',
      points: [
        { title: 'Certified', body: 'Abatement is part of the work, not a side note.' },
        { title: 'With the demo', body: 'Interior, exterior, and the rooms that have to come out under containment.' },
      ],
      expect: ['Say what has to be abated.', 'Say what else is coming out.', 'Leave a number that gets answered.'],
      photo: photo('wrapped-door.jpg'),
      filmLine: 'The opening sealed for the work.',
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
        'Demolition across the city. Interior, exterior, and taking houses down.',
        'Call 250 899 - BOYZ.',
      ],
      jobs: ['Demolition', 'Selective deconstruction', 'Flooring removal', 'Abatement'],
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
