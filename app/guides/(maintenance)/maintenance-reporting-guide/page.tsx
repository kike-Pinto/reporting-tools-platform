import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Maintenance Reporting Guide for Equipment and Operations',
  description:
    'Learn how maintenance reporting works, what reports should include, common report types, KPIs, examples and best practices for equipment teams.',
  keywords: [
    'maintenance reporting',
    'maintenance reporting guide',
    'maintenance reports',
    'equipment maintenance reporting',
    'maintenance report system',
    'maintenance documentation',
    'maintenance work reporting',
    'industrial maintenance reporting',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/maintenance-reporting-guide',
  },
}

const reportingElements = [
  {
    title: 'Equipment identification',
    description:
      'Record the asset name, equipment ID, location and operational area.',
  },
  {
    title: 'Maintenance classification',
    description:
      'Identify whether the work is preventive, corrective, predictive or inspection-based.',
  },
  {
    title: 'Work completed',
    description:
      'Describe inspections, repairs, replacements, adjustments and tests performed.',
  },
  {
    title: 'Inspection findings',
    description:
      'Document wear, defects, abnormal conditions, measurements and observations.',
  },
  {
    title: 'Parts and materials',
    description: 'Record replaced components, consumables and quantities used.',
  },
  {
    title: 'Labor and duration',
    description:
      'Include technicians, working hours, downtime and maintenance duration.',
  },
  {
    title: 'Equipment status',
    description:
      'State whether the asset is available, restricted, isolated or awaiting further work.',
  },
  {
    title: 'Recommendations',
    description:
      'Define follow-up inspections, monitoring and future maintenance actions.',
  },
]

const reportTypes = [
  {
    title: 'Preventive maintenance report',
    description:
      'Documents planned service activities performed to reduce failures and extend equipment life.',
  },
  {
    title: 'Corrective maintenance report',
    description:
      'Records repairs completed after a defect, malfunction or equipment failure.',
  },
  {
    title: 'Inspection report',
    description:
      'Captures equipment condition, measurements, defects and recommendations without necessarily performing repairs.',
  },
  {
    title: 'Breakdown report',
    description:
      'Explains an equipment failure, production impact, root cause, repair work and final status.',
  },
  {
    title: 'Predictive maintenance report',
    description:
      'Uses condition-monitoring data such as vibration, temperature or oil analysis to identify developing problems.',
  },
  {
    title: 'Maintenance summary report',
    description:
      'Combines multiple work orders, costs, downtime and equipment events into a management overview.',
  },
]

const maintenanceKpis = [
  {
    title: 'Equipment downtime',
    description:
      'Total time equipment remained unavailable because of maintenance or failure.',
  },
  {
    title: 'Maintenance hours',
    description:
      'Labor hours spent on inspections, servicing, repairs and testing.',
  },
  {
    title: 'Completed work orders',
    description:
      'Number of planned or corrective jobs completed during the reporting period.',
  },
  {
    title: 'Maintenance cost',
    description:
      'Labor, parts, contractor and material costs associated with maintenance work.',
  },
  {
    title: 'Repeat failures',
    description:
      'Recurring defects that may indicate ineffective repairs or unresolved root causes.',
  },
  {
    title: 'Preventive maintenance compliance',
    description:
      'Percentage of scheduled preventive maintenance activities completed on time.',
  },
]

const commonMistakes = [
  {
    title: 'Inconsistent report formats',
    description:
      'Changing the structure between reports makes maintenance history difficult to review and compare.',
  },
  {
    title: 'Incomplete failure descriptions',
    description:
      'Record symptoms, conditions and operational impact instead of writing only “equipment failed.”',
  },
  {
    title: 'Missing final equipment status',
    description:
      'Operations teams need to know whether the asset is available, restricted or still under maintenance.',
  },
  {
    title: 'No connection between findings and actions',
    description:
      'Explain how inspection findings influenced the repair, recommendation or follow-up plan.',
  },
]

const faqs = [
  {
    question: 'What is maintenance reporting?',
    answer:
      'Maintenance reporting is the process of documenting equipment inspections, repairs, failures, parts used, labor hours, findings, costs and follow-up actions.',
  },
  {
    question: 'Why is maintenance reporting important?',
    answer:
      'It creates an equipment history, improves planning, supports reliability analysis, reduces information loss and helps teams control maintenance costs.',
  },
  {
    question: 'How often should maintenance reports be prepared?',
    answer:
      'A report should be prepared after significant maintenance work. Summary reports may also be created daily, weekly or monthly.',
  },
  {
    question:
      'What is the difference between a work order and a maintenance report?',
    answer:
      'A work order authorizes and plans the work. A maintenance report documents what was actually completed, found and recommended.',
  },
  {
    question: 'Can maintenance reports be exported as PDF?',
    answer:
      'Yes. PDF reports are useful for supervisors, clients, contractors, audits and long-term equipment records.',
  },
]

export default function MaintenanceReportingGuidePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Maintenance Reporting Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Maintenance Reporting Guide for Equipment and Operations
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            Maintenance reporting helps teams document equipment condition,
            completed work, failures, parts, downtime and recommendations. A
            consistent reporting process creates reliable service history and
            supports better maintenance decisions.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need a structured maintenance reporting workflow?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Maintenance Report Generator to document equipment, tasks,
              findings, parts and recommendations with live preview and PDF
              export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/maintenance-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto'
              >
                Open Maintenance Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is maintenance reporting?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Maintenance reporting is the structured documentation of service
              activities, inspections, repairs, failures and equipment
              condition. It explains what work was requested, what was actually
              completed, what defects were found and what follow-up action is
              required.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should maintenance reporting include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportingElements.map((element) => (
                <div
                  key={element.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{element.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {element.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common maintenance report types
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportTypes.map((type) => (
                <div
                  key={type.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6'
                >
                  <h3 className='text-xl font-bold text-slate-950'>
                    {type.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Maintenance reporting example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Equipment Maintenance Summary
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Conveyor Belt B-02
                </p>

                <p>
                  <strong>Maintenance type:</strong> Preventive Maintenance
                </p>

                <p>
                  <strong>Work completed:</strong> Inspected rollers, lubricated
                  bearings, adjusted belt tension and completed alignment
                  verification.
                </p>

                <p>
                  <strong>Findings:</strong> One support roller showed advanced
                  wear and minor vibration was detected at the drive unit.
                </p>

                <p>
                  <strong>Parts used:</strong> One support roller and two
                  lubrication cartridges.
                </p>

                <p>
                  <strong>Downtime:</strong> 3.5 hours
                </p>

                <p>
                  <strong>Final status:</strong> Equipment returned to service
                  with vibration monitoring required.
                </p>

                <p>
                  <strong>Recommendations:</strong> Perform vibration review
                  after 24 operating hours and inspect the remaining rollers
                  during the next maintenance window.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Important maintenance reporting KPIs
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {maintenanceKpis.map((kpi) => (
                <div
                  key={kpi.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{kpi.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {kpi.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to improve maintenance reporting
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Use a consistent report structure
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Standard sections make reports easier to complete, compare and
                  review across equipment and maintenance teams.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Use equipment-specific language
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record real component names, measurements, failure symptoms
                  and operating conditions.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Connect findings with recommendations
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Each significant defect or observation should lead to a
                  completed action, monitoring plan or future work requirement.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Review trends over time
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Use multiple reports to identify repeat failures, downtime
                  patterns, cost increases and equipment reliability problems.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common maintenance reporting mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {commonMistakes.map((mistake) => (
                <div
                  key={mistake.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{mistake.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {mistake.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Related maintenance resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/how-to-write-a-maintenance-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  How to Write a Maintenance Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to structure an individual maintenance report.
                </p>
              </Link>

              <Link
                href='/guides/maintenance-report-example'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Maintenance Report Example
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Review preventive and corrective maintenance examples.
                </p>
              </Link>

              <Link
                href='/guides/preventive-maintenance-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Preventive Maintenance Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document planned maintenance and inspections.
                </p>
              </Link>

              <Link
                href='/tools/maintenance-report-generator'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Maintenance Report Generator
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Create a structured maintenance report and export it as PDF.
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

          <section className='mt-14 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white sm:p-8'>
            <h2 className='text-3xl font-bold'>
              Create professional maintenance reports
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Maintenance Report Generator to document equipment,
              completed work, findings, parts and recommendations with live
              preview and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/maintenance-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'
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
