import type { Metadata } from 'next';
import { DemoBoyzHome } from '@/components/home';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Demo-Boyz · Kelowna',
  description: site.tagline,
};

export default function Page() {
  return <DemoBoyzHome site={site} />;
}
