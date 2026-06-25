import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Daily Report to Your Boss',
  description:
    'Learn how to write a clear daily report to your boss or manager with examples, structure and practical sections.',
  keywords: [
    'how to write a daily report to your boss',
    'how to write daily report to boss',
    'how to send daily report to manager',
    'daily report to manager',
    'daily status report to manager',
  ],
}

export default function DailyReportToBossPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Daily Report to Your Boss
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A daily report to your boss should be clear, short and useful for
            decision-making. It should explain what was completed, what problems
            happened, what remains pending and what support is needed.
          </p>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Simple structure
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'What was completed today',
                'Main problems or delays',
                'Pending tasks',
                'Support or decisions needed',
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
              Daily report to boss example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-700'>
              <p>
                <strong>Date:</strong> June 12, 2026
              </p>

              <p className='mt-4'>
                <strong>Completed today:</strong> The team completed equipment
                inspection, replaced damaged components and updated the work
                area checklist.
              </p>

              <p className='mt-4'>
                <strong>Issues:</strong> One access restriction delayed the
                start of work by 30 minutes.
              </p>

              <p className='mt-4'>
                <strong>Pending:</strong> Final verification will continue
                during the next shift.
              </p>

              <p className='mt-4'>
                <strong>Support needed:</strong> Approval is required to
                schedule additional inspection time tomorrow.
              </p>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Tips for writing to a manager
            </h2>

            <ul className='mt-5 space-y-3 text-sm leading-6 text-slate-600'>
              <li>1. Start with the most important information.</li>
              <li>2. Use short sections instead of long paragraphs.</li>
              <li>3. Mention blockers, delays or incidents clearly.</li>
              <li>4. Include what will happen next.</li>
              <li>5. Ask for support only when a decision is needed.</li>
            </ul>
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
                  How to Write a Daily Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn the full daily report structure.
                </p>
              </Link>

              <Link
                href='/guides/daily-work-report-sample'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Daily Work Report Sample
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  See a practical daily work report example.
                </p>
              </Link>
            </div>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Create a daily report faster</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to create structured reports with
              live preview and PDF export.
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
