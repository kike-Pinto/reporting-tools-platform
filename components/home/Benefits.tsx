const benefits = [
  {
    title: 'Professional PDF reports',
    description:
      'Generate clean operational documents ready to share with supervisors, clients and teams.',
  },
  {
    title: 'Automatic KPI summaries',
    description:
      'Calculate useful operational metrics directly from the information entered in the form.',
  },
  {
    title: 'Reusable workflows',
    description:
      'Build multiple reporting tools using shared layouts, logic and export patterns.',
  },
  {
    title: 'No login required',
    description:
      'Use simple browser-based tools without creating an account or configuring complex systems.',
  },
  {
    title: 'Designed for field teams',
    description:
      'Useful for construction, mining, maintenance, logistics and industrial operations.',
  },
  {
    title: 'SEO-ready tool pages',
    description:
      'Each tool connects with guides, internal links and structured pages for organic growth.',
  },
]

export default function Benefits() {
  return (
    <section
      id='benefits'
      className='border-y border-slate-200 bg-slate-950 text-white'
    >
      <div className='mx-auto max-w-7xl px-6 py-24'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-300'>
            Benefits
          </p>

          <h2 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>
            Built to reduce repetitive reporting work
          </h2>

          <p className='mt-5 text-base leading-8 text-slate-300'>
            Replace manual Word reports, copy-paste workflows and inconsistent
            templates with focused reporting tools.
          </p>
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className='rounded-4xl border border-white/10 bg-white/3 p-6'
            >
              <div className='mb-5 h-10 w-10 rounded-2xl bg-blue-500/20' />

              <h3 className='text-lg font-bold'>{benefit.title}</h3>

              <p className='mt-3 text-sm leading-6 text-slate-300'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
