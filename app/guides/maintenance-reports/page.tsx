import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Maintenance Report Guides, Examples and Checklists',
  description:
    'Explore maintenance report guides, examples and checklists for preventive maintenance, equipment repairs, inspections, findings and recommendations.',
  keywords: [
    'maintenance report guides',
    'maintenance report example',
    'maintenance report template',
    'preventive maintenance report',
    'equipment maintenance report',
    'maintenance checklist',
    'maintenance reporting',
    'maintenance documentation',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/maintenance-reports',
  },
}

const maintenanceGuides = guides.filter(
  (guide) => guide.category === 'Maintenance Reports',
)

const maintenanceTopics = [
  {
    title: 'Maintenance report fundamentals',
    description:
      'Learn how to document equipment information, maintenance activities, findings, parts and recommendations.',
  },
  {
    title: 'Preventive maintenance',
    description:
      'Record scheduled inspections, measurements, service tasks and follow-up actions designed to prevent failures.',
  },
  {
    title: 'Corrective maintenance',
    description:
      'Document equipment failures, completed repairs, replaced parts, testing and final operational condition.',
  },
  {
    title: 'Equipment condition',
    description:
      'Create a traceable record of equipment status, defects, restrictions and maintenance history.',
  },
  {
    title: 'Maintenance checklists',
    description:
      'Use repeatable inspection and verification steps before, during and after maintenance work.',
  },
  {
    title: 'Findings and recommendations',
    description:
      'Communicate abnormal conditions, required actions, priorities and future maintenance needs.',
  },
]

const recommendedPath = [
  {
    step: '1',
    title: 'Understand the report structure',
    description:
      'Learn which equipment, task, finding and recommendation fields belong in a professional maintenance report.',
    href: '/guides/how-to-write-a-maintenance-report',
    linkLabel: 'Read the maintenance report guide',
  },
  {
    step: '2',
    title: 'Review practical examples',
    description:
      'See how preventive and corrective maintenance work can be documented clearly.',
    href: '/guides/maintenance-report-example',
    linkLabel: 'View maintenance report examples',
  },
  {
    step: '3',
    title: 'Use a maintenance checklist',
    description:
      'Review preparation, inspection, task completion and final testing requirements.',
    href: '/guides/maintenance-checklist',
    linkLabel: 'Open the maintenance checklist',
  },
  {
    step: '4',
    title: 'Create the finished report',
    description:
      'Enter equipment details, tasks, parts and findings before exporting the report as PDF.',
    href: '/tools/maintenance-report-generator',
    linkLabel: 'Open the Maintenance Report Generator',
  },
]

const maintenanceWorkflow = [
  'Identify the equipment and maintenance type',
  'Record inspections, findings and abnormal conditions',
  'Document completed tasks and replaced parts',
  'Confirm testing and final equipment status',
  'Add recommendations and follow-up actions',
]

const relatedCategories = [
  {
    title: 'Daily Reports',
    description:
      'Document completed work, daily activities, blockers and pending tasks.',
    href: '/guides/daily-reports',
  },
  {
    title: 'Incident Reports',
    description:
      'Record safety incidents, equipment damage and corrective actions.',
    href: '/guides/incident-reports',
  },
  {
    title: 'Progress Reports',
    description:
      'Track project milestones, schedule performance, issues and priorities.',
    href: '/guides/progress-reports',
  },
  {
    title: 'Shift Handover',
    description:
      'Transfer equipment status, maintenance restrictions and pending work.',
    href: '/guides#shift-handover',
  },
]

export default function MaintenanceReportsHubPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-amber-200 bg-amber-50'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.12),transparent_34%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <nav
            aria-label='Breadcrumb'
            className='flex flex-wrap items-center gap-2 text-sm text-slate-600'
          >
            <Link href='/' className='transition hover:text-amber-700'>
              Home
            </Link>

            <span aria-hidden='true'>/</span>

            <Link href='/guides' className='transition hover:text-amber-700'>
              Guides
            </Link>

            <span aria-hidden='true'>/</span>

            <span className='font-semibold text-slate-900'>
              Maintenance Reports
            </span>
          </nav>

          <div className='mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700'>
                <span>MR</span>
                <span>{maintenanceGuides.length} practical guides</span>
              </div>

              <h1 className='mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Maintenance Report Guides, Examples and Checklists
              </h1>

              <p className='mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Learn how to document preventive maintenance, equipment repairs,
                inspections, findings, parts used, testing and follow-up
                recommendations.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Browse all reporting guides
                </Link>

                <Link
                  href='/tools/maintenance-report-generator'
                  className='inline-flex items-center justify-center rounded-xl border border-amber-300 bg-white px-5 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-100'
                >
                  Open Maintenance Report Generator
                </Link>
              </div>
            </div>

            <div className='rounded-3xl border border-amber-200 bg-white p-6 shadow-xl shadow-amber-100/70 sm:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-amber-600'>
                Maintenance reporting workflow
              </p>

              <h2 className='mt-3 text-2xl font-bold text-slate-950'>
                From equipment inspection to final status
              </h2>

              <div className='mt-6 space-y-4'>
                {maintenanceWorkflow.map((item, index) => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700'>
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
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-amber-600'>
              Maintenance Reporting Topics
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Build clear and traceable maintenance records
            </h2>

            <p className='mt-4 leading-7 text-slate-600'>
              Cover the complete maintenance workflow, from initial equipment
              condition through completed work, final testing and future
              recommendations.
            </p>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {maintenanceTopics.map((topic) => (
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
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-amber-600'>
                Maintenance Report Library
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Explore all maintenance reporting guides
              </h2>

              <p className='mt-4 leading-7 text-slate-600'>
                Choose a resource based on the equipment condition, maintenance
                type or documentation workflow you need.
              </p>
            </div>

            <span className='w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700'>
              {maintenanceGuides.length} guides
            </span>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {maintenanceGuides.map((guide) => (
              <article
                key={guide.href}
                className='group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/60'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-xs font-bold text-white'>
                    MR
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
                    className='inline-flex items-center text-sm font-semibold text-amber-700 transition group-hover:text-amber-900'
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
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-amber-600'>
              Recommended Learning Path
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Learn the structure, review examples and document the work
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
                  className='mt-6 text-sm font-semibold text-amber-700 transition hover:text-amber-900'
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
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-amber-300'>
                Maintenance Report Generator
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Create a professional maintenance report
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-300'>
                Document equipment details, completed tasks, parts, findings,
                final status and recommendations before exporting a consistent
                PDF report.
              </p>

              <div className='mt-8'>
                <Link
                  href='/tools/maintenance-report-generator'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-50 sm:w-auto'
                >
                  Open Maintenance Report Generator
                </Link>
              </div>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-amber-600'>
                Other Reporting Categories
              </p>

              <div className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                {relatedCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-amber-200 hover:bg-amber-50'
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
