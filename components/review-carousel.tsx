'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import type { GoogleReview } from '@/lib/google-reviews';
import { GoogleMark } from '@/components/google-mark';
import { ReviewStars } from '@/components/review-stars';

const avatarColors = ['#1a73e8', '#d93025', '#f9ab00', '#188038', '#9334e6', '#e37400', '#129eaf', '#a142f4'];

function initials(author: string) {
  return author
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? '')
    .join('')
    .toUpperCase();
}

function avatarColor(author: string) {
  const total = [...author].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return avatarColors[total % avatarColors.length];
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ReviewCarousel({ reviews }: { reviews: readonly GoogleReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const helpId = useId();
  const [pager, setPager] = useState({
    canPrev: false,
    canNext: reviews.length > 1,
    label: `${reviews.length} reviews`,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function sync() {
      const node = trackRef.current;
      if (!node) return;
      const cards = [...node.querySelectorAll<HTMLElement>('[data-review-card]')];
      const last = cards[cards.length - 1];
      const visible = cards
        .map((card, index) => {
          const shown = Math.min(card.offsetLeft + card.offsetWidth, node.scrollLeft + node.clientWidth) - Math.max(card.offsetLeft, node.scrollLeft);
          return shown > card.offsetWidth * 0.55 ? index + 1 : 0;
        })
        .filter((index) => index > 0);
      const first = visible[0] ?? 1;
      const end = visible[visible.length - 1] ?? first;
      const lastVisible = last ? last.offsetLeft + last.offsetWidth <= node.scrollLeft + node.clientWidth + 2 : true;
      const label = cards.length === 0 ? 'No reviews' : first === end ? `Review ${first} of ${cards.length}` : `Reviews ${first}–${end} of ${cards.length}`;
      const canPrev = node.scrollLeft > 2;
      const canNext = !lastVisible;
      setPager((current) =>
        current.canPrev === canPrev && current.canNext === canNext && current.label === label
          ? current
          : { canPrev, canNext, label },
      );
    }

    sync();
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      track.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [reviews]);

  function scrollByCard(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const cards = [...track.querySelectorAll<HTMLElement>('[data-review-card]')];
    if (cards.length === 0) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    const visible = Math.max(1, Math.round((track.clientWidth + gap) / (cards[0].offsetWidth + gap)));
    const maxIndex = Math.max(0, cards.length - visible);
    let current = 0;
    let nearest = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const delta = Math.abs(card.offsetLeft - track.scrollLeft);
      if (delta < nearest) {
        nearest = delta;
        current = index;
      }
    });
    const next = Math.max(0, Math.min(maxIndex, current + direction));
    track.scrollTo({
      left: cards[next].offsetLeft,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollByCard(1);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByCard(-1);
    }
  }

  return (
    <div className="db-reviews-carousel" role="region" aria-roledescription="carousel" aria-label="Customer reviews from Google">
      <div className="db-reviews-bar">
        <p className="db-reviews-status" aria-live="polite">
          {pager.label}
        </p>
        <div className="db-reviews-nav">
          <button type="button" className="db-reviews-arrow" aria-label="Previous reviews" disabled={!pager.canPrev} onClick={() => scrollByCard(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5 8 12l6.5 6.5" />
            </svg>
          </button>
          <button type="button" className="db-reviews-arrow" aria-label="Next reviews" disabled={!pager.canNext} onClick={() => scrollByCard(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5 16 12l-6.5 6.5" />
            </svg>
          </button>
        </div>
      </div>
      <p id={helpId} className="db-sr">
        Swipe sideways, or use the previous and next buttons. When this list is focused, the left and right arrow keys move between reviews.
      </p>
      <div
        ref={trackRef}
        id="google-review-track"
        className="db-reviews-track"
        tabIndex={0}
        aria-describedby={helpId}
        onKeyDown={onKeyDown}
      >
        {reviews.map((review) => (
          <article key={review.id} data-review-card className="db-review-card" aria-labelledby={`review-${review.id}-name`}>
            <header className="db-review-top">
              <span className="db-review-avatar" style={{ background: avatarColor(review.author) }} aria-hidden="true">
                {initials(review.author)}
              </span>
              <div className="db-review-who">
                <p id={`review-${review.id}-name`} className="db-review-name">
                  {review.author}
                </p>
                <div className="db-review-meta">
                  <ReviewStars rating={review.rating} label={`${review.rating} out of 5 stars`} />
                  <time className="db-review-date">{review.relativeDate}</time>
                </div>
              </div>
              <a className="db-review-google" href={review.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${review.author} on Google`}>
                <GoogleMark />
                <span className="db-sr"> (opens in a new tab)</span>
              </a>
            </header>
            <blockquote className="db-review-quote">
              <p>{review.text}</p>
            </blockquote>
            {review.fullTextAvailable ? null : (
              <p className="db-review-excerpt">
                Google Maps excerpt.{' '}
                <a href={review.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Read on Google
                  <span className="db-sr"> (opens in a new tab)</span>
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
