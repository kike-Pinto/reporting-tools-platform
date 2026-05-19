export type MaintenanceType =
  | 'Preventive'
  | 'Corrective'
  | 'Inspection'
  | 'Emergency'

export type MaintenanceStatus =
  | 'Completed'
  | 'In Progress'
  | 'Pending'
  | 'Requires Follow-up'

export type MaintenanceTask = {
  id: string
  description: string
  area: string
  technician: string
  hours: number
  status: MaintenanceStatus
}

export type MaintenancePart = {
  id: string
  name: string
  quantity: number
  notes: string
}

export type MaintenanceReportData = {
  equipmentName: string
  equipmentId: string
  location: string
  reportDate: string
  maintenanceType: MaintenanceType
  supervisor: string

  workSummary: string
  findings: string
  recommendations: string

  tasks: MaintenanceTask[]
  parts: MaintenancePart[]
}
