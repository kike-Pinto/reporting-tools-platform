import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Incident Report Example: Sample and Format',
  description:
    'Review a practical incident report example with incident details, immediate actions, contributing factors, corrective actions and recommendations.',
  keywords: [
    'incident report example',
    'incident report sample',
    'workplace incident report example',
    'safety incident report example',
    'incident report format',
    'accident report example',
    'near miss report example',
    'corrective action report example',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/incident-report-example',
  },
}

const reportSections = [
  {
    title: 'Incident identification',
    description:
      'Include the incident title, type, date, time, location and severity.',
  },
  {
    title: 'People involved',
    description:
      'Record affected workers, witnesses, supervisors and the person reporting.',
  },
  {
    title: 'Incident description',
    description:
      'Explain what happened using factual and chronological information.',
  },
  {
    title: 'Immediate actions',
    description:
      'Document the actions taken to control the situation and prevent further harm.',
  },
  {
    title: 'Contributing factors',
    description:
      'Identify conditions, decisions or failures that contributed to the event.',
  },
  {
    title: 'Corrective actions',
    description:
      'Define the actions required to prevent the incident from happening again.',
  },
  {
    title: 'Responsible persons',
    description:
      'Assign each corrective action to a person or team with a due date.',
  },
  {
    title: 'Final status',
    description:
      'State whether the incident is open, under investigation or closed.',
  },
]

const incidentTypes = [
  {
    title: 'Safety incident',
    description:
      'An event involving injury, exposure, unsafe work or another health and safety concern.',
  },
  {
    title: 'Near miss',
    description:
      'An event that could have caused injury, damage or loss but did not.',
  },
  {
    title: 'Equipment damage',
    description:
      'An incident involving machinery, tools, vehicles or operational assets.',
  },
  {
    title: 'Environmental incident',
    description:
      'An event involving spills, contamination, emissions or environmental impact.',
  },
]

const commonMistakes = [
  {
    title: 'Writing assumptions as facts',
    description:
      'Separate confirmed observations from opinions, interpretations and unverified causes.',
  },
  {
    title: 'Using vague descriptions',
    description:
      'Include who, what, when, where and how instead of writing only that an incident occurred.',
  },
  {
    title: 'Missing immediate actions',
    description:
      'Record how the area was controlled and what was done to protect people and equipment.',
  },
  {
    title: 'No responsible person for corrective actions',
    description:
      'Every corrective action should have an owner, due date and completion status.',
  },
]

const faqs = [
  {
    question: 'What is an incident report example?',
    answer:
      'An incident report example shows how to organize incident details, immediate actions, contributing factors, corrective actions and recommendations.',
  },
  {
    question: 'What should an incident report include?',
    answer:
      'Include the date, location, people involved, description, immediate actions, contributing factors, corrective actions and final status.',
  },
  {
    question: 'Should an incident report include opinions?',
    answer:
      'No. The main description should focus on confirmed facts and direct observations. Analysis can be added separately during the investigation.',
  },
  {
    question: 'When should an incident report be completed?',
    answer:
      'It should be prepared as soon as practical after the event while facts, witness information and observations are still clear.',
  },
  {
    question: 'Can an incident report be exported as PDF?',
    answer:
      'Yes. PDF export preserves the layout and makes the report easier to review, share and archive.',
  },
]

export default function IncidentReportExamplePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Incident Report Example
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Incident Report Example: Sample and Format
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            An incident report example shows how to document what happened,
            which immediate actions were taken, what factors contributed to the
            event and what corrective actions are required.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create an incident report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Incident Report Generator to document severity, immediate
              actions, root cause, corrective actions and recommendations with
              live preview and PDF export.
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
              What does an incident report example show?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A good example demonstrates how to organize factual information
              about an incident. It should make the sequence of events clear,
              explain how the situation was controlled and show how follow-up
              actions are assigned.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Main sections of an incident report
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
              Workplace incident report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Workplace Safety Incident Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Incident title:</strong> Unauthorized access to a
                  restricted maintenance area
                </p>

                <p>
                  <strong>Incident type:</strong> Safety Incident
                </p>

                <p>
                  <strong>Date and time:</strong> July 14, 2026 — 10:35 AM
                </p>

                <p>
                  <strong>Location:</strong> Conveyor Transfer Area 2
                </p>

                <p>
                  <strong>Severity:</strong> High Potential
                </p>

                <p>
                  <strong>Description:</strong> A worker entered the restricted
                  maintenance area before the physical access barrier had been
                  completely installed. The conveyor remained isolated and no
                  injury or equipment damage occurred.
                </p>

                <p>
                  <strong>Immediate actions:</strong> Work was stopped, the
                  worker was removed from the area and the access barrier was
                  installed correctly.
                </p>

                <p>
                  <strong>Contributing factors:</strong> Incomplete
                  communication between the maintenance supervisor and the
                  access control team.
                </p>

                <p>
                  <strong>Corrective actions:</strong> Update the pre-work
                  checklist, confirm barrier installation before entry and brief
                  all affected workers.
                </p>

                <p>
                  <strong>Responsible person:</strong> Maintenance Supervisor
                </p>

                <p>
                  <strong>Due date:</strong> July 16, 2026
                </p>

                <p>
                  <strong>Status:</strong> Open — corrective actions in progress
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Equipment damage incident example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Equipment Damage Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Incident:</strong> Forklift contacted a warehouse
                  barrier during reversing.
                </p>

                <p>
                  <strong>Damage:</strong> Minor damage to the barrier and no
                  visible damage to the forklift.
                </p>

                <p>
                  <strong>Immediate actions:</strong> The area was isolated and
                  the forklift was removed from service for inspection.
                </p>

                <p>
                  <strong>Contributing factors:</strong> Limited visibility and
                  materials stored near the reversing route.
                </p>

                <p>
                  <strong>Corrective actions:</strong> Clear the route, improve
                  floor markings and review reversing procedures with operators.
                </p>

                <p>
                  <strong>Final status:</strong> Forklift returned to service
                  after inspection. Barrier repair scheduled.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common incident report types
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {incidentTypes.map((type) => (
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
              How to adapt this incident report sample
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Replace the incident details
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Use the correct date, location, incident type, severity and
                  names or roles of the people involved.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe the real event chronologically
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain what happened before, during and immediately after the
                  incident using confirmed facts.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Add actual immediate actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record how the situation was controlled and what steps were
                  taken to protect people, equipment and the environment.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Assign corrective actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Define actions with responsible persons, due dates and clear
                  completion requirements.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common incident report mistakes
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
              Related incident resources
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
                  Learn the complete incident report structure.
                </p>
              </Link>

              <Link
                href='/guides/safety-incident-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Safety Incident Report
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document workplace safety incidents.
                </p>
              </Link>

              <Link
                href='/guides/near-miss-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>Near Miss Report</p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document events that could have caused harm.
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
                  Create and export a professional incident report.
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
            <h2 className='text-3xl font-bold'>Create your incident report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Incident Report Generator to document severity, immediate
              actions, contributing factors and corrective actions with live
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
