import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Shift Handover Guides, Examples and Checklists',
  description:
    'Explore shift handover guides, examples and checklists for completed work, equipment status, pending tasks, risks and incoming shift priorities.',
  keywords: [
    'shift handover guides',
    'shift handover report',
    'shift handover example',
    'shift handover checklist',
    'shift change report',
    'operations handover report',
    'maintenance shift handover',
    'shift turnover report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/shift-handover',
  },
}

const handoverGuides = guides.filter(
  (guide) => guide.category === 'Shift Handover',
)

const handoverTopics = [
  {
    title: 'Shift handover fundamentals',
    description:
      'Learn how to transfer the most important operational information from the outgoing shift to the incoming team.',
  },
  {
    title: 'Completed work',
    description:
      'Summarize activities, inspections, maintenance tasks and operational progress completed during the shift.',
  },
  {
    title: 'Equipment status',
    description:
      'Record equipment condition, restrictions, alarms, isolations and items requiring monitoring.',
  },
  {
    title: 'Pending tasks',
    description:
      'Identify unfinished work, responsible persons, priorities and expected continuation during the next shift.',
  },
  {
    title: 'Risks and incidents',
    description:
      'Communicate active hazards, safety events, temporary controls and unresolved corrective actions.',
  },
  {
    title: 'Incoming shift priorities',
    description:
      'Define the inspections, tasks, decisions and escalations the next team should address first.',
  },
]

const handoverWorkflow = [
  'Record the outgoing and incoming shift details',
  'Summarize completed activities and operational progress',
  'Document equipment condition and active restrictions',
  'List pending tasks, incidents and unresolved risks',
  'Add recommendations and priorities for the incoming shift',
]

const recommendedPath = [
  {
    step: '1',
    title: 'Learn the handover structure',
    description:
      'Understand the essential sections required for a clear operational shift handover.',
    href: '/guides/how-to-write-a-shift-handover-report',
    linkLabel: 'Read the shift handover guide',
  },
  {
    step: '2',
    title: 'Review a practical example',
    description:
      'See how completed work, equipment status, risks and pending tasks are documented.',
    href: '/guides/shift-handover-example',
    linkLabel: 'View a shift handover example',
  },
  {
    step: '3',
    title: 'Use a handover checklist',
    description:
      'Review tasks, permits, equipment condition and active risks before closing the shift.',
    href: '/guides/shift-handover-checklist',
    linkLabel: 'Open the handover checklist',
  },
  {
    step: '4',
    title: 'Create the finished report',
    description:
      'Complete the structured form and export a professional shift handover PDF.',
    href: '/tools/shift-handover-generator',
    linkLabel: 'Open the Shift Handover Generator',
  },
]

const relatedCategories = [
  {
    title: 'Daily Reports',
    description:
      'Document daily activities, completed work, blockers and next priorities.',
    href: '/guides/daily-reports',
  },
  {
    title: 'Maintenance Reports',
    description:
      'Record equipment inspections, maintenance tasks, findings and recommendations.',
    href: '/guides/maintenance-reports',
  },
  {
    title: 'Incident Reports',
    description:
      'Document incidents, immediate controls, root causes and corrective actions.',
    href: '/guides/incident-reports',
  },
  {
    title: 'Progress Reports',
    description:
      'Track project performance, milestones, risks, delays and recovery actions.',
    href: '/guides/progress-reports',
  },
]

export default function ShiftHandoverHubPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-violet-200 bg-violet-50'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.1),transparent_34%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <nav
            aria-label='Breadcrumb'
            className='flex flex-wrap items-center gap-2 text-sm text-slate-600'
          >
            <Link href='/' className='transition hover:text-violet-700'>
              Home
            </Link>

            <span aria-hidden='true'>/</span>

            <Link href='/guides' className='transition hover:text-violet-700'>
              Guides
            </Link>

            <span aria-hidden='true'>/</span>

            <span className='font-semibold text-slate-900'>Shift Handover</span>
          </nav>

          <div className='mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700'>
                <span>SH</span>
                <span>{handoverGuides.length} practical guides</span>
              </div>

              <h1 className='mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Shift Handover Guides, Examples and Checklists
              </h1>

              <p className='mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Learn how to transfer completed work, equipment condition,
                pending tasks, incidents, active risks and operational
                priorities between shifts.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Browse all reporting guides
                </Link>

                <Link
                  href='/tools/shift-handover-generator'
                  className='inline-flex items-center justify-center rounded-xl border border-violet-300 bg-white px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-100'
                >
                  Open Shift Handover Generator
                </Link>
              </div>
            </div>

            <div className='rounded-3xl border border-violet-200 bg-white p-6 shadow-xl shadow-violet-100/70 sm:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-600'>
                Shift handover workflow
              </p>

              <h2 className='mt-3 text-2xl font-bold text-slate-950'>
                From the outgoing shift to operational continuity
              </h2>

              <div className='mt-6 space-y-4'>
                {handoverWorkflow.map((item, index) => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700'>
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
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-violet-600'>
              Shift Handover Topics
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Protect operational continuity between shifts
            </h2>

            <p className='mt-4 leading-7 text-slate-600'>
              Cover the complete handover process, from completed work and
              equipment condition to open tasks, active risks and incoming-shift
              priorities.
            </p>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {handoverTopics.map((topic) => (
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
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-violet-600'>
                Shift Handover Library
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Explore all shift handover guides
              </h2>

              <p className='mt-4 leading-7 text-slate-600'>
                Choose a resource based on whether you need the complete
                structure, a practical example or a repeatable checklist.
              </p>
            </div>

            <span className='w-fit rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700'>
              {handoverGuides.length} guides
            </span>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {handoverGuides.map((guide) => (
              <article
                key={guide.href}
                className='group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-200/60'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-xs font-bold text-white'>
                    SH
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
                    className='inline-flex items-center text-sm font-semibold text-violet-700 transition group-hover:text-violet-900'
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
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-violet-600'>
              Recommended Learning Path
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Learn the structure, review an example and complete the handover
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
                  className='mt-6 text-sm font-semibold text-violet-700 transition hover:text-violet-900'
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
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Shift Handover Generator
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Create a professional shift handover report
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-300'>
                Document completed work, equipment status, pending tasks,
                incidents, active risks and recommendations before exporting a
                consistent PDF report.
              </p>

              <div className='mt-8'>
                <Link
                  href='/tools/shift-handover-generator'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-50 sm:w-auto'
                >
                  Open Shift Handover Generator
                </Link>
              </div>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-violet-600'>
                Other Reporting Categories
              </p>

              <div className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                {relatedCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-200 hover:bg-violet-50'
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
