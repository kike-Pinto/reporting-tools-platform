import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Maintenance Report Example: Sample and Format',
  description:
    'Review a practical maintenance report example with equipment details, completed work, findings, parts used, recommendations and follow-up actions.',
  keywords: [
    'maintenance report example',
    'maintenance report sample',
    'equipment maintenance report example',
    'preventive maintenance report example',
    'maintenance service report sample',
    'maintenance work report example',
    'maintenance report format',
    'industrial maintenance report example',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/maintenance-report-example',
  },
}

const reportParts = [
  {
    title: 'Equipment information',
    description:
      'Include the equipment name, identification number, location and maintenance type.',
  },
  {
    title: 'Work completed',
    description:
      'Describe inspections, adjustments, repairs, cleaning and replacement work.',
  },
  {
    title: 'Findings',
    description: 'Record defects, wear, abnormal conditions and measurements.',
  },
  {
    title: 'Parts and materials',
    description:
      'List replaced parts, materials and quantities used during the work.',
  },
  {
    title: 'Recommendations',
    description:
      'Explain future inspections, monitoring and additional repair requirements.',
  },
  {
    title: 'Equipment status',
    description:
      'State whether the equipment is available, restricted, isolated or awaiting further work.',
  },
]

const commonMistakes = [
  {
    title: 'Using generic descriptions',
    description:
      'Explain exactly what was inspected, adjusted, repaired or replaced.',
  },
  {
    title: 'Missing equipment identification',
    description:
      'Use the correct asset name and identification number so the report can be traced later.',
  },
  {
    title: 'Leaving out parts used',
    description:
      'Recording materials supports inventory control and future maintenance planning.',
  },
  {
    title: 'No follow-up recommendation',
    description:
      'The report should explain whether additional work or monitoring is required.',
  },
]

const faqs = [
  {
    question: 'What is a maintenance report example?',
    answer:
      'A maintenance report example shows how to organize equipment details, work completed, findings, parts used, recommendations and equipment status.',
  },
  {
    question: 'What should a maintenance report contain?',
    answer:
      'Include equipment identification, maintenance type, work completed, findings, parts used, recommendations and final status.',
  },
  {
    question: 'Can the same maintenance report format be reused?',
    answer:
      'Yes. A consistent format makes reports easier to compare and helps standardize maintenance documentation.',
  },
  {
    question: 'Should a maintenance report include photographs?',
    answer:
      'Photographs can be useful when they help document defects, damaged components or completed repairs, although they are not always required.',
  },
  {
    question: 'Can I export a maintenance report as PDF?',
    answer:
      'Yes. PDF export makes it easier to share the report and maintain a permanent service record.',
  },
]

export default function MaintenanceReportExamplePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Maintenance Report Example
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Maintenance Report Example: Sample and Format
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A maintenance report example shows how to document equipment
            condition, completed work, inspection findings, parts used and
            recommendations in a clear professional format.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Want to create your own maintenance report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Maintenance Report Generator to organize equipment
              details, tasks, parts, findings and recommendations with live
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
              What does a maintenance report example show?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A good example demonstrates how maintenance information should be
              organized so that supervisors, technicians and operations teams
              can understand what work was performed, what defects were found
              and what follow-up actions are required.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Main sections of the report
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportParts.map((part) => (
                <div
                  key={part.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{part.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {part.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Preventive maintenance report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Equipment Maintenance Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Conveyor Belt B-02
                </p>

                <p>
                  <strong>Equipment ID:</strong> CV-B02
                </p>

                <p>
                  <strong>Location:</strong> Transfer Area 2
                </p>

                <p>
                  <strong>Maintenance type:</strong> Preventive Maintenance
                </p>

                <p>
                  <strong>Technician:</strong> Mechanical Maintenance Team
                </p>

                <p>
                  <strong>Work completed:</strong> Inspected drive components,
                  checked roller condition, lubricated bearings, adjusted belt
                  tension and cleaned the sensor mounting area.
                </p>

                <p>
                  <strong>Findings:</strong> One support roller showed advanced
                  wear. Minor belt misalignment was corrected during the
                  inspection.
                </p>

                <p>
                  <strong>Parts used:</strong> One support roller, two
                  lubrication cartridges and mounting hardware.
                </p>

                <p>
                  <strong>Recommendations:</strong> Monitor vibration and
                  inspect the remaining support rollers during the next
                  scheduled maintenance window.
                </p>

                <p>
                  <strong>Final status:</strong> Equipment available for
                  operation with startup monitoring required.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Corrective maintenance report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Corrective Maintenance Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Pump P-14
                </p>

                <p>
                  <strong>Problem reported:</strong> Reduced flow and abnormal
                  vibration during operation.
                </p>

                <p>
                  <strong>Inspection findings:</strong> Coupling misalignment
                  and wear on the drive-side bearing.
                </p>

                <p>
                  <strong>Corrective work:</strong> Replaced the bearing,
                  realigned the coupling and completed a functional test.
                </p>

                <p>
                  <strong>Parts used:</strong> One bearing assembly and one
                  coupling insert.
                </p>

                <p>
                  <strong>Test results:</strong> Vibration returned to the
                  acceptable operating range and normal flow was restored.
                </p>

                <p>
                  <strong>Final status:</strong> Equipment returned to service.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to adapt this maintenance report sample
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Replace the equipment details
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Use the correct asset name, identification number and
                  maintenance location.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe the actual work performed
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record the inspections, repairs, adjustments and replacement
                  work completed by the team.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Add real findings and materials
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document defects, measurements, worn components and the parts
                  used during maintenance.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Confirm the final equipment status
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  State whether the equipment is available, restricted, awaiting
                  monitoring or unavailable for operation.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common maintenance report mistakes
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

          <RelatedGuides
            currentHref='/guides/maintenance-report-example'
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
              Use the Maintenance Report Generator to document equipment,
              completed tasks, findings, parts and recommendations with live
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
