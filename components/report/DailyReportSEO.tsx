const faqs = [
  {
    question: 'What is a daily report?',
    answer:
      'A daily report is a structured document used to summarize work completed during a specific day or shift. It usually includes activities, manpower, progress, incidents, observations and pending tasks.',
  },
  {
    question: 'Who can use this daily report generator?',
    answer:
      'This tool is useful for supervisors, project coordinators, construction teams, mining operations, maintenance teams, logistics teams and contractors.',
  },
  {
    question: 'Can I export the daily report as PDF?',
    answer:
      'Yes. You can fill out the report form, preview the document and export it as a PDF directly from your browser.',
  },
  {
    question: 'Do I need an account?',
    answer:
      'No. The tool works directly in your browser and does not require login or account creation.',
  },
]

export default function DailyReportSEO() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-20'>
      <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr]'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Report Guide
          </p>

          <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950'>
            Create clear daily reports for operational teams
          </h2>

          <p className='mt-5 text-base leading-8 text-slate-600'>
            Daily reports help teams document what happened during a shift,
            track progress, record incidents and communicate pending work to the
            next team or supervisor.
          </p>
        </div>

        <div className='space-y-8'>
          <article>
            <h3 className='text-xl font-bold text-slate-950'>
              What should a daily report include?
            </h3>

            <p className='mt-3 leading-7 text-slate-600'>
              A good daily report should include the project name, date, shift,
              supervisor, completed activities, manpower, working hours,
              progress, incidents, observations and pending tasks. These details
              make the report easier to review and share.
            </p>
          </article>

          <article>
            <h3 className='text-xl font-bold text-slate-950'>
              Why use a daily report generator?
            </h3>

            <p className='mt-3 leading-7 text-slate-600'>
              A daily report generator helps reduce repetitive manual work,
              keeps reports consistent and makes it faster to create
              professional PDF documents for internal teams, clients or
              supervisors.
            </p>
          </article>

          <article>
            <h3 className='text-xl font-bold text-slate-950'>
              Common use cases
            </h3>

            <ul className='mt-3 grid gap-2 text-slate-600 sm:grid-cols-2'>
              <li>Construction daily reports</li>
              <li>Mining operations reports</li>
              <li>Maintenance shift reports</li>
              <li>Logistics operation summaries</li>
              <li>Contractor activity reports</li>
              <li>Supervisor handover notes</li>
            </ul>
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
        </div>
      </div>
    </section>
  )
}
