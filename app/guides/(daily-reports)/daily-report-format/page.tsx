import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Daily Report Format for Work and Operations',
  description:
    'Use a clear daily report format for completed work, progress, issues, pending tasks and next steps, with a practical example and template.',
  keywords: [
    'daily report format',
    'daily work report format',
    'daily report format sample',
    'daily status report format',
    'work daily report format',
    'daily activity report format',
    'daily report structure',
    'daily report template',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/daily-report-format',
  },
}

const formatSections = [
  {
    title: 'Report information',
    description:
      'Include the date, project, work area, shift and person preparing the report.',
  },
  {
    title: 'Completed work',
    description:
      'Describe the main activities completed during the day or shift.',
  },
  {
    title: 'Progress and results',
    description:
      'Add percentages, quantities, hours, milestones or other measurable results.',
  },
  {
    title: 'Issues and delays',
    description:
      'Record incidents, blockers, restrictions and deviations from the work plan.',
  },
  {
    title: 'Pending tasks',
    description:
      'List unfinished activities that must continue during the next work period.',
  },
  {
    title: 'Next steps',
    description:
      'Explain what will happen next and whether any support or decision is required.',
  },
]

const commonMistakes = [
  {
    title: 'Changing the structure every day',
    description:
      'A consistent format makes reports faster to prepare and easier to compare.',
  },
  {
    title: 'Writing long unstructured paragraphs',
    description:
      'Use clear headings and short sections so managers can review the report quickly.',
  },
  {
    title: 'Not including measurable information',
    description:
      'Use hours, percentages, quantities and activity counts when they provide useful context.',
  },
  {
    title: 'Forgetting next steps',
    description:
      'A useful daily report explains what should happen after the current reporting period.',
  },
]

const faqs = [
  {
    question: 'What is the correct format for a daily report?',
    answer:
      'A practical daily report format includes basic report information, completed work, progress, issues, pending tasks and next steps.',
  },
  {
    question: 'Should a daily report use headings?',
    answer:
      'Yes. Headings make the report easier to scan and help separate completed work, issues and pending activities.',
  },
  {
    question: 'How long should a daily report be?',
    answer:
      'The length depends on the work performed, but many daily reports can be presented clearly on one or two pages.',
  },
  {
    question: 'Can I reuse the same daily report format?',
    answer:
      'Yes. Using a consistent format helps teams standardize reporting and compare information across multiple days or shifts.',
  },
  {
    question: 'Can a daily report format be exported as PDF?',
    answer:
      'Yes. PDF export preserves the structure and allows the report to be shared and archived.',
  },
]

export default function DailyReportFormatPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Report Format
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Report Format for Work and Operations
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A consistent daily report format helps teams organize completed
            work, progress, issues, pending tasks and next steps. It makes
            reports easier to prepare, review and compare over time.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need a ready-to-use reporting workflow?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Daily Report Generator to complete a structured form,
              review a live preview and export the finished report as a PDF.
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
              What is a daily report format?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily report format is a repeatable structure used to organize
              information from a workday or operational shift. It defines where
              to record work details, completed activities, progress, problems,
              pending tasks and future actions.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Recommended daily report structure
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {formatSections.map((section) => (
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
              Simple daily report format
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <div className='space-y-5 text-sm leading-7 text-slate-700'>
                <div>
                  <p className='font-semibold text-slate-950'>
                    1. Report details
                  </p>
                  <p>Date, project, work area, shift and supervisor.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    2. Completed work
                  </p>
                  <p>
                    Activities completed during the reporting period and the
                    results achieved.
                  </p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>3. Progress</p>
                  <p>
                    Progress percentages, completed quantities, working hours or
                    milestones.
                  </p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    4. Issues and incidents
                  </p>
                  <p>
                    Delays, blockers, safety observations, incidents or
                    operational restrictions.
                  </p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    5. Pending tasks
                  </p>
                  <p>Activities that remain unfinished or require follow-up.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>6. Next steps</p>
                  <p>
                    Planned work, required support and decisions for the next
                    work period.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Daily report format example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Daily Operational Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> July 10, 2026
                </p>

                <p>
                  <strong>Project:</strong> Conveyor Maintenance Project
                </p>

                <p>
                  <strong>Shift:</strong> Day Shift
                </p>

                <p>
                  <strong>Supervisor:</strong> Operations Supervisor
                </p>

                <p>
                  <strong>Completed work:</strong> The team inspected the
                  transfer area, replaced one damaged roller and completed
                  alignment verification.
                </p>

                <p>
                  <strong>Progress:</strong> 85% of the planned maintenance work
                  has been completed.
                </p>

                <p>
                  <strong>Issues:</strong> Work started 20 minutes late because
                  the isolation permit required additional confirmation.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete final guarding
                  inspection and perform startup monitoring.
                </p>

                <p>
                  <strong>Next steps:</strong> The next shift will monitor
                  vibration and confirm equipment availability.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to use the format step by step
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Complete the report details
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Identify the reporting date, project, work area, shift and the
                  person responsible for preparing the report.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Add completed activities and results
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Write specific descriptions and include measurable outcomes
                  when they help explain progress.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Record issues and pending work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document problems clearly and separate unfinished activities
                  from completed work.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Review and share the report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Check names, dates and numbers before sending the report to a
                  manager, supervisor, client or incoming team.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common daily report format mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {commonMistakes.map((mistake) => (
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
            currentHref='/guides/daily-report-format'
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
              Create a daily report using this format
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to organize report details,
              completed work, progress, incidents and pending tasks with live
              preview and PDF export.
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
