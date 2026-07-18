import type { Metadata } from 'next'
import Link from 'next/link'

import RelatedGuides from '@/components/guides/RelatedGuides'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FaqSchema from '@/components/seo/FaqSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Daily Site Report: Example, Format and Guide',
  description:
    'Learn how to write a daily site report with completed activities, manpower, equipment, weather, delays, safety observations and next steps.',
  keywords: [
    'daily site report',
    'daily site report example',
    'daily site report format',
    'site daily report',
    'construction site report',
    'site report template',
    'daily construction site report',
    'site progress report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/daily-site-report',
  },
}

const reportSections = [
  {
    title: 'Project and site details',
    description:
      'Include the project name, work location, report date, contractor and responsible supervisor.',
  },
  {
    title: 'Weather conditions',
    description:
      'Record weather conditions that affected productivity, safety or access to the site.',
  },
  {
    title: 'Workforce',
    description:
      'Document the number of workers, contractors, trades and working hours.',
  },
  {
    title: 'Activities completed',
    description:
      'Describe the main construction, inspection, installation or maintenance activities completed.',
  },
  {
    title: 'Equipment used',
    description:
      'List important machinery, vehicles, tools and equipment operating during the day.',
  },
  {
    title: 'Materials received',
    description:
      'Record important deliveries, quantities, shortages or damaged materials.',
  },
  {
    title: 'Delays and constraints',
    description:
      'Explain access restrictions, weather delays, missing materials or coordination problems.',
  },
  {
    title: 'Safety observations',
    description:
      'Document incidents, near misses, inspections, toolbox talks and corrective actions.',
  },
  {
    title: 'Pending work and next steps',
    description:
      'Identify unfinished work and priorities for the following day or shift.',
  },
]

const siteReportUsers = [
  {
    title: 'Construction supervisors',
    description:
      'Track daily site activities, workforce, equipment and schedule performance.',
  },
  {
    title: 'Site engineers',
    description:
      'Document technical progress, inspections, measurements and field conditions.',
  },
  {
    title: 'Project managers',
    description:
      'Review daily performance, delays, risks and progress against the plan.',
  },
  {
    title: 'Contractors',
    description:
      'Provide evidence of completed work, labor, equipment and site constraints.',
  },
  {
    title: 'Field inspectors',
    description:
      'Record inspections, quality observations, deficiencies and corrective actions.',
  },
  {
    title: 'Clients and owners',
    description:
      'Receive a concise record of site progress, problems and important decisions.',
  },
]

const commonMistakes = [
  {
    title: 'Listing activities without results',
    description:
      'Explain what was actually completed, measured or approved during the day.',
  },
  {
    title: 'Not recording delays',
    description:
      'Document the cause, duration and impact of each important delay.',
  },
  {
    title: 'Using vague workforce information',
    description:
      'Include the number of workers, trades, contractors and hours when relevant.',
  },
  {
    title: 'Leaving out safety information',
    description:
      'Even when no incident occurs, record inspections, observations or toolbox talks.',
  },
  {
    title: 'Copying the previous report',
    description:
      'Each report should reflect the actual conditions and results of the current day.',
  },
]

const faqs = [
  {
    question: 'What is a daily site report?',
    answer:
      'A daily site report is a structured record of site activities, workforce, equipment, materials, delays, safety conditions and next steps.',
  },
  {
    question: 'Who prepares a daily site report?',
    answer:
      'It is commonly prepared by site supervisors, engineers, inspectors, project coordinators or contractor representatives.',
  },
  {
    question: 'What should a daily construction site report include?',
    answer:
      'Include project details, weather, workforce, activities, equipment, materials, delays, safety observations and pending work.',
  },
  {
    question: 'Should photographs be included?',
    answer:
      'Photographs can provide useful evidence of progress, site conditions, defects and completed work when the reporting process supports them.',
  },
  {
    question: 'Can a daily site report be exported as PDF?',
    answer:
      'Yes. PDF export creates a consistent document that can be shared with clients, supervisors and project stakeholders.',
  },
]

export default function DailySiteReportPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://reporting-tools-platform.vercel.app',
          },
          {
            name: 'Guides',
            url: 'https://reporting-tools-platform.vercel.app/guides',
          },
          {
            name: 'Daily Reports',
            url: 'https://reporting-tools-platform.vercel.app/guides/daily-reports',
          },
          {
            name: 'Daily Site Report',
            url: 'https://reporting-tools-platform.vercel.app/guides/daily-site-report',
          },
        ]}
      />
      <FaqSchema faqs={faqs} />

      <Navbar />

      <article className='mx-auto max-w-4xl px-6 py-16 sm:py-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-12'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Daily Site Report Guide
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Daily Site Report: Example, Format and Guide
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
            A daily site report documents the work completed, workforce,
            equipment, materials, weather conditions, delays, safety
            observations and priorities for the next day. It gives project
            stakeholders a reliable record of what happened on site.
          </p>

          <div className='mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6'>
            <p className='text-sm font-semibold text-blue-900'>
              Need to create a daily site report?
            </p>

            <p className='mt-2 text-sm leading-6 text-blue-800'>
              Use the Daily Report Generator to document site activities,
              workforce, delays, observations and pending tasks with live
              preview and PDF export.
            </p>

            <div className='mt-5'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto'
              >
                Open Daily Report Generator
              </Link>
            </div>
          </div>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What is a daily site report?
            </h2>

            <p className='mt-5 leading-8 text-slate-600'>
              A daily site report is a formal record of activities and
              conditions at a construction, maintenance or industrial work site.
              It helps teams verify progress, explain delays, track resources
              and communicate important field information.
            </p>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Who should use a daily site report?
            </h2>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              {siteReportUsers.map((user) => (
                <div
                  key={user.title}
                  className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                >
                  <h3 className='font-bold text-slate-950'>{user.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-slate-600'>
                    {user.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              What should a daily site report include?
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
              Daily site report example
            </h2>

            <div className='mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6'>
              <p className='font-semibold text-slate-950'>
                Construction Daily Site Report
              </p>

              <div className='mt-5 space-y-4 text-sm leading-7 text-slate-700'>
                <p>
                  <strong>Project:</strong> Conveyor Upgrade Project
                </p>

                <p>
                  <strong>Date:</strong> July 20, 2026
                </p>

                <p>
                  <strong>Location:</strong> Processing Plant — Area 2
                </p>

                <p>
                  <strong>Weather:</strong> Clear during the morning. Light rain
                  after 3:00 PM.
                </p>

                <p>
                  <strong>Workforce:</strong> 18 workers, including six
                  mechanical technicians, four electricians, four scaffolders,
                  two supervisors and two safety personnel.
                </p>

                <p>
                  <strong>Activities completed:</strong> Installed three
                  structural supports, completed alignment checks and continued
                  cable tray installation.
                </p>

                <p>
                  <strong>Equipment used:</strong> Mobile crane, two elevated
                  work platforms, welding equipment and alignment tools.
                </p>

                <p>
                  <strong>Materials received:</strong> Structural steel,
                  fasteners and electrical conduit delivered and inspected.
                </p>

                <p>
                  <strong>Delays:</strong> Electrical work stopped for 45
                  minutes because of restricted access during crane operations.
                </p>

                <p>
                  <strong>Safety observations:</strong> Toolbox talk completed.
                  One access-control observation was corrected before work
                  resumed.
                </p>

                <p>
                  <strong>Pending work:</strong> Complete cable tray
                  installation, inspect structural bolts and prepare the next
                  lifting activity.
                </p>

                <p>
                  <strong>Next-day priorities:</strong> Finish structural
                  installation and begin cable pulling in Area 2.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              How to write a daily site report
            </h2>

            <div className='mt-8 space-y-6'>
              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  1. Collect information throughout the day
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record workforce, equipment, deliveries, inspections and
                  delays while the information is still current.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  2. Describe measurable results
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Include quantities, percentages, completed locations,
                  installed components or approved inspections when possible.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  3. Explain delays objectively
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Record the cause, duration and impact without using unclear or
                  emotional language.
                </p>
              </div>

              <div className='rounded-2xl border border-slate-200 bg-white p-6'>
                <h3 className='text-xl font-bold text-slate-950'>
                  4. End with pending work and priorities
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  Make it clear what remains open and what the team should focus
                  on during the next workday.
                </p>
              </div>
            </div>
          </section>

          <section className='mt-14'>
            <h2 className='text-3xl font-bold text-slate-950'>
              Common daily site report mistakes
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
            currentHref='/guides/daily-site-report'
            category='Daily Reports'
            title='Related daily report guides'
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
            <h2 className='text-3xl font-bold'>Create a daily site report</h2>

            <p className='mt-4 max-w-2xl text-lg leading-8 text-slate-300'>
              Use the Daily Report Generator to document site activities,
              workforce, delays, observations and next steps with live preview
              and PDF export.
            </p>

            <div className='mt-8'>
              <Link
                href='/tools/daily-report-generator'
                className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto'
              >
                Open Daily Report Generator
              </Link>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
