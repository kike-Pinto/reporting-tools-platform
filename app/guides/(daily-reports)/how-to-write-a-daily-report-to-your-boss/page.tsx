import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Daily Report to Your Boss',
  description:
    'Learn how to write a clear daily report to your boss or manager with examples, structure, practical tips and a professional report generator.',
  keywords: [
    'how to write a daily report to your boss',
    'how to write daily report to boss',
    'how to send daily report to manager',
    'daily report to manager',
    'daily status report to manager',
    'daily report to boss sample',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-a-daily-report-to-your-boss',
  },
}

const reportSections = [
  'Date and work area',
  'Work completed today',
  'Progress or results',
  'Problems, blockers or delays',
  'Pending tasks',
  'Next steps',
  'Support or decisions needed',
  'Important incidents or observations',
]

const faqs = [
  {
    question: 'How do I write a daily report to my boss?',
    answer:
      'Start with the date and work area, summarize the work completed, mention problems or delays, identify pending tasks and explain whether any decision or support is required.',
  },
  {
    question: 'How long should a daily report to a manager be?',
    answer:
      'It should be short enough to review quickly. A simple report may be a few paragraphs, while an operational report may require one structured page with activities, progress and pending actions.',
  },
  {
    question: 'Should I include problems in my daily report?',
    answer:
      'Yes. Problems, delays and risks should be reported clearly, especially when they affect deadlines, costs, safety or the next workday.',
  },
  {
    question: 'Can I send a daily report as a PDF?',
    answer:
      'Yes. A PDF preserves the report format and makes it easier to archive, review and share with managers, clients or supervisors.',
  },
]

export default function DailyReportToBossPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Daily Report to Your Boss
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A daily report to your boss should summarize the most important
            information from the workday. It should explain what was completed,
            what problems occurred, what remains pending and whether any support
            or decision is required.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to prepare a professional report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Daily Report Generator to organize completed work,
              progress, incidents and pending tasks with live preview and PDF
              export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto'
              >
                Open Daily Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a daily report to your boss?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily report to a boss or manager is a concise summary of the
              work completed during a day or shift. It gives management
              visibility into progress, problems, risks and upcoming work
              without requiring a long meeting or multiple messages.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should the report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              The report should focus on information that helps your manager
              understand the current situation and make decisions.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportSections.map((item) => (
                <div
                  key={item}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <p className='font-medium text-slate-900'>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Daily report to boss example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Daily Work Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> July 10, 2026
                </p>

                <p>
                  <strong>Work area:</strong> Maintenance Area 2
                </p>

                <p>
                  <strong>Completed today:</strong> The team completed equipment
                  inspection, replaced damaged components and updated the work
                  area checklist.
                </p>

                <p>
                  <strong>Progress:</strong> The planned maintenance tasks are
                  approximately 80% complete.
                </p>

                <p>
                  <strong>Issues:</strong> One access restriction delayed the
                  start of work by approximately 30 minutes.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete final verification
                  and monitor equipment condition during the next shift.
                </p>

                <p>
                  <strong>Support needed:</strong> Approval is required to
                  schedule an additional inspection tomorrow morning.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write the report step by step
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Start with completed work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain the most important activities completed during the
                  day. Use specific actions and results instead of vague
                  descriptions.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Report problems and delays
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Mention blockers, incidents or deviations that affected the
                  work plan. Explain their operational impact when relevant.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Define pending work and next steps
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Describe what remains unfinished, who should continue the work
                  and what is expected during the next day or shift.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Request decisions when necessary
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Clearly state whether management approval, additional
                  resources or another decision is needed.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Tips for writing to a manager
            </h2>

            <ul className='mt-5 space-y-3 text-sm leading-6 text-slate-600'>
              <li>1. Put the most important information first.</li>
              <li>2. Use short sections instead of long paragraphs.</li>
              <li>3. Include numbers, percentages or hours when useful.</li>
              <li>4. Mention blockers, delays and incidents clearly.</li>
              <li>5. Separate completed work from pending work.</li>
              <li>6. Ask for support only when a decision is required.</li>
            </ul>
          </section>

          <RelatedGuides
            currentHref='/guides/how-to-write-a-daily-report-to-your-boss'
            category='Daily Reports'
            title='Related daily report guides'
          />

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Frequently asked questions
            </h2>

            <div className='mt-6 space-y-4'>
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-6'
                >
                  <h3 className='text-lg font-bold text-slate-950'>
                    {faq.question}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white sm:p-8'>
            <h2 className='text-3xl font-bold'>Create a daily report faster</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create structured reports with
              activities, progress, incidents, pending tasks, live preview and
              PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'
              >
                Open Daily Report Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
