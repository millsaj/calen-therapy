import type { MetadataRoute } from 'next'
import { routes } from '@app/_config/routes'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ['*'],
      allow: [], // TODO: Replace with prod config
      disallow: ['*'],
    },
    sitemap: routes.baseUrl + routes.sitemap(),
  }
}
