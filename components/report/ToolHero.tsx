export default function ToolHero() {
  return (
    <section className='border-b border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16'>
        <div className='max-w-3xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600'>
            Operations Reporting Tool
          </p>

          <h1 className='text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Report Generator
          </h1>

          <p className='mt-5 text-lg leading-8 text-slate-600'>
            Create professional daily reports for operations, construction,
            mining and maintenance. Fill out a simple form, preview your report
            instantly, and export a clean PDF ready to share.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <a
              href='#report-tool'
              className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700'
            >
              Create report
            </a>

            <a
              href='#how-it-works'
              className='inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50'
            >
              View how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
