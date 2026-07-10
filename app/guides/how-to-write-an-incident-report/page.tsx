import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write an Incident Report',
  description:
    'Learn how to write a professional incident report with examples, incident details, immediate actions, root cause analysis and corrective actions.',
  keywords: [
    'how to write an incident report',
    'incident report',
    'incident report example',
    'incident report sample',
    'safety incident report',
    'workplace incident report',
    'near miss report',
    'corrective action report',
    'root cause analysis report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-an-incident-report',
  },
}

const incidentSections = [
  'Incident title and type',
  'Date, time and location',
  'People involved',
  'Reported by and supervisor',
  'Severity and current status',
  'Detailed incident description',
  'Immediate actions taken',
  'Root cause or contributing factors',
  'Corrective actions',
  'Responsible persons and due dates',
  'Recommendations and follow-up',
]

const incidentTypes = [
  {
    title: 'Safety incident',
    description:
      'Used to document an event involving injury, unsafe work, hazardous exposure or another safety-related occurrence.',
  },
  {
    title: 'Near miss',
    description:
      'Used when an event could have caused injury, damage or loss but did not result in a harmful outcome.',
  },
  {
    title: 'Equipment damage',
    description:
      'Used to record damage, malfunction or failure affecting machinery, tools, vehicles or operational assets.',
  },
  {
    title: 'Environmental incident',
    description:
      'Used to document spills, releases, contamination or another event affecting the environment.',
  },
  {
    title: 'Quality incident',
    description:
      'Used to record defects, process deviations or nonconforming work that may affect product or service quality.',
  },
]

const incidentMistakes = [
  {
    title: 'Writing opinions instead of facts',
    description:
      'Describe what was observed, when it happened and who was involved. Avoid assumptions or unsupported conclusions.',
  },
  {
    title: 'Leaving out immediate actions',
    description:
      'Record what was done to control the situation, protect people and prevent additional damage.',
  },
  {
    title: 'Confusing cause with corrective action',
    description:
      'The root cause explains why the incident occurred. Corrective actions explain what will be changed to prevent recurrence.',
  },
  {
    title: 'Not assigning responsibilities',
    description:
      'Corrective actions should include a responsible person, target date and clear completion status.',
  },
]

const faqs = [
  {
    question: 'What is an incident report?',
    answer:
      'An incident report is a structured document used to record an accident, near miss, unsafe condition, equipment event or other operational occurrence.',
  },
  {
    question: 'What should an incident report include?',
    answer:
      'Include the date, location, people involved, factual description, immediate actions, root cause, corrective actions, responsible persons and recommendations.',
  },
  {
    question: 'When should an incident report be completed?',
    answer:
      'It should be completed as soon as practical after the incident while facts, observations and witness information are still clear.',
  },
  {
    question: 'What is the difference between a near miss and an incident?',
    answer:
      'A near miss did not result in injury or damage, but it had the potential to do so. An incident may include injury, damage, loss or operational impact.',
  },
  {
    question: 'Can an incident report be exported as PDF?',
    answer:
      'Yes. Exporting the report as a PDF helps preserve its structure and makes it easier to share, review and archive.',
  },
]

export default function IncidentGuidePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Incident Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write an Incident Report
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            An incident report records what happened, who was involved, what
            immediate actions were taken and what corrective measures are
            required. Clear documentation supports investigations, follow-up and
            prevention.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Incident Report Generator to create structured safety and
              operational reports with severity, root cause, corrective actions,
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
              What is an incident report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              An incident report is a structured document used to record
              accidents, near misses, unsafe conditions, equipment damage and
              other operational events. It provides a factual record and helps
              organizations identify causes, assign corrective actions and
              reduce the probability of recurrence.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should an incident report include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A complete report should explain what happened, how the situation
              was controlled and what actions will prevent the same event from
              happening again.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {incidentSections.map((item) => (
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
              Incident report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Workplace Incident Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Incident title:</strong> Unauthorized access near
                  conveyor maintenance area
                </p>

                <p>
                  <strong>Type:</strong> Safety Incident
                </p>

                <p>
                  <strong>Severity:</strong> High Potential
                </p>

                <p>
                  <strong>Location:</strong> Conveyor Transfer Area 2
                </p>

                <p>
                  <strong>Description:</strong> A worker entered the restricted
                  maintenance area before confirmation that the access control
                  barrier was fully installed. No injury or equipment damage
                  occurred.
                </p>

                <p>
                  <strong>Immediate actions:</strong> Work was stopped, the
                  worker was removed from the restricted area and the access
                  barrier was installed correctly.
                </p>

                <p>
                  <strong>Contributing factors:</strong> Incomplete
                  communication between the maintenance supervisor and the
                  access control team.
                </p>

                <p>
                  <strong>Corrective actions:</strong> Review the
                  restricted-area entry procedure, update the pre-work checklist
                  and brief all affected crews.
                </p>

                <p>
                  <strong>Recommendations:</strong> Confirm physical barriers
                  and supervisor authorization before allowing access to
                  maintenance zones.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write an incident report step by step
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Record the basic incident details
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Add the date, time, location, incident type, severity and the
                  names or roles of the people involved.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe what happened
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Write a factual chronological description of the event. Avoid
                  speculation, blame or conclusions that have not been verified.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Document immediate actions and causes
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain how the situation was controlled and identify the
                  direct causes or contributing factors found during the initial
                  review.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Assign corrective actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Define actions, responsible persons, due dates and the
                  evidence required to confirm that each action has been
                  completed.
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
              Common incident report mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {incidentMistakes.map((mistake) => (
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
              Related incident report resources
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Link
                href='/tools/incident-report-generator'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Incident Report Generator
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Create a structured incident report and export it as a PDF.
                </p>
              </Link>

              <Link
                href='/guides/how-to-write-a-maintenance-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Maintenance Report Guide
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document equipment findings and repair actions.
                </p>
              </Link>

              <Link
                href='/guides/how-to-write-a-shift-handover-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Shift Handover Guide
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to transfer open risks and incidents between shifts.
                </p>
              </Link>

              <Link
                href='/guides/how-to-write-a-daily-report'
                className='rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100'
              >
                <p className='font-semibold text-slate-950'>
                  Daily Report Guide
                </p>

                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Learn how to document daily activities, observations and
                  incidents.
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
              Use the Incident Report Generator to create structured reports
              with severity, immediate actions, root cause, corrective actions,
              recommendations, live preview and PDF export.
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
