import type { Metadata } from 'next';
import { DemoBoyzAbout } from '@/components/pages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: site.about.lede,
};

export default function Page() {
  return <DemoBoyzAbout site={site} />;
}
