import type { Metadata } from 'next';
import { DemoBoyzServicesIndex } from '@/components/pages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work',
  description: site.servicesIntro.title,
};

export default function Page() {
  return <DemoBoyzServicesIndex site={site} />;
}
