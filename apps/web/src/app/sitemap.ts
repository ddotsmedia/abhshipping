import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_APP_URL ?? 'https://abhshipping.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const services = ['air-freight', 'sea-freight', 'land-transport', 'customs', 'warehousing', 'project-cargo']
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...services.map(slug => ({ url: `${BASE}/services/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: `${BASE}/tracking`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE}/quote`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]
}
