import type { Metadata } from 'next'
import Link from 'next/link'

import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { tools } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Reporting Tools',
  description:
    'Explore professional browser-based reporting tools for daily reports, maintenance, incidents, project progress and shift handovers.',
  keywords: [
    'reporting tools',
    'daily report generator',
    'maintenance report generator',
    'incident report generator',
    'progress report generator',
    'shift handover generator',
    'PDF report generator',
    'operational reporting software',
  ],
  alternates: {
    canonical: 'https://reporting-tools-platform.vercel.app/tools',
  },
}

const featuredToolTitle = 'Daily Report Generator'

const toolPresentation = {
  'Daily Report Generator': {
    code: 'DR',
    category: 'Daily Operations',
    description:
      'Create structured daily work reports with activities, working hours, KPIs, observations and pending tasks.',
    guideHref: '/guides/daily-reports',
    guideLabel: 'Daily report resources',
    accentClasses: 'border-blue-200 bg-blue-50',
    iconClasses: 'bg-blue-600 text-white',
    labelClasses: 'bg-blue-100 text-blue-700',
    linkClasses: 'text-blue-700 hover:text-blue-900',
  },
  'Shift Handover Generator': {
    code: 'SH',
    category: 'Operational Continuity',
    description:
      'Transfer completed work, equipment condition, pending tasks, incidents and active risks between shifts.',
    guideHref: '/guides/shift-handover',
    guideLabel: 'Shift handover resources',
    accentClasses: 'border-violet-200 bg-violet-50',
    iconClasses: 'bg-violet-600 text-white',
    labelClasses: 'bg-violet-100 text-violet-700',
    linkClasses: 'text-violet-700 hover:text-violet-900',
  },
  'Maintenance Report Generator': {
    code: 'MR',
    category: 'Equipment Maintenance',
    description:
      'Document equipment condition, inspections, completed work, parts, findings and recommendations.',
    guideHref: '/guides/maintenance-reports',
    guideLabel: 'Maintenance resources',
    accentClasses: 'border-amber-200 bg-amber-50',
    iconClasses: 'bg-amber-500 text-white',
    labelClasses: 'bg-amber-100 text-amber-700',
    linkClasses: 'text-amber-700 hover:text-amber-900',
  },
  'Incident Report Generator': {
    code: 'IR',
    category: 'Safety and Corrective Action',
    description:
      'Record incident details, severity, immediate controls, root causes, corrective actions and recommendations.',
    guideHref: '/guides/incident-reports',
    guideLabel: 'Incident report resources',
    accentClasses: 'border-red-200 bg-red-50',
    iconClasses: 'bg-red-500 text-white',
    labelClasses: 'bg-red-100 text-red-700',
    linkClasses: 'text-red-700 hover:text-red-900',
  },
  'Progress Report Generator': {
    code: 'PR',
    category: 'Project Performance',
    description:
      'Compare planned and actual progress, track activities, explain delays and define next project priorities.',
    guideHref: '/guides/progress-reports',
    guideLabel: 'Progress report resources',
    accentClasses: 'border-emerald-200 bg-emerald-50',
    iconClasses: 'bg-emerald-600 text-white',
    labelClasses: 'bg-emerald-100 text-emerald-700',
    linkClasses: 'text-emerald-700 hover:text-emerald-900',
  },
}

const useCases = [
  {
    number: '01',
    title: 'Daily work reporting',
    description:
      'Summarize completed activities, results, blockers and pending tasks.',
    toolHref: '/tools/daily-report-generator',
    toolLabel: 'Use Daily Report Generator',
  },
  {
    number: '02',
    title: 'Equipment documentation',
    description:
      'Record maintenance findings, repairs, parts and final equipment status.',
    toolHref: '/tools/maintenance-report-generator',
    toolLabel: 'Use Maintenance Generator',
  },
  {
    number: '03',
    title: 'Safety documentation',
    description:
      'Capture incident facts, immediate controls and corrective actions.',
    toolHref: '/tools/incident-report-generator',
    toolLabel: 'Use Incident Generator',
  },
  {
    number: '04',
    title: 'Project performance',
    description:
      'Report planned progress, actual progress, risks and next priorities.',
    toolHref: '/tools/progress-report-generator',
    toolLabel: 'Use Progress Generator',
  },
  {
    number: '05',
    title: 'Shift continuity',
    description:
      'Transfer operational information and open actions between teams.',
    toolHref: '/tools/shift-handover-generator',
    toolLabel: 'Use Handover Generator',
  },
]

const workflowSteps = [
  {
    number: '01',
    title: 'Choose a tool',
    description:
      'Select the report type that matches your operational workflow.',
  },
  {
    number: '02',
    title: 'Complete the form',
    description:
      'Enter structured project, equipment, activity or incident information.',
  },
  {
    number: '03',
    title: 'Review the preview',
    description:
      'Check the generated document before creating the final version.',
  },
  {
    number: '04',
    title: 'Export the report',
    description:
      'Generate a consistent PDF document ready to share or archive.',
  },
]

function getToolPresentation(title: string) {
  return toolPresentation[title as keyof typeof toolPresentation]
}

export default function ToolsPage() {
  const featuredTool =
    tools.find((tool) => tool.title === featuredToolTitle) ?? tools[0]

  const remainingTools = tools.filter(
    (tool) => tool.title !== featuredTool?.title,
  )

  const featuredPresentation = featuredTool
    ? getToolPresentation(featuredTool.title)
    : undefined

  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://reporting-tools-platform.vercel.app',
          },
          {
            name: 'Tools',
            url: 'https://reporting-tools-platform.vercel.app/tools',
          },
        ]}
      />
      <Navbar />

      <section className='relative overflow-hidden bg-slate-950 text-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(71,85,105,0.2),transparent_34%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <nav
            aria-label='Breadcrumb'
            className='flex flex-wrap items-center gap-2 text-sm text-slate-400'
          >
            <Link href='/' className='transition hover:text-white'>
              Home
            </Link>

            <span aria-hidden='true'>/</span>

            <span className='font-semibold text-white'>Tools</span>
          </nav>

          <div className='mt-10 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200'>
                <span className='h-2 w-2 rounded-full bg-emerald-400' />5
                reporting tools available
              </div>

              <h1 className='mt-7 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                Turn operational information into professional reports
              </h1>

              <p className='mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
                Choose a focused reporting tool, complete a structured form,
                review the generated document and export a professional PDF
                directly from your browser.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href={
                    featuredTool?.href !== '#'
                      ? featuredTool.href
                      : '/tools/daily-report-generator'
                  }
                  className='inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50'
                >
                  Start with Daily Report Generator
                </Link>

                <Link
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
                >
                  Explore reporting guides
                </Link>
              </div>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-blue-300'>
                Platform capabilities
              </p>

              <div className='mt-6 grid grid-cols-2 gap-4'>
                <HeroStat value='5' label='Report generators' />
                <HeroStat value='30' label='Practical guides' />
                <HeroStat value='100%' label='Browser based' />
                <HeroStat value='PDF' label='Professional export' />
              </div>

              <div className='mt-6 border-t border-white/10 pt-6'>
                <p className='text-sm leading-7 text-slate-300'>
                  No installation, account or enterprise software required. Open
                  a tool and start building the report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredTool && featuredPresentation && (
        <section className='border-b border-slate-200 bg-white'>
          <div className='mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20'>
            <div className='grid gap-8 overflow-hidden rounded-4xl border border-blue-200 bg-blue-50 lg:grid-cols-[1.05fr_0.95fr]'>
              <div className='p-6 sm:p-8 lg:p-10'>
                <div className='flex flex-wrap items-start justify-between gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white'>
                      DR
                    </div>

                    <div>
                      <p className='text-xs font-semibold uppercase tracking-[0.18em] text-blue-600'>
                        Recommended starting point
                      </p>

                      <p className='mt-1 text-sm text-slate-500'>
                        General operational reporting
                      </p>
                    </div>
                  </div>

                  <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                    {featuredTool.status}
                  </span>
                </div>

                <h2 className='mt-8 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                  {featuredTool.title}
                </h2>

                <p className='mt-5 max-w-2xl leading-8 text-slate-600'>
                  {featuredPresentation.description}
                </p>

                <div className='mt-7 grid gap-3 sm:grid-cols-2'>
                  {[
                    'Activities and working hours',
                    'Automatic report KPIs',
                    'Safety and observations',
                    'Pending tasks and next steps',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className='flex items-start gap-3 rounded-2xl border border-blue-100 bg-white/80 px-4 py-3'
                    >
                      <span className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700'>
                        ✓
                      </span>

                      <p className='text-sm leading-6 text-slate-700'>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <Link
                    href={featuredTool.href}
                    className='inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600'
                  >
                    Open Daily Report Generator
                  </Link>

                  <Link
                    href={featuredPresentation.guideHref}
                    className='inline-flex items-center justify-center rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100'
                  >
                    Explore daily report guides
                  </Link>
                </div>
              </div>

              <div className='border-t border-blue-200 bg-slate-950 p-6 text-white lg:border-l lg:border-t-0 sm:p-8 lg:p-10'>
                <p className='text-xs font-semibold uppercase tracking-[0.18em] text-blue-300'>
                  Report output
                </p>

                <div className='mt-6 rounded-3xl border border-white/10 bg-white/5 p-5'>
                  <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-4'>
                    <div>
                      <p className='text-sm font-semibold text-white'>
                        Daily Operational Report
                      </p>

                      <p className='mt-1 text-xs text-slate-400'>
                        Structured PDF preview
                      </p>
                    </div>

                    <span className='rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-950'>
                      PDF
                    </span>
                  </div>

                  <div className='mt-5 grid grid-cols-3 gap-3'>
                    {['Activities', 'Hours', 'Pending'].map((label, index) => (
                      <div
                        key={label}
                        className='rounded-xl border border-white/10 bg-white/5 p-3'
                      >
                        <p className='text-lg font-bold text-white'>
                          {index === 0 ? '6' : index === 1 ? '48' : '3'}
                        </p>

                        <p className='mt-1 text-xs text-slate-400'>{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className='mt-5 space-y-3'>
                    {[78, 56, 88].map((width, index) => (
                      <div
                        key={width}
                        className='rounded-xl border border-white/10 bg-white/5 p-3'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-slate-400'>
                            Report section {index + 1}
                          </span>

                          <span className='text-xs font-semibold text-emerald-300'>
                            Complete
                          </span>
                        </div>

                        <div className='mt-3 h-2 rounded-full bg-white/10'>
                          <div
                            className='h-2 rounded-full bg-blue-400'
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className='bg-slate-50'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Tool Library
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl'>
                Choose the report you need to create
              </h2>

              <p className='mt-5 leading-7 text-slate-600'>
                Each generator focuses on a specific operational workflow and
                connects with a dedicated learning category.
              </p>
            </div>

            <span className='w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600'>
              {tools.length} available tools
            </span>
          </div>

          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {remainingTools.map((tool) => {
              const presentation = getToolPresentation(tool.title)

              if (!presentation) {
                return null
              }

              return (
                <article
                  key={tool.title}
                  className={`group flex h-full flex-col rounded-3xl border p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-6 ${presentation.accentClasses}`}
                >
                  <div className='flex items-start justify-between gap-4'>
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xs font-bold ${presentation.iconClasses}`}
                    >
                      {presentation.code}
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${presentation.labelClasses}`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  <p className='mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>
                    {presentation.category}
                  </p>

                  <h3 className='mt-2 text-xl font-bold text-slate-950'>
                    {tool.title}
                  </h3>

                  <p className='mt-3 flex-1 text-sm leading-6 text-slate-600'>
                    {presentation.description}
                  </p>

                  <div className='mt-6 border-t border-slate-900/10 pt-5'>
                    {tool.href !== '#' ? (
                      <Link
                        href={tool.href}
                        className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'
                      >
                        Open generator
                      </Link>
                    ) : (
                      <span className='inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-500'>
                        Coming soon
                      </span>
                    )}

                    <Link
                      href={presentation.guideHref}
                      className={`mt-4 inline-flex text-sm font-semibold transition ${presentation.linkClasses}`}
                    >
                      {presentation.guideLabel} →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className='border-y border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start'>
            <div className='lg:sticky lg:top-28'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Find Your Workflow
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Select a tool based on the document you need
              </h2>

              <p className='mt-5 leading-7 text-slate-600'>
                Start from the operational problem instead of searching through
                generic document templates.
              </p>
            </div>

            <div className='divide-y divide-slate-200 border-y border-slate-200'>
              {useCases.map((useCase) => (
                <article
                  key={useCase.number}
                  className='grid gap-4 py-6 sm:grid-cols-[auto_1fr_auto] sm:items-center'
                >
                  <span className='text-sm font-bold text-blue-600'>
                    {useCase.number}
                  </span>

                  <div>
                    <h3 className='text-lg font-bold text-slate-950'>
                      {useCase.title}
                    </h3>

                    <p className='mt-2 text-sm leading-6 text-slate-600'>
                      {useCase.description}
                    </p>
                  </div>

                  <Link
                    href={useCase.toolHref}
                    className='inline-flex w-fit items-center text-sm font-semibold text-slate-900 transition hover:text-blue-600'
                  >
                    {useCase.toolLabel} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-950 text-white'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-300'>
              Reporting Workflow
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>
              From raw information to a finished report
            </h2>

            <p className='mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
              Every tool follows a consistent process designed to reduce manual
              formatting and improve report quality.
            </p>
          </div>

          <div className='mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4'>
            {workflowSteps.map((step) => (
              <article key={step.number} className='bg-slate-950 p-6 sm:p-7'>
                <span className='text-sm font-bold text-blue-300'>
                  {step.number}
                </span>

                <h3 className='mt-6 text-xl font-bold text-white'>
                  {step.title}
                </h3>

                <p className='mt-3 text-sm leading-6 text-slate-400'>
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='grid gap-8 rounded-4xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Need Help With Report Structure?
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Learn the format before creating the document
              </h2>

              <p className='mt-4 max-w-3xl leading-7 text-slate-600'>
                Explore examples, templates, checklists and step-by-step guides
                for every reporting category available on the platform.
              </p>
            </div>

            <Link
              href='/guides'
              className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-fit'
            >
              Browse 30 reporting guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
      <p className='text-2xl font-bold text-white'>{value}</p>

      <p className='mt-1 text-xs leading-5 text-slate-400'>{label}</p>
    </div>
  )
}
