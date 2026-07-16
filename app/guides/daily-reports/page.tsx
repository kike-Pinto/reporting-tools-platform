import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Daily Report Guides, Examples and Templates',
  description:
    'Explore daily report guides, examples, formats and templates for employees, managers, construction sites and operational teams.',
  keywords: [
    'daily report guides',
    'daily report examples',
    'daily report template',
    'daily work report',
    'daily activity report',
    'daily report format',
    'employee daily report',
    'construction daily report',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/guides/daily-reports',
  },
}

const dailyReportGuides = guides.filter(
  (guide) => guide.category === 'Daily Reports',
)

const dailyReportTopics = [
  {
    title: 'Daily report fundamentals',
    description:
      'Learn the essential structure, purpose and information every professional daily report should contain.',
  },
  {
    title: 'Examples and templates',
    description:
      'Review practical samples and reusable formats for different teams and reporting situations.',
  },
  {
    title: 'Manager communication',
    description:
      'Prepare concise status updates with completed work, blockers, pending tasks and support needed.',
  },
  {
    title: 'Construction and site reporting',
    description:
      'Document manpower, activities, equipment, materials, weather, delays and safety observations.',
  },
  {
    title: 'Employee work reports',
    description:
      'Track individual tasks, results, working hours and next-day priorities.',
  },
  {
    title: 'End-of-day reporting',
    description:
      'Summarize daily performance and prepare a clear transition into the following workday.',
  },
]

const recommendedPath = [
  {
    step: '1',
    title: 'Learn the basic structure',
    description:
      'Start with the complete guide to understand what a daily report should include.',
    href: '/guides/how-to-write-a-daily-report',
    linkLabel: 'Read the daily report guide',
  },
  {
    step: '2',
    title: 'Review a practical example',
    description:
      'See how completed work, issues, pending tasks and next steps are documented.',
    href: '/guides/daily-work-report-sample',
    linkLabel: 'View a work report sample',
  },
  {
    step: '3',
    title: 'Choose a reusable format',
    description:
      'Use a structured template to create consistent reports every day.',
    href: '/guides/daily-work-report-template',
    linkLabel: 'Open the report template guide',
  },
  {
    step: '4',
    title: 'Create the finished report',
    description:
      'Complete the browser-based form, review the preview and export a PDF.',
    href: '/tools/daily-report-generator',
    linkLabel: 'Open the Daily Report Generator',
  },
]

const relatedCategories = [
  {
    title: 'Maintenance Reports',
    description:
      'Document equipment inspections, service work, repairs and recommendations.',
    href: '/guides#maintenance-reports',
  },
  {
    title: 'Incident Reports',
    description:
      'Record workplace incidents, near misses and corrective actions.',
    href: '/guides#incident-reports',
  },
  {
    title: 'Progress Reports',
    description:
      'Track weekly and monthly project performance, issues and next steps.',
    href: '/guides#progress-reports',
  },
  {
    title: 'Shift Handover',
    description:
      'Transfer operational information, equipment status and pending tasks.',
    href: '/guides#shift-handover',
  },
]

export default function DailyReportsHubPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-blue-200 bg-blue-50'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_34%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <nav
            aria-label='Breadcrumb'
            className='flex flex-wrap items-center gap-2 text-sm text-slate-600'
          >
            <Link href='/' className='transition hover:text-blue-700'>
              Home
            </Link>

            <span aria-hidden='true'>/</span>

            <Link href='/guides' className='transition hover:text-blue-700'>
              Guides
            </Link>

            <span aria-hidden='true'>/</span>

            <span className='font-semibold text-slate-900'>Daily Reports</span>
          </nav>

          <div className='mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700'>
                <span>DR</span>
                <span>{dailyReportGuides.length} practical guides</span>
              </div>

              <h1 className='mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Daily Report Guides, Examples and Templates
              </h1>

              <p className='mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Learn how to create clear daily work reports for employees,
                managers, construction sites, maintenance teams and operational
                environments.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Browse all reporting guides
                </Link>

                <Link
                  href='/tools/daily-report-generator'
                  className='inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100'
                >
                  Open Daily Report Generator
                </Link>
              </div>
            </div>

            <div className='rounded-3xl border border-blue-200 bg-white p-6 shadow-xl shadow-blue-100/70 sm:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Daily reporting workflow
              </p>

              <h2 className='mt-3 text-2xl font-bold text-slate-950'>
                From completed work to a professional PDF
              </h2>

              <div className='mt-6 space-y-4'>
                {[
                  'Record completed activities and results',
                  'Document issues, blockers and delays',
                  'Identify pending work and next priorities',
                  'Review the structured report preview',
                  'Export and share the final PDF',
                ].map((item, index) => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700'>
                      {index + 1}
                    </span>

                    <p className='text-sm leading-6 text-slate-600'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-14 sm:py-16'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
              Daily Reporting Topics
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Everything needed for consistent daily reporting
            </h2>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {dailyReportTopics.map((topic) => (
              <article
                key={topic.title}
                className='rounded-3xl border border-slate-200 bg-slate-50 p-6'
              >
                <h3 className='text-lg font-bold text-slate-950'>
                  {topic.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-slate-600'>
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='daily-report-guides' className='scroll-mt-24 bg-slate-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Daily Report Library
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Explore all daily report guides
              </h2>

              <p className='mt-4 leading-7 text-slate-600'>
                Choose a guide based on the report type, work environment or
                audience you need to communicate with.
              </p>
            </div>

            <span className='w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700'>
              {dailyReportGuides.length} guides
            </span>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {dailyReportGuides.map((guide) => (
              <article
                key={guide.href}
                className='group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xs font-bold text-white'>
                    DR
                  </div>

                  <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                    {guide.status}
                  </span>
                </div>

                <h3 className='mt-6 text-xl font-bold text-slate-950'>
                  {guide.title}
                </h3>

                <p className='mt-3 flex-1 text-sm leading-6 text-slate-600'>
                  {guide.description}
                </p>

                <div className='mt-7'>
                  <Link
                    href={guide.href}
                    className='inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:text-blue-900'
                  >
                    Read guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
              Recommended Learning Path
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
              Learn the structure, review an example and create the report
            </h2>
          </div>

          <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {recommendedPath.map((item) => (
              <article
                key={item.step}
                className='flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6'
              >
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white'>
                  {item.step}
                </span>

                <h3 className='mt-5 text-lg font-bold text-slate-950'>
                  {item.title}
                </h3>

                <p className='mt-3 flex-1 text-sm leading-6 text-slate-600'>
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className='mt-6 text-sm font-semibold text-blue-700 transition hover:text-blue-900'
                >
                  {item.linkLabel} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='grid gap-8 lg:grid-cols-[1fr_0.85fr]'>
            <div className='rounded-4xl bg-slate-950 p-6 text-white sm:p-8 lg:p-10'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-300'>
                Daily Report Generator
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Create a professional daily report in your browser
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-300'>
                Complete a structured form, review the live preview and export a
                consistent PDF report without manually formatting a document.
              </p>

              <div className='mt-8'>
                <Link
                  href='/tools/daily-report-generator'
                  className='inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50 sm:w-auto'
                >
                  Open Daily Report Generator
                </Link>
              </div>
            </div>

            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Other Reporting Categories
              </p>

              <div className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                {relatedCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:bg-blue-50'
                  >
                    <p className='font-semibold text-slate-950'>
                      {category.title}
                    </p>

                    <p className='mt-2 text-sm leading-6 text-slate-600'>
                      {category.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
