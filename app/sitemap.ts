import type { MetadataRoute } from 'next'
import { routes } from '@app/_config/routes'
import { approaches } from '@app/_config/approaches'
import { focuses } from '@app/_config/focuses'

// Force static generation for the sitemap
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Helper function to create sitemap entries
  const createEntry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => ({
    url: `${routes.baseUrl()}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  })

  return [
    // Home page - highest priority
    createEntry(routes.home(), 1.0, 'monthly'),
    
    // Key landing pages - very high priority
    createEntry(routes.contact(), 0.9, 'yearly'),
    createEntry(routes.findUs(), 0.9, 'yearly'),
    
    // Therapist profiles - high priority
    createEntry(routes.helen(), 0.9, 'monthly'),
    createEntry(routes.carl(), 0.9, 'monthly'),
    
    // Core service pages - high priority
    createEntry(routes.faqs(), 0.8, 'monthly'),
    
    // Main session types - high priority with moderate change frequency
    createEntry(routes.sessionTypes.inPerson(), 0.8, 'yearly'),
    createEntry(routes.sessionTypes.online(), 0.8, 'yearly'),

    // All therapy focuses/issues - medium priority but important for SEO
    ...focuses.all().map((focus) => 
      createEntry(routes.focuses.show(focus.slug), 0.7, 'yearly')
    ),

    // All therapy approaches - medium priority
    ...approaches.all().map((style) => 
      createEntry(routes.approaches.show(style.slug), 0.7, 'yearly')
    ),

    // Other service options - lower priority
    createEntry(routes.sessionTypes.other(), 0.5, 'yearly'),
  ]
}
