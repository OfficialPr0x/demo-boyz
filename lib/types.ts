export interface PosterTheme {
  navy: string;
  lake: string;
  cyan: string;
  mist: string;
  slate: string;
  muted: string;
  line: string;
  ink: string;
}

export interface PosterService {
  slug: string;
  href: string;
  nav: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  lede: string;
  points: readonly { title: string; body: string }[];
  expect: readonly string[];
  photo: string;
  /** Tall frame for the service hero on a phone. */
  mobilePhoto?: string;
  /** Caption on the homepage film. Omit to keep the service off that row. */
  filmLine?: string;
  /** Caption on the homepage pair. Omit to keep the service off that row. */
  pairLine?: string;
}

export interface PosterArea {
  slug: string;
  href: string;
  name: string;
  seoTitle: string;
  description: string;
  headline: string;
  lede: string;
  body: readonly string[];
  jobs: readonly string[];
  photo: string;
}

export interface PosterChoice {
  value: string;
  title: string;
  detail?: string;
}

export interface PosterSite {
  slug: string;
  brand: string;
  owner: string;
  tagline: string;
  city: string;
  province: string;
  region: string;
  industry: string;
  website?: string;
  phone: { display: string; href: string };
  email: { display: string; href: string };
  theme: PosterTheme;
  logo: { src: string; alt: string; width: number; height: number };
  /** Square mark for the browser tab. */
  favicon?: string;
  /** Small label on town photos, e.g. "Plumber in". */
  placeLabel: string;
  /** Extra town radio when the house is outside the named list. */
  otherPlace: string;
  services: readonly PosterService[];
  areas: readonly PosterArea[];
  hero: {
    photo: string;
    alt: string;
    kicker: string;
    line1: string;
    /** Text before the cyan word on the second line. Include the trailing space. */
    line2: string;
    accent: string;
    objectPosition?: string;
    /** Tall frame when the hero is a phone screen. */
    mobilePhoto?: string;
  };
  /** Second full-bleed frame under the first hero. */
  secondHero?: {
    photo: string;
    mobilePhoto?: string;
    alt: string;
    kicker: string;
    line1: string;
    accent: string;
  };
  filmLabel: string;
  ownerPanel: {
    photo: string;
    alt: string;
    kicker: string;
    title: string;
    paragraphs: readonly string[];
    callLabel: string;
    aboutLabel: string;
  };
  feature: { kicker: string; title: string };
  faq: { kicker: string; title: string; items: readonly { question: string; answer: string }[] };
  request: { kicker: string; title: string; intro: string };
  /** Headline beside the form on a service page. */
  serviceFormTitle: string;
  serviceFormIntro: string;
  servicesIntro: { kicker: string; title: string };
  visit: { kicker: string; title: string };
  areaFormIntro: string;
  about: {
    hero: {
      photo: string;
      alt: string;
      kicker: string;
      line1: string;
      line2: string;
      accent: string;
      objectPosition?: string;
    };
    still: { photo: string; alt: string; label: string; kicker: string; title: string };
    lede: string;
    intro: string;
    points: readonly { title: string; body: string; href?: string }[];
    photoNote: { kicker: string; title: string; body: string };
  };
  contact: { kicker: string; title: string; paragraphs: readonly string[] };
  footer: { headline: string; blurb: string; legal: string; servicesLabel: string; townsLabel: string };
  form: {
    jobs: readonly PosterChoice[];
    timings: readonly PosterChoice[];
    prompts: readonly [string, string, string];
    stepLabels: readonly [string, string, string];
    townNote: string;
    jobNote: string;
    contactNote: string;
    nameError: string;
    notesPlaceholder: string;
    submitLabel: string;
    successTitle: string;
    successBody: string;
    messageLead: string;
  };
}
