'use client'

import { useState } from 'react'

import MaintenanceForm from './MaintenanceForm'
import MaintenancePreview from './MaintenancePreview'
import PrintableMaintenanceReport from './PrintableMaintenanceReport'

import type {
  MaintenancePart,
  MaintenanceReportData,
  MaintenanceTask,
} from '@/lib/maintenance/types'

const initialMaintenanceData: MaintenanceReportData = {
  equipmentName: '',
  equipmentId: '',
  location: '',
  reportDate: '',
  maintenanceType: 'Preventive',
  supervisor: '',

  workSummary: '',
  findings: '',
  recommendations: '',

  tasks: [],
  parts: [],
}

export default function MaintenanceReportTool() {
  const [maintenanceData, setMaintenanceData] = useState<MaintenanceReportData>(
    initialMaintenanceData,
  )

  function updateMaintenanceData(
    field: keyof MaintenanceReportData,
    value: string,
  ) {
    setMaintenanceData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  function addTask() {
    const newTask: MaintenanceTask = {
      id: crypto.randomUUID(),
      description: '',
      area: '',
      technician: '',
      hours: 0,
      status: 'Pending',
    }

    setMaintenanceData((currentData) => ({
      ...currentData,
      tasks: [...currentData.tasks, newTask],
    }))
  }

  function updateTask(
    taskId: string,
    field: keyof MaintenanceTask,
    value: string | number,
  ) {
    setMaintenanceData((currentData) => ({
      ...currentData,
      tasks: currentData.tasks.map((task) =>
        task.id === taskId ? { ...task, [field]: value } : task,
      ),
    }))
  }

  function removeTask(taskId: string) {
    setMaintenanceData((currentData) => ({
      ...currentData,
      tasks: currentData.tasks.filter((task) => task.id !== taskId),
    }))
  }

  function addPart() {
    const newPart: MaintenancePart = {
      id: crypto.randomUUID(),
      name: '',
      quantity: 0,
      notes: '',
    }

    setMaintenanceData((currentData) => ({
      ...currentData,
      parts: [...currentData.parts, newPart],
    }))
  }

  function updatePart(
    partId: string,
    field: keyof MaintenancePart,
    value: string | number,
  ) {
    setMaintenanceData((currentData) => ({
      ...currentData,
      parts: currentData.parts.map((part) =>
        part.id === partId ? { ...part, [field]: value } : part,
      ),
    }))
  }

  function removePart(partId: string) {
    setMaintenanceData((currentData) => ({
      ...currentData,
      parts: currentData.parts.filter((part) => part.id !== partId),
    }))
  }

  function clearForm() {
    setMaintenanceData(initialMaintenanceData)
  }

  return (
    <section id='report-tool' className='mx-auto max-w-7xl px-6 py-8'>
      <div className='screen-tool grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <MaintenanceForm
          data={maintenanceData}
          onChange={updateMaintenanceData}
          onAddTask={addTask}
          onUpdateTask={updateTask}
          onRemoveTask={removeTask}
          onAddPart={addPart}
          onUpdatePart={updatePart}
          onRemovePart={removePart}
          onClearForm={clearForm}
        />

        <MaintenancePreview data={maintenanceData} />
      </div>

      <div className='print-only'>
        <PrintableMaintenanceReport data={maintenanceData} />
      </div>
    </section>
  )
}
