import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Progress Report Guides, Examples and Project Status Resources',
  description:
    'Explore progress report guides for weekly and monthly reporting, project status, planned versus actual progress, risks, delays and next steps.',
  keywords: [
    'progress report guides',
    'project progress report',
    'weekly progress report',
    'monthly progress report',
    'project status report',
    'progress report example',
    'planned vs actual progress',
    'project reporting',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/progress-reports',
  },
}

const progressGuides = guides.filter(
  (guide) => guide.category === 'Progress Reports',
)

const progressTopics = [
  {
    title: 'Progress report fundamentals',
    description:
      'Learn how to summarize project status, completed work, planned progress, actual progress and next steps.',
  },
  {
    title: 'Weekly progress reporting',
    description:
      'Track short-term activities, schedule variance, blockers, risks and priorities for the following week.',
  },
  {
    title: 'Monthly progress reporting',
    description:
      'Review broader trends, milestones, cost performance, schedule health and next-month objectives.',
  },
  {
    title: 'Project status reporting',
    description:
      'Communicate overall project health, schedule, budget, issues, risks and stakeholder decisions.',
  },
  {
    title: 'Planned versus actual progress',
    description:
      'Compare expected completion with actual results and explain important deviations.',
  },
  {
    title: 'Risks, delays and recovery actions',
    description:
      'Document the cause, impact, owner and corrective response for project performance problems.',
  },
]

const progressWorkflow = [
  'Define the project and reporting period',
  'Record planned and actual progress',
  'Document completed activities and milestones',
  'Explain issues, risks and schedule variance',
  'Define recovery actions and next priorities',
]

const recommendedPath = [
  {
    step: '1',
    title: 'Learn the report structure',
    description:
      'Understand the core sections required for a professional project progress report.',
    href: '/guides/how-to-write-a-progress-report',
    linkLabel: 'Read the progress report guide',
  },
  {
    step: '2',
    title: 'Review weekly performance',
    description:
      'Learn how to summarize short-term progress, blockers and next-week priorities.',
    href: '/guides/weekly-progress-report',
    linkLabel: 'Read the weekly progress guide',
  },
  {
    step: '3',
    title: 'Evaluate project health',
    description:
      'Review schedule, budget, risks, issues and decisions in a project status report.',
    href: '/guides/project-status-report',
    linkLabel: 'Open the project status guide',
  },
  {
    step: '4',
    title: 'Create the finished report',
    description:
      'Enter project activities, percentages, issues and next steps before exporting a PDF.',
    href: '/tools/progress-report-generator',
    linkLabel: 'Open the Progress Report Generator',
  },
]

const relatedCategories = [
  {
    title: 'Daily Reports',
    description:
      'Document daily activities, completed work, blockers and pending tasks.',
    href: '/guides/daily-reports',
  },
  {
    title: 'Maintenance Reports',
    description:
      'Record equipment work, findings, repairs, testing and recommendations.',
    href: '/guides/maintenance-reports',
  },
  {
    title: 'Incident Reports',
    description:
      'Document incidents, immediate actions, causes and corrective actions.',
    href: '/guides/incident-reports',
  },
  {
    title: 'Shift Handover',
    description:
      'Transfer project status, active constraints, risks and pending actions.',
    href: '/guides#shift-handover',
  },
]

export default function ProgressReportsHubPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-emerald-200 bg-emerald-50'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.1),transparent_34%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <nav
            aria-label='Breadcrumb'
            className='flex flex-wrap items-center gap-2 text-sm text-slate-600'
          >
            <Link href='/' className='transition hover:text-emerald-700'>
              Home
            </Link>

            <span aria-hidden='true'>/</span>

            <Link href='/guides' className='transition hover:text-emerald-700'>
              Guides
            </Link>

            <span aria-hidden='true'>/</span>

            <span className='font-semibold text-slate-900'>
              Progress Reports
            </span>
          </nav>

          <div className='mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700'>
                <span>PR</span>
                <span>{progressGuides.length} practical guides</span>
              </div>

              <h1 className='mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Progress Report Guides and Project Status Resources
              </h1>

              <p className='mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Learn how to report weekly and monthly performance, compare
                planned and actual progress, communicate project health and
                define recovery actions and next priorities.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Browse all reporting guides
                </Link>

                <Link
                  href='/tools/progress-report-generator'
                  className='inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100'
                >
                  Open Progress Report Generator
                </Link>
              </div>
            </div>

            <div className='rounded-3xl border border-emerald-200 bg-white p-6 shadow-xl shadow-emerald-100/70 sm:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600'>
                Progress reporting workflow
              </p>

              <h2 className='mt-3 text-2xl font-bold text-slate-950'>
                From project data to a clear status report
              </h2>

              <div className='mt-6 space-y-4'>
                {progressWorkflow.map((item, index) => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700'>
                      {index + 1}
                    </span>

                    <p className='text-sm leading-6 text-slate-600'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-14 sm:py-16'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600'>
              Progress Reporting Topics
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Communicate project performance with clarity
            </h2>

            <p className='mt-4 leading-7 text-slate-600'>
              Cover the complete reporting cycle, from planned progress and
              completed milestones to schedule variance, risks and future
              priorities.
            </p>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {progressTopics.map((topic) => (
              <article
                key={topic.title}
                className='rounded-3xl border border-slate-200 bg-slate-50 p-6'
              >
                <h3 className='text-lg font-bold text-slate-950'>
                  {topic.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-slate-600'>
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600'>
                Progress Report Library
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Explore all progress reporting guides
              </h2>

              <p className='mt-4 leading-7 text-slate-600'>
                Choose a resource based on the reporting period, audience or
                level of project performance detail you need.
              </p>
            </div>

            <span className='w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700'>
              {progressGuides.length} guides
            </span>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {progressGuides.map((guide) => (
              <article
                key={guide.href}
                className='group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-xs font-bold text-white'>
                    PR
                  </div>

                  <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                    {guide.status}
                  </span>
                </div>

                <h3 className='mt-6 text-xl font-bold text-slate-950'>
                  {guide.title}
                </h3>

                <p className='mt-3 flex-1 text-sm leading-6 text-slate-600'>
                  {guide.description}
                </p>

                <div className='mt-7'>
                  <Link
                    href={guide.href}
                    className='inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-900'
                  >
                    Read guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600'>
              Recommended Learning Path
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Learn the structure, evaluate performance and create the report
            </h2>
          </div>

          <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {recommendedPath.map((item) => (
              <article
                key={item.step}
                className='flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6'
              >
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white'>
                  {item.step}
                </span>

                <h3 className='mt-5 text-lg font-bold text-slate-950'>
                  {item.title}
                </h3>

                <p className='mt-3 flex-1 text-sm leading-6 text-slate-600'>
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className='mt-6 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900'
                >
                  {item.linkLabel} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='grid gap-8 lg:grid-cols-[1fr_0.85fr]'>
            <div className='rounded-4xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300'>
                Progress Report Generator
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Create a professional project progress report
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-300'>
                Document planned progress, actual progress, activities, delays,
                risks and next steps before exporting a consistent PDF report.
              </p>

              <div className='mt-8'>
                <Link
                  href='/tools/progress-report-generator'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50 sm:w-auto'
                >
                  Open Progress Report Generator
                </Link>
              </div>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600'>
                Other Reporting Categories
              </p>

              <div className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                {relatedCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200 hover:bg-emerald-50'
                  >
                    <p className='font-semibold text-slate-950'>
                      {category.title}
                    </p>

                    <p className='mt-2 text-sm leading-6 text-slate-600'>
                      {category.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
