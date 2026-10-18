import type { MetadataRoute } from 'next';

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://demo-boyz.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${origin}/sitemap.xml`,
  };
}
