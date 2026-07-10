import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Shift Handover Report',
  description:
    'Learn how to write structured shift handover reports for operations, maintenance and field teams.',
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-a-shift-handover-report',
  },
}

export default function HowToWriteShiftHandoverReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Shift Handover Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Shift Handover Report
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            A shift handover report helps teams transfer important operational
            information from one shift to the next. It is commonly used in
            mining, maintenance, construction, logistics, manufacturing and
            field operations.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Shift Handover Generator to create structured handover
              reports with pending tasks, incidents and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/shift-handover-generator'
                className='inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                Open Shift Handover Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a shift handover report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A shift handover report is a structured document used to
              communicate work completed, equipment condition, incidents,
              pending tasks and recommendations to the incoming shift. Its
              purpose is to reduce information loss and help the next team
              continue work safely and efficiently.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a shift handover include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Site or project name',
                'Outgoing and incoming shift',
                'Supervisor information',
                'Work completed',
                'Equipment status',
                'Pending tasks',
                'Incidents or risks',
                'Recommendations for the next shift',
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
              Why shift handovers matter
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Poor handovers can lead to repeated work, missed risks, equipment
              issues, safety problems and delays. A clear handover helps teams
              understand what happened, what remains open and what must be
              monitored during the next shift.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Example shift handover workflow
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Summarize completed work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document the main activities completed during the outgoing
                  shift, including inspections, maintenance work, operational
                  progress and important field observations.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Record pending tasks and incidents
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  List tasks that must continue, open risks, incidents,
                  restrictions and any equipment condition that requires
                  monitoring.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Add recommendations for the incoming shift
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Provide clear recommendations so the incoming team knows what
                  to check, prioritize or escalate during their shift.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>
              Create a shift handover report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Shift Handover Generator to create a structured report
              with pending tasks, incidents, recommendations and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/shift-handover-generator'
                className='inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
              >
                Open Shift Handover Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
