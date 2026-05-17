import {
  calculateCriticalItems,
  calculateIncidents,
  calculatePendingTasks,
} from '@/lib/handover/calculations'
import type { ShiftHandoverData } from '@/lib/handover/types'

type HandoverPreviewProps = {
  data: ShiftHandoverData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function HandoverPreview({ data }: HandoverPreviewProps) {
  const pendingTasks = calculatePendingTasks(data)
  const incidents = calculateIncidents(data)
  const criticalItems = calculateCriticalItems(data)

  return (
    <aside className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:self-start'>
      <div className='mb-6 border-b border-slate-200 pb-4'>
        <p className='text-xs font-semibold uppercase tracking-wide text-blue-600'>
          Live Preview
        </p>

        <h2 className='mt-2 text-xl font-bold text-slate-950'>
          Shift Handover Report
        </h2>

        <p className='mt-2 text-sm text-slate-500'>
          Preview your shift handover before exporting.
        </p>
      </div>

      <div className='space-y-6'>
        <section>
          <p className='text-xs uppercase tracking-wide text-slate-500'>
            Site / Project
          </p>

          <p className='mt-1 text-base font-semibold text-slate-900'>
            {showValue(data.siteName, 'Site / Project name')}
          </p>
        </section>

        <section className='grid gap-3 text-sm sm:grid-cols-2'>
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
              {showValue(data.handoverDate, 'Handover date')}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Outgoing shift
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {data.outgoingShift}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Incoming shift
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {data.incomingShift}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Outgoing supervisor
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {showValue(data.outgoingSupervisor, 'Outgoing supervisor')}
            </p>
          </div>

          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>
              Incoming supervisor
            </p>
            <p className='mt-1 font-medium text-slate-900'>
              {showValue(data.incomingSupervisor, 'Incoming supervisor')}
            </p>
          </div>
        </section>

        <section className='grid grid-cols-3 gap-3'>
          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Pending</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {pendingTasks}
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Incidents</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {incidents}
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4'>
            <p className='text-xs text-slate-500'>Critical</p>
            <p className='mt-1 text-2xl font-bold text-slate-950'>
              {criticalItems}
            </p>
          </div>
        </section>

        <PreviewSection
          title='Work completed'
          content={showValue(
            data.workCompleted,
            'Work completed will appear here.',
          )}
        />

        <PreviewSection
          title='Equipment status'
          content={showValue(
            data.equipmentStatus,
            'Equipment status will appear here.',
          )}
        />

        <ItemPreview
          title='Pending tasks'
          emptyText='Pending tasks will appear here.'
          items={data.pendingTasks}
        />

        <ItemPreview
          title='Incidents / Risks'
          emptyText='Incidents and risks will appear here.'
          items={data.incidents}
        />

        <PreviewSection
          title='Recommendations'
          content={showValue(
            data.recommendations,
            'Recommendations will appear here.',
          )}
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

function ItemPreview({
  title,
  emptyText,
  items,
}: {
  title: string
  emptyText: string
  items: ShiftHandoverData['pendingTasks']
}) {
  return (
    <section className='rounded-2xl border border-slate-200'>
      <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
        <h3 className='text-sm font-semibold text-slate-950'>{title}</h3>
      </div>

      {items.length === 0 ? (
        <div className='p-4 text-sm text-slate-500'>{emptyText}</div>
      ) : (
        <div className='divide-y divide-slate-200'>
          {items.map((item) => (
            <div key={item.id} className='p-4'>
              <p className='text-sm font-semibold text-slate-900'>
                {showValue(item.description, 'Item description')}
              </p>

              <p className='mt-1 text-xs text-slate-500'>
                Area: {showValue(item.area, 'Not specified')}
              </p>

              <div className='mt-3 flex flex-wrap gap-2'>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  {item.status}
                </span>

                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  {item.priority} priority
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
