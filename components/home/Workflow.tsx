const steps = [
  {
    title: 'Fill the report form',
    description:
      'Add activities, manpower, progress, incidents and observations.',
  },

  {
    title: 'Review KPIs and preview',
    description:
      'Automatically visualize progress, completed activities and operational metrics.',
  },

  {
    title: 'Export professional PDF',
    description:
      'Generate a clean document ready to share with teams, supervisors or clients.',
  },
]

export default function Workflow() {
  return (
    <section id='workflow' className='mx-auto max-w-7xl px-6 py-20'>
      <div className='max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
          Workflow
        </p>

        <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950'>
          Simple reporting workflow
        </h2>
      </div>

      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {steps.map((step, index) => (
          <div
            key={step.title}
            className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white'>
              {index + 1}
            </div>

            <h3 className='mt-6 text-xl font-bold text-slate-950'>
              {step.title}
            </h3>

            <p className='mt-3 text-sm leading-6 text-slate-600'>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
