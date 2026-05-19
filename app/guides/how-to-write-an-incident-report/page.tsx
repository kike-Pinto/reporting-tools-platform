import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write an Incident Report',
  description:
    'Learn how to write professional incident reports including incident details, root cause analysis, corrective actions and recommendations.',
}

export default function IncidentGuidePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Incident Report Guide
          </p>

          <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
            How to Write an Incident Report
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            Incident reports help document events, identify contributing
            factors, assign corrective actions and reduce the probability of
            future incidents.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='font-semibold text-blue-900'>
              Need a faster solution?
            </p>

            <p className='mt-2 leading-7 text-blue-800'>
              Use our Incident Report Generator to create structured safety
              reports and export professional PDFs.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/incident-report-generator'
                className='inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800'
              >
                Open Incident Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is an incident report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              An incident report is a structured document used to record
              accidents, unsafe conditions, near misses, operational events and
              corrective actions. It provides traceability and supports
              continuous improvement.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Information every incident report should include
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Incident title',
                'Date and location',
                'Severity level',
                'People involved',
                'Description',
                'Immediate actions',
                'Root cause',
                'Corrective actions',
                'Recommendations',
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
            <h2 className='text-3xl font-bold text-slate-950'>
              Common incident report types
            </h2>

            <div className='mt-8 space-y-5'>
              {[
                'Safety Incident',
                'Near Miss',
                'Equipment Damage',
                'Environmental Incident',
                'Quality Incident',
              ].map((item) => (
                <div
                  key={item}
                  className='rounded-2xl border border-slate-200 p-6'
                >
                  <h3 className='text-xl font-bold'>{item}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why use an incident report generator?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Standardized reports improve communication, support investigations
              and create cleaner documentation.
            </p>
          </section>

          <section className='mt-14 rounded-3xl bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Create your incident report</h2>

            <p className='mt-4 text-slate-300 leading-8'>
              Generate structured reports with severity, corrective actions,
              recommendations and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/incident-report-generator'
                className='inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950'
              >
                Open Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
