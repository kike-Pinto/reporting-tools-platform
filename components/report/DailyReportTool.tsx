'use client'

import { useState } from 'react'
import ReportForm from './ReportForm'
import ReportPreview from './ReportPreview'
import PrintableDailyReport from './PrintableDailyReport'

import type { DailyReportData, ReportActivity } from '@/lib/report/types'

const initialReportData: DailyReportData = {
  projectName: '',
  company: '',
  location: '',
  reportDate: '',
  shift: 'Day Shift',
  supervisor: '',

  dailySummary: '',
  observations: '',
  pendingTasks: '',

  incidentReported: false,
  incidentDetails: '',

  activities: [],
}

export default function DailyReportTool() {
  const [reportData, setReportData] =
    useState<DailyReportData>(initialReportData)

  function updateReportData(
    field: keyof DailyReportData,
    value: string | boolean,
  ) {
    setReportData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  function addActivity() {
    const newActivity: ReportActivity = {
      id: crypto.randomUUID(),
      description: '',
      area: '',
      workers: 0,
      hours: 0,
      progress: 0,
      status: 'Pending',
    }

    setReportData((currentData) => ({
      ...currentData,
      activities: [...currentData.activities, newActivity],
    }))
  }

  function updateActivity(
    activityId: string,
    field: keyof ReportActivity,
    value: string | number,
  ) {
    setReportData((currentData) => ({
      ...currentData,
      activities: currentData.activities.map((activity) =>
        activity.id === activityId
          ? {
              ...activity,
              [field]: value,
            }
          : activity,
      ),
    }))
  }

  function removeActivity(activityId: string) {
    setReportData((currentData) => ({
      ...currentData,
      activities: currentData.activities.filter(
        (activity) => activity.id !== activityId,
      ),
    }))
  }

  function clearForm() {
    setReportData(initialReportData)
  }

  return (
    <section
      id='report-tool'
      className='mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8'
    >
      <div className='screen-tool grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <ReportForm
          data={reportData}
          onChange={updateReportData}
          onAddActivity={addActivity}
          onUpdateActivity={updateActivity}
          onRemoveActivity={removeActivity}
          onClearForm={clearForm}
        />

        <ReportPreview data={reportData} />
      </div>
      <div className='print-only'>
        <PrintableDailyReport data={reportData} />
      </div>
    </section>
  )
}
