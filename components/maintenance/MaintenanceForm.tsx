import type {
  MaintenancePart,
  MaintenanceReportData,
  MaintenanceTask,
} from '@/lib/maintenance/types'

type MaintenanceFormProps = {
  data: MaintenanceReportData
  onChange: (field: keyof MaintenanceReportData, value: string) => void
  onAddTask: () => void
  onUpdateTask: (
    taskId: string,
    field: keyof MaintenanceTask,
    value: string | number,
  ) => void
  onRemoveTask: (taskId: string) => void
  onAddPart: () => void
  onUpdatePart: (
    partId: string,
    field: keyof MaintenancePart,
    value: string | number,
  ) => void
  onRemovePart: (partId: string) => void
  onClearForm: () => void
}

export default function MaintenanceForm({
  data,
  onChange,
  onAddTask,
  onUpdateTask,
  onRemoveTask,
  onAddPart,
  onUpdatePart,
  onRemovePart,
  onClearForm,
}: MaintenanceFormProps) {
  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

  const labelClass = 'mb-2 block text-sm font-medium text-slate-700'

  return (
    <div className='space-y-6'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
          Maintenance report form
        </p>

        <h2 className='mt-2 text-2xl font-bold text-slate-950'>
          Equipment details
        </h2>

        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          <div>
            <label className={labelClass}>Equipment name</label>
            <input
              type='text'
              value={data.equipmentName}
              onChange={(event) =>
                onChange('equipmentName', event.target.value)
              }
              placeholder='Example: Conveyor Belt B'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Equipment ID</label>
            <input
              type='text'
              value={data.equipmentId}
              onChange={(event) => onChange('equipmentId', event.target.value)}
              placeholder='Example: CV-B-204'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Location</label>
            <input
              type='text'
              value={data.location}
              onChange={(event) => onChange('location', event.target.value)}
              placeholder='Example: Plant Area 2'
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
            <label className={labelClass}>Maintenance type</label>
            <select
              value={data.maintenanceType}
              onChange={(event) =>
                onChange('maintenanceType', event.target.value)
              }
              className={inputClass}
            >
              <option>Preventive</option>
              <option>Corrective</option>
              <option>Inspection</option>
              <option>Emergency</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Supervisor</label>
            <input
              type='text'
              value={data.supervisor}
              onChange={(event) => onChange('supervisor', event.target.value)}
              placeholder='Maintenance supervisor'
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <TextAreaSection
        title='Work summary'
        value={data.workSummary}
        onChange={(value) => onChange('workSummary', value)}
        placeholder='Summarize the maintenance work performed...'
        inputClass={inputClass}
      />

      <TextAreaSection
        title='Findings'
        value={data.findings}
        onChange={(value) => onChange('findings', value)}
        placeholder='Describe findings, defects, abnormal conditions or inspection notes...'
        inputClass={inputClass}
      />

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <h3 className='text-xl font-bold text-slate-950'>
            Maintenance tasks
          </h3>

          <button
            type='button'
            onClick={onAddTask}
            className='w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:py-2'
          >
            + Add task
          </button>
        </div>

        <div className='space-y-4'>
          {data.tasks.length === 0 && (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500'>
              No maintenance tasks added yet.
            </div>
          )}

          {data.tasks.map((task, index) => (
            <div
              key={task.id}
              className='grid gap-3 rounded-2xl border border-slate-200 bg-white p-4'
            >
              <div className='flex items-center justify-between gap-3'>
                <p className='text-sm font-semibold text-slate-900'>
                  Task #{index + 1}
                </p>

                <button
                  type='button'
                  onClick={() => onRemoveTask(task.id)}
                  className='rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50'
                >
                  Remove
                </button>
              </div>

              <div>
                <label className={labelClass}>Task description</label>
                <input
                  type='text'
                  value={task.description}
                  onChange={(event) =>
                    onUpdateTask(task.id, 'description', event.target.value)
                  }
                  placeholder='Example: Replace worn belt roller'
                  className={inputClass}
                />
              </div>

              <div className='grid gap-3 md:grid-cols-2'>
                <div>
                  <label className={labelClass}>Area</label>
                  <input
                    type='text'
                    value={task.area}
                    onChange={(event) =>
                      onUpdateTask(task.id, 'area', event.target.value)
                    }
                    placeholder='Equipment area'
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Technician</label>
                  <input
                    type='text'
                    value={task.technician}
                    onChange={(event) =>
                      onUpdateTask(task.id, 'technician', event.target.value)
                    }
                    placeholder='Technician name'
                    className={inputClass}
                  />
                </div>
              </div>

              <div className='grid gap-3 md:grid-cols-2'>
                <div>
                  <label className={labelClass}>Hours</label>
                  <input
                    type='number'
                    min='0'
                    value={task.hours}
                    onChange={(event) =>
                      onUpdateTask(task.id, 'hours', Number(event.target.value))
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Status</label>
                  <select
                    value={task.status}
                    onChange={(event) =>
                      onUpdateTask(task.id, 'status', event.target.value)
                    }
                    className={inputClass}
                  >
                    <option>Completed</option>
                    <option>In Progress</option>
                    <option>Pending</option>
                    <option>Requires Follow-up</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <h3 className='text-xl font-bold text-slate-950'>
            Parts / Materials used
          </h3>

          <button
            type='button'
            onClick={onAddPart}
            className='w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:py-2'
          >
            + Add part
          </button>
        </div>

        <div className='space-y-4'>
          {data.parts.length === 0 && (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500'>
              No parts or materials added yet.
            </div>
          )}

          {data.parts.map((part, index) => (
            <div
              key={part.id}
              className='grid gap-3 rounded-2xl border border-slate-200 bg-white p-4'
            >
              <div className='flex items-center justify-between gap-3'>
                <p className='text-sm font-semibold text-slate-900'>
                  Part #{index + 1}
                </p>

                <button
                  type='button'
                  onClick={() => onRemovePart(part.id)}
                  className='rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50'
                >
                  Remove
                </button>
              </div>

              <div className='grid gap-3 md:grid-cols-[1fr_0.4fr]'>
                <div>
                  <label className={labelClass}>Part / Material name</label>
                  <input
                    type='text'
                    value={part.name}
                    onChange={(event) =>
                      onUpdatePart(part.id, 'name', event.target.value)
                    }
                    placeholder='Example: Bearing unit'
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Quantity</label>
                  <input
                    type='number'
                    min='0'
                    value={part.quantity}
                    onChange={(event) =>
                      onUpdatePart(
                        part.id,
                        'quantity',
                        Number(event.target.value),
                      )
                    }
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Notes</label>
                <input
                  type='text'
                  value={part.notes}
                  onChange={(event) =>
                    onUpdatePart(part.id, 'notes', event.target.value)
                  }
                  placeholder='Optional notes'
                  className={inputClass}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <TextAreaSection
        title='Recommendations'
        value={data.recommendations}
        onChange={(value) => onChange('recommendations', value)}
        placeholder='Add recommendations, follow-up actions or next maintenance steps...'
        inputClass={inputClass}
      />

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-950'>
              Ready to start over?
            </h3>

            <p className='mt-1 text-sm text-slate-600'>
              Clear all maintenance report fields, tasks and parts.
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
