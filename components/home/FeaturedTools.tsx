import Link from 'next/link'

import { tools } from '@/lib/tools'

const featuredToolTitle = 'Daily Report Generator'

export default function FeaturedTools() {
  return (
    <section id='tools' className='bg-slate-50'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
              Platform Tools
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl'>
              Reporting tools designed for field operations
            </h2>

            <p className='mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
              Start with the Daily Report Generator or choose a focused tool for
              shift handovers, maintenance, incidents and project progress.
            </p>
          </div>

          <Link
            href='/tools'
            className='inline-flex w-fit items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
          >
            View all tools →
          </Link>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {tools.map((tool) => {
            const isFeatured = tool.title === featuredToolTitle

            return (
              <article
                key={tool.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-4xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? 'border-blue-300 bg-slate-950 text-white shadow-xl shadow-blue-200/40 sm:col-span-2 lg:col-span-1'
                    : 'border-slate-200 bg-white text-slate-900 shadow-sm hover:border-blue-200 hover:shadow-slate-200/70'
                }`}
              >
                {isFeatured && (
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]' />
                )}

                <div className='relative flex h-full flex-col'>
                  <div className='flex items-start justify-between gap-4'>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                        isFeatured
                          ? 'bg-white text-slate-950'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {isFeatured ? 'DR' : 'RT'}
                    </div>

                    <div className='flex flex-col items-end gap-2'>
                      {isFeatured && (
                        <span className='rounded-full bg-blue-400/15 px-3 py-1 text-xs font-semibold text-blue-200'>
                          Featured
                        </span>
                      )}

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          tool.status === 'Available'
                            ? isFeatured
                              ? 'bg-emerald-400/15 text-emerald-300'
                              : 'bg-emerald-100 text-emerald-700'
                            : isFeatured
                              ? 'bg-white/10 text-slate-300'
                              : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {tool.status}
                      </span>
                    </div>
                  </div>

                  <div className='mt-6'>
                    {isFeatured && (
                      <p className='text-xs font-semibold uppercase tracking-[0.16em] text-blue-300'>
                        Recommended starting point
                      </p>
                    )}

                    <h3
                      className={`${
                        isFeatured ? 'mt-2' : ''
                      } text-xl font-bold ${
                        isFeatured ? 'text-white' : 'text-slate-950'
                      }`}
                    >
                      {tool.title}
                    </h3>

                    <p
                      className={`mt-3 flex-1 text-sm leading-6 ${
                        isFeatured ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {tool.description}
                    </p>
                  </div>

                  {isFeatured && (
                    <div className='mt-5 flex flex-wrap gap-2'>
                      {['Live preview', 'Automatic KPIs', 'PDF export'].map(
                        (feature) => (
                          <span
                            key={feature}
                            className='rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300'
                          >
                            {feature}
                          </span>
                        ),
                      )}
                    </div>
                  )}

                  <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
                    {tool.href !== '#' ? (
                      <Link
                        href={tool.href}
                        className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                          isFeatured
                            ? 'bg-white text-slate-950 hover:bg-blue-50'
                            : 'bg-slate-900 text-white group-hover:bg-blue-600'
                        }`}
                      >
                        {isFeatured
                          ? 'Open Daily Report Generator'
                          : 'Open tool'}
                      </Link>
                    ) : (
                      <span
                        className={`inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold ${
                          isFeatured
                            ? 'border-white/20 text-slate-300'
                            : 'border-slate-300 text-slate-500'
                        }`}
                      >
                        Coming soon
                      </span>
                    )}

                    {isFeatured && (
                      <Link
                        href='/guides/how-to-write-a-daily-report'
                        className='inline-flex items-center justify-center text-sm font-semibold text-blue-200 transition hover:text-white'
                      >
                        Read guide →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
