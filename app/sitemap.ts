import { MetadataRoute } from 'next'

const BASE_URL = 'https://boubahkarim-png.github.io/smart-hotline-last'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  
  const frPages = [
    '',
    '/reception',
    '/emission', 
    '/agents-ia',
    '/support',
    '/crm',
    '/tarifs',
    '/contact',
    '/a-propos',
  ]

  const enPages = [
    '',
    '/reception',
    '/emission',
    '/agents-ia', 
    '/support',
    '/crm',
    '/pricing',
    '/contact',
    '/about',
  ]

  const frRoutes = frPages.map(page => ({
    url: `${BASE_URL}/fr${page}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr${page}`,
        en: `${BASE_URL}/en${page}`,
      },
    },
  }))

  const enRoutes = enPages.map(page => ({
    url: `${BASE_URL}/en${page}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
    alternates: {
      languages: {
        fr: `${BASE_URL}/fr${page}`,
        en: `${BASE_URL}/en${page}`,
      },
    },
  }))

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...frRoutes,
    ...enRoutes,
  ]
}
