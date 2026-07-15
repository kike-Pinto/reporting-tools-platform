import Link from 'next/link'

const guideCategories = [
  {
    name: 'Daily Reporting',
    label: '12 guides',
    description:
      'Learn how to write daily work reports, employee updates, site reports, activity summaries and end-of-day reports.',
    topics: ['Daily report formats', 'Work report examples', 'Manager updates'],
    featuredGuide: 'How to Write a Daily Report',
    featuredGuideHref: '/guides/how-to-write-a-daily-report',
    categoryHref: '/guides#daily-reports',
    icon: 'DR',
    containerClasses: 'border-blue-200 bg-blue-50',
    iconClasses: 'bg-blue-600 text-white',
    labelClasses: 'bg-blue-100 text-blue-700',
    linkClasses: 'text-blue-700 hover:text-blue-900',
  },
  {
    name: 'Maintenance Reporting',
    label: '6 guides',
    description:
      'Learn how to document preventive maintenance, equipment repairs, inspection findings, parts and recommendations.',
    topics: [
      'Preventive maintenance',
      'Equipment reports',
      'Maintenance checklists',
    ],
    featuredGuide: 'How to Write a Maintenance Report',
    featuredGuideHref: '/guides/how-to-write-a-maintenance-report',
    categoryHref: '/guides#maintenance-reports',
    icon: 'MR',
    containerClasses: 'border-amber-200 bg-amber-50',
    iconClasses: 'bg-amber-500 text-white',
    labelClasses: 'bg-amber-100 text-amber-700',
    linkClasses: 'text-amber-700 hover:text-amber-900',
  },
  {
    name: 'Incident Reporting',
    label: '5 guides',
    description:
      'Learn how to document safety incidents, near misses, immediate controls, root causes and corrective actions.',
    topics: ['Incident examples', 'Near miss reports', 'Corrective actions'],
    featuredGuide: 'How to Write an Incident Report',
    featuredGuideHref: '/guides/how-to-write-an-incident-report',
    categoryHref: '/guides#incident-reports',
    icon: 'IR',
    containerClasses: 'border-red-200 bg-red-50',
    iconClasses: 'bg-red-500 text-white',
    labelClasses: 'bg-red-100 text-red-700',
    linkClasses: 'text-red-700 hover:text-red-900',
  },
  {
    name: 'Project Progress',
    label: '4 guides',
    description:
      'Learn how to report weekly and monthly progress, project health, schedule variance, risks and next priorities.',
    topics: ['Weekly progress', 'Monthly reporting', 'Project status'],
    featuredGuide: 'How to Write a Progress Report',
    featuredGuideHref: '/guides/how-to-write-a-progress-report',
    categoryHref: '/guides#progress-reports',
    icon: 'PR',
    containerClasses: 'border-emerald-200 bg-emerald-50',
    iconClasses: 'bg-emerald-600 text-white',
    labelClasses: 'bg-emerald-100 text-emerald-700',
    linkClasses: 'text-emerald-700 hover:text-emerald-900',
  },
  {
    name: 'Shift Handover',
    label: '3 guides',
    description:
      'Learn how to transfer completed work, equipment condition, open tasks, restrictions and risks between shifts.',
    topics: ['Handover structure', 'Practical examples', 'Handover checklists'],
    featuredGuide: 'How to Write a Shift Handover Report',
    featuredGuideHref: '/guides/how-to-write-a-shift-handover-report',
    categoryHref: '/guides#shift-handover',
    icon: 'SH',
    containerClasses: 'border-violet-200 bg-violet-50',
    iconClasses: 'bg-violet-600 text-white',
    labelClasses: 'bg-violet-100 text-violet-700',
    linkClasses: 'text-violet-700 hover:text-violet-900',
  },
]

export default function GuideCategories() {
  return (
    <section className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
        <div className='grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end'>
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
              Browse 30 focused resources covering report structure, practical
              examples, reusable formats, operational checklists and common
              reporting mistakes.
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

        <div className='mt-12 grid gap-5 lg:grid-cols-2'>
          {guideCategories.map((category, index) => (
            <article
              key={category.name}
              className={`group flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7 ${
                category.containerClasses
              } ${index === guideCategories.length - 1 ? 'lg:col-span-2' : ''}`}
            >
              <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
                <div className='flex items-start gap-4'>
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${category.iconClasses}`}
                  >
                    {category.icon}
                  </div>

                  <div>
                    <p className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
                      Learning category
                    </p>

                    <h3 className='mt-2 text-2xl font-bold text-slate-950'>
                      {category.name}
                    </h3>
                  </div>
                </div>

                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${category.labelClasses}`}
                >
                  {category.label}
                </span>
              </div>

              <p className='mt-5 max-w-3xl text-sm leading-7 text-slate-600'>
                {category.description}
              </p>

              <div className='mt-6 grid gap-3 sm:grid-cols-3'>
                {category.topics.map((topic) => (
                  <div
                    key={topic}
                    className='rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700'
                  >
                    {topic}
                  </div>
                ))}
              </div>

              <div className='mt-7 flex flex-1 flex-col justify-end border-t border-slate-900/10 pt-5'>
                <p className='text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Start here
                </p>

                <Link
                  href={category.featuredGuideHref}
                  className='mt-2 text-base font-semibold text-slate-950 transition hover:text-blue-600'
                >
                  {category.featuredGuide} →
                </Link>

                <div className='mt-5'>
                  <Link
                    href={category.categoryHref}
                    className={`inline-flex items-center text-sm font-semibold transition ${category.linkClasses}`}
                  >
                    Explore {category.label} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-12 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8'>
          <div className='grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-300'>
                Learn and Apply
              </p>

              <h3 className='mt-3 text-3xl font-bold tracking-tight'>
                Read the guide, then build the report
              </h3>

              <p className='mt-4 max-w-3xl leading-7 text-slate-300'>
                Every reporting category connects practical learning resources
                with a browser-based generator, helping teams move from report
                structure to a finished PDF document.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row lg:flex-col'>
              <Link
                href='/guides'
                className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
              >
                Open guide library
              </Link>

              <Link
                href='/tools'
                className='inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
              >
                Open reporting tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
