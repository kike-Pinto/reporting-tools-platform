import type { MetadataRoute } from 'next'

const baseUrl = 'https://reporting-tools-platform.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/daily-report-generator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/shift-handover-generator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-daily-report`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-shift-handover-report`,
      lastModified: new Date(),
    },
  ]
}
