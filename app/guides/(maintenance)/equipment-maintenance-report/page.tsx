import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Equipment Maintenance Report: Format and Example',
  description:
    'Learn how to write an equipment maintenance report with asset details, completed work, inspection findings, parts used, test results and recommendations.',
  keywords: [
    'equipment maintenance report',
    'equipment maintenance report example',
    'equipment maintenance report format',
    'equipment service report',
    'machine maintenance report',
    'industrial equipment maintenance report',
    'equipment repair report',
    'equipment inspection report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/equipment-maintenance-report',
  },
}

const equipmentReportSections = [
  {
    title: 'Equipment identification',
    description:
      'Record the equipment name, asset number, model, location and operational area.',
  },
  {
    title: 'Maintenance type',
    description:
      'Identify whether the work was preventive, corrective, predictive or inspection-based.',
  },
  {
    title: 'Reported condition',
    description:
      'Describe the symptoms, defects or reason the maintenance work was required.',
  },
  {
    title: 'Work completed',
    description:
      'Document inspections, repairs, adjustments, cleaning and component replacement.',
  },
  {
    title: 'Findings',
    description:
      'Record wear, defects, abnormal readings and equipment conditions found during the work.',
  },
  {
    title: 'Parts and materials',
    description:
      'List replacement parts, consumables, quantities and relevant identification numbers.',
  },
  {
    title: 'Testing and verification',
    description:
      'Include functional tests, measurements and confirmation that the equipment operates correctly.',
  },
  {
    title: 'Final equipment status',
    description:
      'State whether the equipment is available, restricted, isolated or awaiting additional work.',
  },
  {
    title: 'Recommendations',
    description:
      'Define future inspections, repairs, monitoring or replacement requirements.',
  },
]

const equipmentStatusTypes = [
  {
    title: 'Available for operation',
    description:
      'The maintenance work is complete and the equipment can return to normal service.',
  },
  {
    title: 'Available with monitoring',
    description:
      'The equipment may operate, but specific measurements or conditions must be monitored.',
  },
  {
    title: 'Restricted operation',
    description:
      'The equipment can only operate under defined limitations or temporary controls.',
  },
  {
    title: 'Unavailable',
    description:
      'The asset cannot return to service until additional repairs or inspections are completed.',
  },
]

const commonMistakes = [
  {
    title: 'Using the wrong asset information',
    description:
      'Confirm the equipment name and identification number before completing the report.',
  },
  {
    title: 'Describing repairs without the original problem',
    description:
      'Record the symptoms or reported defect so readers understand why the work was required.',
  },
  {
    title: 'Not documenting test results',
    description:
      'Explain how the team verified that the equipment was safe and functional after maintenance.',
  },
  {
    title: 'Leaving the final status unclear',
    description:
      'Operations teams need a direct statement confirming whether the equipment is available or restricted.',
  },
]

const faqs = [
  {
    question: 'What is an equipment maintenance report?',
    answer:
      'An equipment maintenance report is a structured document used to record asset condition, completed maintenance work, findings, parts used, tests and final equipment status.',
  },
  {
    question: 'What should an equipment maintenance report include?',
    answer:
      'Include equipment identification, maintenance type, reported condition, work completed, findings, parts, test results, final status and recommendations.',
  },
  {
    question: 'Who prepares equipment maintenance reports?',
    answer:
      'They may be prepared by technicians, mechanics, electricians, maintenance supervisors, contractors or reliability teams.',
  },
  {
    question: 'Should an equipment report include downtime?',
    answer:
      'Yes, when downtime affects production, availability, maintenance performance or project scheduling.',
  },
  {
    question: 'Can an equipment maintenance report be exported as PDF?',
    answer:
      'Yes. PDF export makes the report easier to share, approve and retain as part of the equipment service history.',
  },
]

export default function EquipmentMaintenanceReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Equipment Maintenance Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Equipment Maintenance Report: Format and Example
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            An equipment maintenance report documents the condition of an asset,
            the work performed, the parts used, the test results and the final
            operational status. It creates a clear maintenance history and helps
            operations teams understand whether equipment can return to service.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create an equipment report quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Maintenance Report Generator to document equipment,
              completed tasks, findings, parts and recommendations with live
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
              What is an equipment maintenance report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              An equipment maintenance report is a formal record of inspections,
              servicing, repairs and testing completed on a machine or asset. It
              explains the original condition, the work performed and whether
              the equipment is ready to return to operation.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should the report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {equipmentReportSections.map((section) => (
                <div
                  key={section.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{section.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Equipment maintenance report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Industrial Equipment Maintenance Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Hydraulic Pump P-14
                </p>

                <p>
                  <strong>Equipment ID:</strong> HP-P14
                </p>

                <p>
                  <strong>Location:</strong> Process Area 3
                </p>

                <p>
                  <strong>Maintenance type:</strong> Corrective Maintenance
                </p>

                <p>
                  <strong>Reported condition:</strong> Reduced discharge
                  pressure and abnormal vibration during operation.
                </p>

                <p>
                  <strong>Work completed:</strong> Inspected the pump and motor
                  assembly, replaced the drive-side bearing, realigned the
                  coupling and checked lubrication condition.
                </p>

                <p>
                  <strong>Findings:</strong> Bearing wear and coupling
                  misalignment were identified. No visible damage was found on
                  the pump housing.
                </p>

                <p>
                  <strong>Parts used:</strong> One bearing assembly, one
                  coupling insert and lubrication material.
                </p>

                <p>
                  <strong>Test results:</strong> Discharge pressure returned to
                  normal operating range and vibration decreased to an
                  acceptable level.
                </p>

                <p>
                  <strong>Final status:</strong> Equipment available for
                  operation.
                </p>

                <p>
                  <strong>Recommendations:</strong> Check vibration after 48
                  operating hours and inspect coupling alignment during the next
                  preventive maintenance event.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common equipment status descriptions
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {equipmentStatusTypes.map((status) => (
                <div
                  key={status.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6'
                >
                  <h3 className='text-xl font-bold text-slate-950'>
                    {status.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {status.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write an equipment maintenance report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Confirm the asset information
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Verify the equipment name, asset number, location and the type
                  of maintenance being performed.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe the original condition
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record symptoms, defects, alarms, abnormal readings or the
                  reason the equipment required maintenance.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Document the work and findings
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain the inspections, repairs, adjustments and replacement
                  work completed, including important findings.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Confirm the final status
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Add test results and clearly state whether the asset can
                  return to operation or requires additional restrictions.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common equipment maintenance report mistakes
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
              Related equipment maintenance resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/maintenance-report-example'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Maintenance Report Example
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Review preventive and corrective maintenance samples.
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
                  Learn how to document scheduled equipment maintenance.
                </p>
              </Link>

              <Link
                href='/guides/maintenance-checklist'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Maintenance Checklist
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Use a checklist before, during and after maintenance work.
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
                  Create and export an equipment maintenance report.
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
              Create an equipment maintenance report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Maintenance Report Generator to document equipment,
              completed work, findings, parts, tests and recommendations with
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
