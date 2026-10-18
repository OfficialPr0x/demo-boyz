import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://demo-boyz.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/services', '/about', '/contact', ...site.services.map((item) => item.href), ...site.areas.map((item) => item.href)];
  return paths.map((item) => ({
    url: `${origin}${item || '/'}`,
    changeFrequency: 'monthly',
    priority: item === '' ? 1 : 0.7,
  }));
}
