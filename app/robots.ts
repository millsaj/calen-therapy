import type { MetadataRoute } from 'next'
import { routes } from '@app/_config'

// Force static generation for robots.txt
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ['*'],
      allow: ['/'],
    },
    sitemap: routes.url(routes.sitemap()),
    host: routes.baseUrl(),
  }
}
