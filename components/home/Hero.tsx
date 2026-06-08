import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

      <div className='relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14 lg:py-24'>
        <div>
          <div className='inline-flex max-w-full items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm'>
            Operational Reporting Tools
          </div>

          <h1 className='mt-7 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
            Create professional operational reports in minutes
          </h1>

          <p className='mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            Create structured reports with live previews, automatic KPIs and PDF
            export for maintenance, construction, mining and industrial teams.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
            <Link
              href='/tools'
              className='inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'
            >
              Explore Tools
            </Link>

            <Link
              href='/guides'
              className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
            >
              Read Guides
            </Link>
          </div>

          <div className='mt-10 grid gap-3 sm:grid-cols-3 lg:mt-14 lg:gap-4'>
            <div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5'>
              <p className='text-2xl font-bold text-slate-950 sm:text-3xl'>5</p>

              <p className='mt-2 text-sm font-medium text-slate-700'>
                Operational tools
              </p>

              <p className='mt-1 text-xs leading-5 text-slate-500'>
                Daily, shift, maintenance, incident and progress reports.
              </p>
            </div>

            <div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5'>
              <p className='text-2xl font-bold text-slate-950 sm:text-3xl'>
                PDF
              </p>

              <p className='mt-2 text-sm font-medium text-slate-700'>
                Professional export
              </p>

              <p className='mt-1 text-xs leading-5 text-slate-500'>
                Generate structured printable documents.
              </p>
            </div>

            <div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5'>
              <p className='text-2xl font-bold text-slate-950 sm:text-3xl'>
                SEO
              </p>

              <p className='mt-2 text-sm font-medium text-slate-700'>
                Structured guides
              </p>

              <p className='mt-1 text-xs leading-5 text-slate-500'>
                Connected content for organic growth.
              </p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute -inset-4 rounded-4xl bg-linear-to-br from-blue-100 via-slate-100 to-white blur-3xl sm:-inset-6' />

          <div className='relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/60 sm:rounded-4xl sm:p-6'>
            <div className='flex items-start justify-between gap-4 border-b border-slate-200 pb-4'>
              <div>
                <p className='text-sm font-semibold text-slate-950'>
                  Reporting Tools Platform
                </p>

                <p className='mt-1 text-xs text-slate-500'>
                  Multi-tool operational reporting
                </p>
              </div>

              <div className='shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                Ready
              </div>
            </div>

            <div className='mt-5 space-y-4 sm:mt-6 sm:space-y-5'>
              <div className='rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5'>
                <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                  <div>
                    <p className='text-xs uppercase tracking-wide text-slate-500'>
                      Project
                    </p>

                    <p className='mt-1 text-sm font-semibold text-slate-950 sm:text-base'>
                      Conveyor Upgrade Project
                    </p>
                  </div>

                  <div className='w-fit rounded-xl bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700'>
                    Day Shift
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-2 sm:gap-3'>
                <div className='rounded-2xl border border-slate-200 bg-white p-3 sm:p-4'>
                  <p className='text-[11px] text-slate-500 sm:text-xs'>
                    Activities
                  </p>
                  <p className='mt-2 text-xl font-bold text-slate-950 sm:text-2xl'>
                    12
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-3 sm:p-4'>
                  <p className='text-[11px] text-slate-500 sm:text-xs'>
                    Progress
                  </p>
                  <p className='mt-2 text-xl font-bold text-slate-950 sm:text-2xl'>
                    78%
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-3 sm:p-4'>
                  <p className='text-[11px] text-slate-500 sm:text-xs'>
                    Incidents
                  </p>
                  <p className='mt-2 text-xl font-bold text-slate-950 sm:text-2xl'>
                    1
                  </p>
                </div>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-4 sm:p-5'>
                <div className='mb-4 flex items-center justify-between gap-3'>
                  <p className='text-sm font-semibold text-slate-950'>
                    Activities Performed
                  </p>

                  <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                    Updated
                  </span>
                </div>

                <div className='space-y-3'>
                  <ActivityItem
                    color='bg-emerald-500'
                    title='Conveyor alignment completed'
                    subtitle='Mechanical maintenance team'
                  />

                  <ActivityItem
                    color='bg-amber-500'
                    title='Structural inspection in progress'
                    subtitle='Area transfer station'
                  />

                  <ActivityItem
                    color='bg-blue-500'
                    title='PDF report ready for export'
                    subtitle='Reporting workflow completed'
                  />
                </div>
              </div>

              <div className='rounded-2xl bg-slate-900 px-4 py-4 text-white sm:px-5'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <p className='text-sm font-semibold'>
                      Professional PDF Export
                    </p>

                    <p className='mt-1 text-xs leading-5 text-slate-400'>
                      Ready to export and share across reporting workflows
                    </p>
                  </div>

                  <div className='shrink-0 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold'>
                    PDF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ActivityItem({
  color,
  title,
  subtitle,
}: {
  color: string
  title: string
  subtitle: string
}) {
  return (
    <div className='flex items-start gap-3'>
      <div className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />

      <div>
        <p className='text-sm font-medium text-slate-900'>{title}</p>

        <p className='mt-1 text-xs text-slate-500'>{subtitle}</p>
      </div>
    </div>
  )
}
