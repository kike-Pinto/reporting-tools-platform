import Link from 'next/link'

export default function CTA() {
  return (
    <section className='bg-slate-900'>
      <div className='mx-auto max-w-5xl px-6 py-20 text-center'>
        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-300'>
          Start creating reports
        </p>

        <h2 className='mt-4 text-4xl font-bold tracking-tight text-white'>
          Generate professional operational reports today
        </h2>

        <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
          Create daily reports, export PDFs and simplify operational reporting
          workflows with reusable tools.
        </p>

        <div className='mt-10'>
          <Link
            href='/tools/daily-report-generator'
            className='inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
          >
            Open Daily Report Generator
          </Link>
        </div>
      </div>
    </section>
  )
}
