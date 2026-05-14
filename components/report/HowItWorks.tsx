const steps = [
  {
    label: 'Step 1',
    title: 'Fill out the form',
    description:
      'Add project details, activities, manpower, incidents and pending tasks.',
  },
  {
    label: 'Step 2',
    title: 'Review the preview',
    description:
      'Check your report in a clean professional layout before exporting.',
  },
  {
    label: 'Step 3',
    title: 'Export as PDF',
    description:
      'Download a PDF report ready to send to your team, client or supervisor.',
  },
]

export default function HowItWorks() {
  return (
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
        {steps.map((step) => (
          <div
            key={step.label}
            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
          >
            <p className='text-sm font-semibold text-blue-600'>{step.label}</p>
            <h3 className='mt-2 font-semibold text-slate-950'>{step.title}</h3>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
