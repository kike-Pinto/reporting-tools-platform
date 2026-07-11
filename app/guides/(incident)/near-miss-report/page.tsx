import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Near Miss Report: Example, Format and Guide',
  description:
    'Learn how to write a near miss report with event details, potential consequences, immediate controls, contributing factors and corrective actions.',
  keywords: [
    'near miss report',
    'near miss report example',
    'near miss report format',
    'near miss incident report',
    'workplace near miss report',
    'safety near miss example',
    'near miss reporting',
    'high potential near miss report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/near-miss-report',
  },
}

const reportSections = [
  {
    title: 'Event identification',
    description:
      'Include the event title, date, time, location and work activity.',
  },
  {
    title: 'People involved',
    description:
      'Record workers, witnesses, supervisors and anyone directly connected to the event.',
  },
  {
    title: 'Factual description',
    description:
      'Explain what happened in chronological order without assumptions or blame.',
  },
  {
    title: 'Potential consequences',
    description:
      'Describe what injury, damage or operational loss could have occurred.',
  },
  {
    title: 'Immediate controls',
    description:
      'Record how the area was made safe and how additional risk was controlled.',
  },
  {
    title: 'Contributing factors',
    description:
      'Identify conditions, communication gaps, procedural weaknesses or equipment issues.',
  },
  {
    title: 'Corrective actions',
    description:
      'Define actions that reduce the probability of the event happening again.',
  },
  {
    title: 'Responsible persons',
    description: 'Assign owners and due dates for every corrective action.',
  },
]

const nearMissTypes = [
  {
    title: 'Slip, trip or fall potential',
    description:
      'A person nearly falls because of a wet surface, obstacle, uneven floor or missing protection.',
  },
  {
    title: 'Dropped object',
    description:
      'A tool, material or component falls without causing injury or damage.',
  },
  {
    title: 'Vehicle interaction',
    description:
      'A worker or vehicle comes too close to moving equipment without making contact.',
  },
  {
    title: 'Unexpected equipment movement',
    description:
      'Machinery starts, shifts or releases energy unexpectedly without causing harm.',
  },
  {
    title: 'Unsafe access',
    description:
      'A person enters a restricted area or work zone before controls are fully established.',
  },
  {
    title: 'Exposure potential',
    description:
      'A person is nearly exposed to chemicals, heat, electricity, pressure or another hazardous condition.',
  },
]

const commonMistakes = [
  {
    title: 'Not reporting because nobody was injured',
    description:
      'The purpose of near miss reporting is to act before a similar event causes actual harm.',
  },
  {
    title: 'Focusing only on worker behavior',
    description:
      'Review procedures, equipment, supervision, communication and workplace conditions as well.',
  },
  {
    title: 'Leaving out potential consequences',
    description:
      'Explain how serious the outcome could have been under slightly different circumstances.',
  },
  {
    title: 'Closing the report without corrective actions',
    description:
      'A near miss should lead to practical actions that address contributing factors.',
  },
]

const faqs = [
  {
    question: 'What is a near miss report?',
    answer:
      'A near miss report documents an unplanned event that did not cause injury, damage or loss but had the potential to do so.',
  },
  {
    question: 'Why should near misses be reported?',
    answer:
      'They reveal hazards and control failures before a more serious incident occurs.',
  },
  {
    question: 'What should a near miss report include?',
    answer:
      'Include the event details, factual description, potential consequences, immediate controls, contributing factors and corrective actions.',
  },
  {
    question: 'Is a near miss the same as an incident?',
    answer:
      'A near miss is a type of incident where no harmful outcome occurred, although the potential for harm was present.',
  },
  {
    question: 'Can a near miss report be exported as PDF?',
    answer:
      'Yes. PDF export helps preserve the report structure and supports reviews, investigations and recordkeeping.',
  },
]

export default function NearMissReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Near Miss Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Near Miss Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A near miss report documents an event that did not cause injury,
            damage or loss but had the potential to produce a serious outcome.
            Reporting these events helps teams identify hazards before a more
            severe incident occurs.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a near miss report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Incident Report Generator to document severity, immediate
              controls, contributing factors and corrective actions with live
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
              What is a near miss?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A near miss is an unplanned event that could have caused injury,
              equipment damage, environmental impact or operational loss but did
              not. The difference between a near miss and a serious incident may
              be only timing, distance or chance.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a near miss report include?
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
              Near miss report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Workplace Near Miss Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Event title:</strong> Tool dropped from elevated work
                  platform
                </p>

                <p>
                  <strong>Date and time:</strong> July 15, 2026 — 11:10 AM
                </p>

                <p>
                  <strong>Location:</strong> Maintenance Area 3
                </p>

                <p>
                  <strong>Activity:</strong> Inspection of overhead pipe support
                </p>

                <p>
                  <strong>Description:</strong> A hand tool slipped from a
                  worker&apos;s glove and fell approximately three meters. The
                  tool landed inside the barricaded work zone. No person was
                  struck and no equipment was damaged.
                </p>

                <p>
                  <strong>Potential consequences:</strong> Serious head injury
                  could have occurred if a person had entered the drop zone.
                </p>

                <p>
                  <strong>Immediate controls:</strong> Work was stopped, the
                  area was checked and all tools were secured before work
                  resumed.
                </p>

                <p>
                  <strong>Contributing factors:</strong> The tool did not have a
                  tether and the pre-work inspection did not confirm dropped
                  object controls.
                </p>

                <p>
                  <strong>Corrective actions:</strong> Require tool tethering
                  for elevated work, update the pre-task checklist and brief the
                  maintenance team.
                </p>

                <p>
                  <strong>Status:</strong> Open — corrective actions in progress
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common types of near misses
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {nearMissTypes.map((type) => (
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
              How to write a near miss report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Control the immediate risk
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Stop the activity when necessary, isolate the area and make
                  sure people are protected before gathering information.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe the event factually
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain what happened, where it happened and what conditions
                  were present without assigning blame.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Explain the potential outcome
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Describe the injury, damage or loss that could have occurred
                  if circumstances had been slightly different.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Assign preventive actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Create actions that address the contributing factors and
                  assign responsible persons and deadlines.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common near miss reporting mistakes
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
              Related near miss resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/guides/safety-incident-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Safety Incident Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document workplace safety events.
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
                  Review practical workplace incident examples.
                </p>
              </Link>

              <Link
                href='/guides/corrective-action-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Corrective Action Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to assign and track corrective actions.
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
                  Create and export a near miss report.
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
            <h2 className='text-3xl font-bold'>Create a near miss report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Incident Report Generator to document potential
              consequences, immediate controls and corrective actions with live
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
