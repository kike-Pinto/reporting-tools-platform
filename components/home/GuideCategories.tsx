import Link from 'next/link'

const guideCategories = [
  {
    name: 'Daily Reporting',
    label: '12 guides',
    description:
      'Daily work reports, employee updates, site reports and management summaries.',
    topics: ['Daily report formats', 'Work report examples', 'Manager updates'],
    featuredGuide: 'How to Write a Daily Report',
    featuredGuideHref: '/guides/how-to-write-a-daily-report',
    categoryHref: '/guides/daily-reports',
    icon: 'DR',
    containerClasses: 'border-blue-200 bg-blue-50',
    iconClasses: 'bg-blue-600 text-white',
    labelClasses: 'bg-blue-100 text-blue-700',
    topicClasses: 'border-blue-100 bg-white/80',
    linkClasses: 'text-blue-700 hover:text-blue-900',
  },
  {
    name: 'Maintenance Reporting',
    label: '6 guides',
    description:
      'Equipment inspections, preventive maintenance, repairs and service documentation.',
    topics: [
      'Preventive maintenance',
      'Equipment reports',
      'Maintenance checklists',
    ],
    featuredGuide: 'How to Write a Maintenance Report',
    featuredGuideHref: '/guides/how-to-write-a-maintenance-report',
    categoryHref: '/guides/maintenance-reports',
    icon: 'MR',
    containerClasses: 'border-amber-200 bg-amber-50',
    iconClasses: 'bg-amber-500 text-white',
    labelClasses: 'bg-amber-100 text-amber-700',
    topicClasses: 'border-amber-100 bg-white/80',
    linkClasses: 'text-amber-700 hover:text-amber-900',
  },
  {
    name: 'Incident Reporting',
    label: '5 guides',
    description:
      'Safety incidents, near misses, root causes and corrective actions.',
    topics: ['Incident examples', 'Near miss reports', 'Corrective actions'],
    featuredGuide: 'How to Write an Incident Report',
    featuredGuideHref: '/guides/how-to-write-an-incident-report',
    categoryHref: '/guides/incident-reports',
    icon: 'IR',
    containerClasses: 'border-red-200 bg-red-50',
    iconClasses: 'bg-red-500 text-white',
    labelClasses: 'bg-red-100 text-red-700',
    topicClasses: 'border-red-100 bg-white/80',
    linkClasses: 'text-red-700 hover:text-red-900',
  },
  {
    name: 'Project Progress',
    label: '4 guides',
    description:
      'Weekly and monthly progress, project health, schedule variance and risks.',
    topics: ['Weekly progress', 'Monthly reporting', 'Project status'],
    featuredGuide: 'How to Write a Progress Report',
    featuredGuideHref: '/guides/how-to-write-a-progress-report',
    categoryHref: '/guides/progress-reports',
    icon: 'PR',
    containerClasses: 'border-emerald-200 bg-emerald-50',
    iconClasses: 'bg-emerald-600 text-white',
    labelClasses: 'bg-emerald-100 text-emerald-700',
    topicClasses: 'border-emerald-100 bg-white/80',
    linkClasses: 'text-emerald-700 hover:text-emerald-900',
  },
  {
    name: 'Shift Handover',
    label: '3 guides',
    description:
      'Completed work, equipment condition, pending tasks and shift risks.',
    topics: ['Handover structure', 'Practical examples', 'Handover checklists'],
    featuredGuide: 'How to Write a Shift Handover Report',
    featuredGuideHref: '/guides/how-to-write-a-shift-handover-report',
    categoryHref: '/guides#shift-handover',
    icon: 'SH',
    containerClasses: 'border-violet-200 bg-violet-50',
    iconClasses: 'bg-violet-600 text-white',
    labelClasses: 'bg-violet-100 text-violet-700',
    topicClasses: 'border-violet-100 bg-white/80',
    linkClasses: 'text-violet-700 hover:text-violet-900',
  },
]

export default function GuideCategories() {
  return (
    <section className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
        <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
              Reporting Knowledge Base
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl'>
              Build better reports with practical guides
            </h2>
          </div>

          <div>
            <p className='max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
              Browse 30 focused resources with practical formats, examples,
              checklists and reporting best practices.
            </p>

            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/guides'
                className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                Browse all guides
              </Link>

              <Link
                href='/tools'
                className='inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
              >
                Explore report generators
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2'>
          {guideCategories.map((category, index) => (
            <article
              key={category.name}
              className={`group flex h-full flex-col rounded-3xl border p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6 ${
                category.containerClasses
              } ${index === guideCategories.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <div className='flex items-start justify-between gap-4'>
                <div className='flex min-w-0 items-start gap-4'>
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xs font-bold ${category.iconClasses}`}
                  >
                    {category.icon}
                  </div>

                  <div className='min-w-0'>
                    <p className='text-xs font-semibold uppercase tracking-[0.14em] text-slate-500'>
                      Learning category
                    </p>

                    <h3 className='mt-1.5 text-xl font-bold text-slate-950 sm:text-2xl'>
                      {category.name}
                    </h3>
                  </div>
                </div>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${category.labelClasses}`}
                >
                  {category.label}
                </span>
              </div>

              <p className='mt-4 text-sm leading-6 text-slate-600'>
                {category.description}
              </p>

              <div className='mt-5 flex flex-wrap gap-2'>
                {category.topics.map((topic) => (
                  <span
                    key={topic}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium text-slate-700 ${category.topicClasses}`}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className='mt-6 flex flex-1 flex-col justify-end border-t border-slate-900/10 pt-5'>
                <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Recommended guide
                </p>

                <Link
                  href={category.featuredGuideHref}
                  className='mt-2 font-semibold text-slate-950 transition hover:text-blue-600'
                >
                  {category.featuredGuide} →
                </Link>

                <Link
                  href={category.categoryHref}
                  className={`mt-4 inline-flex w-fit items-center text-sm font-semibold transition ${category.linkClasses}`}
                >
                  Explore {category.label} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
