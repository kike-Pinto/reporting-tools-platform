import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Monthly Progress Report: Example, Format and Guide',
  description:
    'Learn how to write a monthly progress report with planned and actual progress, milestones, schedule, cost, issues, risks and next-month priorities.',
  keywords: [
    'monthly progress report',
    'monthly progress report example',
    'monthly progress report format',
    'monthly project progress report',
    'construction monthly progress report',
    'monthly project report',
    'monthly status report',
    'project monthly report sample',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/monthly-progress-report',
  },
}

const reportSections = [
  {
    title: 'Project overview',
    description:
      'Include the project name, client, project manager and reporting month.',
  },
  {
    title: 'Executive summary',
    description:
      'Provide a short overview of performance and the current project situation.',
  },
  {
    title: 'Planned progress',
    description:
      'State the percentage or scope planned for completion by the end of the month.',
  },
  {
    title: 'Actual progress',
    description:
      'Record the percentage or scope actually completed during the period.',
  },
  {
    title: 'Completed milestones',
    description:
      'Highlight important deliverables, approvals and project achievements.',
  },
  {
    title: 'Schedule performance',
    description:
      'Explain delays, schedule variance, critical activities and recovery plans.',
  },
  {
    title: 'Cost and resources',
    description:
      'Summarize spending, labor, equipment and resource requirements.',
  },
  {
    title: 'Issues and risks',
    description:
      'Document current problems and possible future events affecting objectives.',
  },
  {
    title: 'Next-month priorities',
    description:
      'Define the most important activities and milestones for the next period.',
  },
]

const monthlyIndicators = [
  {
    title: 'Planned completion',
    description:
      'The amount of work that should have been completed by month-end.',
  },
  {
    title: 'Actual completion',
    description:
      'The amount of work actually completed during the reporting period.',
  },
  {
    title: 'Schedule variance',
    description: 'The difference between planned progress and actual progress.',
  },
  {
    title: 'Milestones completed',
    description:
      'The number of important project milestones achieved during the month.',
  },
  {
    title: 'Budget used',
    description:
      'The amount or percentage of approved project funding already spent.',
  },
  {
    title: 'Open issues and risks',
    description: 'The number of unresolved problems and active future threats.',
  },
]

const commonMistakes = [
  {
    title: 'Repeating weekly reports without analysis',
    description:
      'The monthly report should summarize trends and overall performance, not only combine daily details.',
  },
  {
    title: 'Ignoring schedule variance',
    description:
      'Explain why actual progress differs from the plan and what recovery actions are required.',
  },
  {
    title: 'Reporting cost without context',
    description:
      'Compare actual expenditure with budget, progress and expected future costs.',
  },
  {
    title: 'Leaving next month undefined',
    description:
      'Stakeholders should understand the priorities, milestones and decisions required next.',
  },
]

const faqs = [
  {
    question: 'What is a monthly progress report?',
    answer:
      'A monthly progress report summarizes project performance, completed work, progress, milestones, schedule, cost, issues, risks and next-month priorities.',
  },
  {
    question: 'What should a monthly project report include?',
    answer:
      'Include the reporting period, executive summary, planned and actual progress, milestones, schedule, cost, issues, risks and next steps.',
  },
  {
    question: 'Who prepares monthly progress reports?',
    answer:
      'Project managers, planners, supervisors, contractors, engineers and project controls teams commonly prepare them.',
  },
  {
    question: 'How is a monthly report different from a weekly report?',
    answer:
      'A monthly report provides a broader view of trends, milestones, cost and overall performance, while a weekly report focuses on short-term activities.',
  },
  {
    question: 'Can a monthly progress report be exported as PDF?',
    answer:
      'Yes. PDF export creates a consistent document suitable for clients, managers and project reviews.',
  },
]

export default function MonthlyProgressReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Monthly Progress Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Monthly Progress Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A monthly progress report summarizes project performance across an
            entire month. It compares planned and actual progress, highlights
            milestones, explains schedule or cost deviations and defines the
            priorities for the next reporting period.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a monthly progress report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Progress Report Generator to document planned progress,
              actual progress, activities, issues and next steps with live
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
              What is a monthly progress report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A monthly progress report is a structured project document used to
              communicate performance during a calendar month or another defined
              reporting period. It helps stakeholders understand overall
              progress, schedule health, cost performance and major risks.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a monthly progress report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportSections.map((section) => (
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
              Monthly progress report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Monthly Project Progress Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Project:</strong> Processing Plant Upgrade
                </p>

                <p>
                  <strong>Reporting period:</strong> July 1–31, 2026
                </p>

                <p>
                  <strong>Executive summary:</strong> Mechanical installation
                  progressed according to plan. Electrical work finished below
                  target because of material delivery delays.
                </p>

                <p>
                  <strong>Planned progress:</strong> 68%
                </p>

                <p>
                  <strong>Actual progress:</strong> 63%
                </p>

                <p>
                  <strong>Completed milestones:</strong> Structural installation
                  approved, mechanical alignment completed and Area 1 cable
                  trays installed.
                </p>

                <p>
                  <strong>Schedule performance:</strong> Overall progress is
                  five percentage points behind plan. Additional electrical
                  labor has been assigned to recover part of the delay.
                </p>

                <p>
                  <strong>Cost performance:</strong> Actual cost remains within
                  the approved monthly budget, but overtime may affect the
                  forecast.
                </p>

                <p>
                  <strong>Open issues:</strong> Final delivery date for
                  electrical cables requires supplier confirmation.
                </p>

                <p>
                  <strong>Active risks:</strong> Continued delivery delays may
                  affect commissioning.
                </p>

                <p>
                  <strong>Next-month priorities:</strong> Complete electrical
                  installation, begin functional testing and close mechanical
                  punch-list items.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Important monthly progress indicators
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {monthlyIndicators.map((indicator) => (
                <div
                  key={indicator.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6'
                >
                  <h3 className='text-xl font-bold text-slate-950'>
                    {indicator.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a monthly progress report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Consolidate reliable project data
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Collect schedule, cost, activity, milestone and issue
                  information from the full reporting period.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Compare planned and actual results
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Identify performance gaps and explain the cause and impact of
                  important deviations.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Summarize trends and decisions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Highlight patterns, recurring problems and decisions that
                  cannot be seen from an individual daily report.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Define next-month priorities
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  List the milestones, activities, corrective actions and
                  management decisions required during the next period.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common monthly progress report mistakes
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
            currentHref='/guides/monthly-progress-report'
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
            <h2 className='text-3xl font-bold'>
              Create a monthly progress report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Progress Report Generator to document planned progress,
              actual progress, issues and next steps with live preview and PDF
              export.
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
