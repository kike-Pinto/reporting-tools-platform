import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Shift Handover Example: Sample, Format and Guide',
  description:
    'Review a practical shift handover example with completed work, equipment status, pending tasks, incidents, risks and recommendations.',
  keywords: [
    'shift handover example',
    'shift handover report example',
    'shift handover sample',
    'shift handover format',
    'operations handover example',
    'maintenance shift handover example',
    'shift change report example',
    'handover report sample',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/shift-handover-example',
  },
}

const handoverSections = [
  {
    title: 'Shift information',
    description:
      'Include the site, date, outgoing shift, incoming shift and supervisor names.',
  },
  {
    title: 'Work completed',
    description:
      'Summarize the main activities, inspections and operational work completed.',
  },
  {
    title: 'Equipment status',
    description:
      'Explain which equipment is available, restricted, isolated or under maintenance.',
  },
  {
    title: 'Pending tasks',
    description:
      'List unfinished work with priority, location and required follow-up.',
  },
  {
    title: 'Incidents and risks',
    description:
      'Record safety events, abnormal conditions, restrictions and active hazards.',
  },
  {
    title: 'Operational changes',
    description:
      'Document changes to production, access, permits, procedures or work priorities.',
  },
  {
    title: 'Recommendations',
    description:
      'Tell the incoming shift what must be checked, monitored or escalated.',
  },
  {
    title: 'Acknowledgement',
    description:
      'Confirm that the incoming supervisor received and reviewed the handover.',
  },
]

const handoverTypes = [
  {
    title: 'Operations handover',
    description:
      'Focuses on production status, active equipment, operational restrictions and priorities.',
  },
  {
    title: 'Maintenance handover',
    description:
      'Covers equipment condition, repairs in progress, isolations, permits and required testing.',
  },
  {
    title: 'Construction handover',
    description:
      'Documents site progress, contractor activities, access conditions, permits and pending work.',
  },
  {
    title: 'Logistics handover',
    description:
      'Summarizes deliveries, inventory movements, vehicle status and outstanding requests.',
  },
]

const commonMistakes = [
  {
    title: 'Writing vague pending tasks',
    description:
      'Include the exact activity, location, priority and reason the task remains open.',
  },
  {
    title: 'Leaving equipment status unclear',
    description:
      'State whether each important asset is available, restricted, isolated or unavailable.',
  },
  {
    title: 'Not identifying active risks',
    description:
      'The incoming shift must understand current hazards, controls and access restrictions.',
  },
  {
    title: 'No confirmation from the incoming shift',
    description:
      'A handover is not complete until the receiving person has reviewed the information.',
  },
]

const faqs = [
  {
    question: 'What is a shift handover example?',
    answer:
      'A shift handover example shows how to organize completed work, equipment status, pending tasks, risks and recommendations for the incoming shift.',
  },
  {
    question: 'What should a shift handover include?',
    answer:
      'Include shift details, completed work, equipment condition, pending tasks, incidents, risks, restrictions and next-shift recommendations.',
  },
  {
    question: 'How detailed should a shift handover be?',
    answer:
      'It should provide enough detail for the incoming team to continue safely without becoming difficult to review.',
  },
  {
    question: 'Who should complete the handover report?',
    answer:
      'The outgoing supervisor, operator, coordinator or responsible team member should prepare it before the shift ends.',
  },
  {
    question: 'Can a shift handover be exported as PDF?',
    answer:
      'Yes. PDF export creates a consistent record that can be shared, signed and archived.',
  },
]

export default function ShiftHandoverExamplePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Shift Handover Example
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Shift Handover Example: Sample, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A clear shift handover helps the incoming team understand what was
            completed, what remains open, which equipment requires attention and
            which risks must be controlled.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a shift handover quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Shift Handover Generator to organize completed work,
              equipment status, pending tasks, incidents and recommendations
              with live preview and PDF export.
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
              What does a shift handover example show?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A shift handover example demonstrates how operational information
              should be transferred from one team to another. It separates
              completed work from pending tasks and makes equipment condition,
              risks and next priorities easy to identify.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Main sections of a shift handover
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {handoverSections.map((section) => (
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
              Operations shift handover example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Operational Shift Handover Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Site:</strong> Concentrator Plant — Area 2
                </p>

                <p>
                  <strong>Date:</strong> July 17, 2026
                </p>

                <p>
                  <strong>Outgoing shift:</strong> Day Shift
                </p>

                <p>
                  <strong>Incoming shift:</strong> Night Shift
                </p>

                <p>
                  <strong>Work completed:</strong> Completed conveyor
                  inspection, replaced one damaged support roller and cleared
                  accumulated material near the transfer point.
                </p>

                <p>
                  <strong>Equipment status:</strong> Conveyor B-02 is available
                  for operation. Pump P-14 remains isolated while alignment
                  verification is completed.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete pump alignment,
                  perform functional testing and monitor conveyor vibration
                  during startup.
                </p>

                <p>
                  <strong>Incidents or risks:</strong> No injuries reported.
                  Access to Pump P-14 remains restricted while isolation is
                  active.
                </p>

                <p>
                  <strong>Recommendations:</strong> Prioritize pump testing at
                  the beginning of the shift and report any abnormal vibration
                  immediately.
                </p>

                <p>
                  <strong>Incoming supervisor acknowledgement:</strong>
                  Handover reviewed and accepted.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Maintenance shift handover example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Maintenance Handover Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Equipment:</strong> Compressor C-04
                </p>

                <p>
                  <strong>Work completed:</strong> Removed damaged belt,
                  inspected pulleys and prepared replacement components.
                </p>

                <p>
                  <strong>Current status:</strong> Equipment isolated and
                  unavailable for operation.
                </p>

                <p>
                  <strong>Pending task:</strong> Install replacement belt,
                  complete tension adjustment and perform a no-load test.
                </p>

                <p>
                  <strong>Parts:</strong> Replacement belt is available in the
                  workshop.
                </p>

                <p>
                  <strong>Risk:</strong> Isolation must remain active until the
                  mechanical supervisor confirms work completion.
                </p>

                <p>
                  <strong>Recommendation:</strong> Check pulley alignment before
                  installing the new belt.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common shift handover types
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {handoverTypes.map((type) => (
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
              How to adapt this shift handover sample
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Replace the site and shift information
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Use the actual location, shift times, supervisors and
                  reporting date.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Record the real work completed
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Summarize important work and outcomes instead of copying the
                  previous shift report.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Identify every open task and restriction
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Include task priority, equipment condition, isolations,
                  permits and access controls.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Confirm receipt
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Allow the incoming supervisor to ask questions and acknowledge
                  that the handover was received.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common shift handover mistakes
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
            currentHref='/guides/shift-handover-example'
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
              Use the Shift Handover Generator to document completed work,
              equipment status, pending tasks and recommendations with live
              preview and PDF export.
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
