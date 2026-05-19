import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Maintenance Report',
  description:
    'Learn how to write professional maintenance reports for equipment inspections, service work, findings, parts used and recommendations.',
}

export default function HowToWriteMaintenanceReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Maintenance Report Guide
          </p>

          <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
            How to Write a Maintenance Report
          </h1>

          <p className='mt-6 text-lg leading-8 text-slate-600'>
            A maintenance report documents equipment condition, service work,
            completed tasks, parts used, findings and recommendations. It helps
            maintenance teams track work history, communicate issues and support
            future inspections.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use our Maintenance Report Generator to create structured
              equipment service reports with tasks, parts, findings and PDF
              export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/maintenance-report-generator'
                className='inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
              >
                Open Maintenance Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a maintenance report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A maintenance report is a structured document used to record
              equipment maintenance activities, inspections, repairs, parts
              used, findings and follow-up recommendations. It helps teams
              maintain a clear service history and communicate equipment status.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a maintenance report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {[
                'Equipment name and ID',
                'Maintenance type',
                'Report date and location',
                'Supervisor or technician information',
                'Work summary',
                'Findings and inspection notes',
                'Maintenance tasks completed',
                'Parts or materials used',
                'Recommendations and follow-up actions',
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
              Common maintenance report types
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  Preventive maintenance report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Used to document planned inspections, routine service tasks
                  and preventive actions designed to reduce equipment failures.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  Corrective maintenance report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Used when a team repairs or corrects an identified issue,
                  failure, defect or abnormal equipment condition.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  Inspection report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Used to record inspection findings, equipment condition,
                  defects, restrictions and recommendations for future work.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why use a maintenance report generator?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A maintenance report generator helps standardize documentation,
              reduce manual formatting, capture important service details and
              create professional PDF reports faster. This is especially useful
              for maintenance teams, supervisors, contractors and field crews.
            </p>
          </section>

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white'>
            <h2 className='text-3xl font-bold'>Create a maintenance report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Maintenance Report Generator to create structured reports
              with equipment details, tasks, parts, findings and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/maintenance-report-generator'
                className='inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100'
              >
                Open Maintenance Report Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
