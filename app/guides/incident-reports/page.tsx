import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Incident Report Guides, Examples and Corrective Actions',
  description:
    'Explore incident report guides and examples for workplace incidents, safety events, near misses, root causes and corrective actions.',
  keywords: [
    'incident report guides',
    'incident report example',
    'workplace incident report',
    'safety incident report',
    'near miss report',
    'corrective action report',
    'incident investigation report',
    'incident documentation',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/incident-reports',
  },
}

const incidentGuides = guides.filter(
  (guide) => guide.category === 'Incident Reports',
)

const incidentTopics = [
  {
    title: 'Incident report fundamentals',
    description:
      'Learn how to document the event, date, location, people involved, severity and current status.',
  },
  {
    title: 'Safety incidents',
    description:
      'Record workplace injuries, unsafe conditions, immediate controls and required follow-up actions.',
  },
  {
    title: 'Near miss reporting',
    description:
      'Document events that could have caused injury, equipment damage or operational disruption.',
  },
  {
    title: 'Immediate actions',
    description:
      'Explain the controls used to protect people, isolate equipment and stabilize the work area.',
  },
  {
    title: 'Root causes',
    description:
      'Identify contributing factors and underlying causes instead of focusing only on the final event.',
  },
  {
    title: 'Corrective actions',
    description:
      'Assign responsible persons, due dates, priorities and effectiveness reviews for required actions.',
  },
]

const incidentWorkflow = [
  'Record the incident date, location and people involved',
  'Describe what happened using clear and objective language',
  'Document immediate controls and actions taken',
  'Identify contributing factors and possible root causes',
  'Assign corrective actions, owners and due dates',
]

const recommendedPath = [
  {
    step: '1',
    title: 'Learn the incident report structure',
    description:
      'Understand which event details, actions, causes and recommendations belong in the report.',
    href: '/guides/how-to-write-an-incident-report',
    linkLabel: 'Read the incident report guide',
  },
  {
    step: '2',
    title: 'Review a practical example',
    description:
      'See how event details, immediate actions and corrective actions can be documented.',
    href: '/guides/incident-report-example',
    linkLabel: 'View an incident report example',
  },
  {
    step: '3',
    title: 'Document preventive actions',
    description:
      'Learn how to assign corrective actions, responsible persons, due dates and reviews.',
    href: '/guides/corrective-action-report',
    linkLabel: 'Read the corrective action guide',
  },
  {
    step: '4',
    title: 'Create the finished report',
    description:
      'Complete a structured incident form and export a professional PDF document.',
    href: '/tools/incident-report-generator',
    linkLabel: 'Open the Incident Report Generator',
  },
]

const relatedCategories = [
  {
    title: 'Daily Reports',
    description:
      'Document daily activities, completed work, blockers and safety observations.',
    href: '/guides/daily-reports',
  },
  {
    title: 'Maintenance Reports',
    description:
      'Record equipment findings, failures, repairs and final operational status.',
    href: '/guides/maintenance-reports',
  },
  {
    title: 'Progress Reports',
    description:
      'Track project issues, risks, delays, schedule performance and priorities.',
    href: '/guides#progress-reports',
  },
  {
    title: 'Shift Handover',
    description:
      'Transfer active risks, restrictions, incidents and pending actions between shifts.',
    href: '/guides#shift-handover',
  },
]

export default function IncidentReportsHubPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-red-200 bg-red-50'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(248,113,113,0.1),transparent_34%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <nav
            aria-label='Breadcrumb'
            className='flex flex-wrap items-center gap-2 text-sm text-slate-600'
          >
            <Link href='/' className='transition hover:text-red-700'>
              Home
            </Link>

            <span aria-hidden='true'>/</span>

            <Link href='/guides' className='transition hover:text-red-700'>
              Guides
            </Link>

            <span aria-hidden='true'>/</span>

            <span className='font-semibold text-slate-900'>
              Incident Reports
            </span>
          </nav>

          <div className='mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-2 text-sm font-semibold text-red-700'>
                <span>IR</span>
                <span>{incidentGuides.length} practical guides</span>
              </div>

              <h1 className='mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Incident Report Guides, Examples and Corrective Actions
              </h1>

              <p className='mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Learn how to document workplace incidents, safety events, near
                misses, immediate controls, contributing factors, root causes
                and corrective actions.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Browse all reporting guides
                </Link>

                <Link
                  href='/tools/incident-report-generator'
                  className='inline-flex items-center justify-center rounded-xl border border-red-300 bg-white px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100'
                >
                  Open Incident Report Generator
                </Link>
              </div>
            </div>

            <div className='rounded-3xl border border-red-200 bg-white p-6 shadow-xl shadow-red-100/70 sm:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-red-600'>
                Incident reporting workflow
              </p>

              <h2 className='mt-3 text-2xl font-bold text-slate-950'>
                From the initial event to corrective action
              </h2>

              <div className='mt-6 space-y-4'>
                {incidentWorkflow.map((item, index) => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700'>
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
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-red-600'>
              Incident Reporting Topics
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Create clear and actionable incident records
            </h2>

            <p className='mt-4 leading-7 text-slate-600'>
              Cover the complete incident-reporting process, from documenting
              the event and immediate response to assigning actions that reduce
              the risk of recurrence.
            </p>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {incidentTopics.map((topic) => (
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
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-red-600'>
                Incident Report Library
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Explore all incident reporting guides
              </h2>

              <p className='mt-4 leading-7 text-slate-600'>
                Choose a resource based on the event type, investigation stage
                or corrective-action workflow you need.
              </p>
            </div>

            <span className='w-fit rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700'>
              {incidentGuides.length} guides
            </span>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {incidentGuides.map((guide) => (
              <article
                key={guide.href}
                className='group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-200/60'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500 text-xs font-bold text-white'>
                    IR
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
                    className='inline-flex items-center text-sm font-semibold text-red-700 transition group-hover:text-red-900'
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
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-red-600'>
              Recommended Learning Path
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Learn the structure, review an example and assign actions
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
                  className='mt-6 text-sm font-semibold text-red-700 transition hover:text-red-900'
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
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-red-300'>
                Incident Report Generator
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Create a professional incident report
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-300'>
                Document incident details, severity, immediate actions, root
                causes, corrective actions and recommendations before exporting
                a consistent PDF report.
              </p>

              <div className='mt-8'>
                <Link
                  href='/tools/incident-report-generator'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-red-50 sm:w-auto'
                >
                  Open Incident Report Generator
                </Link>
              </div>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-red-600'>
                Other Reporting Categories
              </p>

              <div className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                {relatedCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-red-200 hover:bg-red-50'
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
