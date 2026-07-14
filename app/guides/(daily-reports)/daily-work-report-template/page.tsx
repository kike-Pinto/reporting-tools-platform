import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Daily Work Report Template',
  description:
    'Download and learn how to use a professional daily work report template for operations, maintenance, construction and field teams.',
  keywords: [
    'daily work report template',
    'daily report template',
    'work report template',
    'employee daily report template',
    'daily work template',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/daily-work-report-template',
  },
}

const reportSections = [
  'Project or work location',
  'Report date',
  'Employee or supervisor',
  'Completed work',
  'Hours worked',
  'Equipment or resources used',
  'Issues or delays',
  'Pending work',
  'Next steps',
]

const faqs = [
  {
    question: 'What is a daily work report template?',
    answer:
      'A daily work report template provides a standardized format for recording completed work, progress, issues and next steps.',
  },
  {
    question: 'Who uses daily work report templates?',
    answer:
      'Construction companies, maintenance teams, industrial operations, logistics companies and office teams commonly use them.',
  },
  {
    question: 'Should I include issues in my report?',
    answer:
      'Yes. Reporting delays, blockers and safety concerns helps managers make informed decisions.',
  },
]

export default function DailyWorkReportTemplatePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Reports
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Work Report Template
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            A daily work report template helps teams document completed work,
            project progress, delays, safety observations and pending tasks in a
            consistent format. Using the same structure every day improves
            communication and simplifies reporting.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Create reports automatically
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Daily Report Generator to create professional daily work
              reports with live preview and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                Open Daily Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold'>
              What is a daily work report template?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily work report template is a predefined structure used to
              record daily operational activities. Instead of creating reports
              from scratch, employees simply complete the required sections,
              making reports faster and more consistent.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold'>
              Who should use this template?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Construction supervisors',
                'Maintenance technicians',
                'Operations managers',
                'Project engineers',
                'Field inspectors',
                'Office teams',
              ].map((item) => (
                <div
                  key={item}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold'>Standard template sections</h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportSections.map((section) => (
                <div
                  key={section}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  {section}
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold'>Best practices</h2>

            <ul className='mt-6 space-y-3 text-slate-600'>
              <li>• Write reports before leaving the job site.</li>
              <li>• Include measurable results whenever possible.</li>
              <li>• Record delays and their causes.</li>
              <li>• Keep language short and objective.</li>
              <li>• Always define next-day priorities.</li>
            </ul>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold'>Frequently Asked Questions</h2>

            <div className='mt-8 space-y-6'>
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className='rounded-2xl border border-slate-200 p-6'
                >
                  <h3 className='font-bold'>{faq.question}</h3>

                  <p className='mt-3 leading-7 text-slate-600'>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold'>Related Daily Report Guides</h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/daily-report-format'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100'
              >
                Daily Report Format
              </Link>

              <Link
                href='/guides/daily-report-examples'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100'
              >
                Daily Report Examples
              </Link>

              <Link
                href='/guides/end-of-day-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100'
              >
                End of Day Report
              </Link>

              <Link
                href='/guides/how-to-write-a-daily-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100'
              >
                How to Write a Daily Report
              </Link>
            </div>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Create a Daily Work Report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Build professional daily work reports in minutes using our free
              Daily Report Generator.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-slate-900'
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
