'use client'

import { useState } from 'react'

import ProgressForm from './ProgressForm'
import ProgressPreview from './ProgressPreview'
import PrintableProgressReport from './PrintableProgressReport'

import type { ProgressActivity, ProgressReportData } from '@/lib/progress/types'

const initialProgressData: ProgressReportData = {
  projectName: '',
  client: '',
  location: '',
  reportDate: '',
  periodStartDate: '',
  periodEndDate: '',
  projectManager: '',

  executiveSummary: '',
  keyAchievements: '',
  issuesAndDelays: '',
  nextSteps: '',

  activities: [],
}

export default function ProgressReportTool() {
  const [progressData, setProgressData] =
    useState<ProgressReportData>(initialProgressData)

  function updateProgressData(field: keyof ProgressReportData, value: string) {
    setProgressData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  function addActivity() {
    const newActivity: ProgressActivity = {
      id: crypto.randomUUID(),
      description: '',
      area: '',
      owner: '',
      plannedProgress: 0,
      actualProgress: 0,
      status: 'Pending',
    }

    setProgressData((currentData) => ({
      ...currentData,
      activities: [...currentData.activities, newActivity],
    }))
  }

  function updateActivity(
    activityId: string,
    field: keyof ProgressActivity,
    value: string | number,
  ) {
    setProgressData((currentData) => ({
      ...currentData,
      activities: currentData.activities.map((activity) =>
        activity.id === activityId ? { ...activity, [field]: value } : activity,
      ),
    }))
  }

  function removeActivity(activityId: string) {
    setProgressData((currentData) => ({
      ...currentData,
      activities: currentData.activities.filter(
        (activity) => activity.id !== activityId,
      ),
    }))
  }

  function clearForm() {
    setProgressData(initialProgressData)
  }

  return (
    <section id='report-tool' className='mx-auto max-w-7xl px-6 py-8'>
      <div className='screen-tool grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <ProgressForm
          data={progressData}
          onChange={updateProgressData}
          onAddActivity={addActivity}
          onUpdateActivity={updateActivity}
          onRemoveActivity={removeActivity}
          onClearForm={clearForm}
        />

        <ProgressPreview data={progressData} />
      </div>

      <div className='print-only'>
        <PrintableProgressReport data={progressData} />
      </div>
    </section>
  )
}
