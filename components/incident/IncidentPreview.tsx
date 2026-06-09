import {
  calculateClosedActions,
  calculateCorrectiveActions,
  calculateOpenActions,
} from '@/lib/incident/calculations'
import type { IncidentReportData } from '@/lib/incident/types'

type IncidentPreviewProps = {
  data: IncidentReportData
}

function showValue(value: string, fallback: string) {
  return value.trim() ? value : fallback
}

export default function IncidentPreview({ data }: IncidentPreviewProps) {
  const totalActions = calculateCorrectiveActions(data)
  const openActions = calculateOpenActions(data)
  const closedActions = calculateClosedActions(data)

  return (
    <aside className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-24 lg:self-start'>
      <div className='mb-6 border-b border-slate-200 pb-4'>
        <h2 className='text-xl font-bold text-slate-950'>Incident Report</h2>

        <p className='mt-2 text-sm text-slate-500'>Preview before exporting.</p>
      </div>

      <div className='space-y-6'>
        <section>
          <p className='text-xs uppercase tracking-wide text-slate-500'>
            Incident
          </p>

          <p className='mt-1 text-base font-semibold text-slate-900'>
            {showValue(data.incidentTitle, 'Incident title')}
          </p>
        </section>

        <section className='grid gap-3 text-sm sm:grid-cols-2'>
          <PreviewMeta label='Type' value={data.incidentType} />
          <PreviewMeta label='Severity' value={data.severity} />
          <PreviewMeta label='Status' value={data.status} />
          <PreviewMeta label='Date' value={data.incidentDate} />
          <PreviewMeta label='Location' value={data.location} />
          <PreviewMeta label='Reported by' value={data.reportedBy} />
          <PreviewMeta label='Supervisor' value={data.supervisor} />
        </section>

        <section className='grid grid-cols-3 gap-3'>
          <KpiCard label='Actions' value={String(totalActions)} />
          <KpiCard label='Open' value={String(openActions)} />
          <KpiCard label='Closed' value={String(closedActions)} />
        </section>

        <PreviewSection
          title='Incident description'
          content={showValue(
            data.incidentDescription,
            'Incident description will appear here.',
          )}
        />

        <PreviewSection
          title='Immediate actions'
          content={showValue(
            data.immediateActions,
            'Immediate actions will appear here.',
          )}
        />

        <PreviewSection
          title='Root cause'
          content={showValue(data.rootCause, 'Root cause will appear here.')}
        />

        <ActionsPreview data={data} />

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

function ActionsPreview({ data }: { data: IncidentReportData }) {
  return (
    <section className='rounded-2xl border border-slate-200'>
      <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
        <h3 className='text-sm font-semibold text-slate-950'>
          Corrective actions
        </h3>
      </div>

      {data.correctiveActions.length === 0 ? (
        <div className='p-4 text-sm text-slate-500'>
          Corrective actions will appear here.
        </div>
      ) : (
        <div className='divide-y divide-slate-200'>
          {data.correctiveActions.map((action) => (
            <div key={action.id} className='p-4'>
              <p className='text-sm font-semibold text-slate-900'>
                {showValue(action.description, 'Action description')}
              </p>

              <p className='mt-1 text-xs text-slate-500'>
                Responsible: {showValue(action.responsible, 'Not specified')}
              </p>

              <div className='mt-3 flex flex-wrap gap-2'>
                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  {action.status}
                </span>

                <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  Due: {showValue(action.dueDate, 'Not specified')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
