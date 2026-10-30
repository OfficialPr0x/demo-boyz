import Link from 'next/link';

export function PhoneText({
  text,
  phone,
}: {
  text: string;
  phone: { display: string; href: string };
}) {
  const parts = text.split(phone.display);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 ? (
        <a className="db-tap" href={phone.href}>
          {phone.display}
        </a>
      ) : null}
    </span>
  ));
}

export function DemoBoyzCall({
  phone,
  label = 'Call',
}: {
  phone: { display: string; button: string; href: string };
  label?: string;
}) {
  return (
    <a className="db-call" href={phone.href}>
      <em>{label}</em>
      <strong>{phone.button}</strong>
    </a>
  );
}

export function DemoBoyzActions({
  phone,
  requestHref,
}: {
  phone: { display: string; button: string; href: string };
  requestHref: string;
}) {
  return (
    <div className="db-actions">
      <DemoBoyzCall phone={phone} />
      <Link className="db-btn db-btn-line" href={requestHref}>
        Request
      </Link>
    </div>
  );
}
