import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Weekly Progress Report: Example, Format and Guide',
  description:
    'Learn how to write a weekly progress report with planned progress, actual progress, completed work, delays, risks and next-week priorities.',
  keywords: [
    'weekly progress report',
    'weekly progress report example',
    'weekly progress report format',
    'weekly project progress report',
    'weekly work progress report',
    'construction weekly progress report',
    'project progress report sample',
    'weekly status report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/weekly-progress-report',
  },
}

const reportSections = [
  {
    title: 'Reporting period',
    description:
      'Identify the project and the start and end dates covered by the report.',
  },
  {
    title: 'Executive summary',
    description:
      'Give stakeholders a short overview of the current project situation.',
  },
  {
    title: 'Completed work',
    description:
      'List the main activities and deliverables completed during the week.',
  },
  {
    title: 'Planned versus actual progress',
    description:
      'Compare scheduled progress with the result achieved by the end of the week.',
  },
  {
    title: 'Key achievements',
    description:
      'Highlight important milestones, approvals and completed deliverables.',
  },
  {
    title: 'Issues and delays',
    description:
      'Explain blockers, schedule deviations and operational problems.',
  },
  {
    title: 'Risks and corrective actions',
    description:
      'Document active risks and the actions assigned to reduce their impact.',
  },
  {
    title: 'Next-week priorities',
    description:
      'Define the most important activities planned for the following week.',
  },
]

const progressIndicators = [
  {
    title: 'Planned progress',
    description:
      'The percentage of work that should have been completed by the end of the reporting period.',
  },
  {
    title: 'Actual progress',
    description:
      'The percentage of work that was actually completed during the project period.',
  },
  {
    title: 'Schedule variance',
    description: 'The difference between planned progress and actual progress.',
  },
  {
    title: 'Completed activities',
    description:
      'The number of project activities or milestones finished during the week.',
  },
  {
    title: 'Delayed activities',
    description: 'Tasks that did not reach the planned completion level.',
  },
  {
    title: 'Open issues',
    description:
      'Problems that remain unresolved and may affect future project performance.',
  },
]

const commonMistakes = [
  {
    title: 'Listing activities without progress',
    description:
      'Explain the result achieved and how it compares with the weekly plan.',
  },
  {
    title: 'Hiding schedule delays',
    description:
      'Report deviations early and explain their cause, impact and recovery action.',
  },
  {
    title: 'Using percentages without context',
    description:
      'State what the percentage represents and which scope or activity it applies to.',
  },
  {
    title: 'Not defining next-week priorities',
    description:
      'A weekly report should help the team understand what happens next.',
  },
]

const faqs = [
  {
    question: 'What is a weekly progress report?',
    answer:
      'A weekly progress report summarizes project performance, completed work, planned and actual progress, issues, risks and priorities for the following week.',
  },
  {
    question: 'What should a weekly progress report include?',
    answer:
      'Include the reporting period, executive summary, completed work, progress comparison, delays, risks, corrective actions and next-week priorities.',
  },
  {
    question: 'How long should a weekly progress report be?',
    answer:
      'It should contain enough detail to support decisions without becoming difficult to review. One to several pages is common depending on project complexity.',
  },
  {
    question: 'Who prepares a weekly progress report?',
    answer:
      'Project managers, supervisors, coordinators, contractors, planners and site teams may prepare weekly progress reports.',
  },
  {
    question: 'Can a weekly progress report be exported as PDF?',
    answer:
      'Yes. PDF export preserves the layout and makes the report easier to share with clients, managers and project stakeholders.',
  },
]

export default function WeeklyProgressReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Weekly Progress Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Weekly Progress Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A weekly progress report explains what was completed during the
            week, how actual progress compares with the plan, which issues
            affected the schedule and what work should happen next.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a weekly progress report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Progress Report Generator to document planned progress,
              actual progress, activities, delays and next steps with live
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
              What is a weekly progress report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A weekly progress report is a structured summary of project
              performance during a seven-day period. It communicates completed
              work, schedule performance, delays, risks and the activities
              planned for the next reporting period.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a weekly progress report include?
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
              Weekly progress report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Weekly Project Progress Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Project:</strong> Conveyor Upgrade Project
                </p>

                <p>
                  <strong>Reporting period:</strong> July 6–12, 2026
                </p>

                <p>
                  <strong>Executive summary:</strong> Structural installation
                  progressed as planned. Electrical activities were partially
                  delayed because of late material delivery.
                </p>

                <p>
                  <strong>Planned progress:</strong> 78%
                </p>

                <p>
                  <strong>Actual progress:</strong> 72%
                </p>

                <p>
                  <strong>Completed work:</strong> Installed structural
                  supports, completed alignment checks and finished cable tray
                  installation in Area 1.
                </p>

                <p>
                  <strong>Key achievements:</strong> Mechanical installation
                  milestone completed and approved by the client representative.
                </p>

                <p>
                  <strong>Issues and delays:</strong> Electrical cable delivery
                  was delayed by two days, affecting termination activities.
                </p>

                <p>
                  <strong>Corrective action:</strong> Additional electrical
                  labor will be assigned next week to recover part of the
                  schedule variance.
                </p>

                <p>
                  <strong>Next-week priorities:</strong> Complete cable
                  termination, begin functional testing and close remaining
                  mechanical punch-list items.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Important weekly progress indicators
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {progressIndicators.map((indicator) => (
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
              How to write a weekly progress report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Define the reporting period
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Confirm the week covered by the report and the project scope
                  being measured.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Compare planned and actual progress
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Use current project data to calculate performance and identify
                  schedule variance.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Explain delays and risks
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Describe the cause, impact and corrective response for each
                  important issue.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Define next-week priorities
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  List the most important activities, milestones and recovery
                  actions planned for the following week.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common weekly progress report mistakes
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
            currentHref='/guides/weekly-progress-report'
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
              Create a weekly progress report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Progress Report Generator to document planned progress,
              actual progress, activities, delays and next steps with live
              preview and PDF export.
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
