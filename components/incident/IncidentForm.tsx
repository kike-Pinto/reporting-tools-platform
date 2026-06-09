import type { CorrectiveAction, IncidentReportData } from '@/lib/incident/types'

type IncidentFormProps = {
  data: IncidentReportData
  onChange: (field: keyof IncidentReportData, value: string) => void
  onAddCorrectiveAction: () => void
  onUpdateCorrectiveAction: (
    actionId: string,
    field: keyof CorrectiveAction,
    value: string,
  ) => void
  onRemoveCorrectiveAction: (actionId: string) => void
  onClearForm: () => void
}

export default function IncidentForm({
  data,
  onChange,
  onAddCorrectiveAction,
  onUpdateCorrectiveAction,
  onRemoveCorrectiveAction,
  onClearForm,
}: IncidentFormProps) {
  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

  const labelClass = 'mb-2 block text-sm font-medium text-slate-700'

  return (
    <div className='space-y-6'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
          Incident report form
        </p>

        <h2 className='mt-2 text-2xl font-bold text-slate-950'>
          Incident details
        </h2>

        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          <div>
            <label className={labelClass}>Incident title</label>
            <input
              type='text'
              value={data.incidentTitle}
              onChange={(event) =>
                onChange('incidentTitle', event.target.value)
              }
              placeholder='Example: Restricted access near conveyor area'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Incident date</label>
            <input
              type='date'
              value={data.incidentDate}
              onChange={(event) => onChange('incidentDate', event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Incident type</label>
            <select
              value={data.incidentType}
              onChange={(event) => onChange('incidentType', event.target.value)}
              className={inputClass}
            >
              <option>Safety Incident</option>
              <option>Near Miss</option>
              <option>Equipment Damage</option>
              <option>Environmental</option>
              <option>Quality Issue</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Severity</label>
            <select
              value={data.severity}
              onChange={(event) => onChange('severity', event.target.value)}
              className={inputClass}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Status</label>
            <select
              value={data.status}
              onChange={(event) => onChange('status', event.target.value)}
              className={inputClass}
            >
              <option>Open</option>
              <option>Under Review</option>
              <option>Action Required</option>
              <option>Closed</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Location</label>
            <input
              type='text'
              value={data.location}
              onChange={(event) => onChange('location', event.target.value)}
              placeholder='Example: Transfer Area 2'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Reported by</label>
            <input
              type='text'
              value={data.reportedBy}
              onChange={(event) => onChange('reportedBy', event.target.value)}
              placeholder='Person reporting the incident'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Supervisor</label>
            <input
              type='text'
              value={data.supervisor}
              onChange={(event) => onChange('supervisor', event.target.value)}
              placeholder='Supervisor responsible'
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <TextAreaSection
        title='Incident description'
        value={data.incidentDescription}
        onChange={(value) => onChange('incidentDescription', value)}
        placeholder='Describe what happened, where it happened and who was involved...'
        inputClass={inputClass}
      />

      <TextAreaSection
        title='Immediate actions taken'
        value={data.immediateActions}
        onChange={(value) => onChange('immediateActions', value)}
        placeholder='Describe actions taken immediately after the incident...'
        inputClass={inputClass}
      />

      <TextAreaSection
        title='Root cause / contributing factors'
        value={data.rootCause}
        onChange={(value) => onChange('rootCause', value)}
        placeholder='Describe possible root causes or contributing factors...'
        inputClass={inputClass}
      />

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <h3 className='text-xl font-bold text-slate-950'>
            Corrective actions
          </h3>

          <button
            type='button'
            onClick={onAddCorrectiveAction}
            className='w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:py-2'
          >
            + Add action
          </button>
        </div>

        <div className='space-y-4'>
          {data.correctiveActions.length === 0 && (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500'>
              No corrective actions added yet.
            </div>
          )}

          {data.correctiveActions.map((action, index) => (
            <div
              key={action.id}
              className='grid gap-3 rounded-2xl border border-slate-200 bg-white p-4'
            >
              <div className='flex items-center justify-between gap-3'>
                <p className='text-sm font-semibold text-slate-900'>
                  Action #{index + 1}
                </p>

                <button
                  type='button'
                  onClick={() => onRemoveCorrectiveAction(action.id)}
                  className='rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50'
                >
                  Remove
                </button>
              </div>

              <div>
                <label className={labelClass}>Action description</label>
                <input
                  type='text'
                  value={action.description}
                  onChange={(event) =>
                    onUpdateCorrectiveAction(
                      action.id,
                      'description',
                      event.target.value,
                    )
                  }
                  placeholder='Example: Review access control procedure'
                  className={inputClass}
                />
              </div>

              <div className='grid gap-3 md:grid-cols-3'>
                <div>
                  <label className={labelClass}>Responsible</label>
                  <input
                    type='text'
                    value={action.responsible}
                    onChange={(event) =>
                      onUpdateCorrectiveAction(
                        action.id,
                        'responsible',
                        event.target.value,
                      )
                    }
                    placeholder='Responsible person'
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Due date</label>
                  <input
                    type='date'
                    value={action.dueDate}
                    onChange={(event) =>
                      onUpdateCorrectiveAction(
                        action.id,
                        'dueDate',
                        event.target.value,
                      )
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Status</label>
                  <select
                    value={action.status}
                    onChange={(event) =>
                      onUpdateCorrectiveAction(
                        action.id,
                        'status',
                        event.target.value,
                      )
                    }
                    className={inputClass}
                  >
                    <option>Open</option>
                    <option>Under Review</option>
                    <option>Action Required</option>
                    <option>Closed</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TextAreaSection
        title='Recommendations'
        value={data.recommendations}
        onChange={(value) => onChange('recommendations', value)}
        placeholder='Add recommendations to prevent recurrence...'
        inputClass={inputClass}
      />

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-950'>
              Ready to start over?
            </h3>

            <p className='mt-1 text-sm text-slate-600'>
              Clear all incident report fields and corrective actions.
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
