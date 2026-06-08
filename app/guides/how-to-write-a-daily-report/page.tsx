import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Daily Report',
  description:
    'Learn how to write a daily work report with examples, structure, sections and a professional daily report generator.',
  keywords: [
    'how to write a daily report',
    'how to write daily work report',
    'daily work report sample',
    'how to write a daily report to your boss',
    'daily report example',
    'daily status report',
  ],
}

const dailyReportSections = [
  'Project or site name',
  'Date and shift',
  'Supervisor information',
  'Completed activities',
  'Manpower and working hours',
  'Progress tracking',
  'Incidents and observations',
  'Pending tasks',
]

const faqs = [
  {
    question: 'How do you write a daily report at work?',
    answer:
      'Start with the date, project or work area, supervisor name and shift. Then summarize completed work, issues, incidents, progress, pending tasks and next steps.',
  },
  {
    question: 'What should I include in a daily report to my boss?',
    answer:
      'Include what was completed, what is still pending, any delays or incidents, key numbers such as hours or progress, and what support or decisions are needed.',
  },
  {
    question: 'How long should a daily report be?',
    answer:
      'A daily report should be short enough to read quickly but detailed enough to explain the work completed, issues found and pending actions. One page is often enough for simple reports.',
  },
  {
    question: 'Can I create a daily report as a PDF?',
    answer:
      'Yes. A daily report can be exported as a PDF so it can be shared with supervisors, clients, contractors or internal teams.',
  },
]

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
            A daily report is a short work document used to summarize what
            happened during a day or shift. It helps managers, supervisors and
            teams understand completed work, progress, incidents, delays and
            pending tasks.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need a faster way to create reports?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Daily Report Generator to create professional reports with
              structured sections, KPIs, live preview and PDF export.
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
              A daily report is a structured document used to record daily work
              progress. It is commonly used in construction, maintenance,
              operations, logistics, mining and office teams. A good daily
              report makes it easier to review what was done, what problems
              happened and what needs attention next.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should be included in a daily report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily report should be clear, short and easy to review. The most
              useful reports usually include the following sections:
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {dailyReportSections.map((item) => (
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
              Daily work report sample
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Daily Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Date:</strong> May 22, 2026
                </p>

                <p>
                  <strong>Project:</strong> Conveyor Maintenance Area 2
                </p>

                <p>
                  <strong>Supervisor:</strong> John Doe
                </p>

                <p>
                  <strong>Completed work:</strong> The maintenance team
                  completed inspection of the conveyor transfer area, replaced
                  two damaged rollers and performed alignment checks.
                </p>

                <p>
                  <strong>Incidents:</strong> No injuries were reported. Access
                  restrictions remained active during maintenance work.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Continue vibration monitoring
                  during the next shift and complete final housekeeping in the
                  work area.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a daily report to your boss
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              When writing a daily report to your boss or manager, focus on the
              information they need to make decisions. Start with what was
              completed, then mention problems, risks, delays and what will
              happen next. Avoid long explanations unless the issue needs
              attention.
            </p>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-white p-6'>
              <h3 className='text-xl font-bold text-slate-950'>
                Simple structure
              </h3>

              <ul className='mt-4 space-y-3 text-sm leading-6 text-slate-600'>
                <li>1. What was completed today?</li>
                <li>2. What problems or delays happened?</li>
                <li>3. What remains pending?</li>
                <li>4. What support or decisions are needed?</li>
              </ul>
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
                  Gather completed activities, manpower, progress, equipment
                  status, incidents, delays and operational observations.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Organize incidents and pending work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document safety incidents, restrictions, unresolved tasks and
                  actions that should continue during the next shift or workday.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Export and share the report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Generate a clean PDF report and share it with managers,
                  supervisors, clients, contractors or operational teams.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Related daily report guides
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/how-to-write-a-daily-report-for-construction'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Daily Report for Construction
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to structure construction daily reports for site
                  teams and supervisors.
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
                  Create a structured daily report and export it as a PDF.
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
            <h2 className='text-3xl font-bold'>Create your own daily report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create operational reports with
              structured sections, KPIs, live preview and PDF export.
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
