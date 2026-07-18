import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Daily Report Examples for Work and Operations',
  description:
    'Review practical daily report examples for office work, construction, maintenance and operational teams, with formats and writing tips.',
  keywords: [
    'daily report examples',
    'daily report example',
    'daily work report examples',
    'daily report sample',
    'daily status report example',
    'work daily report example',
    'daily report to manager example',
    'operational daily report example',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/daily-report-examples',
  },
}

const exampleTypes = [
  {
    title: 'Office daily report',
    description:
      'Summarizes completed tasks, meetings, blockers, pending work and priorities for the next workday.',
  },
  {
    title: 'Construction daily report',
    description:
      'Documents manpower, site activities, equipment, materials, weather, delays and safety observations.',
  },
  {
    title: 'Maintenance daily report',
    description:
      'Records equipment inspections, maintenance tasks, findings, parts used and follow-up actions.',
  },
  {
    title: 'Operations daily report',
    description:
      'Communicates production activity, operational events, incidents, performance and pending work.',
  },
]

const commonMistakes = [
  {
    title: 'Using vague descriptions',
    description:
      'Avoid writing only “work completed.” Explain the activity, location and result.',
  },
  {
    title: 'Leaving out problems',
    description:
      'Delays, incidents and blockers should be documented when they affect work or require attention.',
  },
  {
    title: 'Mixing completed and pending work',
    description:
      'Separate finished activities from tasks that must continue during the next day or shift.',
  },
  {
    title: 'Adding too much unnecessary detail',
    description:
      'Keep the report specific and useful without turning it into a long narrative.',
  },
]

const faqs = [
  {
    question: 'What is an example of a daily report?',
    answer:
      'A daily report example usually includes the date, work area, completed activities, progress, problems, pending tasks and next steps.',
  },
  {
    question: 'How do I write a simple daily report?',
    answer:
      'Start with the basic work information, summarize completed work, document issues, list pending tasks and explain what will happen next.',
  },
  {
    question: 'Should every daily report use the same format?',
    answer:
      'The basic structure can remain consistent, but the details should be adapted to the work environment, such as construction, maintenance, office work or operations.',
  },
  {
    question: 'Can a daily report include KPIs?',
    answer:
      'Yes. Operational reports may include hours worked, completed activities, production figures, progress percentages or incident counts.',
  },
  {
    question: 'Can I export a daily report as PDF?',
    answer:
      'Yes. A PDF preserves the report format and makes it easier to share with supervisors, clients and internal teams.',
  },
]

export default function DailyReportExamplesPage() {
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
            name: 'Daily Report Examples',
            url: 'https://reporting-tools-platform.vercel.app/guides/daily-report-examples',
          },
        ]}
      />
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Report Examples
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Report Examples for Work and Operations
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            Daily report examples show how to organize completed work,
            operational progress, problems, pending tasks and next steps. The
            exact content changes by industry, but the purpose remains the same:
            give managers and teams a clear summary of the workday.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Want to create your own daily report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Daily Report Generator to organize activities, progress,
              incidents and pending work with live preview and PDF export.
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
              What is a daily report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily report is a structured summary of work completed during a
              day or shift. It helps supervisors, managers, clients and
              operational teams understand progress, incidents, delays and the
              activities that remain unfinished.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common types of daily reports
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {exampleTypes.map((type) => (
                <div
                  key={type.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{type.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Daily work report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                General Daily Work Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> July 10, 2026
                </p>

                <p>
                  <strong>Work area:</strong> Operations Area 2
                </p>

                <p>
                  <strong>Reported by:</strong> Shift Supervisor
                </p>

                <p>
                  <strong>Completed work:</strong> The team completed the
                  planned equipment inspection, updated operational records and
                  finished housekeeping activities in the work area.
                </p>

                <p>
                  <strong>Progress:</strong> All scheduled activities were
                  completed except the final equipment verification.
                </p>

                <p>
                  <strong>Issues:</strong> Access restrictions delayed the start
                  of inspection work by approximately 25 minutes.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete final verification
                  and confirm that the equipment is available for operation.
                </p>

                <p>
                  <strong>Next steps:</strong> The incoming team will complete
                  verification and update the equipment status.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Construction daily report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Construction Site Daily Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Project:</strong> Warehouse Expansion Project
                </p>

                <p>
                  <strong>Manpower:</strong> 14 workers
                </p>

                <p>
                  <strong>Completed activities:</strong> The civil crew
                  completed concrete preparation in Zone A. The structural team
                  installed four steel supports in the north section.
                </p>

                <p>
                  <strong>Equipment used:</strong> Mobile crane, concrete mixer
                  and two lifting platforms.
                </p>

                <p>
                  <strong>Delays:</strong> Anchor bolt delivery was delayed and
                  rescheduled for the following morning.
                </p>

                <p>
                  <strong>Safety observations:</strong> No incidents were
                  reported. Barricades remained installed around the lifting
                  area.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Continue structural assembly
                  and verify delivery of anchor bolts.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Maintenance daily report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Maintenance Daily Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Conveyor Belt B-02
                </p>

                <p>
                  <strong>Completed activities:</strong> The maintenance team
                  inspected the drive unit, lubricated bearings and replaced one
                  damaged roller.
                </p>

                <p>
                  <strong>Findings:</strong> Moderate wear was observed on two
                  additional support rollers.
                </p>

                <p>
                  <strong>Parts used:</strong> One conveyor roller and two
                  lubrication cartridges.
                </p>

                <p>
                  <strong>Issues:</strong> No major equipment defects were
                  identified.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Monitor vibration during
                  startup and inspect the support rollers during the next
                  maintenance window.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to adapt a daily report example
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Choose the information your reader needs
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  A manager may need progress, blockers and decisions. A field
                  supervisor may also need manpower, equipment and safety
                  information.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Replace generic details with specific facts
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Include real activities, locations, hours, percentages and
                  operational results whenever possible.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Separate completed and pending work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  This helps the reader understand what was finished and what
                  must continue during the next work period.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common daily report mistakes
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
            currentHref='/guides/daily-report-examples'
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
            <h2 className='text-3xl font-bold'>Create your daily report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create structured reports with
              activities, progress, incidents, pending tasks, live preview and
              PDF export.
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
