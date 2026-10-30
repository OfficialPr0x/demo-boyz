/**
 * Manually collected Google Maps reviews for Demo-Boyz in Kelowna.
 * Excerpt records are collapsed Maps snippets. Do not write the missing text.
 * Dates stay relative. Do not invent publication timestamps.
 * This is not a live Google Business Profile aggregate.
 */

export const GOOGLE_MAPS_LISTING_URL =
  'https://www.google.com/maps/place/Demo-Boyz/@49.9399414,-119.4907534,257096m/data=!3m1!1e3!4m8!3m7!1s0x896121c0d617a277:0x27e9ea72dc67ac23!8m2!3d49.9399414!4d-119.4907534!9m1!1b1!16s%2Fg%2F11yqdzvsjw';

export type GoogleReview = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  relativeDate: string;
  fullTextAvailable: boolean;
  source: 'Google';
  mapsUrl: string;
};

const mapsUrl = GOOGLE_MAPS_LISTING_URL;

export const googleReviews = [
  {
    id: 'jerrica-knight',
    author: 'Jerrica Knight',
    rating: 5,
    text: 'This team provided exceptional service from start to finish. They were professional, punctual, and handled the demolition with great efficiency and a high regard for safety. I was particularly impressed with their cleanup process !! they …',
    relativeDate: '5 months ago',
    fullTextAvailable: false,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'shawny-sutherland',
    author: 'Shawny Sutherland',
    rating: 5,
    text: 'Professional\nHard working\nAttention to detail …',
    relativeDate: '4 months ago',
    fullTextAvailable: false,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'cody-wiebe',
    author: 'Cody Wiebe',
    rating: 5,
    text: 'We had a great experience with Demo-Boyz! They did a full demolition of my parents’ entire upstairs, and the job was done efficiently and professionally. They were respectful of the home, kept things as clean as possible, and communicated well throughout the process. Highly recommend their services!',
    relativeDate: '9 months ago',
    fullTextAvailable: true,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'ryley-lawn',
    author: 'Ryley Lawn',
    rating: 5,
    text: 'Professional, efficient, and easy to work with. The job was completed safely and on schedule. Communication was great and expectations were met. Highly recommend.',
    relativeDate: '10 months ago',
    fullTextAvailable: true,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'todd-nelsen',
    author: 'Todd Nelsen',
    rating: 5,
    text: 'The Demo Boyz make demolition - in my case a fireplace surround and entire kitchen /pantry - quick, clean and as quiet as possible. It was a very good customer experience. Their preparation exceeded expectations - floor protection, plastic …',
    relativeDate: '5 months ago',
    fullTextAvailable: false,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'bree-bb',
    author: 'Bree BB',
    rating: 5,
    text: 'Got my kitchen demo’d by them and I couldn’t be more happy. They came in gave me a good quote, got the job done efficiently and definitely well done. Already booking them for another job I need done.',
    relativeDate: '9 months ago',
    fullTextAvailable: true,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'grace-prescott',
    author: 'Grace Prescott',
    rating: 5,
    text: 'Very professional and reliable. 100% recommend.',
    relativeDate: '10 months ago',
    fullTextAvailable: true,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'adam-foyle',
    author: 'adam foyle',
    rating: 5,
    text: "These guys are awesome. You won't regret hiring them. They came to my house and completely gutted my basement. They worked clean, fast, and safe. Somehow the two of them were able to do the work of about 6 guys. They literally did a two …",
    relativeDate: '2 weeks ago',
    fullTextAvailable: false,
    source: 'Google',
    mapsUrl,
  },
  {
    id: 'cathy-fedorchuk',
    author: 'Cathy Fedorchuk',
    rating: 5,
    text: 'Fantastic, cleaned up each day, did last minute things asked of them. Fast and trust worthy. We would highly recommend the Demo Boyz.',
    relativeDate: 'Edited a month ago',
    fullTextAvailable: true,
    source: 'Google',
    mapsUrl,
  },
] satisfies GoogleReview[];

const leadIds = ['cody-wiebe', 'bree-bb', 'ryley-lawn', 'cathy-fedorchuk'] as const;

/** Full, specific reviews first, then any other complete reviews, then excerpts. */
export function orderedGoogleReviews(reviews: readonly GoogleReview[] = googleReviews) {
  const lead = leadIds.flatMap((id) => {
    const review = reviews.find((item) => item.id === id);
    return review ? [review] : [];
  });
  const rest = reviews.filter((review) => !leadIds.some((id) => id === review.id));
  return [
    ...lead,
    ...rest.filter((review) => review.fullTextAvailable),
    ...rest.filter((review) => !review.fullTextAvailable),
  ];
}

export function googleReviewSummary(reviews: readonly GoogleReview[] = googleReviews) {
  const count = reviews.length;
  const average = count === 0 ? 0 : reviews.reduce((total, review) => total + review.rating, 0) / count;
  return {
    count,
    average,
    label: `${average.toFixed(1)} / 5.0`,
    note: `Based on ${count} review${count === 1 ? '' : 's'}`,
  };
}
