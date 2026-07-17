import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Maintenance Report',
  description:
    'Learn how to write professional maintenance reports with examples, equipment details, completed work, findings, parts used and recommendations.',
  keywords: [
    'how to write a maintenance report',
    'maintenance report',
    'maintenance report example',
    'maintenance report sample',
    'equipment maintenance report',
    'preventive maintenance report',
    'corrective maintenance report',
    'maintenance inspection report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-a-maintenance-report',
  },
}

const maintenanceSections = [
  'Equipment name and identification number',
  'Maintenance type',
  'Report date and location',
  'Supervisor or technician information',
  'Equipment condition before maintenance',
  'Work completed',
  'Inspection findings',
  'Parts or materials used',
  'Recommendations and follow-up actions',
]

const maintenanceMistakes = [
  {
    title: 'Missing equipment identification',
    description:
      'Always include the equipment name, asset number or identification code so the report can be connected to the correct maintenance history.',
  },
  {
    title: 'Using vague work descriptions',
    description:
      'Avoid writing only “maintenance completed.” Explain what was inspected, adjusted, repaired or replaced.',
  },
  {
    title: 'Not recording parts used',
    description:
      'Document replaced parts, materials and quantities to support inventory control and future maintenance planning.',
  },
  {
    title: 'Leaving out recommendations',
    description:
      'A report should explain whether additional inspections, repairs or monitoring activities are required.',
  },
]

const faqs = [
  {
    question: 'What is a maintenance report?',
    answer:
      'A maintenance report is a structured document used to record equipment inspections, repairs, completed work, findings, parts used and follow-up recommendations.',
  },
  {
    question: 'What should be included in a maintenance report?',
    answer:
      'Include equipment identification, maintenance type, date, technician information, work completed, findings, parts used and recommendations.',
  },
  {
    question: 'Why are maintenance reports important?',
    answer:
      'They create a clear equipment service history, improve communication, support preventive maintenance planning and help reduce unexpected downtime.',
  },
  {
    question: 'Can I export a maintenance report as PDF?',
    answer:
      'Yes. A maintenance report can be exported as a PDF so it can be shared with supervisors, contractors, clients or internal maintenance teams.',
  },
]

export default function HowToWriteMaintenanceReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Maintenance Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Maintenance Report
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A maintenance report documents equipment condition, service work,
            completed tasks, inspection findings, parts used and
            recommendations. It helps maintenance teams maintain a clear work
            history and communicate the condition of equipment.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Maintenance Report Generator to create structured
              equipment service reports with tasks, parts, findings, live
              preview and PDF export.
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
              What is a maintenance report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A maintenance report is a structured document used to record
              inspections, repairs, preventive work, corrective actions and the
              current condition of equipment. It gives supervisors and
              maintenance teams a reliable record of what was found, what was
              repaired and what actions should happen next.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a maintenance report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A good maintenance report should make it easy to understand the
              equipment condition, work performed and any follow-up activities
              required.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {maintenanceSections.map((item) => (
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
              Maintenance report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Equipment Maintenance Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Conveyor Belt B-02
                </p>

                <p>
                  <strong>Equipment ID:</strong> CV-B02
                </p>

                <p>
                  <strong>Maintenance type:</strong> Preventive maintenance
                </p>

                <p>
                  <strong>Technician:</strong> Maintenance Team A
                </p>

                <p>
                  <strong>Work completed:</strong> The team inspected conveyor
                  rollers, lubricated bearings, adjusted belt tension and
                  replaced one damaged proximity sensor.
                </p>

                <p>
                  <strong>Findings:</strong> Moderate wear was found on two
                  support rollers. Belt alignment remained within acceptable
                  operational limits.
                </p>

                <p>
                  <strong>Parts used:</strong> One proximity sensor and two
                  bearing lubrication cartridges.
                </p>

                <p>
                  <strong>Recommendations:</strong> Inspect the support rollers
                  during the next maintenance window and continue vibration
                  monitoring.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a maintenance report step by step
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Identify the equipment
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record the equipment name, identification number, location and
                  maintenance type before documenting the work.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe the work completed
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain what was inspected, cleaned, adjusted, repaired or
                  replaced. Use specific descriptions instead of general notes.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Record findings and parts used
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document defects, abnormal conditions, measurements and the
                  parts or materials used during the maintenance activity.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Add recommendations and follow-up work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain whether additional repairs, inspections, monitoring or
                  replacement activities are required.
                </p>
              </div>
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
                  Used to document planned inspections, lubrication, routine
                  servicing and preventive actions intended to reduce equipment
                  failures.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  Corrective maintenance report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Used when a team repairs an identified defect, failure or
                  abnormal equipment condition.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  Inspection report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Used to record equipment condition, defects, restrictions,
                  measurements and recommendations for future maintenance work.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common maintenance report mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {maintenanceMistakes.map((mistake) => (
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

          <RelatedGuides
            currentHref='/guides/how-to-write-a-maintenance-report'
            category='Maintenance Reports'
            title='Related maintenance guides'
          />

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
            <h2 className='text-3xl font-bold'>Create a maintenance report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Maintenance Report Generator to create structured reports
              with equipment details, tasks, parts, findings, recommendations,
              live preview and PDF export.
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
