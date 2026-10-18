import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DemoBoyzAreaPage } from '@/components/pages';
import { area, site } from '@/lib/site';

export function generateStaticParams() {
  return site.areas.map((item) => ({ city: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const item = area(city);
  if (!item) return {};
  return { title: item.seoTitle, description: item.description };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const item = area(city);
  if (!item) notFound();
  return <DemoBoyzAreaPage site={site} area={item} />;
}
