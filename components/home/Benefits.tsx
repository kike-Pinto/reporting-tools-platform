const benefits = [
  'Professional PDF reports',
  'Operational KPI summaries',
  'Reusable reporting workflows',
  'Fast report generation',
  'Designed for industrial teams',
  'Clean layouts for supervisors and clients',
]

export default function Benefits() {
  return (
    <section id='benefits' className='border-y border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Benefits
          </p>

          <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950'>
            Built to simplify repetitive reporting tasks
          </h2>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
            >
              <p className='font-medium text-slate-900'>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
