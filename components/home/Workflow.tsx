const steps = [
  {
    title: 'Fill the report form',
    description:
      'Enter shift details, activities, pending tasks, incidents and operational notes.',
  },
  {
    title: 'Review the live preview',
    description:
      'Check KPIs, structured sections and report content before generating the final document.',
  },
  {
    title: 'Export a professional PDF',
    description:
      'Create a clean PDF report ready to share with teams, supervisors, contractors or clients.',
  },
]

export default function Workflow() {
  return (
    <section id='workflow' className='mx-auto max-w-7xl px-6 py-24'>
      <div className='max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
          Workflow
        </p>

        <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
          From operational notes to PDF report
        </h2>

        <p className='mt-5 text-base leading-8 text-slate-600'>
          A simple workflow designed for professionals who need fast, clean and
          repeatable reporting.
        </p>
      </div>

      <div className='mt-12 grid gap-6 lg:grid-cols-3'>
        {steps.map((step, index) => (
          <div
            key={step.title}
            className='relative rounded-4xl border border-slate-200 bg-white p-8 shadow-sm'
          >
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white'>
              {index + 1}
            </div>

            <h3 className='mt-8 text-xl font-bold text-slate-950'>
              {step.title}
            </h3>

            <p className='mt-3 text-sm leading-6 text-slate-600'>
              {step.description}
            </p>

            {index < steps.length - 1 && (
              <div className='absolute right-8 top-10 hidden text-3xl text-slate-300 lg:block'>
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
