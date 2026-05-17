export type ShiftType = 'Day Shift' | 'Night Shift'

export type HandoverStatus = 'Open' | 'In Progress' | 'Resolved' | 'Critical'

export type HandoverItem = {
  id: string
  description: string
  area: string
  status: HandoverStatus
  priority: 'Low' | 'Medium' | 'High'
}

export type ShiftHandoverData = {
  siteName: string
  location: string
  handoverDate: string
  outgoingShift: ShiftType
  incomingShift: ShiftType
  outgoingSupervisor: string
  incomingSupervisor: string

  workCompleted: string
  equipmentStatus: string
  recommendations: string

  pendingTasks: HandoverItem[]
  incidents: HandoverItem[]
}
