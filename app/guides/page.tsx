import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides, type GuideCategory, type GuideItem } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Reporting Guides',
  description:
    'Explore practical guides for daily reports, maintenance reports, incident reports, project progress and shift handovers.',
  alternates: {
    canonical: 'https://reporting-tools-platform.vercel.app/guides',
  },
}

type CategoryConfig = {
  name: GuideCategory
  id: string
  shortName: string
  description: string
  icon: string
  accentClasses: string
  iconClasses: string
  countClasses: string
}

const guideCategories: CategoryConfig[] = [
  {
    name: 'Daily Reports',
    id: 'daily-reports',
    shortName: 'Daily Reports',
    description:
      'Create clearer daily work reports, activity summaries, construction updates and management reports.',
    icon: 'DR',
    accentClasses: 'border-blue-200 bg-blue-50',
    iconClasses: 'bg-blue-600 text-white',
    countClasses: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Maintenance Reports',
    id: 'maintenance-reports',
    shortName: 'Maintenance',
    description:
      'Document equipment inspections, preventive maintenance, repairs, parts used and operational status.',
    icon: 'MR',
    accentClasses: 'border-amber-200 bg-amber-50',
    iconClasses: 'bg-amber-500 text-white',
    countClasses: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Incident Reports',
    id: 'incident-reports',
    shortName: 'Incidents',
    description:
      'Report safety incidents, near misses, contributing factors and corrective actions.',
    icon: 'IR',
    accentClasses: 'border-red-200 bg-red-50',
    iconClasses: 'bg-red-500 text-white',
    countClasses: 'bg-red-100 text-red-700',
  },
  {
    name: 'Progress Reports',
    id: 'progress-reports',
    shortName: 'Progress',
    description:
      'Track project progress, weekly performance, schedule variance, risks and next steps.',
    icon: 'PR',
    accentClasses: 'border-emerald-200 bg-emerald-50',
    iconClasses: 'bg-emerald-600 text-white',
    countClasses: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Shift Handover',
    id: 'shift-handover',
    shortName: 'Shift Handover',
    description:
      'Transfer completed work, equipment condition, pending tasks and risks between shifts.',
    icon: 'SH',
    accentClasses: 'border-violet-200 bg-violet-50',
    iconClasses: 'bg-violet-600 text-white',
    countClasses: 'bg-violet-100 text-violet-700',
  },
]

function getGuidesByCategory(category: GuideCategory) {
  return guides.filter((guide) => guide.category === category)
}

export default function GuidesPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
          <div className='max-w-4xl'>
            <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm'>
              {guides.length} Reporting Guides
            </div>

            <h1 className='mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
              Learn how to create professional operational reports
            </h1>

            <p className='mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
              Explore practical guides for daily reporting, equipment
              maintenance, safety incidents, project progress and operational
              shift handovers.
            </p>
          </div>
        </div>
      </section>

      <section className='sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur'>
        <div className='mx-auto max-w-7xl px-6'>
          <nav
            aria-label='Guide categories'
            className='flex gap-3 overflow-x-auto py-4 scrollbar-none [&::-webkit-scrollbar]:hidden'
          >
            {guideCategories.map((category) => {
              const guideCount = getGuidesByCategory(category.name).length

              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className='inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                >
                  {category.shortName}

                  <span className='rounded-full bg-white px-2 py-0.5 text-xs text-slate-500'>
                    {guideCount}
                  </span>
                </a>
              )
            })}
          </nav>
        </div>
      </section>

      <div className='mx-auto max-w-7xl space-y-20 px-6 py-14 sm:py-16 lg:space-y-24 lg:py-20'>
        {guideCategories.map((category) => {
          const categoryGuides = getGuidesByCategory(category.name)

          return (
            <section
              key={category.id}
              id={category.id}
              className='scroll-mt-28'
            >
              <div
                className={`rounded-3xl border p-6 sm:p-8 ${category.accentClasses}`}
              >
                <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
                  <div className='flex items-start gap-4'>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${category.iconClasses}`}
                    >
                      {category.icon}
                    </div>

                    <div>
                      <p className='text-sm font-semibold uppercase tracking-[0.16em] text-slate-500'>
                        Guide category
                      </p>

                      <h2 className='mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                        {category.name}
                      </h2>

                      <p className='mt-3 max-w-3xl leading-7 text-slate-600'>
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`w-fit shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${category.countClasses}`}
                  >
                    {categoryGuides.length}{' '}
                    {categoryGuides.length === 1 ? 'guide' : 'guides'}
                  </span>
                </div>
              </div>

              <div className='mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
                {categoryGuides.map((guide) => (
                  <GuideCard key={guide.href} guide={guide} />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <section className='border-t border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20'>
          <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-10'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Learning Resources
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl'>
                Guides connected to real reporting tools
              </h2>

              <p className='mt-4 max-w-xl leading-7 text-slate-600'>
                Learn the report structure, complete the corresponding tool and
                export a professional document from your browser.
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-3'>
              {['Learn structure', 'Use tool', 'Export report'].map(
                (step, index) => (
                  <div
                    key={step}
                    className='rounded-2xl border border-slate-200 bg-slate-50 p-5'
                  >
                    <p className='text-sm font-semibold text-blue-600'>
                      Step {index + 1}
                    </p>

                    <p className='mt-2 font-semibold text-slate-950'>{step}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function GuideCard({ guide }: { guide: GuideItem }) {
  return (
    <article className='group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6 lg:rounded-4xl'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white sm:h-12 sm:w-12'>
          G
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            guide.status === 'Available'
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          {guide.status}
        </span>
      </div>

      <p className='mt-6 text-xs font-semibold uppercase tracking-wide text-blue-600'>
        {guide.category}
      </p>

      <h3 className='mt-3 text-lg font-bold text-slate-950 sm:text-xl'>
        {guide.title}
      </h3>

      <p className='mt-3 flex-1 text-sm leading-6 text-slate-600'>
        {guide.description}
      </p>

      <div className='mt-7'>
        {guide.href !== '#' ? (
          <Link
            href={guide.href}
            className='inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-blue-600 sm:w-auto sm:py-2'
          >
            Read guide
          </Link>
        ) : (
          <span className='inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-500 sm:w-auto sm:py-2'>
            Coming soon
          </span>
        )}
      </div>
    </article>
  )
}
