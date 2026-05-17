import Link from 'next/link'

export default function CTA() {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24'>
        <div className='overflow-hidden rounded-4xl bg-slate-900'>
          <div className='grid gap-10 px-8 py-16 md:px-12 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-300'>
                Start creating reports
              </p>

              <h2 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
                Build professional operational reports without manual formatting
              </h2>

              <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
                Use focused reporting tools to generate structured documents,
                review live previews and export clean PDFs for your team.
              </p>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/4 p-6'>
              <p className='text-sm font-semibold text-white'>
                Available tools
              </p>

              <div className='mt-5 space-y-3'>
                <Link
                  href='/tools/daily-report-generator'
                  className='flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
                >
                  <span>Daily Report Generator</span>
                  <span>→</span>
                </Link>

                <Link
                  href='/tools/shift-handover-generator'
                  className='flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
                >
                  <span>Shift Handover Generator</span>
                  <span>→</span>
                </Link>

                <Link
                  href='/tools'
                  className='flex items-center justify-center rounded-2xl border border-white/15 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/6'
                >
                  View all tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
