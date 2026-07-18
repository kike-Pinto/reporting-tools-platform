import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Daily Activity Report: Format, Example and Guide',
  description:
    'Learn how to write a daily activity report with a practical format, examples, completed activities, working hours, issues and next steps.',
  keywords: [
    'daily activity report',
    'daily activity report format',
    'daily activity report example',
    'daily activity report sample',
    'how to write a daily activity report',
    'daily work activity report',
    'employee daily activity report',
    'daily activities report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/daily-activity-report',
  },
}

const activityReportSections = [
  {
    title: 'Report details',
    description:
      'Include the date, project, department, work area, shift and person preparing the report.',
  },
  {
    title: 'Activities completed',
    description:
      'List the main activities performed during the reporting period.',
  },
  {
    title: 'Working hours',
    description:
      'Record the hours spent on each activity when time tracking is relevant.',
  },
  {
    title: 'Progress and results',
    description:
      'Add quantities, percentages, milestones or outcomes achieved.',
  },
  {
    title: 'Issues or interruptions',
    description: 'Document blockers, delays, incidents or access restrictions.',
  },
  {
    title: 'Pending activities',
    description: 'Identify unfinished work that must continue later.',
  },
  {
    title: 'Next steps',
    description: 'Explain the activities planned for the next day or shift.',
  },
  {
    title: 'Support required',
    description:
      'Mention approvals, resources or decisions needed to continue the work.',
  },
]

const activityMistakes = [
  {
    title: 'Listing tasks without results',
    description:
      'Do not only name the activity. Explain what was completed and what outcome was achieved.',
  },
  {
    title: 'Using unclear time descriptions',
    description:
      'When hours matter, record the approximate time spent instead of using vague phrases such as “worked all day.”',
  },
  {
    title: 'Leaving pending work undefined',
    description:
      'Clearly separate completed activities from work that remains unfinished.',
  },
  {
    title: 'Ignoring interruptions',
    description:
      'Document delays, access restrictions and equipment problems when they affect productivity.',
  },
]

const faqs = [
  {
    question: 'What is a daily activity report?',
    answer:
      'A daily activity report is a document used to summarize the tasks completed, time spent, results achieved, problems encountered and activities planned for the next work period.',
  },
  {
    question: 'Who uses daily activity reports?',
    answer:
      'They are used by employees, supervisors, contractors, maintenance teams, field crews, project teams and operational departments.',
  },
  {
    question: 'What should a daily activity report include?',
    answer:
      'Include basic report details, completed activities, hours, results, problems, pending work and next steps.',
  },
  {
    question: 'How detailed should a daily activity report be?',
    answer:
      'It should contain enough detail to explain the work performed without becoming difficult to review. Short structured sections usually work best.',
  },
  {
    question: 'Can a daily activity report be exported as PDF?',
    answer:
      'Yes. A PDF makes the report easier to share, archive and review while preserving its layout.',
  },
]

export default function DailyActivityReportPage() {
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
            name: 'Daily Reports',
            url: 'https://reporting-tools-platform.vercel.app/guides/daily-reports',
          },
          {
            name: 'Daily Activity Report',
            url: 'https://reporting-tools-platform.vercel.app/guides/daily-activity-report',
          },
        ]}
      />

      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Activity Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Activity Report: Format, Example and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A daily activity report summarizes the tasks completed during a
            workday or shift. It helps managers and supervisors understand how
            time was used, what results were achieved, what problems occurred
            and what activities remain pending.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a structured activity report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Daily Report Generator to organize activities, working
              hours, progress, incidents and pending tasks with live preview and
              PDF export.
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
              What is a daily activity report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily activity report is a structured record of the work
              performed during a specific day or shift. Unlike a simple task
              list, it should also explain results, time spent, operational
              issues and the work that should continue next.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a daily activity report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              The exact sections may change depending on the role or industry,
              but the following structure works for most teams.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {activityReportSections.map((section) => (
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
              Daily activity report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Daily Activity Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> July 11, 2026
                </p>

                <p>
                  <strong>Department:</strong> Maintenance Operations
                </p>

                <p>
                  <strong>Work area:</strong> Conveyor Area 2
                </p>

                <p>
                  <strong>Activity 1:</strong> Inspected conveyor rollers and
                  identified wear on two support units. Time spent: 2 hours.
                </p>

                <p>
                  <strong>Activity 2:</strong> Replaced one damaged roller and
                  completed belt alignment verification. Time spent: 3 hours.
                </p>

                <p>
                  <strong>Activity 3:</strong> Updated the maintenance checklist
                  and equipment service records. Time spent: 1 hour.
                </p>

                <p>
                  <strong>Results:</strong> The conveyor was returned to
                  operational condition. Startup monitoring remains required.
                </p>

                <p>
                  <strong>Issues:</strong> Access approval delayed the beginning
                  of the inspection by approximately 20 minutes.
                </p>

                <p>
                  <strong>Pending activities:</strong> Monitor vibration during
                  startup and schedule replacement of the remaining worn
                  rollers.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Simple daily activity report format
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-white p-6'>
              <div className='space-y-5 text-sm leading-7 text-slate-700'>
                <div>
                  <p className='font-semibold text-slate-950'>
                    1. Date and work details
                  </p>
                  <p>
                    Project, department, shift, work area and person reporting.
                  </p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    2. Activities performed
                  </p>
                  <p>Tasks completed and the time spent on each activity.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    3. Results achieved
                  </p>
                  <p>Progress, quantities, completed milestones or outcomes.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    4. Issues or interruptions
                  </p>
                  <p>Delays, blockers, incidents or equipment problems.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>
                    5. Pending activities
                  </p>
                  <p>Unfinished work and required follow-up actions.</p>
                </div>

                <div>
                  <p className='font-semibold text-slate-950'>6. Next steps</p>
                  <p>Activities planned for the next day or work period.</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a daily activity report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Record activities as they happen
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Keep brief notes during the day so important activities, hours
                  and operational details are not forgotten.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe results, not only tasks
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain whether the activity was completed, what changed and
                  what measurable result was achieved.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Document interruptions and pending work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record problems that affected productivity and clearly
                  identify unfinished activities.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Review before submitting
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Check dates, hours, names and activity descriptions before
                  sharing the report with a manager or supervisor.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common daily activity report mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {activityMistakes.map((mistake) => (
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
            currentHref='/guides/daily-activity-report'
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
              Create your daily activity report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to document activities, hours,
              progress, issues and pending work with live preview and PDF
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
