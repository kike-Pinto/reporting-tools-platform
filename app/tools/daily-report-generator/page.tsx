export default function DailyReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 px-6 py-10 text-slate-900'>
      <section className='mx-auto max-w-6xl'>
        <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
          Operations Reporting Tool
        </p>

        <h1 className='mt-3 text-4xl font-bold tracking-tight text-slate-950'>
          Daily Report Generator
        </h1>

        <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-600'>
          Create professional daily reports for operations, construction, mining
          and maintenance. Fill out a simple form, preview your report, and
          export a clean PDF.
        </p>

        <div className='mt-10 grid gap-6 lg:grid-cols-2'>
          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-bold text-slate-950'>Report form</h2>
            <p className='mt-2 text-sm text-slate-600'>
              The report form will be built here in the next step.
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-xl font-bold text-slate-950'>Live preview</h2>
            <p className='mt-2 text-sm text-slate-600'>
              The PDF preview will appear here.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
