import Link from 'next/link'

const reportingCategories = [
  {
    name: 'Daily Reports',
    shortLabel: 'DR',
    description:
      'Create clear daily work reports, activity summaries, site reports and management updates.',
    guideCount: 12,
    guidesHref: '/guides/daily-reports',
    toolName: 'Daily Report Generator',
    toolHref: '/tools/daily-report-generator',
    containerClasses: 'border-blue-200 bg-blue-50',
    iconClasses: 'bg-blue-600 text-white',
    countClasses: 'bg-blue-100 text-blue-700',
    linkClasses: 'text-blue-700 hover:text-blue-900',
  },
  {
    name: 'Maintenance Reports',
    shortLabel: 'MR',
    description:
      'Document inspections, preventive maintenance, equipment repairs, findings and parts used.',
    guideCount: 6,
    guidesHref: '/guides/maintenance-reports',
    toolName: 'Maintenance Report Generator',
    toolHref: '/tools/maintenance-report-generator',
    containerClasses: 'border-amber-200 bg-amber-50',
    iconClasses: 'bg-amber-500 text-white',
    countClasses: 'bg-amber-100 text-amber-700',
    linkClasses: 'text-amber-700 hover:text-amber-900',
  },
  {
    name: 'Incident Reports',
    shortLabel: 'IR',
    description:
      'Report safety incidents, near misses, root causes, risks and corrective actions.',
    guideCount: 5,
    guidesHref: '/guides/incident-reports',
    toolName: 'Incident Report Generator',
    toolHref: '/tools/incident-report-generator',
    containerClasses: 'border-red-200 bg-red-50',
    iconClasses: 'bg-red-500 text-white',
    countClasses: 'bg-red-100 text-red-700',
    linkClasses: 'text-red-700 hover:text-red-900',
  },
  {
    name: 'Progress Reports',
    shortLabel: 'PR',
    description:
      'Track planned and actual progress, milestones, delays, risks and project priorities.',
    guideCount: 4,
    guidesHref: '/guides/progress-reports',
    toolName: 'Progress Report Generator',
    toolHref: '/tools/progress-report-generator',
    containerClasses: 'border-emerald-200 bg-emerald-50',
    iconClasses: 'bg-emerald-600 text-white',
    countClasses: 'bg-emerald-100 text-emerald-700',
    linkClasses: 'text-emerald-700 hover:text-emerald-900',
  },
  {
    name: 'Shift Handover',
    shortLabel: 'SH',
    description:
      'Transfer completed work, equipment condition, pending tasks and active risks between shifts.',
    guideCount: 3,
    guidesHref: '/guides#shift-handover',
    toolName: 'Shift Handover Generator',
    toolHref: '/tools/shift-handover-generator',
    containerClasses: 'border-violet-200 bg-violet-50',
    iconClasses: 'bg-violet-600 text-white',
    countClasses: 'bg-violet-100 text-violet-700',
    linkClasses: 'text-violet-700 hover:text-violet-900',
  },
]

export default function ReportingCategories() {
  return (
    <section className='border-b border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Reporting Categories
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl'>
            Find the right reporting workflow for your team
          </h2>

          <p className='mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            Explore focused reporting resources for daily work, maintenance,
            incidents, project progress and operational shift handovers.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {reportingCategories.map((category) => (
            <article
              key={category.name}
              className={`flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 ${category.containerClasses}`}
            >
              <div className='flex items-start justify-between gap-4'>
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${category.iconClasses}`}
                >
                  {category.shortLabel}
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${category.countClasses}`}
                >
                  {category.guideCount}{' '}
                  {category.guideCount === 1 ? 'guide' : 'guides'}
                </span>
              </div>

              <h3 className='mt-6 text-2xl font-bold text-slate-950'>
                {category.name}
              </h3>

              <p className='mt-3 flex-1 text-sm leading-7 text-slate-600'>
                {category.description}
              </p>

              <div className='mt-7 border-t border-slate-900/10 pt-5'>
                <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Available tool
                </p>

                <Link
                  href={category.toolHref}
                  className='mt-2 block font-semibold text-slate-950 transition hover:text-blue-600'
                >
                  {category.toolName}
                </Link>
              </div>

              <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href={category.guidesHref}
                  className={`inline-flex items-center justify-center rounded-xl border border-current bg-white/70 px-4 py-3 text-sm font-semibold transition hover:bg-white ${category.linkClasses}`}
                >
                  View guides
                </Link>

                <Link
                  href={category.toolHref}
                  className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Open generator
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-10 flex justify-center'>
          <Link
            href='/guides'
            className='inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
          >
            Explore all 30 reporting guides →
          </Link>
        </div>
      </div>
    </section>
  )
}
