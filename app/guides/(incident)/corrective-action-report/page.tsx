import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Corrective Action Report: Example, Format and Guide',
  description:
    'Learn how to write a corrective action report with problem details, root cause, actions, responsible persons, due dates and effectiveness verification.',
  keywords: [
    'corrective action report',
    'corrective action report example',
    'corrective action report format',
    'corrective action plan',
    'corrective action report sample',
    'root cause corrective action report',
    'incident corrective action',
    'corrective and preventive action report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/corrective-action-report',
  },
}

const reportSections = [
  {
    title: 'Problem statement',
    description:
      'Describe the incident, defect, nonconformance or failure requiring corrective action.',
  },
  {
    title: 'Immediate containment',
    description:
      'Record temporary actions used to control the problem and reduce additional risk.',
  },
  {
    title: 'Root cause',
    description: 'Identify the underlying reason the problem occurred.',
  },
  {
    title: 'Corrective action',
    description:
      'Define the permanent change intended to remove or control the root cause.',
  },
  {
    title: 'Responsible person',
    description: 'Assign an owner for each corrective action.',
  },
  {
    title: 'Due date',
    description: 'Set a realistic completion date for each action.',
  },
  {
    title: 'Completion evidence',
    description:
      'Record documents, photographs, training records or inspection results.',
  },
  {
    title: 'Effectiveness review',
    description:
      'Confirm whether the action solved the problem and prevented recurrence.',
  },
]

const actionTypes = [
  {
    title: 'Procedure update',
    description:
      'Changes a work instruction, checklist, permit or operational process.',
  },
  {
    title: 'Engineering control',
    description:
      'Modifies equipment, guarding, barriers, alarms or another physical control.',
  },
  {
    title: 'Training action',
    description:
      'Provides targeted instruction when a knowledge or competency gap exists.',
  },
  {
    title: 'Inspection improvement',
    description:
      'Adds checks, measurements or verification steps to identify problems earlier.',
  },
  {
    title: 'Maintenance action',
    description:
      'Repairs, replaces or monitors equipment linked to the problem.',
  },
  {
    title: 'Management action',
    description:
      'Changes responsibilities, planning, supervision or resource allocation.',
  },
]

const commonMistakes = [
  {
    title: 'Correcting the symptom instead of the cause',
    description:
      'A temporary repair may restore operations without preventing the problem from returning.',
  },
  {
    title: 'Using vague action descriptions',
    description:
      'Actions should clearly explain what will change, who is responsible and when it will be completed.',
  },
  {
    title: 'Closing actions without evidence',
    description:
      'Completion should be supported by records, photographs, inspections or other verification.',
  },
  {
    title: 'Skipping the effectiveness review',
    description:
      'An action is not fully complete until the organization confirms that it produced the intended result.',
  },
]

const faqs = [
  {
    question: 'What is a corrective action report?',
    answer:
      'A corrective action report documents a problem, its root cause, the permanent actions assigned to prevent recurrence and the evidence used to verify effectiveness.',
  },
  {
    question:
      'What is the difference between containment and corrective action?',
    answer:
      'Containment controls the immediate problem. Corrective action addresses the underlying cause to prevent recurrence.',
  },
  {
    question: 'What should a corrective action report include?',
    answer:
      'Include the problem statement, containment, root cause, action description, responsible person, due date, completion evidence and effectiveness review.',
  },
  {
    question: 'Who should approve corrective actions?',
    answer:
      'Approval depends on the organization, but it commonly involves supervisors, managers, safety personnel, quality teams or technical specialists.',
  },
  {
    question: 'Can a corrective action report be exported as PDF?',
    answer:
      'Yes. PDF export helps preserve approvals, action details and verification records.',
  },
]

export default function CorrectiveActionReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Corrective Action Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Corrective Action Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A corrective action report documents a problem, the root cause,
            permanent actions, responsible persons and the evidence used to
            confirm that the issue has been resolved.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to track corrective actions?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Incident Report Generator to document root cause,
              responsible persons, due dates and corrective actions with live
              preview and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/incident-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto'
              >
                Open Incident Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a corrective action report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A corrective action report is a structured record used after an
              incident, failure, defect or nonconformance. It explains why the
              problem happened and what permanent changes will be made to
              prevent it from happening again.
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
              Corrective action report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Corrective Action Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Problem:</strong> Workers entered a maintenance area
                  before access barriers were completely installed.
                </p>

                <p>
                  <strong>Immediate containment:</strong> Work was stopped, the
                  area was isolated and access was restricted until barriers
                  were installed.
                </p>

                <p>
                  <strong>Root cause:</strong> The pre-work checklist did not
                  require formal confirmation that access controls were complete
                  before entry.
                </p>

                <p>
                  <strong>Corrective action 1:</strong> Add barrier verification
                  and supervisor approval to the pre-work checklist.
                </p>

                <p>
                  <strong>Responsible person:</strong> Maintenance
                  Superintendent
                </p>

                <p>
                  <strong>Due date:</strong> July 18, 2026
                </p>

                <p>
                  <strong>Corrective action 2:</strong> Brief all maintenance
                  crews on the revised access control process.
                </p>

                <p>
                  <strong>Completion evidence:</strong> Approved checklist,
                  toolbox attendance record and field verification photographs.
                </p>

                <p>
                  <strong>Effectiveness review:</strong> Review five maintenance
                  activities over the following month to confirm that barriers
                  are verified before entry.
                </p>

                <p>
                  <strong>Status:</strong> Open — effectiveness review pending
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common corrective action types
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {actionTypes.map((type) => (
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
              How to write a corrective action report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Define the problem clearly
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Describe what happened, where it happened and what standard,
                  procedure or expected result was not achieved.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Identify the root cause
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Investigate the underlying reason instead of stopping at the
                  visible symptom or immediate human action.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Create specific actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Define what will change, who will complete it, when it is due
                  and what evidence will demonstrate completion.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Verify effectiveness
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Review later performance, inspections or repeat events to
                  confirm that the action prevented recurrence.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common corrective action report mistakes
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
              Related corrective action resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/how-to-write-an-incident-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  How to Write an Incident Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document incidents and root causes.
                </p>
              </Link>

              <Link
                href='/guides/incident-report-example'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Incident Report Example
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Review an example with assigned corrective actions.
                </p>
              </Link>

              <Link
                href='/guides/near-miss-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>Near Miss Report</p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to act before an event causes actual harm.
                </p>
              </Link>

              <Link
                href='/tools/incident-report-generator'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Incident Report Generator
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Create and export a report with corrective actions.
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
              Create a corrective action report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Incident Report Generator to document root cause,
              responsible persons, due dates and corrective actions with live
              preview and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/incident-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'
              >
                Open Incident Report Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
