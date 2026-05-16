'use client'

import {
  calculateAverageProgress,
  calculateCompletedActivities,
  calculateTotalManHours,
} from '@/lib/report/calculations'
import type { DailyReportData } from '@/lib/report/types'

type ReportPreviewProps = {
  data: DailyReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function ReportPreview({ data }: ReportPreviewProps) {
  const totalManHours = calculateTotalManHours(data)
  const averageProgress = calculateAverageProgress(data)
  const completedActivities = calculateCompletedActivities(data)

  return (
    <aside className='print-area rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:self-start'>
      <div className='mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-wide text-blue-600'>
            Live Preview
          </p>
          <h2 className='mt-2 text-xl font-bold text-slate-950'>
            Daily Report
          </h2>
        </div>

        <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
          PDF Preview
        </span>
      </div>

      <div className='space-y-6'>
        <section>
          <p className='text-xs uppercase tracking-wide text-slate-500'>
            Project
          </p>
          <p className='mt-1 text-base font-semibold text-slate-900'>
            {showValue(data.projectName, 'Project / Site name')}
          </p>
        </section>

        <section className='grid gap-3 text-sm sm:grid-cols-2'>
          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Company
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {showValue(data.company, 'Company name')}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Location
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {showValue(data.location, 'Location')}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Date
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {showValue(data.reportDate, 'Report date')}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Shift
            </p>
            <p className='mt-1 font-medium text-slate-900'>{data.shift}</p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Supervisor
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {showValue(data.supervisor, 'Supervisor')}
            </p>
          </div>
        </section>

        <section className='grid grid-cols-2 gap-3'>
          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Total HH</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {totalManHours}
            </p>
          </div>

          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Progress</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {averageProgress}%
            </p>
          </div>

          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Activities</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {data.activities.length}
            </p>
          </div>

          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Completed</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {completedActivities}
            </p>
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200'>
          <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
            <h3 className='text-sm font-semibold text-slate-950'>
              Daily summary
            </h3>
          </div>

          <div className='p-4 text-sm leading-6 text-slate-600'>
            {showValue(
              data.dailySummary,
              'The daily summary will appear here.',
            )}
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200'>
          <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
            <h3 className='text-sm font-semibold text-slate-950'>
              Activities performed
            </h3>
          </div>

          {data.activities.length === 0 ? (
            <div className='p-4 text-sm text-slate-500'>
              Activities will appear here as you complete the form.
            </div>
          ) : (
            <div className='divide-y divide-slate-200'>
              {data.activities.map((activity) => (
                <div key={activity.id} className='p-4'>
                  <div className='flex items-start justify-between gap-3'>
                    <div>
                      <p className='text-sm font-semibold text-slate-900'>
                        {showValue(
                          activity.description,
                          'Activity description',
                        )}
                      </p>
                      <p className='mt-1 text-xs text-slate-500'>
                        Area: {showValue(activity.area, 'Not specified')}
                      </p>
                    </div>

                    <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                      {activity.status}
                    </span>
                  </div>

                  <div className='mt-3 grid grid-cols-3 gap-2 text-xs'>
                    <div className='rounded-xl bg-slate-50 p-3'>
                      <p className='text-slate-500'>Workers</p>
                      <p className='mt-1 font-semibold text-slate-900'>
                        {activity.workers}
                      </p>
                    </div>

                    <div className='rounded-xl bg-slate-50 p-3'>
                      <p className='text-slate-500'>Hours</p>
                      <p className='mt-1 font-semibold text-slate-900'>
                        {activity.hours}
                      </p>
                    </div>

                    <div className='rounded-xl bg-slate-50 p-3'>
                      <p className='text-slate-500'>Progress</p>
                      <p className='mt-1 font-semibold text-slate-900'>
                        {activity.progress}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className='rounded-2xl border border-slate-200'>
          <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
            <h3 className='text-sm font-semibold text-slate-950'>
              Safety / Incidents
            </h3>
          </div>

          <div className='p-4 text-sm leading-6 text-slate-600'>
            <p className='font-medium text-slate-900'>
              Status:{' '}
              {data.incidentReported
                ? 'Incident reported'
                : 'No incident reported'}
            </p>

            <p className='mt-2'>
              {showValue(
                data.incidentDetails,
                'No incident details or safety observations added.',
              )}
            </p>
          </div>
        </section>

        <section className='rounded-2xl border border-slate-200'>
          <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
            <h3 className='text-sm font-semibold text-slate-950'>
              Observations & Pending Tasks
            </h3>
          </div>

          <div className='space-y-4 p-4 text-sm leading-6 text-slate-600'>
            <div>
              <p className='font-medium text-slate-900'>Observations</p>
              <p className='mt-1'>
                {showValue(data.observations, 'No observations added.')}
              </p>
            </div>

            <div>
              <p className='font-medium text-slate-900'>Pending tasks</p>
              <p className='mt-1'>
                {showValue(data.pendingTasks, 'No pending tasks added.')}
              </p>
            </div>
          </div>
        </section>

        <button
          type='button'
          onClick={() => window.print()}
          className='no-print w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
        >
          Download PDF
        </button>
      </div>
    </aside>
  )
}
