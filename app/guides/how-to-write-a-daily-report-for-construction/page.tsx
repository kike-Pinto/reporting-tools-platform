import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Daily Report for Construction',
  description:
    'Learn how to write a construction daily report with site activities, manpower, progress, delays, incidents and pending tasks.',
  keywords: [
    'construction daily report',
    'how to write a daily report for construction',
    'construction daily report example',
    'site daily report',
    'daily construction report template',
  ],
}

const sections = [
  'Project name and site location',
  'Date, shift and weather conditions',
  'Supervisor and contractor information',
  'Manpower and working hours',
  'Completed site activities',
  'Equipment or materials used',
  'Safety incidents or observations',
  'Delays, blockers and pending tasks',
]

const faqs = [
  {
    question: 'What is a construction daily report?',
    answer:
      'A construction daily report is a site document used to record daily work progress, manpower, completed activities, delays, incidents and pending tasks.',
  },
  {
    question: 'Who usually prepares a construction daily report?',
    answer:
      'Construction daily reports are usually prepared by site supervisors, foremen, project engineers, contractors or field managers.',
  },
  {
    question: 'Why are construction daily reports important?',
    answer:
      'They help create a clear record of what happened on site, support communication between teams and provide documentation for progress, issues and claims.',
  },
  {
    question: 'Can I export a construction daily report as PDF?',
    answer:
      'Yes. Exporting the report as a PDF makes it easier to share with managers, clients, contractors and project teams.',
  },
]

export default function ConstructionDailyReportGuidePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Construction Daily Report Guide
          </p>

          <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
            How to Write a Daily Report for Construction
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            A construction daily report helps site teams document completed
            work, manpower, delays, incidents, equipment use and pending tasks.
            It gives supervisors, contractors and project managers a clear
            record of what happened on site each day.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Daily Report Generator to create structured construction
              daily reports with live preview and PDF export.
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
              What is a construction daily report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A construction daily report is a written record of daily site
              activity. It usually includes the work completed, manpower used,
              site conditions, delays, safety observations and pending tasks. It
              is useful for project tracking, communication and documentation.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a construction daily report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A good construction daily report should be specific, easy to
              review and organized by site information, activities, progress and
              issues.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {sections.map((item) => (
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
              Construction daily report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Site Daily Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> May 22, 2026
                </p>

                <p>
                  <strong>Project:</strong> Warehouse Expansion Project
                </p>

                <p>
                  <strong>Supervisor:</strong> Site Supervisor
                </p>

                <p>
                  <strong>Completed work:</strong> The crew completed concrete
                  preparation in Zone A, installed temporary access barriers and
                  advanced steel structure assembly in the north section.
                </p>

                <p>
                  <strong>Manpower:</strong> 12 workers on site, including civil
                  crew, steel installation team and safety support.
                </p>

                <p>
                  <strong>Delays:</strong> Material delivery for anchor bolts
                  was delayed and rescheduled for the next workday.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Continue steel assembly,
                  verify anchor bolt delivery and complete housekeeping in Zone
                  A.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why construction teams use daily reports
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Construction projects involve multiple teams, deadlines, safety
              controls and site conditions. Daily reports help keep a record of
              what was completed, what changed, what was delayed and what should
              happen next.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Related resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/how-to-write-a-daily-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  General Daily Report Guide
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn the general structure of daily work reports.
                </p>
              </Link>

              <Link
                href='/tools/daily-report-generator'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Daily Report Generator
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Create a daily report and export it as a PDF.
                </p>
              </Link>
            </div>
          </section>

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

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>
              Create a construction daily report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create construction daily
              reports with structured sections, live preview and PDF export.
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
