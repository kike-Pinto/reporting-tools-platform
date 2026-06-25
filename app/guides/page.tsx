import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Reporting Guides',
  description:
    'Learn how to create professional operational reports, daily reports, shift handovers and maintenance documentation.',
  alternates: {
    canonical: 'https://reporting-tools-platform.vercel.app/guides',
  },
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
              Reporting Guides
            </div>

            <h1 className='mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
              Learn how to create professional operational reports
            </h1>

            <p className='mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
              Practical guides for daily reports, shift handovers, maintenance
              documentation and operational reporting workflows.
            </p>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20'>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
          {guides.map((guide) => (
            <article
              key={guide.title}
              className='group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 sm:p-6 lg:rounded-4xl'
            >
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

              <h2 className='mt-3 text-lg font-bold text-slate-950 sm:text-xl'>
                {guide.title}
              </h2>

              <p className='mt-3 text-sm leading-6 text-slate-600'>
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
          ))}
        </div>
      </section>

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
