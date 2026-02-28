import type { MetadataRoute } from 'next'

const isProduction = process.env.ENABLE_INDEXING === "true";

export default function robots(): MetadataRoute.Robots {
  // Block all crawlers on demo/staging
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // Production: allow indexing
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://osgdigitaleconomy.com/sitemap.xml',
  }
}