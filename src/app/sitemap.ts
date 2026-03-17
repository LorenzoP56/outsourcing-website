import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/constants'
import { getAllPosts } from '@/lib/graph-ql/queries'
import { routing } from '@/i18n/routing'

export const revalidate = 3600

const locales = routing.locales

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://osgdigitaleconomy.com'

  // Pagine statiche — generate per ogni locale
  // lastModified: aggiornare manualmente quando il contenuto della pagina cambia in modo significativo
  const staticPaths = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1, lastModified: '2026-03-17' },
    { path: '/chi-siamo', changeFrequency: 'monthly' as const, priority: 0.8, lastModified: '2026-01-15' },
    { path: '/servizi', changeFrequency: 'weekly' as const, priority: 0.9, lastModified: '2026-03-17' },
    { path: '/esternalizzazione', changeFrequency: 'monthly' as const, priority: 0.8, lastModified: '2026-01-15' },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.7, lastModified: '2026-03-17' },
    { path: '/contatti', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: '2026-01-15' },
    { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3, lastModified: '2026-01-15' },
    { path: '/cookie-policy', changeFrequency: 'yearly' as const, priority: 0.3, lastModified: '2026-01-15' },
  ]

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths
      .filter(({ path }) => !(locale === 'en' && path === '/blog'))
      .map(({ path, changeFrequency, priority, lastModified }) => ({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(lastModified),
        changeFrequency,
        priority,
      }))
  )

  // Pagine dinamiche dei servizi — generate per ogni locale
  // lastModified: aggiornare manualmente quando il contenuto del servizio cambia
  const servicePages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    SERVICES.map((service) => ({
      url: `${baseUrl}/${locale}/servizi/${service.slug}`,
      lastModified: new Date('2026-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // Pagine dinamiche del blog da WordPress (solo italiano — contenuto unico)
  const posts = await getAllPosts()
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/it/blog/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
