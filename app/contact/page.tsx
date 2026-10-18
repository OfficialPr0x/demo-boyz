import type { Metadata } from 'next';
import { DemoBoyzContact } from '@/components/pages';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request',
  description: site.contact.title,
};

export default function Page() {
  return <DemoBoyzContact site={site} />;
}
