import Link from 'next/link'

const faqs = [
  {
    question: 'What is a shift handover report?',
    answer:
      'A shift handover report is a structured document used to transfer important operational information from one shift to the next.',
  },
  {
    question: 'What should a shift handover include?',
    answer:
      'It should include completed work, pending tasks, equipment status, incidents, risks and recommendations for the incoming shift.',
  },
  {
    question: 'Can I export the shift handover as PDF?',
    answer:
      'Yes. You can fill out the form, review the preview and export the handover report as a PDF.',
  },
  {
    question: 'Who can use this tool?',
    answer:
      'This tool is useful for supervisors, maintenance teams, mining operations, construction teams, logistics teams and field crews.',
  },
]

export default function ShiftHandoverSEO() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-20'>
      <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr]'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Shift Handover Guide
          </p>

          <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950'>
            Create structured shift handover reports
          </h2>

          <p className='mt-5 text-base leading-8 text-slate-600'>
            Shift handover reports help teams transfer important operational
            information between shifts, reduce communication gaps and maintain
            work continuity.
          </p>
        </div>

        <div className='space-y-8'>
          <article>
            <h3 className='text-xl font-bold text-slate-950'>
              What should be included?
            </h3>

            <p className='mt-3 leading-7 text-slate-600'>
              A good shift handover should include the outgoing and incoming
              shift, supervisor information, work completed, equipment status,
              pending tasks, incidents, risks and recommendations.
            </p>
          </article>

          <article>
            <h3 className='text-xl font-bold text-slate-950'>
              Why use a shift handover generator?
            </h3>

            <p className='mt-3 leading-7 text-slate-600'>
              A shift handover generator helps standardize communication, reduce
              missed information and create clear PDF reports for supervisors,
              contractors and operational teams.
            </p>
          </article>

          <article>
            <h3 className='text-xl font-bold text-slate-950'>
              Frequently asked questions
            </h3>

            <div className='mt-4 space-y-4'>
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className='rounded-2xl border border-slate-200 bg-white p-5'
                >
                  <h4 className='font-semibold text-slate-950'>
                    {faq.question}
                  </h4>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h3 className='text-xl font-bold text-slate-950'>
              Related shift handover resources
            </h3>

            <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/guides/how-to-write-a-shift-handover-report'
                className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                Read shift handover guide
              </Link>

              <Link
                href='/guides'
                className='inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
              >
                View all guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
