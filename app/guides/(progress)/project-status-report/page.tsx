import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Project Status Report: Example, Format and Guide',
  description:
    'Learn how to write a project status report with project health, milestones, progress, budget, issues, risks and next steps.',
  keywords: [
    'project status report',
    'project status report example',
    'project status report format',
    'project status report sample',
    'project health report',
    'project update report',
    'project management status report',
    'project performance report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/project-status-report',
  },
}

const reportSections = [
  {
    title: 'Project overview',
    description:
      'Include the project name, manager, client, reporting period and current phase.',
  },
  {
    title: 'Overall project health',
    description:
      'Summarize whether scope, schedule, budget and quality are on track.',
  },
  {
    title: 'Progress and milestones',
    description:
      'Document completed milestones and planned versus actual progress.',
  },
  {
    title: 'Schedule status',
    description:
      'Explain current timing, delays, critical activities and recovery actions.',
  },
  {
    title: 'Budget status',
    description:
      'Compare approved budget, actual cost and expected future expenditure.',
  },
  {
    title: 'Issues and decisions',
    description:
      'List active problems and decisions required from project stakeholders.',
  },
  {
    title: 'Risks',
    description:
      'Identify potential future events that could affect project objectives.',
  },
  {
    title: 'Next steps',
    description:
      'Define the priorities and actions planned for the next reporting period.',
  },
]

const healthStatuses = [
  {
    title: 'Green — On track',
    description:
      'The project is performing within acceptable scope, schedule and budget limits.',
  },
  {
    title: 'Amber — Attention required',
    description:
      'One or more areas require corrective action, but recovery is still achievable.',
  },
  {
    title: 'Red — Critical',
    description:
      'The project has significant problems requiring immediate management intervention.',
  },
  {
    title: 'Completed',
    description:
      'The project scope has been delivered and final closure activities are underway or complete.',
  },
]

const statusMetrics = [
  {
    title: 'Scope completion',
    description: 'The percentage of the approved project scope completed.',
  },
  {
    title: 'Schedule performance',
    description:
      'Whether project activities are ahead of, aligned with or behind the approved schedule.',
  },
  {
    title: 'Budget performance',
    description:
      'The relationship between planned expenditure and actual project cost.',
  },
  {
    title: 'Milestone completion',
    description:
      'The number of planned milestones completed during the reporting period.',
  },
  {
    title: 'Open issues',
    description:
      'Current problems requiring resolution, escalation or stakeholder decisions.',
  },
  {
    title: 'Active risks',
    description:
      'Potential threats that remain open and require monitoring or mitigation.',
  },
]

const commonMistakes = [
  {
    title: 'Reporting only activities',
    description:
      'A status report should explain overall project health, not only list work completed.',
  },
  {
    title: 'Using green status without evidence',
    description:
      'Support the project health rating with schedule, cost, scope and issue information.',
  },
  {
    title: 'Mixing issues and risks',
    description:
      'An issue has already occurred. A risk is a possible future event.',
  },
  {
    title: 'Not identifying decisions required',
    description:
      'Clearly state which management or client decisions are blocking progress.',
  },
]

const faqs = [
  {
    question: 'What is a project status report?',
    answer:
      'A project status report summarizes current project health, progress, schedule, budget, issues, risks, milestones and next steps.',
  },
  {
    question: 'How often should a project status report be prepared?',
    answer:
      'The frequency depends on the project, but weekly, biweekly and monthly reports are common.',
  },
  {
    question:
      'What is the difference between a status report and a progress report?',
    answer:
      'A progress report focuses on work completed and progress achieved. A status report gives a broader view of project health, including schedule, budget, risks and decisions.',
  },
  {
    question: 'What do green, amber and red mean?',
    answer:
      'Green means on track, amber means attention is required and red means significant management intervention is needed.',
  },
  {
    question: 'Can a project status report be exported as PDF?',
    answer:
      'Yes. PDF export helps preserve the report layout and supports formal stakeholder communication.',
  },
]

export default function ProjectStatusReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://reporting-tools-platform.vercel.app',
          },
          {
            name: 'Guides',
            url: 'https://reporting-tools-platform.vercel.app/guides',
          },
          {
            name: 'Progress Reports',
            url: 'https://reporting-tools-platform.vercel.app/guides/progress-reports',
          },
          {
            name: 'Project Status Report',
            url: 'https://reporting-tools-platform.vercel.app/guides/project-status-report',
          },
        ]}
      />
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Project Status Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Project Status Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A project status report gives stakeholders a concise view of project
            health, progress, schedule, budget, issues, risks and the actions
            required to keep the work moving forward.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a project status report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Progress Report Generator to document project details,
              planned progress, actual progress, activities, issues and next
              steps with live preview and PDF export.
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
              What is a project status report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A project status report is a structured management document used
              to communicate whether a project is on track. It combines current
              progress with information about schedule, cost, scope, quality,
              risks and stakeholder decisions.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a project status report include?
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
              Project status report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Project Status Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Project:</strong> Processing Plant Upgrade
                </p>

                <p>
                  <strong>Reporting period:</strong> July 1–15, 2026
                </p>

                <p>
                  <strong>Project manager:</strong> Project Delivery Manager
                </p>

                <p>
                  <strong>Overall status:</strong> Amber — attention required
                </p>

                <p>
                  <strong>Planned progress:</strong> 64%
                </p>

                <p>
                  <strong>Actual progress:</strong> 59%
                </p>

                <p>
                  <strong>Schedule status:</strong> Electrical installation is
                  five days behind plan because of material delivery delays.
                </p>

                <p>
                  <strong>Budget status:</strong> Current cost remains within
                  the approved budget, but additional labor may increase the
                  final forecast.
                </p>

                <p>
                  <strong>Completed milestones:</strong> Structural installation
                  completed and mechanical alignment approved.
                </p>

                <p>
                  <strong>Open issues:</strong> Final cable delivery date
                  requires supplier confirmation.
                </p>

                <p>
                  <strong>Active risks:</strong> Continued material delays may
                  affect commissioning activities.
                </p>

                <p>
                  <strong>Next steps:</strong> Confirm delivery schedule, add
                  electrical labor and update the recovery plan.
                </p>

                <p>
                  <strong>Decision required:</strong> Approval for temporary
                  additional contractor resources.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common project health statuses
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {healthStatuses.map((status) => (
                <div
                  key={status.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6'
                >
                  <h3 className='text-xl font-bold text-slate-950'>
                    {status.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {status.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Important project status metrics
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {statusMetrics.map((metric) => (
                <div
                  key={metric.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{metric.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a project status report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Determine overall project health
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Review scope, schedule, budget, quality and current issues
                  before assigning the project status.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Summarize progress and milestones
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document planned progress, actual progress and the most
                  important achievements during the period.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Separate issues from risks
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain current problems as issues and possible future events
                  as risks.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Identify actions and decisions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  End the report with next steps, assigned actions and any
                  stakeholder decisions required.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common project status report mistakes
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
            currentHref='/guides/project-status-report'
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
              Create a project status report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Progress Report Generator to document project details,
              progress, activities, issues and next steps with live preview and
              PDF export.
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
