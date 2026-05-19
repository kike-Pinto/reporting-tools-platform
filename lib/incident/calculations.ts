import type { IncidentReportData } from './types'

export function calculateCorrectiveActions(data: IncidentReportData) {
  return data.correctiveActions.length
}

export function calculateOpenActions(data: IncidentReportData) {
  return data.correctiveActions.filter((action) => action.status !== 'Closed')
    .length
}

export function calculateClosedActions(data: IncidentReportData) {
  return data.correctiveActions.filter((action) => action.status === 'Closed')
    .length
}
