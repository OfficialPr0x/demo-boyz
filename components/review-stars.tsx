export function ReviewStars({
  rating,
  label,
  size = 'md',
}: {
  rating: number;
  label: string;
  size?: 'md' | 'lg';
}) {
  const value = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <p className={`db-stars db-stars-${size}`} aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true" className={index < value ? 'is-on' : undefined}>
          <path d="M10 1.4 12.2 6.5l5.5.6-4.1 3.8 1.2 5.4L10 13.6 5.2 16.3 6.4 10.9 2.3 7.1l5.5-.6L10 1.4Z" />
        </svg>
      ))}
    </p>
  );
}
