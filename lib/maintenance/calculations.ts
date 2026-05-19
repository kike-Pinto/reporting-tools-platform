import type { MaintenanceReportData } from './types'

export function calculateTotalHours(data: MaintenanceReportData) {
  return data.tasks.reduce((total, task) => total + task.hours, 0)
}

export function calculateCompletedTasks(data: MaintenanceReportData) {
  return data.tasks.filter((task) => task.status === 'Completed').length
}

export function calculatePartsUsed(data: MaintenanceReportData) {
  return data.parts.reduce((total, part) => total + part.quantity, 0)
}
