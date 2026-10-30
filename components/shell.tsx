import './db.css';

import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Big_Shoulders, Outfit } from 'next/font/google';
import { DemoBoyzCall, PhoneText } from '@/components/actions';
import { DemoBoyzMenu } from '@/components/menu';
import { path } from '@/lib/paths';
import { site } from '@/lib/site';

const display = Big_Shoulders({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-db-display',
  display: 'swap',
});

const sans = Outfit({
  subsets: ['latin'],
  variable: '--font-db-sans',
  display: 'swap',
});

export function Shell({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.brand,
    description: site.tagline,
    telephone: site.phone.href.replace('tel:', ''),
    email: site.email.display,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '302-540 Lawrence Ave',
      addressLocality: 'Kelowna',
      addressRegion: 'BC',
      postalCode: 'V1Y 6L7',
      addressCountry: 'CA',
    },
    areaServed: 'Kelowna',
  };

  return (
    <div className={`db ${display.variable} ${sans.variable}`}>
      <a className="db-skip" href="#content">
        Skip to content
      </a>
      <header className="db-nav">
        <Link href={path()} aria-label={site.brand}>
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            priority
            className="db-logo"
          />
        </Link>
        <nav className="db-nav-links" aria-label="Primary">
          <Link href={path('/services')}>Work</Link>
          <Link href={path('/about')}>About</Link>
          <Link href={path('/service-areas/kelowna')}>Kelowna</Link>
          <Link href={path('/contact')}>Request</Link>
        </nav>
        <DemoBoyzCall phone={site.phone} />
        <DemoBoyzMenu
          phone={site.phone}
          work={site.services.map((service) => ({ href: path(service.href), label: service.nav }))}
          pages={[
            { href: path('/about'), label: 'About' },
            { href: path('/service-areas/kelowna'), label: 'Kelowna' },
            { href: path('/contact'), label: 'Request' },
          ]}
        />
      </header>
      <main id="content">{children}</main>
      <footer className="db-wrap db-foot">
        <div>
          <Image src={site.logo.src} alt="" width={site.logo.width} height={site.logo.height} className="db-logo" />
          <h2>{site.footer.headline}</h2>
          <p>{site.footer.blurb}</p>
        </div>
        <div>
          <p className="db-kicker">{site.footer.servicesLabel}</p>
          {site.services.map((service) => (
            <Link key={service.slug} href={path(service.href)}>
              {service.nav}
            </Link>
          ))}
        </div>
        <div>
          <p className="db-kicker">Reach</p>
          <a className="db-tap" href={site.phone.href}>
            {site.phone.display}
          </a>
          <a href={site.email.href}>{site.email.display}</a>
          <Link href={path('/contact')}>Request service</Link>
        </div>
        <p className="db-legal">
          <PhoneText text={site.footer.legal} phone={site.phone} />
        </p>
      </footer>
      <div className="db-mobar">
        <a href={site.phone.href}>Call</a>
        <Link href={path('/contact')}>Request</Link>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
