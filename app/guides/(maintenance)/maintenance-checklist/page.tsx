import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Maintenance Checklist for Equipment and Operations',
  description:
    'Use a practical maintenance checklist for inspections, safety preparation, equipment condition, completed work, testing and follow-up actions.',
  keywords: [
    'maintenance checklist',
    'equipment maintenance checklist',
    'preventive maintenance checklist',
    'machine maintenance checklist',
    'industrial maintenance checklist',
    'maintenance inspection checklist',
    'maintenance checklist template',
    'equipment inspection checklist',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/maintenance-checklist',
  },
}

const preparationChecklist = [
  'Confirm the equipment name and identification number',
  'Review the maintenance work order or scheduled scope',
  'Check required permits, isolations and access restrictions',
  'Verify tools, replacement parts and materials',
  'Review equipment manuals or maintenance instructions',
  'Confirm technician responsibilities',
  'Identify safety hazards and required controls',
  'Notify operations before starting the work',
]

const inspectionChecklist = [
  'Inspect guards, covers and structural components',
  'Check for leaks, corrosion, cracks or physical damage',
  'Inspect bearings, rollers, belts, chains and couplings',
  'Check lubrication condition and fluid levels',
  'Inspect electrical connections, cables and sensors',
  'Record vibration, temperature, pressure or other readings',
  'Check alignment, tension and component wear',
  'Compare findings with normal limits or previous reports',
]

const completionChecklist = [
  'Confirm all planned maintenance tasks were completed',
  'Record repairs, adjustments and parts replaced',
  'Remove tools, materials and temporary controls',
  'Reinstall guards and protective covers',
  'Complete functional testing',
  'Confirm alarms and safety devices operate correctly',
  'Record the final equipment status',
  'Add follow-up recommendations',
  'Update maintenance records',
  'Notify operations that the work is complete',
]

const commonMistakes = [
  {
    title: 'Treating the checklist as a substitute for inspection',
    description:
      'A checklist guides the work, but technicians must still evaluate actual equipment conditions.',
  },
  {
    title: 'Using one checklist for every asset',
    description:
      'Adapt the checklist to the equipment type, risk level and maintenance scope.',
  },
  {
    title: 'Checking items without adding findings',
    description:
      'Important defects and measurements should be recorded in the maintenance report.',
  },
  {
    title: 'Skipping post-maintenance testing',
    description:
      'Always verify equipment function and protective systems before returning the asset to service.',
  },
]

const faqs = [
  {
    question: 'What is a maintenance checklist?',
    answer:
      'A maintenance checklist is a structured list of inspections, safety controls, service tasks and verification steps used during equipment maintenance.',
  },
  {
    question: 'What should an equipment maintenance checklist include?',
    answer:
      'Include work preparation, safety controls, inspection points, maintenance tasks, testing, final status and documentation requirements.',
  },
  {
    question: 'Is a maintenance checklist the same as a maintenance report?',
    answer:
      'No. The checklist guides the work. The maintenance report documents the work completed, findings, parts used and recommendations.',
  },
  {
    question: 'Should maintenance checklists be equipment-specific?',
    answer:
      'Yes. General sections may be reused, but inspection points should be adapted to the equipment type and manufacturer requirements.',
  },
  {
    question: 'Can checklist results be included in a PDF report?',
    answer:
      'Yes. Checklist results and findings can be summarized in a professional maintenance report and exported as PDF.',
  },
]

export default function MaintenanceChecklistPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Maintenance Checklist Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Maintenance Checklist for Equipment and Operations
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A maintenance checklist helps technicians prepare the work, inspect
            equipment consistently, verify completed tasks and confirm that the
            asset is ready to return to service.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to document the completed maintenance?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Maintenance Report Generator to convert inspection
              findings, completed tasks and parts used into a structured PDF
              report.
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
              What is a maintenance checklist?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A maintenance checklist is a repeatable list of preparation,
              inspection, servicing and testing steps. It helps reduce missed
              tasks, supports safe work and improves consistency between
              technicians and maintenance teams.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Before maintenance checklist
            </h2>

            <div className='mt-6 space-y-3'>
              {preparationChecklist.map((item, index) => (
                <div
                  key={item}
                  className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700'>
                    {index + 1}
                  </span>

                  <p className='text-sm leading-6 text-slate-700'>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Equipment inspection checklist
            </h2>

            <div className='mt-6 space-y-3'>
              {inspectionChecklist.map((item, index) => (
                <div
                  key={item}
                  className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700'>
                    {index + 1}
                  </span>

                  <p className='text-sm leading-6 text-slate-700'>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              After maintenance checklist
            </h2>

            <div className='mt-6 space-y-3'>
              {completionChecklist.map((item, index) => (
                <div
                  key={item}
                  className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700'>
                    {index + 1}
                  </span>

                  <p className='text-sm leading-6 text-slate-700'>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Maintenance checklist example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Conveyor Preventive Maintenance Checklist
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Conveyor Belt B-02
                </p>

                <p>
                  <strong>Preparation:</strong> Isolation confirmed, permits
                  approved and replacement roller available.
                </p>

                <p>
                  <strong>Inspection:</strong> Rollers, belt alignment, guards,
                  bearings, sensors and drive components inspected.
                </p>

                <p>
                  <strong>Work completed:</strong> Bearings lubricated, one worn
                  roller replaced and belt tension adjusted.
                </p>

                <p>
                  <strong>Findings:</strong> Minor wear observed on two support
                  rollers. No structural damage found.
                </p>

                <p>
                  <strong>Testing:</strong> Conveyor operated without abnormal
                  noise. Vibration remained within acceptable range.
                </p>

                <p>
                  <strong>Final status:</strong> Available for operation with
                  follow-up roller inspection recommended.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to use a maintenance checklist
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Adapt it to the equipment
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Add inspection points for the specific machine, components,
                  operating conditions and manufacturer requirements.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Use it during the work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Do not complete the checklist from memory after maintenance.
                  Record findings while inspections and tasks are performed.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Add comments for abnormal conditions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Checked items alone do not explain defects. Record
                  measurements, wear and recommended follow-up work.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Convert results into a report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Summarize the completed checklist, findings, parts used and
                  final equipment status in the maintenance report.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common maintenance checklist mistakes
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
            currentHref='/guides/maintenance-checklist'
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
              Use the Maintenance Report Generator to document checklist
              results, tasks, findings, parts and recommendations with live
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
