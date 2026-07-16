import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://reporting-tools-platform.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },

    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    {
      url: `${baseUrl}/guides/daily-reports`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },

    {
      url: `${baseUrl}/guides/maintenance-reports`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },

    {
      url: `${baseUrl}/guides/incident-reports`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },

    {
      url: `${baseUrl}/guides/progress-reports`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },

    {
      url: `${baseUrl}/guides/shift-handover`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },

    {
      url: `${baseUrl}/tools/daily-report-generator`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/tools/shift-handover-generator`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/tools/maintenance-report-generator`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/tools/incident-report-generator`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/tools/progress-report-generator`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-daily-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/daily-work-report-sample`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-daily-report-to-your-boss`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-daily-report-for-construction`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-shift-handover-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-maintenance-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/how-to-write-an-incident-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },

    {
      url: `${baseUrl}/guides/how-to-write-a-progress-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    //
    //
    // nuevas guias agregadas (daily reports)
    {
      url: `${baseUrl}/guides/daily-report-examples`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/daily-report-format`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/daily-activity-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/daily-status-report-to-manager`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/end-of-day-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/daily-work-report-template`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/daily-site-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/employee-daily-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    // maintenance guides
    {
      url: `${baseUrl}/guides/maintenance-report-example`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/maintenance-reporting-guide`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/preventive-maintenance-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/equipment-maintenance-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/maintenance-checklist`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    // incident guides
    {
      url: `${baseUrl}/guides/incident-report-example`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/safety-incident-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/near-miss-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/corrective-action-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    // progress guides
    {
      url: `${baseUrl}/guides/weekly-progress-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/project-status-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/monthly-progress-report`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    // handover guides
    {
      url: `${baseUrl}/guides/shift-handover-example`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/guides/shift-handover-checklist`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
  ]
}
