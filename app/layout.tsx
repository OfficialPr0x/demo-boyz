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
    title: 'Demo-Boyz · General contracting in Kelowna',
    description: 'Houses and commercial work in Kelowna. Kitchens, framing, rough-in, and renovations. Call (250) 681-0511.',
    url: siteUrl,
    siteName: 'Demo-Boyz',
    images: [{ url: '/share.png', width: 1200, height: 630, alt: 'Demo-Boyz. Houses and commercial work in Kelowna. Call (250) 681-0511.' }],
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
