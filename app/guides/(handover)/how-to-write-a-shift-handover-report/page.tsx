import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'How to Write a Shift Handover Report',
  description:
    'Learn how to write a structured shift handover report with examples, completed work, pending tasks, equipment status, incidents and recommendations.',
  keywords: [
    'how to write a shift handover report',
    'shift handover report',
    'shift handover example',
    'shift handover template',
    'shift handover checklist',
    'operations handover report',
    'maintenance shift handover',
    'shift change report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/how-to-write-a-shift-handover-report',
  },
}

const handoverSections = [
  'Site or project name',
  'Date and handover time',
  'Outgoing and incoming shift',
  'Outgoing and incoming supervisors',
  'Work completed',
  'Equipment status',
  'Pending tasks',
  'Incidents and operational risks',
  'Restrictions or permits',
  'Recommendations for the next shift',
]

const handoverMistakes = [
  {
    title: 'Using vague descriptions',
    description:
      'Avoid notes such as “work ongoing.” Explain exactly what was completed, where the work occurred and what remains unfinished.',
  },
  {
    title: 'Leaving out open risks',
    description:
      'Document hazards, equipment conditions, restrictions and incidents that the incoming shift must monitor.',
  },
  {
    title: 'Not assigning pending tasks',
    description:
      'Specify which task remains open, its priority and who should continue or review it.',
  },
  {
    title: 'Missing equipment status',
    description:
      'The incoming team should know which equipment is operating, unavailable, isolated or under observation.',
  },
]

const faqs = [
  {
    question: 'What is a shift handover report?',
    answer:
      'A shift handover report is a structured document used to transfer completed work, equipment status, incidents, risks, pending tasks and recommendations from one shift to the next.',
  },
  {
    question: 'What should be included in a shift handover?',
    answer:
      'Include shift details, supervisor information, completed work, equipment condition, pending tasks, incidents, restrictions and recommendations for the incoming shift.',
  },
  {
    question: 'Why is shift handover important?',
    answer:
      'A clear handover reduces information loss, repeated work, missed hazards, equipment problems and delays between outgoing and incoming teams.',
  },
  {
    question: 'Can I export a shift handover report as PDF?',
    answer:
      'Yes. A shift handover report can be exported as a PDF so it can be shared, reviewed and stored as part of the operational record.',
  },
]

export default function HowToWriteShiftHandoverReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Shift Handover Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            How to Write a Shift Handover Report
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A shift handover report helps teams transfer important operational
            information from one shift to the next. It documents completed work,
            equipment condition, incidents, risks, pending tasks and
            recommendations for the incoming team.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create one quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Shift Handover Generator to create structured handover
              reports with equipment status, pending tasks, incidents, live
              preview and PDF export.
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
              What is a shift handover report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A shift handover report is a structured operational document used
              to communicate what happened during the outgoing shift. It gives
              the incoming team the information required to continue work
              safely, understand equipment conditions and prioritize unfinished
              activities.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a shift handover include?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A useful handover should focus on the current operational
              situation and the information the next team needs to continue the
              work.
            </p>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {handoverSections.map((item) => (
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
              Shift handover report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Shift Handover Report — Example
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Site:</strong> Concentrator Plant Area 2
                </p>

                <p>
                  <strong>Outgoing shift:</strong> Day Shift
                </p>

                <p>
                  <strong>Incoming shift:</strong> Night Shift
                </p>

                <p>
                  <strong>Work completed:</strong> The mechanical team completed
                  conveyor alignment checks, inspected the drive unit and
                  replaced two damaged rollers.
                </p>

                <p>
                  <strong>Equipment status:</strong> Conveyor B is available for
                  operation. Vibration monitoring remains active during startup.
                </p>

                <p>
                  <strong>Pending tasks:</strong> Complete final guarding
                  inspection and verify bearing temperature after two hours of
                  operation.
                </p>

                <p>
                  <strong>Incidents and risks:</strong> No injuries were
                  reported. Access to the transfer area remains restricted.
                </p>

                <p>
                  <strong>Recommendations:</strong> The incoming shift should
                  monitor vibration and stop the equipment if abnormal readings
                  are detected.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a shift handover report step by step
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Record shift and supervisor details
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Add the site, date, outgoing shift, incoming shift and the
                  names of the supervisors responsible for the handover.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Summarize completed work
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Describe the inspections, maintenance activities, production
                  work and important observations completed during the shift.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Record equipment status and open risks
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Explain which equipment is operating, unavailable or under
                  monitoring. Include incidents, restrictions and hazards that
                  remain active.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Define pending tasks and recommendations
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  List unfinished activities, priorities and the actions the
                  incoming shift should complete, monitor or escalate.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Why shift handovers matter
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              Poor handovers can lead to repeated work, missed hazards,
              equipment damage, production interruptions and delays. A clear
              report gives the incoming shift a reliable operational picture and
              helps maintain continuity between teams.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common shift handover mistakes
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {handoverMistakes.map((mistake) => (
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
            currentHref='/guides/how-to-write-a-shift-handover-report'
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
              Use the Shift Handover Generator to create structured reports with
              equipment status, pending tasks, incidents, recommendations, live
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
