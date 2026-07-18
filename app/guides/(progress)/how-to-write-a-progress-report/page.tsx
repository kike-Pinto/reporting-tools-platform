import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Progress Report',
  description:
    'Learn how to write professional project progress reports with examples, planned progress, actual progress, activities, issues and next steps.',
  keywords: [
    'how to write a progress report',
    'progress report',
    'project progress report',
    'progress report example',
    'progress report sample',
    'weekly progress report',
    'monthly progress report',
    'project status report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-a-progress-report',
  },
}

const progressSections = [
  'Project name and client',
  'Reporting period',
  'Project manager',
  'Executive summary',
  'Planned progress',
  'Actual progress',
  'Completed activities',
  'Key achievements',
  'Issues and delays',
  'Risks and corrective actions',
  'Next steps',
]

const progressMistakes = [
  {
    title: 'Reporting percentages without context',
    description:
      'Explain what the percentage represents and which activities contributed to the reported progress.',
  },
  {
    title: 'Ignoring the difference between plan and actual',
    description:
      'Always explain significant deviations between planned and actual progress.',
  },
  {
    title: 'Listing delays without corrective actions',
    description:
      'Describe what will be done to recover the schedule or reduce the impact of the delay.',
  },
  {
    title: 'Missing next steps',
    description:
      'Stakeholders need to understand what activities will happen during the next reporting period.',
  },
]

const faqs = [
  {
    question: 'What is a progress report?',
    answer:
      'A progress report is a structured document used to communicate the current status of a project, including completed work, planned progress, actual progress, delays and next steps.',
  },
  {
    question: 'How often should a progress report be prepared?',
    answer:
      'Progress reports may be prepared daily, weekly, biweekly or monthly depending on the project size and reporting requirements.',
  },
  {
    question: 'What is planned versus actual progress?',
    answer:
      'Planned progress is the percentage of work expected to be completed by a specific date, while actual progress shows the work that has really been completed.',
  },
  {
    question: 'Can I export a progress report as PDF?',
    answer:
      'Yes. A progress report can be exported as a PDF for meetings, client updates, internal reviews and project documentation.',
  },
]

export default function HowToWriteProgressReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Progress Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Progress Report
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A progress report helps teams communicate what has been completed,
            how actual progress compares with planned progress, what issues are
            affecting the project and what actions should happen next.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Progress Report Generator to create structured project
              reports with planned progress, actual progress, issues, live
              preview and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/progress-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto'
              >
                Open Progress Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a progress report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A progress report is a structured document used to communicate the
              current status of a project, work package or operational plan. It
              helps stakeholders understand completed work, schedule
              performance, delays, risks and planned activities for the next
              reporting period.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a progress report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A useful progress report should combine measurable project
              information with clear explanations of achievements, deviations
              and future actions.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {progressSections.map((item) => (
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
              Progress report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Project Progress Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Project:</strong> Conveyor Upgrade Project
                </p>

                <p>
                  <strong>Reporting period:</strong> July 1–7, 2026
                </p>

                <p>
                  <strong>Project manager:</strong> Project Management Team
                </p>

                <p>
                  <strong>Planned progress:</strong> 80%
                </p>

                <p>
                  <strong>Actual progress:</strong> 72%
                </p>

                <p>
                  <strong>Completed activities:</strong> Structural supports
                  were installed, mechanical alignment was completed and
                  electrical cable routing started.
                </p>

                <p>
                  <strong>Issues and delays:</strong> Electrical work was
                  delayed due to late delivery of control components.
                </p>

                <p>
                  <strong>Corrective actions:</strong> The supplier confirmed
                  expedited delivery and the electrical crew schedule was
                  adjusted.
                </p>

                <p>
                  <strong>Next steps:</strong> Complete cable installation,
                  perform equipment testing and begin commissioning activities.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why planned versus actual progress matters
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Comparing planned progress with actual progress helps teams
              identify schedule deviations early. When actual progress is lower
              than planned progress, the report should explain the cause, impact
              and actions required to recover the schedule.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a progress report step by step
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Define the reporting period
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Select the start and end date for the period being reported.
                  This may be a week, two weeks, a month or another project
                  interval.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Measure planned and actual progress
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Review the project plan and compare expected progress with the
                  work actually completed during the reporting period.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Explain achievements and delays
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Summarize completed activities and explain any issues,
                  restrictions or risks affecting the project.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Define corrective actions and next steps
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Describe actions needed to recover delayed work and identify
                  the main activities planned for the next reporting period.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common progress report mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {progressMistakes.map((mistake) => (
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
            currentHref='/guides/how-to-write-a-progress-report'
            category='Progress Reports'
            title='Related progress guides'
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
            <h2 className='text-3xl font-bold'>Create a progress report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Progress Report Generator to create structured reports
              with planned progress, actual progress, activities, issues,
              corrective actions, live preview and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/progress-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'
              >
                Open Progress Report Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
