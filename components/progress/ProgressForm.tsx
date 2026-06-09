import type { ProgressActivity, ProgressReportData } from '@/lib/progress/types'

type ProgressFormProps = {
  data: ProgressReportData
  onChange: (field: keyof ProgressReportData, value: string) => void
  onAddActivity: () => void
  onUpdateActivity: (
    activityId: string,
    field: keyof ProgressActivity,
    value: string | number,
  ) => void
  onRemoveActivity: (activityId: string) => void
  onClearForm: () => void
}

export default function ProgressForm({
  data,
  onChange,
  onAddActivity,
  onUpdateActivity,
  onRemoveActivity,
  onClearForm,
}: ProgressFormProps) {
  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

  const labelClass = 'mb-2 block text-sm font-medium text-slate-700'

  return (
    <div className='space-y-6'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
          Progress report form
        </p>

        <h2 className='mt-2 text-2xl font-bold text-slate-950'>
          Project details
        </h2>

        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          <div>
            <label className={labelClass}>Project name</label>
            <input
              type='text'
              value={data.projectName}
              onChange={(event) => onChange('projectName', event.target.value)}
              placeholder='Example: Conveyor Upgrade Project'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Client</label>
            <input
              type='text'
              value={data.client}
              onChange={(event) => onChange('client', event.target.value)}
              placeholder='Example: Collahuasi'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Location</label>
            <input
              type='text'
              value={data.location}
              onChange={(event) => onChange('location', event.target.value)}
              placeholder='Example: Concentrator Plant'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Report date</label>
            <input
              type='date'
              value={data.reportDate}
              onChange={(event) => onChange('reportDate', event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Period start</label>

            <input
              type='date'
              value={data.periodStartDate}
              onChange={(event) =>
                onChange('periodStartDate', event.target.value)
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Period end</label>

            <input
              type='date'
              value={data.periodEndDate}
              onChange={(event) =>
                onChange('periodEndDate', event.target.value)
              }
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Project manager</label>
            <input
              type='text'
              value={data.projectManager}
              onChange={(event) =>
                onChange('projectManager', event.target.value)
              }
              placeholder='Project manager name'
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <TextAreaSection
        title='Executive summary'
        value={data.executiveSummary}
        onChange={(value) => onChange('executiveSummary', value)}
        placeholder='Summarize overall project progress...'
        inputClass={inputClass}
      />

      <TextAreaSection
        title='Key achievements'
        value={data.keyAchievements}
        onChange={(value) => onChange('keyAchievements', value)}
        placeholder='Describe completed milestones or major progress...'
        inputClass={inputClass}
      />

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <h3 className='text-xl font-bold text-slate-950'>
            Progress activities
          </h3>

          <button
            type='button'
            onClick={onAddActivity}
            className='w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:py-2'
          >
            + Add activity
          </button>
        </div>

        <div className='space-y-4'>
          {data.activities.length === 0 && (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500'>
              No progress activities added yet.
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
                  value={activity.description}
                  onChange={(event) =>
                    onUpdateActivity(
                      activity.id,
                      'description',
                      event.target.value,
                    )
                  }
                  placeholder='Example: Complete structural installation'
                  className={inputClass}
                />
              </div>

              <div className='grid gap-3 md:grid-cols-3'>
                <div>
                  <label className={labelClass}>Area</label>
                  <input
                    type='text'
                    value={activity.area}
                    onChange={(event) =>
                      onUpdateActivity(activity.id, 'area', event.target.value)
                    }
                    placeholder='Project area'
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Owner</label>
                  <input
                    type='text'
                    value={activity.owner}
                    onChange={(event) =>
                      onUpdateActivity(activity.id, 'owner', event.target.value)
                    }
                    placeholder='Responsible team/person'
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

              <div className='grid gap-3 md:grid-cols-2'>
                <div>
                  <label className={labelClass}>Planned progress %</label>
                  <input
                    type='number'
                    min='0'
                    max='100'
                    value={activity.plannedProgress}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'plannedProgress',
                        Number(event.target.value),
                      )
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Actual progress %</label>
                  <input
                    type='number'
                    min='0'
                    max='100'
                    value={activity.actualProgress}
                    onChange={(event) =>
                      onUpdateActivity(
                        activity.id,
                        'actualProgress',
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

      <TextAreaSection
        title='Issues and delays'
        value={data.issuesAndDelays}
        onChange={(value) => onChange('issuesAndDelays', value)}
        placeholder='Describe blockers, delays, risks or deviations...'
        inputClass={inputClass}
      />

      <TextAreaSection
        title='Next steps'
        value={data.nextSteps}
        onChange={(value) => onChange('nextSteps', value)}
        placeholder='Describe next planned actions...'
        inputClass={inputClass}
      />

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-950'>
              Ready to start over?
            </h3>

            <p className='mt-1 text-sm text-slate-600'>
              Clear all progress report fields and activities.
            </p>
          </div>

          <button
            type='button'
            onClick={onClearForm}
            className='w-full rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto'
          >
            Clear form
          </button>
        </div>
      </div>
    </div>
  )
}

function TextAreaSection({
  title,
  value,
  onChange,
  placeholder,
  inputClass,
}: {
  title: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  inputClass: string
}) {
  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
      <h3 className='text-xl font-bold text-slate-950'>{title}</h3>

      <textarea
        rows={5}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`mt-4 resize-none ${inputClass}`}
      />
    </div>
  )
}
