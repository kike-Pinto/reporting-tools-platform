export type ShiftType = 'Day Shift' | 'Night Shift'

export type ActivityStatus = 'Completed' | 'In Progress' | 'Pending' | 'Delayed'

export type ReportActivity = {
  id: string
  description: string
  area: string
  workers: number
  hours: number
  progress: number
  status: ActivityStatus
}

export type DailyReportData = {
  projectName: string
  company: string
  location: string
  reportDate: string
  shift: ShiftType
  supervisor: string

  dailySummary: string
  observations: string
  pendingTasks: string

  incidentReported: boolean
  incidentDetails: string

  activities: ReportActivity[]
}
