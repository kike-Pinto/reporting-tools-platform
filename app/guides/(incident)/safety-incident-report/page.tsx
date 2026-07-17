import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Safety Incident Report: Example, Format and Guide',
  description:
    'Learn how to write a safety incident report with incident details, severity, immediate controls, investigation findings and corrective actions.',
  keywords: [
    'safety incident report',
    'safety incident report example',
    'workplace safety incident report',
    'safety incident report format',
    'health and safety incident report',
    'occupational safety report',
    'workplace accident report',
    'safety corrective action report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/safety-incident-report',
  },
}

const safetyReportSections = [
  {
    title: 'Incident classification',
    description:
      'Identify whether the event involved injury, unsafe behavior, exposure, damage or a high-potential near miss.',
  },
  {
    title: 'Date, time and location',
    description: 'Record exactly when and where the incident occurred.',
  },
  {
    title: 'People involved',
    description:
      'Include affected workers, witnesses, supervisors and emergency responders.',
  },
  {
    title: 'Factual description',
    description: 'Explain the sequence of events without assumptions or blame.',
  },
  {
    title: 'Injury or exposure details',
    description:
      'Document the type of injury, affected body area, treatment or exposure when applicable.',
  },
  {
    title: 'Immediate controls',
    description:
      'Record how the area was isolated and how additional risk was controlled.',
  },
  {
    title: 'Contributing factors',
    description:
      'Identify unsafe conditions, procedure gaps, communication failures or equipment issues.',
  },
  {
    title: 'Corrective actions',
    description: 'Define actions that reduce the probability of recurrence.',
  },
  {
    title: 'Responsible persons and dates',
    description: 'Assign ownership and deadlines for every corrective action.',
  },
]

const severityLevels = [
  {
    title: 'Low',
    description:
      'Minor impact with no injury or only limited operational disruption.',
  },
  {
    title: 'Medium',
    description:
      'An event requiring treatment, investigation or temporary operational controls.',
  },
  {
    title: 'High',
    description:
      'A serious event involving significant injury, damage or operational impact.',
  },
  {
    title: 'High potential',
    description:
      'The actual outcome may be minor, but the event had the potential for severe harm.',
  },
]

const commonMistakes = [
  {
    title: 'Blaming a worker in the description',
    description:
      'Describe actions and conditions objectively. The report should support investigation, not assign premature blame.',
  },
  {
    title: 'Leaving out risk controls',
    description:
      'Record how the area was made safe and what temporary controls remain active.',
  },
  {
    title: 'Treating immediate action as corrective action',
    description:
      'Stopping work controls the event. Corrective actions address the underlying reason it occurred.',
  },
  {
    title: 'Not tracking action completion',
    description:
      'Corrective actions should remain open until evidence confirms they were completed and effective.',
  },
]

const faqs = [
  {
    question: 'What is a safety incident report?',
    answer:
      'A safety incident report is a structured document used to record workplace injuries, unsafe events, exposures, high-potential incidents and corrective actions.',
  },
  {
    question: 'What should a safety incident report include?',
    answer:
      'Include the incident classification, date, location, people involved, factual description, immediate controls, contributing factors and corrective actions.',
  },
  {
    question: 'What is a high-potential incident?',
    answer:
      'It is an event that may have caused little or no actual harm but had the potential to result in serious injury, damage or loss.',
  },
  {
    question: 'Should witnesses be included in a safety report?',
    answer:
      'Yes. Witness names or roles and their observations can support the investigation and help verify the sequence of events.',
  },
  {
    question: 'Can a safety incident report be exported as PDF?',
    answer:
      'Yes. PDF export helps preserve the report structure and supports reviews, investigations and recordkeeping.',
  },
]

export default function SafetyIncidentReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Safety Incident Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Safety Incident Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A safety incident report documents workplace events that caused or
            could have caused injury, exposure, damage or operational loss. It
            supports investigation, corrective action and prevention.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a safety report quickly?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Incident Report Generator to document severity, immediate
              actions, root cause, responsible persons and corrective actions
              with live preview and PDF export.
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
              What is a safety incident report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A safety incident report is a formal record of an event involving
              injury, unsafe work, hazardous exposure or a situation with the
              potential to cause serious harm. It provides a factual basis for
              investigation and follow-up.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a safety incident report include?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {safetyReportSections.map((section) => (
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
              Safety incident report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Workplace Safety Incident Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Incident:</strong> Worker slipped near a wash-down
                  area
                </p>

                <p>
                  <strong>Date and time:</strong> July 14, 2026 — 2:20 PM
                </p>

                <p>
                  <strong>Location:</strong> Process Building, Level 1
                </p>

                <p>
                  <strong>Severity:</strong> Medium
                </p>

                <p>
                  <strong>Description:</strong> A worker slipped on a wet
                  walking surface while carrying inspection equipment. The
                  worker remained standing by holding the handrail and did not
                  fall to the floor.
                </p>

                <p>
                  <strong>Injury:</strong> No injury reported
                </p>

                <p>
                  <strong>Immediate controls:</strong> The area was barricaded,
                  the surface was dried and warning signs were installed.
                </p>

                <p>
                  <strong>Contributing factors:</strong> Water remained on the
                  floor after wash-down activities and the temporary warning
                  sign had been removed too early.
                </p>

                <p>
                  <strong>Corrective actions:</strong> Update the wash-down
                  procedure, define a drying verification step and assign
                  responsibility for removing warning signs.
                </p>

                <p>
                  <strong>Status:</strong> Open — corrective actions pending
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common safety incident severity levels
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {severityLevels.map((level) => (
                <div
                  key={level.title}
                  className='rounded-2xl border border-slate-200 bg-white p-6'
                >
                  <h3 className='text-xl font-bold text-slate-950'>
                    {level.title}
                  </h3>

                  <p className='mt-3 text-sm leading-6 text-slate-600'>
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a safety incident report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Control the immediate risk
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Protect people, stop unsafe work, isolate the area and arrange
                  medical attention when required.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Record facts and evidence
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Document the sequence of events, observations, conditions,
                  witnesses and available evidence.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Identify contributing factors
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Review procedures, communication, supervision, equipment and
                  workplace conditions that may have influenced the event.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. Assign and track corrective actions
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Define specific actions, owners, deadlines and evidence of
                  completion.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common safety incident report mistakes
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
            currentHref='/guides/safety-incident-report'
            category='Incident Reports'
            title='Related incident guides'
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
              Create a safety incident report
            </h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Incident Report Generator to document severity, immediate
              controls, contributing factors and corrective actions with live
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
