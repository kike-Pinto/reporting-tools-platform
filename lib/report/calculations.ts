import type { DailyReportData } from './types'

export function calculateTotalManHours(data: DailyReportData) {
  return data.activities.reduce((total, activity) => {
    return total + activity.workers * activity.hours
  }, 0)
}

export function calculateAverageProgress(data: DailyReportData) {
  if (data.activities.length === 0) return 0

  const totalProgress = data.activities.reduce((total, activity) => {
    return total + activity.progress
  }, 0)

  return Math.round(totalProgress / data.activities.length)
}

export function calculateCompletedActivities(data: DailyReportData) {
  return data.activities.filter((activity) => activity.status === 'Completed')
    .length
}
