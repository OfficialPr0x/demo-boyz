import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { GoogleMark } from '@/components/google-mark';
import { ReviewCarousel } from '@/components/review-carousel';
import { ReviewStars } from '@/components/review-stars';
import { Reveal } from '@/components/reveal';
import { GOOGLE_MAPS_LISTING_URL, googleReviewSummary, orderedGoogleReviews } from '@/lib/google-reviews';

const googleText = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export function ReviewsSection({ quoteHref }: { quoteHref: string }) {
  const reviews = orderedGoogleReviews();
  const summary = googleReviewSummary();
  if (reviews.length === 0) return null;

  return (
    <section className="db-section db-reviews" id="google-reviews" aria-labelledby="google-reviews-heading">
      <div className="db-wrap">
        <Reveal>
          <p className="db-kicker">From Google Maps</p>
          <h2 id="google-reviews-heading">Don&apos;t Just Take Our Word For It.</h2>
          <p className="db-reviews-lede">Real homeowners. Real demolition projects. Real 5-star experiences.</p>
        </Reveal>

        <div className={`db-reviews-sheet ${googleText.className}`}>
          <div className="db-reviews-score">
            <GoogleMark size={40} />
            <div className="db-reviews-score-copy">
              <p className="db-reviews-score-value" aria-hidden="true">
                {summary.average.toFixed(1)}
              </p>
              <ReviewStars rating={summary.average} size="lg" label={`${summary.average.toFixed(1)} out of 5 stars`} />
              <p className="db-reviews-score-note">{summary.note}</p>
            </div>
            <a className="db-g-link" href={GOOGLE_MAPS_LISTING_URL} target="_blank" rel="noopener noreferrer">
              See all reviews on Google
              <span className="db-sr"> (opens in a new tab)</span>
            </a>
          </div>

          <ReviewCarousel reviews={reviews} />
        </div>

        <div className="db-reviews-cta">
          <h3>Ready To Be Our Next 5-Star Review?</h3>
          <p>From kitchens to full interior demolition, the Demo-Boyz bring the professionalism, precision, and cleanup our customers count on.</p>
          <div className="db-actions">
            <Link className="db-btn" href={quoteHref}>
              Get Your Free Demolition Quote
            </Link>
            <a className="db-btn db-btn-line" href={GOOGLE_MAPS_LISTING_URL} target="_blank" rel="noopener noreferrer">
              Read Our Google Reviews
              <span className="db-sr"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
