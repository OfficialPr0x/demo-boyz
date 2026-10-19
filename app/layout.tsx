import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Shell } from '@/components/shell';
import { site } from '@/lib/site';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://demo-boyz.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Demo-Boyz · Kelowna',
    template: '%s · Demo-Boyz',
  },
  description: site.tagline,
  icons: { icon: site.favicon, apple: site.favicon },
  openGraph: {
    title: 'Demo-Boyz · Demolition in Kelowna',
    description: 'Demolition, selective deconstruction, flooring removal, and certified abatement in Kelowna. Call 250 899 - BOYZ.',
    url: siteUrl,
    siteName: 'Demo-Boyz',
    images: [{ url: '/share.png', width: 1200, height: 630, alt: 'Demo-Boyz. Demolition in Kelowna. Call 250 899 - BOYZ.' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
