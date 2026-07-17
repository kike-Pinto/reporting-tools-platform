import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Preventive Maintenance Report: Example and Format',
  description:
    'Learn how to write a preventive maintenance report with equipment details, inspections, completed tasks, findings, parts used and recommendations.',
  keywords: [
    'preventive maintenance report',
    'preventive maintenance report example',
    'preventive maintenance report format',
    'preventive maintenance report sample',
    'preventive maintenance checklist report',
    'equipment preventive maintenance report',
    'planned maintenance report',
    'preventive maintenance documentation',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/preventive-maintenance-report',
  },
}

const reportSections = [
  {
    title: 'Equipment details',
    description:
      'Record the asset name, equipment ID, location and service date.',
  },
  {
    title: 'Scheduled maintenance scope',
    description:
      'List the inspections and planned activities required by the maintenance schedule.',
  },
  {
    title: 'Completed tasks',
    description:
      'Document lubrication, cleaning, adjustments, replacements and functional tests.',
  },
  {
    title: 'Condition findings',
    description:
      'Record wear, defects, abnormal readings and developing equipment issues.',
  },
  {
    title: 'Parts and materials used',
    description: 'Include replacement parts, consumables and quantities.',
  },
  {
    title: 'Measurements and test results',
    description:
      'Add vibration, temperature, pressure or other relevant readings.',
  },
  {
    title: 'Equipment status',
    description:
      'Confirm whether the asset is available for operation or requires restrictions.',
  },
  {
    title: 'Follow-up recommendations',
    description:
      'Define monitoring, repair or replacement work required later.',
  },
]

const benefits = [
  {
    title: 'Reduces unexpected failures',
    description:
      'Planned inspections identify developing problems before they cause a breakdown.',
  },
  {
    title: 'Creates equipment history',
    description:
      'Reports provide a record of condition changes, replaced parts and previous work.',
  },
  {
    title: 'Supports maintenance planning',
    description:
      'Findings help teams schedule repairs, order parts and allocate labor.',
  },
  {
    title: 'Improves communication',
    description:
      'Operations and maintenance teams receive a clear summary of equipment status.',
  },
]

const commonMistakes = [
  {
    title: 'Completing tasks without recording findings',
    description:
      'The report should explain the condition observed during each important inspection.',
  },
  {
    title: 'Copying the same comments every time',
    description:
      'Use current equipment observations instead of repeating generic text from previous reports.',
  },
  {
    title: 'Not comparing measurements',
    description:
      'When possible, compare readings with limits, previous values or normal operating ranges.',
  },
  {
    title: 'No follow-up plan',
    description:
      'Developing defects should lead to monitoring, repair or replacement recommendations.',
  },
]

const faqs = [
  {
    question: 'What is a preventive maintenance report?',
    answer:
      'A preventive maintenance report documents scheduled inspections and service activities performed to reduce equipment failures and maintain reliability.',
  },
  {
    question:
      'What should be included in preventive maintenance documentation?',
    answer:
      'Include equipment details, scheduled tasks, work completed, condition findings, parts used, measurements, final status and recommendations.',
  },
  {
    question:
      'What is the difference between preventive and corrective maintenance?',
    answer:
      'Preventive maintenance is planned before failure. Corrective maintenance repairs a defect or failure that has already occurred.',
  },
  {
    question: 'How often should preventive maintenance reports be prepared?',
    answer:
      'A report should be completed after every scheduled preventive maintenance event or inspection.',
  },
  {
    question: 'Can preventive maintenance reports be exported as PDF?',
    answer:
      'Yes. PDF reports are useful for service history, supervisors, audits, clients and maintenance planning.',
  },
]

export default function PreventiveMaintenanceReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Preventive Maintenance Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Preventive Maintenance Report: Example and Format
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A preventive maintenance report documents planned inspections,
            servicing, equipment condition, parts used and follow-up actions. It
            helps teams reduce breakdowns and maintain reliable equipment.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to document preventive maintenance?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Maintenance Report Generator to record equipment details,
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
              What is a preventive maintenance report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A preventive maintenance report is a structured record created
              after planned equipment service or inspection. It confirms which
              scheduled tasks were completed, identifies developing defects and
              records recommendations before a failure occurs.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should the report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {reportSections.map((section) => (
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
              Preventive maintenance report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Scheduled Preventive Maintenance Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Air Compressor C-04
                </p>

                <p>
                  <strong>Equipment ID:</strong> AC-C04
                </p>

                <p>
                  <strong>Location:</strong> Utilities Building
                </p>

                <p>
                  <strong>Maintenance frequency:</strong> Monthly
                </p>

                <p>
                  <strong>Completed tasks:</strong> Inspected drive belt,
                  cleaned air intake, checked oil level, inspected electrical
                  connections and completed functional testing.
                </p>

                <p>
                  <strong>Findings:</strong> Drive belt showed moderate wear.
                  Oil level and operating temperature remained within normal
                  limits.
                </p>

                <p>
                  <strong>Parts and materials used:</strong> Air filter and
                  cleaning materials.
                </p>

                <p>
                  <strong>Measurements:</strong> Operating temperature 74°C;
                  discharge pressure 7.8 bar.
                </p>

                <p>
                  <strong>Final status:</strong> Equipment available for normal
                  operation.
                </p>

                <p>
                  <strong>Recommendations:</strong> Replace the drive belt
                  during the next scheduled maintenance event and continue
                  temperature monitoring.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why preventive maintenance reports matter
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6'
                >
                  <h3 className='text-xl font-bold text-slate-950'>
                    {benefit.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a preventive maintenance report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Review the scheduled maintenance scope
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Confirm which inspections and service activities were planned
                  before beginning the report.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Record each completed task
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document inspections, cleaning, lubrication, adjustments,
                  replacements and tests performed.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Document current equipment condition
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record wear, abnormal conditions, measurements and developing
                  defects found during the work.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Define future maintenance actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Add monitoring, replacement or repair recommendations based on
                  the inspection findings.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common preventive maintenance report mistakes
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
            currentHref='/guides/preventive-maintenance-report'
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
            <h2 className='text-3xl font-bold'>
              Create a preventive maintenance report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Maintenance Report Generator to document scheduled tasks,
              equipment findings, parts and recommendations with live preview
              and PDF export.
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
