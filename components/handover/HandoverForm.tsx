import type { HandoverItem, ShiftHandoverData } from '@/lib/handover/types'

type ItemType = 'pendingTasks' | 'incidents'

type HandoverFormProps = {
  data: ShiftHandoverData
  onChange: (field: keyof ShiftHandoverData, value: string) => void
  onAddItem: (type: ItemType) => void
  onUpdateItem: (
    type: ItemType,
    itemId: string,
    field: keyof HandoverItem,
    value: string,
  ) => void
  onRemoveItem: (type: ItemType, itemId: string) => void
  onClearForm: () => void
}

export default function HandoverForm({
  data,
  onChange,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onClearForm,
}: HandoverFormProps) {
  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'

  const labelClass = 'mb-2 block text-sm font-medium text-slate-700'

  function renderItems(type: ItemType, title: string) {
    const items = data[type]

    return (
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='mb-5 flex items-center justify-between gap-4'>
          <h3 className='text-xl font-bold text-slate-950'>{title}</h3>

          <button
            type='button'
            onClick={() => onAddItem(type)}
            className='rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700'
          >
            + Add item
          </button>
        </div>

        <div className='space-y-4'>
          {items.length === 0 && (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500'>
              No items added yet.
            </div>
          )}

          {items.map((item, index) => (
            <div
              key={item.id}
              className='grid gap-3 rounded-2xl border border-slate-200 bg-white p-4'
            >
              <div className='flex items-center justify-between gap-3'>
                <p className='text-sm font-semibold text-slate-900'>
                  Item #{index + 1}
                </p>

                <button
                  type='button'
                  onClick={() => onRemoveItem(type, item.id)}
                  className='rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50'
                >
                  Remove
                </button>
              </div>

              <div>
                <label className={labelClass}>Description</label>
                <input
                  type='text'
                  value={item.description}
                  onChange={(event) =>
                    onUpdateItem(
                      type,
                      item.id,
                      'description',
                      event.target.value,
                    )
                  }
                  placeholder='Describe the task, incident or operational note'
                  className={inputClass}
                />
              </div>

              <div className='grid gap-3 md:grid-cols-3'>
                <div>
                  <label className={labelClass}>Area</label>
                  <input
                    type='text'
                    value={item.area}
                    onChange={(event) =>
                      onUpdateItem(type, item.id, 'area', event.target.value)
                    }
                    placeholder='Area / equipment'
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Status</label>
                  <select
                    value={item.status}
                    onChange={(event) =>
                      onUpdateItem(type, item.id, 'status', event.target.value)
                    }
                    className={inputClass}
                  >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                    <option>Critical</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Priority</label>
                  <select
                    value={item.priority}
                    onChange={(event) =>
                      onUpdateItem(
                        type,
                        item.id,
                        'priority',
                        event.target.value,
                      )
                    }
                    className={inputClass}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
          Shift handover form
        </p>

        <h2 className='mt-2 text-2xl font-bold text-slate-950'>
          Handover details
        </h2>

        <div className='mt-6 grid gap-4 md:grid-cols-2'>
          <div>
            <label className={labelClass}>Site / Project name</label>
            <input
              type='text'
              value={data.siteName}
              onChange={(event) => onChange('siteName', event.target.value)}
              placeholder='Example: Plant Maintenance Area 2'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Location</label>
            <input
              type='text'
              value={data.location}
              onChange={(event) => onChange('location', event.target.value)}
              placeholder='Example: Iquique'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Handover date</label>
            <input
              type='date'
              value={data.handoverDate}
              onChange={(event) => onChange('handoverDate', event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Outgoing shift</label>
            <select
              value={data.outgoingShift}
              onChange={(event) =>
                onChange('outgoingShift', event.target.value)
              }
              className={inputClass}
            >
              <option>Day Shift</option>
              <option>Night Shift</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Incoming shift</label>
            <select
              value={data.incomingShift}
              onChange={(event) =>
                onChange('incomingShift', event.target.value)
              }
              className={inputClass}
            >
              <option>Day Shift</option>
              <option>Night Shift</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Outgoing supervisor</label>
            <input
              type='text'
              value={data.outgoingSupervisor}
              onChange={(event) =>
                onChange('outgoingSupervisor', event.target.value)
              }
              placeholder='Supervisor leaving shift'
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Incoming supervisor</label>
            <input
              type='text'
              value={data.incomingSupervisor}
              onChange={(event) =>
                onChange('incomingSupervisor', event.target.value)
              }
              placeholder='Supervisor receiving shift'
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold text-slate-950'>Work completed</h3>
        <textarea
          rows={5}
          value={data.workCompleted}
          onChange={(event) => onChange('workCompleted', event.target.value)}
          placeholder='Summarize the work completed during the outgoing shift...'
          className={`mt-4 resize-none ${inputClass}`}
        />
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold text-slate-950'>Equipment status</h3>
        <textarea
          rows={5}
          value={data.equipmentStatus}
          onChange={(event) => onChange('equipmentStatus', event.target.value)}
          placeholder='Describe equipment status, issues, restrictions or important notes...'
          className={`mt-4 resize-none ${inputClass}`}
        />
      </div>

      {renderItems('pendingTasks', 'Pending tasks')}
      {renderItems('incidents', 'Incidents / Risks')}

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-bold text-slate-950'>Recommendations</h3>
        <textarea
          rows={5}
          value={data.recommendations}
          onChange={(event) => onChange('recommendations', event.target.value)}
          placeholder='Add recommendations for the incoming shift...'
          className={`mt-4 resize-none ${inputClass}`}
        />
      </div>

      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-950'>
              Ready to start over?
            </h3>

            <p className='mt-1 text-sm text-slate-600'>
              Clear all fields and remove all shift handover items.
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
