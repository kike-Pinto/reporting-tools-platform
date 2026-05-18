const benefits = [
  {
    icon: 'No',
    title: 'No sign-up required',
    description:
      'Create daily reports directly in your browser without creating an account.',
  },
  {
    icon: 'PDF',
    title: 'Professional PDF export',
    description:
      'Generate clean reports for supervisors, clients, contractors or internal teams.',
  },
  {
    icon: 'Ops',
    title: 'Built for field operations',
    description:
      'Designed for daily work, shift updates, activities, incidents and progress tracking.',
  },
]

export default function BenefitCards() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-14'>
      <div className='grid gap-5 md:grid-cols-3'>
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className='rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-700'>
              {benefit.icon}
            </div>

            <h2 className='mt-6 text-lg font-bold text-slate-950'>
              {benefit.title}
            </h2>

            <p className='mt-3 text-sm leading-6 text-slate-600'>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
