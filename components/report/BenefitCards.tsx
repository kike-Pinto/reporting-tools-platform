const benefits = [
  {
    title: 'No sign-up required',
    description:
      'Create daily reports directly in your browser without creating an account.',
  },
  {
    title: 'Professional PDF export',
    description:
      'Generate clean reports for supervisors, clients, contractors or internal teams.',
  },
  {
    title: 'Built for field operations',
    description:
      'Designed for daily work, shift updates, activities, incidents and progress tracking.',
  },
]

export default function BenefitCards() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-8'>
      <div className='grid gap-4 md:grid-cols-3'>
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'
          >
            <h2 className='text-base font-semibold text-slate-950'>
              {benefit.title}
            </h2>
            <p className='mt-2 text-sm leading-6 text-slate-600'>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
