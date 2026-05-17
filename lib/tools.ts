export type ToolStatus = 'Available' | 'Coming Soon'

export type ToolItem = {
  title: string
  description: string
  href: string
  status: ToolStatus
}

export const tools: ToolItem[] = [
  {
    title: 'Daily Report Generator',
    description:
      'Create professional daily reports with activities, KPIs and PDF export.',
    href: '/tools/daily-report-generator',
    status: 'Available',
  },
  {
    title: 'Shift Handover Generator',
    description:
      'Create structured shift handover reports for operational continuity.',
    href: '/tools/shift-handover-generator',
    status: 'Available',
  },
  {
    title: 'Maintenance Report Generator',
    description:
      'Generate equipment maintenance reports with structured service details.',
    href: '#',
    status: 'Coming Soon',
  },
]
