import type { DailyReportData, ReportActivity } from '@/lib/report/types'

type ReportFormProps = {
  data: DailyReportData
  onChange: (field: keyof DailyReportData, value: string | boolean) => void

  onAddActivity: () => void

  onUpdateActivity: (
    activityId: string,
    field: keyof ReportActivity,
    value: string | number,
  ) => void
}

export default function ReportForm({
  data,
  onChange,
  onAddActivity,
  onUpdateActivity,
}: ReportFormProps) {
  return (
    <div className='space-y-6'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-6'>
          <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
            Report form
          </p>

          <h2 className='mt-2 text-2xl font-bold text-slate-950'>
            Report details
          </h2>
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <input
            type='text'
            placeholder='Project / Site name'
            value={data.projectName}
            onChange={(event) => onChange('projectName', event.target.value)}
            className='rounded-xl border border-slate-300 px-4 py-3'
          />

          <input
            type='text'
            placeholder='Company'
            value={data.company}
            onChange={(event) => onChange('company', event.target.value)}
            className='rounded-xl border border-slate-300 px-4 py-3'
          />

          <input
            type='text'
            placeholder='Location'
            value={data.location}
            onChange={(event) => onChange('location', event.target.value)}
            className='rounded-xl border border-slate-300 px-4 py-3'
          />

          <input
            type='date'
            value={data.reportDate}
            onChange={(event) => onChange('reportDate', event.target.value)}
            className='rounded-xl border border-slate-300 px-4 py-3'
          />

          <select
            value={data.shift}
            onChange={(event) => onChange('shift', event.target.value)}
            className='rounded-xl border border-slate-300 px-4 py-3'
          >
            <option>Day Shift</option>
            <option>Night Shift</option>
          </select>

          <input
            type='text'
            placeholder='Supervisor'
            value={data.supervisor}
            onChange={(event) => onChange('supervisor', event.target.value)}
            className='rounded-xl border border-slate-300 px-4 py-3'
          />
        </div>
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold text-slate-950'>Daily summary</h3>

        <textarea
          rows={5}
          placeholder='Describe the work completed during the shift...'
          value={data.dailySummary}
          onChange={(event) => onChange('dailySummary', event.target.value)}
          className='mt-4 w-full rounded-xl border border-slate-300 px-4 py-3'
        />
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-5 flex items-center justify-between'>
          <h3 className='text-xl font-bold text-slate-950'>
            Activities performed
          </h3>

          <button
            type='button'
            onClick={onAddActivity}
            className='rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700'
          >
            + Add activity
          </button>
        </div>

        <div className='space-y-4'>
          {data.activities.length === 0 && (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500'>
              No activities added yet.
            </div>
          )}

          {data.activities.map((activity) => (
            <div
              key={activity.id}
              className='grid gap-3 rounded-2xl border border-slate-200 p-4'
            >
              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Activity description
                </label>
                <input
                  type='text'
                  placeholder='Example: Equipment inspection and pipe installation'
                  value={activity.description}
                  onChange={(event) =>
                    onUpdateActivity(
                      activity.id,
                      'description',
                      event.target.value,
                    )
                  }
                  className='w-full rounded-xl border border-slate-300 px-4 py-3'
                />
              </div>

              <div className='grid gap-3 md:grid-cols-2'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>
                    Area
                  </label>
                  <input
                    type='text'
                    placeholder='Example: Area 2'
                    value={activity.area}
                    onChange={(event) =>
                      onUpdateActivity(activity.id, 'area', event.target.value)
                    }
                    className='w-full rounded-xl border border-slate-300 px-4 py-3'
                  />
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>
                    Status
                  </label>
                  <select
                    value={activity.status}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'status',
                        event.target.value,
                      )
                    }
                    className='w-full rounded-xl border border-slate-300 px-4 py-3'
                  >
                    <option>Completed</option>
                    <option>In Progress</option>
                    <option>Pending</option>
                    <option>Delayed</option>
                  </select>
                </div>
              </div>

              <div className='grid gap-3 md:grid-cols-3'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>
                    Workers
                  </label>
                  <input
                    type='number'
                    min='0'
                    placeholder='0'
                    value={activity.workers}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'workers',
                        Number(event.target.value),
                      )
                    }
                    className='w-full rounded-xl border border-slate-300 px-4 py-3'
                  />
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>
                    Hours
                  </label>
                  <input
                    type='number'
                    min='0'
                    placeholder='0'
                    value={activity.hours}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'hours',
                        Number(event.target.value),
                      )
                    }
                    className='w-full rounded-xl border border-slate-300 px-4 py-3'
                  />
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>
                    Progress %
                  </label>
                  <input
                    type='number'
                    min='0'
                    max='100'
                    placeholder='0'
                    value={activity.progress}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'progress',
                        Number(event.target.value),
                      )
                    }
                    className='w-full rounded-xl border border-slate-300 px-4 py-3'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold text-slate-950'>Safety / Incidents</h3>

        <label className='mt-4 flex items-center gap-3'>
          <input
            type='checkbox'
            checked={data.incidentReported}
            onChange={(event) =>
              onChange('incidentReported', event.target.checked)
            }
          />

          <span className='text-sm text-slate-700'>
            Incident reported during shift
          </span>
        </label>

        <textarea
          rows={4}
          placeholder='Incident details or safety observations...'
          value={data.incidentDetails}
          onChange={(event) => onChange('incidentDetails', event.target.value)}
          className='mt-4 w-full rounded-xl border border-slate-300 px-4 py-3'
        />
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold text-slate-950'>
          Observations & Pending Tasks
        </h3>

        <textarea
          rows={4}
          placeholder='General observations...'
          value={data.observations}
          onChange={(event) => onChange('observations', event.target.value)}
          className='mt-4 w-full rounded-xl border border-slate-300 px-4 py-3'
        />

        <textarea
          rows={4}
          placeholder='Pending tasks for next shift...'
          value={data.pendingTasks}
          onChange={(event) => onChange('pendingTasks', event.target.value)}
          className='mt-4 w-full rounded-xl border border-slate-300 px-4 py-3'
        />
      </div>
    </div>
  )
}
