export type ShiftType = 'Day Shift' | 'Night Shift'

export type DailyReportData = {
  projectName: string
  company: string
  location: string
  reportDate: string
  shift: ShiftType
  supervisor: string
}
