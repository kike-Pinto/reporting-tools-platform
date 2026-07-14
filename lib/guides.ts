export type GuideStatus = 'Available' | 'Coming Soon'

export type GuideCategory =
  | 'Daily Reports'
  | 'Maintenance Reports'
  | 'Incident Reports'
  | 'Progress Reports'
  | 'Shift Handover'

export type GuideItem = {
  title: string
  description: string
  href: string
  category: GuideCategory
  status: GuideStatus
}

export const guides: GuideItem[] = [
  // Daily Reports
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
    title: 'Daily Report Examples',
    description:
      'Review practical daily report examples for office work, construction, maintenance and operational teams.',
    href: '/guides/daily-report-examples',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'Daily Report Format',
    description:
      'Use a clear daily report format for completed work, progress, issues, pending tasks and next steps.',
    href: '/guides/daily-report-format',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'Daily Activity Report',
    description:
      'Learn how to document completed activities, working hours, results, issues and next steps in a daily activity report.',
    href: '/guides/daily-activity-report',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'Daily Status Report to Manager',
    description:
      'Learn how to prepare a clear daily status report for a manager with progress, blockers, pending work and next steps.',
    href: '/guides/daily-status-report-to-manager',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'End of Day Report',
    description:
      'Learn how to prepare an end of day report with completed work, progress, blockers, pending tasks and next steps.',
    href: '/guides/end-of-day-report',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'Daily Work Report Template',
    description:
      'Use a professional daily work report template for completed work, hours, issues, pending tasks and next steps.',
    href: '/guides/daily-work-report-template',
    category: 'Daily Reports',
    status: 'Available',
  },
  {
    title: 'Daily Site Report',
    description:
      'Learn how to document site activities, workforce, equipment, materials, delays, safety observations and next steps.',
    href: '/guides/daily-site-report',
    category: 'Daily Reports',
    status: 'Available',
  },

  // Maintenance Reports
  {
    title: 'How to Write a Maintenance Report',
    description:
      'Learn how to structure equipment maintenance reports with tasks, findings, parts used and recommendations.',
    href: '/guides/how-to-write-a-maintenance-report',
    category: 'Maintenance Reports',
    status: 'Available',
  },
  {
    title: 'Maintenance Report Example',
    description:
      'Review practical preventive and corrective maintenance report examples with findings, parts used and recommendations.',
    href: '/guides/maintenance-report-example',
    category: 'Maintenance Reports',
    status: 'Available',
  },
  {
    title: 'Maintenance Reporting Guide',
    description:
      'Learn how maintenance reporting works, including report types, equipment information, KPIs and best practices.',
    href: '/guides/maintenance-reporting-guide',
    category: 'Maintenance Reports',
    status: 'Available',
  },
  {
    title: 'Preventive Maintenance Report',
    description:
      'Learn how to document scheduled maintenance, inspections, findings, measurements and follow-up recommendations.',
    href: '/guides/preventive-maintenance-report',
    category: 'Maintenance Reports',
    status: 'Available',
  },
  {
    title: 'Equipment Maintenance Report',
    description:
      'Learn how to document equipment condition, completed repairs, parts, test results and final operational status.',
    href: '/guides/equipment-maintenance-report',
    category: 'Maintenance Reports',
    status: 'Available',
  },
  {
    title: 'Maintenance Checklist',
    description:
      'Use a practical checklist for work preparation, equipment inspection, completed maintenance and final testing.',
    href: '/guides/maintenance-checklist',
    category: 'Maintenance Reports',
    status: 'Available',
  },

  // Incident Reports
  {
    title: 'How to Write an Incident Report',
    description:
      'Learn how to structure professional incident reports with corrective actions and recommendations.',
    href: '/guides/how-to-write-an-incident-report',
    category: 'Incident Reports',
    status: 'Available',
  },
  {
    title: 'Incident Report Example',
    description:
      'Review practical workplace and equipment incident report examples with immediate actions and corrective actions.',
    href: '/guides/incident-report-example',
    category: 'Incident Reports',
    status: 'Available',
  },
  {
    title: 'Safety Incident Report',
    description:
      'Learn how to document workplace safety incidents, severity, immediate controls and corrective actions.',
    href: '/guides/safety-incident-report',
    category: 'Incident Reports',
    status: 'Available',
  },
  {
    title: 'Near Miss Report',
    description:
      'Learn how to document near miss events, potential consequences, immediate controls and corrective actions.',
    href: '/guides/near-miss-report',
    category: 'Incident Reports',
    status: 'Available',
  },
  {
    title: 'Corrective Action Report',
    description:
      'Learn how to document root causes, corrective actions, responsible persons, due dates and effectiveness reviews.',
    href: '/guides/corrective-action-report',
    category: 'Incident Reports',
    status: 'Available',
  },

  // Progress Reports
  {
    title: 'How to Write a Progress Report',
    description:
      'Learn how to structure project progress reports with planned progress, actual progress, issues and next steps.',
    href: '/guides/how-to-write-a-progress-report',
    category: 'Progress Reports',
    status: 'Available',
  },
  {
    title: 'Weekly Progress Report',
    description:
      'Learn how to report weekly project progress, completed work, schedule variance, risks and next-week priorities.',
    href: '/guides/weekly-progress-report',
    category: 'Progress Reports',
    status: 'Available',
  },
  {
    title: 'Project Status Report',
    description:
      'Learn how to summarize project health, progress, schedule, budget, issues, risks and stakeholder decisions.',
    href: '/guides/project-status-report',
    category: 'Progress Reports',
    status: 'Available',
  },

  // Shift Handover
  {
    title: 'How to Write a Shift Handover Report',
    description:
      'Learn how to structure shift handover reports for operational continuity.',
    href: '/guides/how-to-write-a-shift-handover-report',
    category: 'Shift Handover',
    status: 'Available',
  },
  {
    title: 'Shift Handover Example',
    description:
      'Review practical shift handover examples with completed work, equipment status, pending tasks, risks and recommendations.',
    href: '/guides/shift-handover-example',
    category: 'Shift Handover',
    status: 'Available',
  },
  {
    title: 'Shift Handover Checklist',
    description:
      'Use a practical checklist to review completed work, equipment condition, pending tasks, permits and active risks.',
    href: '/guides/shift-handover-checklist',
    category: 'Shift Handover',
    status: 'Available',
  },
]
