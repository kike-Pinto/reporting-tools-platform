import Link from 'next/link'

export default function Hero() {
  return (
    <section className='bg-white'>
      <div className='mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Reporting Automation Platform
          </p>

          <h1 className='mt-5 text-5xl font-bold tracking-tight text-slate-950'>
            Create professional operational reports in minutes
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
            Generate daily reports, shift handovers, maintenance reports and
            operational PDFs with clean layouts, automatic KPIs and reusable
            workflows.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Link
              href='/tools/daily-report-generator'
              className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
            >
              Open Daily Report Generator
            </Link>

            <a
              href='#tools'
              className='inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
            >
              Explore platform
            </a>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm'>
          <div className='space-y-5'>
            <div className='rounded-2xl border border-slate-200 bg-white p-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-xs uppercase tracking-wide text-slate-500'>
                    Daily Report
                  </p>

                  <h3 className='mt-1 text-lg font-bold text-slate-950'>
                    Operations Summary
                  </h3>
                </div>

                <span className='rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700'>
                  Generated
                </span>
              </div>

              <div className='mt-5 grid grid-cols-2 gap-3'>
                <div className='rounded-xl bg-slate-50 p-4'>
                  <p className='text-xs text-slate-500'>Total HH</p>
                  <p className='mt-1 text-2xl font-bold text-slate-950'>132</p>
                </div>

                <div className='rounded-xl bg-slate-50 p-4'>
                  <p className='text-xs text-slate-500'>Progress</p>
                  <p className='mt-1 text-2xl font-bold text-slate-950'>78%</p>
                </div>
              </div>
            </div>

            <div className='rounded-2xl border border-slate-200 bg-white p-5'>
              <p className='text-sm font-semibold text-slate-950'>
                Professional PDF export
              </p>

              <p className='mt-2 text-sm leading-6 text-slate-600'>
                Generate clean operational reports ready to send to supervisors,
                contractors and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
