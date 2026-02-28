import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/constants'
import { getAllPosts } from '@/lib/graph-ql/queries'
import { routing } from '@/i18n/routing'

export const revalidate = 3600

const locales = routing.locales

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://osgdigitaleconomy.com'

  // Pagine statiche — generate per ogni locale
  const staticPaths = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/chi-siamo', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/servizi', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/esternalizzazione', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/contatti', changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  )

  // Pagine dinamiche dei servizi — generate per ogni locale
  const servicePages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    SERVICES.map((service) => ({
      url: `${baseUrl}/${locale}/servizi/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // Pagine dinamiche del blog da WordPress (solo italiano — contenuto unico)
  const posts = await getAllPosts()
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/it/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
