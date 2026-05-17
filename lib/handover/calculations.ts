import type { ShiftHandoverData } from './types'

export function calculatePendingTasks(data: ShiftHandoverData) {
  return data.pendingTasks.length
}

export function calculateIncidents(data: ShiftHandoverData) {
  return data.incidents.length
}

export function calculateCriticalItems(data: ShiftHandoverData) {
  const allItems = [...data.pendingTasks, ...data.incidents]

  return allItems.filter(
    (item) => item.priority === 'High' || item.status === 'Critical',
  ).length
}
