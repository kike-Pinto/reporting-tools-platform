import type { ProgressReportData } from './types'

export function calculateAveragePlannedProgress(data: ProgressReportData) {
  if (data.activities.length === 0) return 0

  const total = data.activities.reduce(
    (sum, activity) => sum + activity.plannedProgress,
    0,
  )

  return Math.round(total / data.activities.length)
}

export function calculateAverageActualProgress(data: ProgressReportData) {
  if (data.activities.length === 0) return 0

  const total = data.activities.reduce(
    (sum, activity) => sum + activity.actualProgress,
    0,
  )

  return Math.round(total / data.activities.length)
}

export function calculateDelayedActivities(data: ProgressReportData) {
  return data.activities.filter((activity) => activity.status === 'Delayed')
    .length
}

export function calculateCompletedActivities(data: ProgressReportData) {
  return data.activities.filter((activity) => activity.status === 'Completed')
    .length
}

export function buildReportingPeriod(startDate: string, endDate: string) {
  if (!startDate || !endDate) {
    return 'Not specified'
  }

  const start = new Date(startDate)
  const end = new Date(endDate)

  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const oneJan = new Date(start.getFullYear(), 0, 1)

  const week = Math.ceil(
    ((start.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7,
  )

  return `Week ${week} • ${formatter.format(start)} – ${formatter.format(end)}`
}
