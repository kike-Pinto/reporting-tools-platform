'use client'

import { useState } from 'react'
import ReportForm from './ReportForm'
import ReportPreview from './ReportPreview'
import type { DailyReportData } from '@/lib/report/types'

const initialReportData: DailyReportData = {
  projectName: '',
  company: '',
  location: '',
  reportDate: '',
  shift: 'Day Shift',
  supervisor: '',
}

export default function DailyReportTool() {
  const [reportData, setReportData] =
    useState<DailyReportData>(initialReportData)

  function updateReportData(field: keyof DailyReportData, value: string) {
    setReportData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  return (
    <section id='report-tool' className='mx-auto max-w-7xl px-6 py-8'>
      <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <ReportForm data={reportData} onChange={updateReportData} />
        <ReportPreview data={reportData} />
      </div>
    </section>
  )
}
