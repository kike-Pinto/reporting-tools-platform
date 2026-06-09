import {
  calculateCompletedTasks,
  calculatePartsUsed,
  calculateTotalHours,
} from '@/lib/maintenance/calculations'
import type { MaintenanceReportData } from '@/lib/maintenance/types'

type MaintenancePreviewProps = {
  data: MaintenanceReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function MaintenancePreview({ data }: MaintenancePreviewProps) {
  const totalHours = calculateTotalHours(data)
  const completedTasks = calculateCompletedTasks(data)
  const partsUsed = calculatePartsUsed(data)

  return (
    <aside className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:self-start'>
      <div className='mb-6 border-b border-slate-200 pb-4'>
        <h2 className='text-xl font-bold text-slate-950'>Maintenance Report</h2>

        <p className='mt-2 text-sm text-slate-500'>Preview before exporting.</p>
      </div>

      <div className='space-y-6'>
        <section>
          <p className='text-xs uppercase tracking-wide text-slate-500'>
            Equipment
          </p>

          <p className='mt-1 text-base font-semibold text-slate-900'>
            {showValue(data.equipmentName, 'Equipment name')}
          </p>
        </section>

        <section className='grid gap-3 text-sm sm:grid-cols-2'>
          <PreviewMeta label='Equipment ID' value={data.equipmentId} />
          <PreviewMeta label='Location' value={data.location} />
          <PreviewMeta label='Date' value={data.reportDate} />
          <PreviewMeta label='Type' value={data.maintenanceType} />
          <PreviewMeta label='Supervisor' value={data.supervisor} />
        </section>

        <section className='grid grid-cols-3 gap-3'>
          <KpiCard label='Hours' value={String(totalHours)} />
          <KpiCard label='Tasks' value={String(data.tasks.length)} />
          <KpiCard label='Parts' value={String(partsUsed)} />
        </section>

        <PreviewSection
          title='Work summary'
          content={showValue(
            data.workSummary,
            'Work summary will appear here.',
          )}
        />

        <PreviewSection
          title='Findings'
          content={showValue(data.findings, 'Findings will appear here.')}
        />

        <TasksPreview data={data} completedTasks={completedTasks} />

        <PartsPreview data={data} />

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

function TasksPreview({
  data,
  completedTasks,
}: {
  data: MaintenanceReportData
  completedTasks: number
}) {
  return (
    <section className='rounded-2xl border border-slate-200'>
      <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
        <h3 className='text-sm font-semibold text-slate-950'>
          Maintenance tasks ({completedTasks} completed)
        </h3>
      </div>

      {data.tasks.length === 0 ? (
        <div className='p-4 text-sm text-slate-500'>
          Maintenance tasks will appear here.
        </div>
      ) : (
        <div className='divide-y divide-slate-200'>
          {data.tasks.map((task) => (
            <div key={task.id} className='p-4'>
              <p className='text-sm font-semibold text-slate-900'>
                {showValue(task.description, 'Task description')}
              </p>

              <p className='mt-1 text-xs text-slate-500'>
                Area: {showValue(task.area, 'Not specified')}
              </p>

              <div className='mt-3 flex flex-wrap gap-2'>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  {task.status}
                </span>

                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  {task.hours} hours
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function PartsPreview({ data }: { data: MaintenanceReportData }) {
  return (
    <section className='rounded-2xl border border-slate-200'>
      <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
        <h3 className='text-sm font-semibold text-slate-950'>
          Parts / Materials
        </h3>
      </div>

      {data.parts.length === 0 ? (
        <div className='p-4 text-sm text-slate-500'>
          Parts and materials will appear here.
        </div>
      ) : (
        <div className='divide-y divide-slate-200'>
          {data.parts.map((part) => (
            <div key={part.id} className='p-4'>
              <p className='text-sm font-semibold text-slate-900'>
                {showValue(part.name, 'Part name')}
              </p>

              <p className='mt-1 text-xs text-slate-500'>
                Quantity: {part.quantity}
              </p>

              <p className='mt-2 text-xs text-slate-500'>
                {showValue(part.notes, 'No notes')}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
