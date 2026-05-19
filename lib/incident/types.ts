export type IncidentType =
  | 'Safety Incident'
  | 'Near Miss'
  | 'Equipment Damage'
  | 'Environmental'
  | 'Quality Issue'
  | 'Other'

export type IncidentSeverity = 'Low' | 'Medium' | 'High' | 'Critical'

export type IncidentStatus =
  | 'Open'
  | 'Under Review'
  | 'Action Required'
  | 'Closed'

export type CorrectiveAction = {
  id: string
  description: string
  responsible: string
  dueDate: string
  status: IncidentStatus
}

export type IncidentReportData = {
  incidentTitle: string
  incidentType: IncidentType
  severity: IncidentSeverity
  status: IncidentStatus

  incidentDate: string
  location: string
  reportedBy: string
  supervisor: string

  incidentDescription: string
  immediateActions: string
  rootCause: string
  recommendations: string

  correctiveActions: CorrectiveAction[]
}
