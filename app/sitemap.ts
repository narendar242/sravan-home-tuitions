import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sravanhometuitions.com'
  const now = new Date()
  const sections = [
    '',
    '#about',
    '#services',
    '#subjects',
    '#why-choose-us',
    '#testimonials',
    '#faq',
    '#contact',
  ]

  return sections.map((section) => ({
    url: `${baseUrl}/${section}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: section === '' ? 1 : 0.8,
  }))
}
