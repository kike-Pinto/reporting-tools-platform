import type { Metadata } from 'next'
import Link from 'next/link'
import { guides } from '@/lib/guides'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Reporting Guides',
  description:
    'Learn how to create professional operational reports, daily reports, shift handovers and maintenance documentation.',
}

export default function GuidesPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-20'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Reporting Guides
          </p>

          <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
            Learn how to create professional operational reports
          </h1>

          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600'>
            Explore practical guides for daily reports, shift handovers,
            maintenance documentation and operational reporting workflows.
          </p>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-6 lg:grid-cols-3'>
          {guides.map((guide) => (
            <article
              key={guide.title}
              className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
            >
              <p className='text-xs font-semibold uppercase tracking-wide text-blue-600'>
                {guide.category}
              </p>

              <h2 className='mt-3 text-xl font-bold text-slate-950'>
                {guide.title}
              </h2>

              <p className='mt-4 text-sm leading-6 text-slate-600'>
                {guide.description}
              </p>

              <div className='mt-6'>
                {guide.href !== '#' ? (
                  <Link
                    href={guide.href}
                    className='inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800'
                  >
                    Read guide
                  </Link>
                ) : (
                  <span className='inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500'>
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
