import type { MetadataRoute } from 'next'

// Set to true when ready to go live with the real domain
const isProduction = false;

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
    sitemap: 'https://www.osgdigitaleconomy.com/sitemap.xml',
  }
}