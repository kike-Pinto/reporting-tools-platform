import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Daily Work Report Sample',
  description:
    'See a practical daily work report sample with structure, examples and sections for supervisors, managers and operational teams.',
  keywords: [
    'daily work report sample',
    'daily report sample',
    'daily work report example',
    'how to write daily work report sample',
    'daily report examples',
    'daily work report format',
  ],
}

const sampleSections = [
  'Date and work area',
  'Supervisor or person reporting',
  'Completed work',
  'Progress or production notes',
  'Issues, delays or incidents',
  'Pending tasks',
  'Next steps',
]

const faqs = [
  {
    question: 'What is a daily work report sample?',
    answer:
      'A daily work report sample is an example report that shows how to organize completed work, issues, progress and pending tasks for a workday or shift.',
  },
  {
    question: 'How do I write a simple daily work report?',
    answer:
      'Start with the date, work area and supervisor. Then describe completed work, issues, pending tasks and next steps in short clear sections.',
  },
  {
    question: 'Should a daily work report be long?',
    answer:
      'No. A daily work report should be clear and practical. In many cases, one page is enough if the information is well organized.',
  },
  {
    question: 'Can I export a daily work report as PDF?',
    answer:
      'Yes. You can use a daily report generator to create a structured report and export it as a PDF.',
  },
]

export default function DailyWorkReportSamplePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Work Report Sample
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Work Report Sample
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A daily work report sample helps you understand how to summarize
            completed work, issues, delays and pending tasks in a clear format.
            It is useful for supervisors, managers, contractors, maintenance
            teams and operational workers.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Want to create your own report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Daily Report Generator to create a structured work report
              and export it as a PDF.
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
              What should a daily work report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A good daily work report should be simple, specific and easy to
              review. It should explain what was completed, what problems
              occurred and what needs to happen next.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {sampleSections.map((section) => (
                <div
                  key={section}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <p className='font-medium text-slate-900'>{section}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Daily work report sample
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Daily Work Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> June 12, 2026
                </p>

                <p>
                  <strong>Work area:</strong> Maintenance Area 2
                </p>

                <p>
                  <strong>Reported by:</strong> Shift Supervisor
                </p>

                <p>
                  <strong>Completed work:</strong> The team completed equipment
                  inspection, cleaned the work area and replaced damaged support
                  components.
                </p>

                <p>
                  <strong>Progress:</strong> Planned maintenance activities
                  advanced as expected. No major deviation from the work plan
                  was reported.
                </p>

                <p>
                  <strong>Issues:</strong> One access restriction delayed the
                  start of work by approximately 30 minutes.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Continue inspection during the
                  next shift and verify final equipment condition before
                  operation.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Simple daily work report format
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-white p-6'>
              <ul className='space-y-3 text-sm leading-6 text-slate-600'>
                <li>1. Date and work area</li>
                <li>2. Person reporting</li>
                <li>3. Work completed today</li>
                <li>4. Issues, delays or incidents</li>
                <li>5. Pending tasks</li>
                <li>6. Next steps or required support</li>
              </ul>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Related daily report resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/how-to-write-a-daily-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  How to Write a Daily Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn the full structure of a professional daily report.
                </p>
              </Link>

              <Link
                href='/guides/how-to-write-a-daily-report-for-construction'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Daily Report for Construction
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  See how daily reports are used on construction sites.
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
            <h2 className='text-3xl font-bold'>Create a daily work report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create structured daily work
              reports with live preview and PDF export.
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
