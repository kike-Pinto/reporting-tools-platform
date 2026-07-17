import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Shift Handover Checklist for Operations and Maintenance',
  description:
    'Use a practical shift handover checklist for completed work, equipment condition, pending tasks, risks, permits and next-shift priorities.',
  keywords: [
    'shift handover checklist',
    'shift change checklist',
    'operations handover checklist',
    'maintenance shift handover checklist',
    'shift handover template',
    'handover checklist for employees',
    'shift transition checklist',
    'shift handover procedure',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/shift-handover-checklist',
  },
}

const outgoingShiftChecklist = [
  'Confirm the reporting date, shift and work area',
  'Summarize the most important work completed',
  'List all unfinished tasks and their current status',
  'Confirm the condition of critical equipment',
  'Record active isolations, permits and access restrictions',
  'Document incidents, abnormal conditions and safety risks',
  'Identify materials, tools or parts required by the next shift',
  'Add recommendations and next-shift priorities',
  'Update relevant logs, reports and work orders',
  'Prepare supporting documents or photographs when needed',
]

const incomingShiftChecklist = [
  'Review completed work and confirm current operational status',
  'Ask questions about unclear or incomplete information',
  'Confirm which tasks must begin first',
  'Verify equipment restrictions and active isolations',
  'Review permits, access requirements and safety controls',
  'Check unresolved incidents, alarms and abnormal conditions',
  'Confirm available personnel, tools and materials',
  'Acknowledge receipt of the handover',
]

const supervisorChecklist = [
  'Confirm the handover was completed before the outgoing shift left',
  'Verify that critical risks were communicated',
  'Ensure pending tasks have priority and responsible persons',
  'Confirm important equipment status is accurate',
  'Review delays that may affect production or project targets',
  'Escalate unresolved high-priority issues',
  'Store the final handover report in the approved location',
]

const commonMistakes = [
  {
    title: 'Using the checklist without a discussion',
    description:
      'Important handovers should include a verbal review so the incoming team can ask questions.',
  },
  {
    title: 'Checking items without adding details',
    description:
      'The checklist confirms coverage, but the report must still contain real equipment and task information.',
  },
  {
    title: 'Ignoring low-frequency but high-risk information',
    description:
      'Temporary isolations, unusual alarms and high-potential risks must always be communicated.',
  },
  {
    title: 'Completing the handover after the shift has ended',
    description:
      'Prepare it early enough to allow review before the outgoing team leaves.',
  },
]

const faqs = [
  {
    question: 'What is a shift handover checklist?',
    answer:
      'A shift handover checklist is a structured list used to confirm that completed work, equipment status, pending tasks, risks and priorities were transferred to the incoming shift.',
  },
  {
    question: 'Who should use the checklist?',
    answer:
      'Outgoing and incoming supervisors, operators, technicians, coordinators and field teams can use it.',
  },
  {
    question: 'Is a checklist the same as a handover report?',
    answer:
      'No. The checklist confirms that important topics were reviewed. The report contains the actual operational information.',
  },
  {
    question: 'Should both shifts sign or acknowledge the handover?',
    answer:
      'For critical operations, acknowledgement is recommended because it confirms the incoming shift received the information.',
  },
  {
    question: 'Can checklist information be exported in a PDF report?',
    answer:
      'Yes. The important checklist results can be included in a structured handover report and exported as PDF.',
  },
]

export default function ShiftHandoverChecklistPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Shift Handover Checklist
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Shift Handover Checklist for Operations and Maintenance
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A shift handover checklist helps teams transfer work status,
            equipment condition, pending tasks, risks and operational priorities
            without missing critical information.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to turn the checklist into a report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Shift Handover Generator to document completed work,
              equipment condition, pending tasks and incidents with live preview
              and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/shift-handover-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto'
              >
                Open Shift Handover Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a shift handover checklist?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A shift handover checklist is a repeatable control used before
              responsibility passes from one shift to another. It helps reduce
              forgotten tasks, unclear equipment status and incomplete risk
              communication.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Outgoing shift checklist
            </h2>

            <div className='mt-6 space-y-3'>
              {outgoingShiftChecklist.map((item, index) => (
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
              Incoming shift checklist
            </h2>

            <div className='mt-6 space-y-3'>
              {incomingShiftChecklist.map((item, index) => (
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
              Supervisor verification checklist
            </h2>

            <div className='mt-6 space-y-3'>
              {supervisorChecklist.map((item, index) => (
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
              Shift handover checklist example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Maintenance Shift Handover
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Completed work:</strong> Conveyor inspection and
                  roller replacement completed.
                </p>

                <p>
                  <strong>Equipment status:</strong> Conveyor B-02 available.
                  Pump P-14 remains isolated.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete pump alignment and
                  functional test.
                </p>

                <p>
                  <strong>Active risks:</strong> Restricted access remains in
                  place around Pump P-14.
                </p>

                <p>
                  <strong>Parts required:</strong> No additional parts required.
                </p>

                <p>
                  <strong>Next-shift priority:</strong> Complete pump work
                  before the scheduled startup.
                </p>

                <p>
                  <strong>Incoming shift confirmation:</strong> Information
                  reviewed and accepted.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to use the checklist effectively
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Prepare before the end of the shift
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Begin collecting information early so the handover is ready
                  before the incoming team arrives.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Review the checklist together
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  The outgoing and incoming shift should review critical points
                  and resolve unclear information.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Prioritize safety and equipment status
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Discuss active risks, isolations, permits and unavailable
                  equipment before routine information.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Store the final report
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Keep the completed report where supervisors and future shifts
                  can review it.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common shift handover checklist mistakes
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
            currentHref='/guides/shift-handover-checklist'
            category='Shift Handover'
            title='Related shift handover guides'
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
              Create a shift handover report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Shift Handover Generator to document checklist results,
              equipment status, pending tasks and risks with live preview and
              PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/shift-handover-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'
              >
                Open Shift Handover Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
