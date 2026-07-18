import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'End of Day Report: Format, Example and Guide',
  description:
    'Learn how to write an end of day report with completed work, progress, blockers, pending tasks, next steps and a practical example.',
  keywords: [
    'end of day report',
    'end of day report example',
    'end of day report format',
    'end of day work report',
    'end of shift report',
    'daily end of day report',
    'end of day status report',
    'how to write an end of day report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/end-of-day-report',
  },
}

const endOfDaySections = [
  {
    title: 'Completed work',
    description:
      'Summarize the most important activities, tasks and deliverables completed during the day.',
  },
  {
    title: 'Progress achieved',
    description:
      'Include percentages, quantities, hours, milestones or other measurable results.',
  },
  {
    title: 'Issues and blockers',
    description:
      'Explain delays, incidents, restrictions or problems that affected the work plan.',
  },
  {
    title: 'Pending tasks',
    description:
      'Identify unfinished activities and explain why they remain open.',
  },
  {
    title: 'Next steps',
    description:
      'Describe the priorities and planned activities for the next day or shift.',
  },
  {
    title: 'Support required',
    description:
      'State whether approval, resources, access or management decisions are needed.',
  },
]

const endOfDayMistakes = [
  {
    title: 'Writing only a task list',
    description:
      'Include results, progress and operational impact instead of listing task names without context.',
  },
  {
    title: 'Leaving blockers unexplained',
    description:
      'Describe what caused the delay and whether it affects the next workday.',
  },
  {
    title: 'Not separating pending work',
    description:
      'Keep unfinished tasks separate from completed activities so the next priorities are clear.',
  },
  {
    title: 'Sending the report too late',
    description:
      'Prepare the report while the workday details are still fresh and share it at a consistent time.',
  },
]

const faqs = [
  {
    question: 'What is an end of day report?',
    answer:
      'An end of day report is a concise summary of completed work, progress, problems, pending tasks and next steps prepared at the end of a workday or shift.',
  },
  {
    question: 'Who should prepare an end of day report?',
    answer:
      'Employees, supervisors, contractors, project coordinators, maintenance teams and field crews may prepare end of day reports.',
  },
  {
    question: 'How long should an end of day report be?',
    answer:
      'It should be short enough to review quickly. A structured one-page report is often sufficient for most work environments.',
  },
  {
    question:
      'What is the difference between an end of day report and a daily report?',
    answer:
      'They are very similar. An end of day report emphasizes the final status at the end of the workday, while a daily report may be prepared at another point during the day or shift.',
  },
  {
    question: 'Can an end of day report be exported as PDF?',
    answer:
      'Yes. PDF export preserves the structure and makes the report easier to share and archive.',
  },
]

export default function EndOfDayReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            End of Day Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            End of Day Report: Format, Example and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            An end of day report summarizes what was completed, what progress
            was achieved, what problems occurred and what work should continue
            during the next day or shift.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create an end of day report quickly?
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
              What is an end of day report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              An end of day report is a structured work summary prepared before
              the workday or shift finishes. It gives managers, supervisors and
              incoming teams a clear picture of current progress, open issues
              and the activities that require follow-up.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should an end of day report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {endOfDaySections.map((section) => (
                <div
                  key={section.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{section.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              End of day report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                End of Day Work Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> July 12, 2026
                </p>

                <p>
                  <strong>Work area:</strong> Maintenance Area 2
                </p>

                <p>
                  <strong>Completed work:</strong> The team completed the
                  planned inspection, replaced one damaged roller and updated
                  the equipment service record.
                </p>

                <p>
                  <strong>Progress:</strong> Approximately 90% of the planned
                  maintenance scope is complete.
                </p>

                <p>
                  <strong>Issues:</strong> Operational testing started later
                  than planned because access authorization was delayed.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete final testing and
                  monitor vibration during equipment startup.
                </p>

                <p>
                  <strong>Next steps:</strong> The next shift will complete
                  testing and confirm equipment availability.
                </p>

                <p>
                  <strong>Support required:</strong> No additional support is
                  required at this time.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Simple end of day report format
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-white p-6'>
              <div className='space-y-5 text-sm leading-7 text-slate-700'>
                <div>
                  <p className='font-semibold text-slate-950'>
                    1. Work completed
                  </p>
                  <p>Describe the most important finished activities.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    2. Progress and results
                  </p>
                  <p>Add measurable outcomes, percentages or milestones.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    3. Issues or delays
                  </p>
                  <p>Explain blockers, restrictions or operational problems.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    4. Pending tasks
                  </p>
                  <p>List unfinished activities and expected follow-up.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>5. Next steps</p>
                  <p>Describe the priorities for the next day or shift.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    6. Support required
                  </p>
                  <p>State any approvals, resources or decisions needed.</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write an end of day report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Review the workday
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Check completed activities, progress records, meetings and
                  operational notes before writing the report.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Prioritize important information
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Put the most important results, blockers and risks near the
                  beginning of the report.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Separate completed and pending work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Make it clear which activities were finished and which tasks
                  must continue.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Finish with next steps
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain the next priorities and identify whether any
                  management support is required.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common end of day report mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {endOfDayMistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{mistake.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {mistake.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <RelatedGuides
            currentHref='/guides/end-of-day-report'
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
            <h2 className='text-3xl font-bold'>
              Create your end of day report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to document completed work,
              progress, blockers and pending tasks with live preview and PDF
              export.
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
