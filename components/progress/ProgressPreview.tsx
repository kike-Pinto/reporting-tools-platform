import {
  calculateAverageActualProgress,
  calculateAveragePlannedProgress,
  calculateCompletedActivities,
  calculateDelayedActivities,
  buildReportingPeriod,
} from '@/lib/progress/calculations'
import type { ProgressReportData } from '@/lib/progress/types'

type ProgressPreviewProps = {
  data: ProgressReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function ProgressPreview({ data }: ProgressPreviewProps) {
  const plannedProgress = calculateAveragePlannedProgress(data)
  const actualProgress = calculateAverageActualProgress(data)
  const completedActivities = calculateCompletedActivities(data)
  const delayedActivities = calculateDelayedActivities(data)

  return (
    <aside className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:self-start'>
      <div className='mb-6 border-b border-slate-200 pb-4'>
        <h2 className='text-xl font-bold text-slate-950'>Progress Report</h2>

        <p className='mt-2 text-sm text-slate-500'>Preview before exporting.</p>
      </div>

      <div className='space-y-6'>
        <section>
          <p className='text-xs uppercase tracking-wide text-slate-500'>
            Project
          </p>

          <p className='mt-1 text-base font-semibold text-slate-900'>
            {showValue(data.projectName, 'Project name')}
          </p>
        </section>

        <section className='grid gap-3 text-sm sm:grid-cols-2'>
          <PreviewMeta label='Client' value={data.client} />
          <PreviewMeta label='Location' value={data.location} />
          <PreviewMeta label='Date' value={data.reportDate} />
          <PreviewMeta
            label='Period'
            value={buildReportingPeriod(
              data.periodStartDate,
              data.periodEndDate,
            )}
          />
          <PreviewMeta label='Project manager' value={data.projectManager} />
        </section>

        <section className='grid grid-cols-2 gap-3'>
          <KpiCard label='Planned' value={`${plannedProgress}%`} />
          <KpiCard label='Actual' value={`${actualProgress}%`} />
          <KpiCard label='Completed' value={String(completedActivities)} />
          <KpiCard label='Delayed' value={String(delayedActivities)} />
        </section>

        <PreviewSection
          title='Executive summary'
          content={showValue(
            data.executiveSummary,
            'Executive summary will appear here.',
          )}
        />

        <PreviewSection
          title='Key achievements'
          content={showValue(
            data.keyAchievements,
            'Key achievements will appear here.',
          )}
        />

        <ActivitiesPreview data={data} />

        <PreviewSection
          title='Issues and delays'
          content={showValue(
            data.issuesAndDelays,
            'Issues and delays will appear here.',
          )}
        />

        <PreviewSection
          title='Next steps'
          content={showValue(data.nextSteps, 'Next steps will appear here.')}
        />

        <button
          type='button'
          onClick={() => window.print()}
          className='w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
        >
          Download PDF
        </button>
      </div>
    </aside>
  )
}

function PreviewMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className='text-xs uppercase tracking-wide text-slate-500'>{label}</p>
      <p className='mt-1 font-medium text-slate-900'>
        {showValue(value, 'Not specified')}
      </p>
    </div>
  )
}

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
      <p className='text-xs text-slate-500'>{label}</p>
      <p className='mt-1 text-2xl font-bold text-slate-950'>{value}</p>
    </div>
  )
}

function PreviewSection({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <section className='rounded-2xl border border-slate-200'>
      <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
        <h3 className='text-sm font-semibold text-slate-950'>{title}</h3>
      </div>

      <div className='p-4 text-sm leading-6 text-slate-600'>{content}</div>
    </section>
  )
}

function ActivitiesPreview({ data }: { data: ProgressReportData }) {
  return (
    <section className='rounded-2xl border border-slate-200'>
      <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
        <h3 className='text-sm font-semibold text-slate-950'>
          Progress activities
        </h3>
      </div>

      {data.activities.length === 0 ? (
        <div className='p-4 text-sm text-slate-500'>
          Progress activities will appear here.
        </div>
      ) : (
        <div className='divide-y divide-slate-200'>
          {data.activities.map((activity) => (
            <div key={activity.id} className='p-4'>
              <p className='text-sm font-semibold text-slate-900'>
                {showValue(activity.description, 'Activity description')}
              </p>

              <p className='mt-1 text-xs text-slate-500'>
                Area: {showValue(activity.area, 'Not specified')}
              </p>

              <div className='mt-3 flex flex-wrap gap-2'>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  Planned {activity.plannedProgress}%
                </span>

                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  Actual {activity.actualProgress}%
                </span>

                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
