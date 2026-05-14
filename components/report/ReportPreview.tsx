export default function ReportPreview() {
  return (
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
  )
}
