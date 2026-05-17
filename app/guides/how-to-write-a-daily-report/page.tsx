import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Daily Report',
  description:
    'Learn how to write professional daily reports for operations, construction, maintenance and industrial teams.',
}

export default function HowToWriteDailyReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Report Guide
          </p>

          <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
            How to Write a Daily Report
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Daily reports help operational teams document completed work,
            communicate incidents, track progress and coordinate upcoming tasks.
            They are commonly used in construction, mining, maintenance,
            logistics and industrial operations.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need a faster way to create reports?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Daily Report Generator to create professional reports with
              KPIs and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
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
              A daily report is a structured document used to summarize work
              completed during a shift or operational day. It helps supervisors,
              contractors and project teams understand what activities were
              completed, what issues occurred and what tasks remain pending.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should be included in a daily report?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Project or site name',
                'Date and shift',
                'Supervisor information',
                'Completed activities',
                'Manpower and working hours',
                'Progress tracking',
                'Incidents and observations',
                'Pending tasks',
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
              Example of a daily report workflow
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Collect operational information
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Gather activities completed during the shift, manpower
                  information, work progress, equipment status and operational
                  observations.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Organize incidents and pending work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document safety incidents, delays, operational restrictions
                  and tasks that should continue during the next shift.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Export and share the report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Generate a professional PDF document and share it with
                  supervisors, clients, contractors or operational teams.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why use a daily report generator?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Using a daily report generator helps reduce repetitive manual
              work, standardize operational documentation and create cleaner
              reports faster. It also improves communication between teams and
              supervisors while making documentation easier to review and share.
            </p>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Create your own daily report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create operational reports with
              KPIs, structured layouts and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
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
