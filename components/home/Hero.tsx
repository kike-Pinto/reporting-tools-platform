import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

      <div className='relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center'>
        <div>
          <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
            Operational Reporting Tools
          </div>

          <h1 className='mt-8 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl'>
            Create professional operational reports in minutes
          </h1>

          <p className='mt-8 max-w-2xl text-lg leading-8 text-slate-600'>
            Generate structured daily reports, shift handovers and operational
            PDF documents for maintenance, construction, mining and industrial
            teams.
          </p>

          <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
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

          <div className='mt-14 grid gap-5 sm:grid-cols-3'>
            <div>
              <p className='text-3xl font-bold text-slate-950'>2</p>
              <p className='mt-1 text-sm text-slate-500'>Operational tools</p>
            </div>

            <div>
              <p className='text-3xl font-bold text-slate-950'>PDF</p>
              <p className='mt-1 text-sm text-slate-500'>Professional export</p>
            </div>

            <div>
              <p className='text-3xl font-bold text-slate-950'>SEO</p>
              <p className='mt-1 text-sm text-slate-500'>Structured guides</p>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute -inset-6 rounded-4xl bg-linear-to-br from-blue-100 via-slate-100 to-white blur-3xl' />

          <div className='relative rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60'>
            <div className='flex items-center justify-between border-b border-slate-200 pb-4'>
              <div>
                <p className='text-sm font-semibold text-slate-950'>
                  Daily Report Generator
                </p>

                <p className='mt-1 text-xs text-slate-500'>
                  Live operational preview
                </p>
              </div>

              <div className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                Ready
              </div>
            </div>

            <div className='mt-6 space-y-5'>
              <div className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-xs uppercase tracking-wide text-slate-500'>
                      Project
                    </p>

                    <p className='mt-1 font-semibold text-slate-950'>
                      Conveyor Maintenance Area 2
                    </p>
                  </div>

                  <div className='rounded-xl bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700'>
                    Day Shift
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-3'>
                <div className='rounded-2xl border border-slate-200 bg-white p-4'>
                  <p className='text-xs text-slate-500'>Activities</p>
                  <p className='mt-2 text-2xl font-bold text-slate-950'>12</p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-4'>
                  <p className='text-xs text-slate-500'>Progress</p>
                  <p className='mt-2 text-2xl font-bold text-slate-950'>78%</p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-4'>
                  <p className='text-xs text-slate-500'>Incidents</p>
                  <p className='mt-2 text-2xl font-bold text-slate-950'>1</p>
                </div>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-5'>
                <div className='mb-4 flex items-center justify-between'>
                  <p className='text-sm font-semibold text-slate-950'>
                    Activities Performed
                  </p>

                  <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                    Updated
                  </span>
                </div>

                <div className='space-y-3'>
                  <div className='flex items-start gap-3'>
                    <div className='mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500' />

                    <div>
                      <p className='text-sm font-medium text-slate-900'>
                        Conveyor alignment completed
                      </p>

                      <p className='mt-1 text-xs text-slate-500'>
                        Mechanical maintenance team
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='mt-1 h-2.5 w-2.5 rounded-full bg-amber-500' />

                    <div>
                      <p className='text-sm font-medium text-slate-900'>
                        Structural inspection in progress
                      </p>

                      <p className='mt-1 text-xs text-slate-500'>
                        Area transfer station
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='mt-1 h-2.5 w-2.5 rounded-full bg-blue-500' />

                    <div>
                      <p className='text-sm font-medium text-slate-900'>
                        PDF report ready for export
                      </p>

                      <p className='mt-1 text-xs text-slate-500'>
                        Reporting workflow completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='rounded-2xl bg-slate-900 px-5 py-4 text-white'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm font-semibold'>
                      Professional PDF Export
                    </p>

                    <p className='mt-1 text-xs text-slate-400'>
                      Ready to share with supervisors and teams
                    </p>
                  </div>

                  <div className='rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold'>
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
