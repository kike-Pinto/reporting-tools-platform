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

  onRemoveActivity: (activityId: string) => void
  onClearForm: () => void
}

export default function ReportForm({
  data,
  onChange,
  onAddActivity,
  onUpdateActivity,
  onRemoveActivity,
  onClearForm,
}: ReportFormProps) {
  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

  const labelClass = 'mb-2 block text-sm font-medium text-slate-700'
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
            className={inputClass}
          />

          <input
            type='text'
            placeholder='Company'
            value={data.company}
            onChange={(event) => onChange('company', event.target.value)}
            className={inputClass}
          />

          <input
            type='text'
            placeholder='Location'
            value={data.location}
            onChange={(event) => onChange('location', event.target.value)}
            className={inputClass}
          />

          <input
            type='date'
            value={data.reportDate}
            onChange={(event) => onChange('reportDate', event.target.value)}
            className={inputClass}
          />

          <select
            value={data.shift}
            onChange={(event) => onChange('shift', event.target.value)}
            className={inputClass}
          >
            <option>Day Shift</option>
            <option>Night Shift</option>
          </select>

          <input
            type='text'
            placeholder='Supervisor'
            value={data.supervisor}
            onChange={(event) => onChange('supervisor', event.target.value)}
            className={inputClass}
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
          className={`mt-4 ${inputClass}`}
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

          {data.activities.map((activity, index) => (
            <div
              key={activity.id}
              className='grid gap-3 rounded-2xl border border-slate-200 bg-white p-4'
            >
              <div className='flex items-center justify-between gap-3'>
                <p className='text-sm font-semibold text-slate-900'>
                  Activity #{index + 1}
                </p>

                <button
                  type='button'
                  onClick={() => onRemoveActivity(activity.id)}
                  className='rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50'
                >
                  Remove
                </button>
              </div>
              <div>
                <label className={labelClass}>Activity description</label>
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
                  className={inputClass}
                />
              </div>

              <div className='grid gap-3 md:grid-cols-2'>
                <div>
                  <label className={labelClass}>Area</label>
                  <input
                    type='text'
                    placeholder='Example: Area 2'
                    value={activity.area}
                    onChange={(event) =>
                      onUpdateActivity(activity.id, 'area', event.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Status</label>
                  <select
                    value={activity.status}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'status',
                        event.target.value,
                      )
                    }
                    className={inputClass}
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
                  <label className={labelClass}>Workers</label>
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
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Hours</label>
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
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Progress %</label>
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
                    className={inputClass}
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
          className={`mt-4 ${inputClass}`}
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
          className={`mt-4 ${inputClass}`}
        />

        <textarea
          rows={4}
          placeholder='Pending tasks for next shift...'
          value={data.pendingTasks}
          onChange={(event) => onChange('pendingTasks', event.target.value)}
          className={`mt-4 ${inputClass}`}
        />
      </div>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-950'>
              Ready to start over?
            </h3>
            <p className='mt-1 text-sm text-slate-600'>
              Clear all fields and remove all activities from the current
              report.
            </p>
          </div>

          <button
            type='button'
            onClick={onClearForm}
            className='rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
          >
            Clear form
          </button>
        </div>
      </div>
    </div>
  )
}
