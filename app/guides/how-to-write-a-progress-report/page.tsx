import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Progress Report',
  description:
    'Learn how to write professional project progress reports with planned progress, actual progress, activities, issues and next steps.',
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-a-progress-report',
  },
}

export default function HowToWriteProgressReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Progress Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Progress Report
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            A progress report helps teams communicate what has been completed,
            what is delayed, how actual progress compares with planned progress
            and what actions should happen next.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Progress Report Generator to create structured project
              reports with planned progress, actual progress, issues and PDF
              export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/progress-report-generator'
                className='inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
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
              usually includes planned progress, actual progress, completed
              activities, delays, risks and next steps.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a progress report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Project name and client',
                'Reporting period',
                'Project manager',
                'Executive summary',
                'Planned progress',
                'Actual progress',
                'Completed activities',
                'Issues and delays',
                'Next steps',
              ].map((item) => (
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
              Why planned vs actual progress matters
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Comparing planned progress with actual progress helps teams
              identify deviations early. If actual progress is lower than
              planned progress, the report should explain the cause, impact and
              corrective actions required to recover the schedule.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Example progress report workflow
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Define the reporting period
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Select the start and end date for the project period you want
                  to report. This can be a week, two weeks, a month or a custom
                  period.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Track activities and percentages
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Add project activities, owners, planned progress and actual
                  progress so stakeholders can quickly understand project
                  status.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Explain issues and next steps
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document delays, risks and actions required to keep the
                  project moving forward.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Create a progress report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Progress Report Generator to create structured reports
              with planned progress, actual progress, issues and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/progress-report-generator'
                className='inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
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
