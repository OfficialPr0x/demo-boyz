import Link from 'next/link';

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
