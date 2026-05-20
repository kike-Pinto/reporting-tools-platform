export type ProgressStatus = 'Completed' | 'In Progress' | 'Pending' | 'Delayed'

export type ProgressActivity = {
  id: string
  description: string
  area: string
  owner: string
  plannedProgress: number
  actualProgress: number
  status: ProgressStatus
}

export type ProgressReportData = {
  projectName: string
  client: string
  location: string

  reportDate: string

  periodStartDate: string
  periodEndDate: string

  projectManager: string

  executiveSummary: string
  keyAchievements: string
  issuesAndDelays: string
  nextSteps: string

  activities: ProgressActivity[]
}
