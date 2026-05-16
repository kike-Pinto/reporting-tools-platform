import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Shift Handover Generator',
  description:
    'Create structured shift handover reports for operations, maintenance and field teams.',
}

export default function ShiftHandoverGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-20'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
              Operations Reporting Tool
            </p>

            <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
              Shift Handover Generator
            </h1>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              Create structured shift handover reports with pending tasks,
              incidents, equipment status and next-shift recommendations.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <button className='rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white'>
                Coming soon
              </button>

              <Link
                href='/tools/daily-report-generator'
                className='inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
              >
                Try Daily Report Generator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-6 md:grid-cols-3'>
          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-lg font-bold text-slate-950'>Pending tasks</h2>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              Document unfinished work and actions required for the next shift.
            </p>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-lg font-bold text-slate-950'>
              Equipment status
            </h2>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              Track equipment condition, issues, restrictions and operational
              notes.
            </p>
          </div>

          <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h2 className='text-lg font-bold text-slate-950'>
              Shift continuity
            </h2>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              Help teams continue work safely with clear handover instructions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
