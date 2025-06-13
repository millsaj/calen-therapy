import type { MetadataRoute } from 'next'
import { routes } from '@app/_config/routes'
import { styles } from '@app/_config/styles'
import { focuses } from '@app/_config/focuses'

// TODO: Update
export default function sitemap(): MetadataRoute.Sitemap {
  // Helper function to create sitemap entries
  const createEntry = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => ({
    url: `${routes.baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  })

  return [
    // Main pages - high priority
    createEntry(routes.home(), 1, 'yearly'),
    createEntry(routes.helen(), 0.9, 'yearly'),
    createEntry(routes.carl(), 0.9, 'yearly'),
    createEntry(routes.faqs(), 0.8, 'yearly'),
    createEntry(routes.contact(), 0.8, 'yearly'),

    // Service pages
    ...styles.all().map((style) => createEntry(routes.styles.show(style.slug), 0.6, 'yearly')),
    ...focuses.all().map((focus) => createEntry(routes.focuses.show(focus.slug), 0.5, 'yearly')),

    createEntry(routes.sessionTypes.inPerson(), 0.6, 'yearly'),
    createEntry(routes.sessionTypes.online(), 0.6, 'yearly'),
    createEntry(routes.sessionTypes.other(), 0.4, 'yearly'),

    // Footer/Legal pages - lower priority
    // createEntry(routes.resources(), 0.3, 'yearly'),
  ]
}
