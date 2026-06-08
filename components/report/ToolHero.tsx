export default function ToolHero() {
  return (
    <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

      <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20'>
        <div className='grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
          <div>
            <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
              Operations Reporting Tool
            </div>

            <h1 className='mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
              Daily Report Generator
            </h1>

            <p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
              Create professional daily reports for operations, construction,
              mining and maintenance. Fill out a structured form, preview your
              report instantly and export a clean PDF.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <a
                href='#report-tool'
                className='inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                Create report
              </a>

              <a
                href='/guides/how-to-write-a-daily-report'
                className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
              >
                Read guide
              </a>
            </div>

            <div className='mt-12 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                <p className='text-2xl font-bold text-slate-950'>PDF</p>
                <p className='mt-2 text-sm font-medium text-slate-700'>
                  Export ready
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                <p className='text-2xl font-bold text-slate-950'>KPI</p>
                <p className='mt-2 text-sm font-medium text-slate-700'>
                  Auto summary
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                <p className='text-2xl font-bold text-slate-950'>No</p>
                <p className='mt-2 text-sm font-medium text-slate-700'>
                  Sign-up required
                </p>
              </div>
            </div>
          </div>

          <div className='rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70'>
            <div className='flex items-center justify-between border-b border-slate-200 pb-4'>
              <div>
                <p className='text-sm font-semibold text-slate-950'>
                  Daily Report Preview
                </p>

                <p className='mt-1 text-xs text-slate-500'>
                  Professional PDF layout
                </p>
              </div>

              <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                Ready
              </span>
            </div>

            <div className='mt-6 space-y-4'>
              <div className='rounded-2xl bg-slate-50 p-5'>
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Project
                </p>
                <p className='mt-1 font-semibold text-slate-950'>
                  Conveyor Maintenance Area 2
                </p>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='rounded-2xl border border-slate-200 p-4'>
                  <p className='text-xs text-slate-500'>Total HH</p>
                  <p className='mt-2 text-2xl font-bold text-slate-950'>48</p>
                </div>

                <div className='rounded-2xl border border-slate-200 p-4'>
                  <p className='text-xs text-slate-500'>Progress</p>
                  <p className='mt-2 text-2xl font-bold text-slate-950'>72%</p>
                </div>
              </div>

              <div className='rounded-2xl border border-slate-200 p-5'>
                <p className='text-sm font-semibold text-slate-950'>
                  Activities performed
                </p>

                <div className='mt-4 space-y-3'>
                  <div className='flex items-start gap-3'>
                    <span className='mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500' />
                    <p className='text-sm text-slate-600'>
                      Equipment inspection completed
                    </p>
                  </div>

                  <div className='flex items-start gap-3'>
                    <span className='mt-1 h-2.5 w-2.5 rounded-full bg-blue-500' />
                    <p className='text-sm text-slate-600'>
                      Pipe installation in progress
                    </p>
                  </div>
                </div>
              </div>

              <div className='rounded-2xl bg-slate-900 px-5 py-4 text-white'>
                <p className='text-sm font-semibold'>PDF export available</p>
                <p className='mt-1 text-xs text-slate-400'>
                  Ready to share with supervisors and clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
