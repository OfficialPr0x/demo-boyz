'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Item = { href: string; label: string };

function Row({
  item,
  index,
  current,
  onNavigate,
}: {
  item: Item;
  index: number;
  current: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      className="db-menu-row"
      aria-current={current ? 'page' : undefined}
      style={{ animationDelay: `${80 + index * 45}ms` }}
      onClick={onNavigate}
    >
      <em aria-hidden="true">{String(index + 1).padStart(2, '0')}</em>
      <strong>{item.label}</strong>
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function DemoBoyzMenu({
  work,
  pages,
  phone,
}: {
  work: readonly Item[];
  pages: readonly Item[];
  phone: { display: string; button: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    document.querySelector('.db')?.toggleAttribute('data-menu', open);
    return () => {
      document.body.style.overflow = '';
      document.querySelector('.db')?.removeAttribute('data-menu');
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="db-burger-btn"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="db-burger" data-open={open} />
      </button>
      <div className="db-overlay" data-open={open} hidden={!open}>
        <nav aria-label="Menu">
          <p className="db-kicker">Menu</p>
          <p className="db-menu-title">Where to go</p>
          <p className="db-menu-label">Work</p>
          <div className="db-menu-group">
            {work.map((item, index) => (
              <Row key={item.href} item={item} index={index} current={pathname === item.href} onNavigate={close} />
            ))}
          </div>
          <p className="db-menu-label">Company</p>
          <div className="db-menu-group">
            {pages.map((item, index) => (
              <Row
                key={item.href}
                item={item}
                index={work.length + index}
                current={pathname === item.href}
                onNavigate={close}
              />
            ))}
          </div>
          <a className="db-menu-call" href={phone.href} onClick={close}>
            <em>Call</em>
            <strong>{phone.button}</strong>
          </a>
        </nav>
      </div>
    </>
  );
}
