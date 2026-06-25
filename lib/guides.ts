export type GuideStatus = 'Available' | 'Coming Soon'

export type GuideItem = {
  title: string
  description: string
  href: string
  category: string
  status: GuideStatus
}

export const guides: GuideItem[] = [
  {
    title: 'How to Write a Daily Report',
    description:
      'Learn what a daily report should include and how to create professional operational reports.',
    href: '/guides/how-to-write-a-daily-report',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'Daily Work Report Sample',
    description:
      'See a practical daily work report sample with completed work, issues, pending tasks and next steps.',
    href: '/guides/daily-work-report-sample',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'How to Write a Daily Report to Your Boss',
    description:
      'Learn how to write a clear daily report to your boss or manager with completed work, issues, pending tasks and support needed.',
    href: '/guides/how-to-write-a-daily-report-to-your-boss',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'How to Write a Daily Report for Construction',
    description:
      'Learn how to structure construction daily reports with site activities, manpower, delays and pending tasks.',
    href: '/guides/how-to-write-a-daily-report-for-construction',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'How to Write a Shift Handover Report',
    description:
      'Learn how to structure shift handover reports for operational continuity.',
    href: '/guides/how-to-write-a-shift-handover-report',
    category: 'Shift Handover',
    status: 'Available',
  },
  {
    title: 'How to Write a Maintenance Report',
    description:
      'Learn how to structure equipment maintenance reports with tasks, findings, parts used and recommendations.',
    href: '/guides/how-to-write-a-maintenance-report',
    category: 'Maintenance Reports',
    status: 'Available',
  },
  {
    title: 'How to Write an Incident Report',
    description:
      'Learn how to structure professional incident reports with corrective actions and recommendations.',
    href: '/guides/how-to-write-an-incident-report',
    category: 'Incident Reports',
    status: 'Available',
  },
  {
    title: 'How to Write a Progress Report',
    description:
      'Learn how to structure project progress reports with planned progress, actual progress, issues and next steps.',
    href: '/guides/how-to-write-a-progress-report',
    category: 'Progress Reports',
    status: 'Available',
  },
]
