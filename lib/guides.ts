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
    title: 'How to Write a Shift Handover Report',
    description:
      'Learn how to structure shift handover notes for operational continuity.',
    href: '#',
    category: 'Shift Handover',
    status: 'Coming Soon',
  },
  {
    title: 'Daily Report Template Guide',
    description:
      'Understand how daily report templates help standardize operational documentation.',
    href: '#',
    category: 'Templates',
    status: 'Coming Soon',
  },
]
