import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DemoBoyzServicePage } from '@/components/pages';
import { service, site } from '@/lib/site';

export function generateStaticParams() {
  return site.services.map((item) => ({ page: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const item = service(page);
  if (!item) return {};
  return { title: item.seoTitle, description: item.description };
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const item = service(page);
  if (!item) notFound();
  return <DemoBoyzServicePage site={site} service={item} />;
}
