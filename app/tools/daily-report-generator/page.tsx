export default function DailyReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
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
              mining and maintenance. Fill out a simple form, preview your
              report instantly, and export a clean PDF ready to share.
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

      <section className='mx-auto max-w-7xl px-6 py-8'>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
            <h2 className='text-base font-semibold text-slate-950'>
              No sign-up required
            </h2>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Create daily reports directly in your browser without creating an
              account.
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
            <h2 className='text-base font-semibold text-slate-950'>
              Professional PDF export
            </h2>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Generate clean reports for supervisors, clients, contractors or
              internal teams.
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
            <h2 className='text-base font-semibold text-slate-950'>
              Built for field operations
            </h2>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Designed for daily work, shift updates, activities, incidents and
              progress tracking.
            </p>
          </div>
        </div>
      </section>

      <section id='report-tool' className='mx-auto max-w-7xl px-6 py-8'>
        <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <div className='mb-6'>
              <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
                Report form
              </p>
              <h2 className='mt-2 text-2xl font-bold text-slate-950'>
                Report details
              </h2>
              <p className='mt-2 text-sm leading-6 text-slate-600'>
                Start with the basic information for your daily report.
              </p>
            </div>

            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Project / Site name
                </label>
                <input
                  type='text'
                  placeholder='Example: Plant Maintenance Area 2'
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Company
                </label>
                <input
                  type='text'
                  placeholder='Example: ABC Contractors'
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Location
                </label>
                <input
                  type='text'
                  placeholder='Example: Mine Site / Building / Area'
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Report date
                </label>
                <input
                  type='date'
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Shift
                </label>
                <select className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'>
                  <option>Day Shift</option>
                  <option>Night Shift</option>
                </select>
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700'>
                  Supervisor
                </label>
                <input
                  type='text'
                  placeholder='Example: John Smith'
                  className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                />
              </div>
            </div>

            <div className='mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5'>
              <h3 className='text-base font-semibold text-slate-950'>
                Next step
              </h3>
              <p className='mt-2 text-sm leading-6 text-slate-600'>
                In the next step we will add the daily summary, activities
                table, safety section and automatic KPI calculations.
              </p>
            </div>
          </div>

          <aside className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:self-start'>
            <div className='mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-blue-600'>
                  Live Preview
                </p>
                <h2 className='mt-2 text-xl font-bold text-slate-950'>
                  Daily Report
                </h2>
              </div>

              <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                PDF Preview
              </span>
            </div>

            <div className='space-y-5'>
              <div>
                <p className='text-xs uppercase tracking-wide text-slate-500'>
                  Project
                </p>
                <p className='mt-1 text-sm font-semibold text-slate-900'>
                  Plant Maintenance Area 2
                </p>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs text-slate-500'>Total HH</p>
                  <p className='mt-1 text-2xl font-bold text-slate-950'>0</p>
                </div>

                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs text-slate-500'>Progress</p>
                  <p className='mt-1 text-2xl font-bold text-slate-950'>0%</p>
                </div>

                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs text-slate-500'>Activities</p>
                  <p className='mt-1 text-2xl font-bold text-slate-950'>0</p>
                </div>

                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs text-slate-500'>Incidents</p>
                  <p className='mt-1 text-2xl font-bold text-slate-950'>0</p>
                </div>
              </div>

              <div className='rounded-2xl border border-slate-200'>
                <div className='border-b border-slate-200 bg-slate-50 px-4 py-3'>
                  <h3 className='text-sm font-semibold text-slate-950'>
                    Activities performed
                  </h3>
                </div>

                <div className='p-4 text-sm text-slate-500'>
                  Activities will appear here as you complete the form.
                </div>
              </div>

              <button className='w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
                Download PDF
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section id='how-it-works' className='mx-auto max-w-7xl px-6 py-16'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-wide text-blue-600'>
            How it works
          </p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight text-slate-950'>
            Create a daily report in three simple steps
          </h2>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <p className='text-sm font-semibold text-blue-600'>Step 1</p>
            <h3 className='mt-2 font-semibold text-slate-950'>
              Fill out the form
            </h3>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Add project details, activities, manpower, incidents and pending
              tasks.
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <p className='text-sm font-semibold text-blue-600'>Step 2</p>
            <h3 className='mt-2 font-semibold text-slate-950'>
              Review the preview
            </h3>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Check your report in a clean professional layout before exporting.
            </p>
          </div>

          <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
            <p className='text-sm font-semibold text-blue-600'>Step 3</p>
            <h3 className='mt-2 font-semibold text-slate-950'>Export as PDF</h3>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              Download a PDF report ready to send to your team, client or
              supervisor.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
