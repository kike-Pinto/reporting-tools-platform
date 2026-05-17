import Link from 'next/link'

import { tools } from '@/lib/tools'

export default function FeaturedTools() {
  return (
    <section id='tools' className='mx-auto max-w-7xl px-6 py-24'>
      <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Platform Tools
          </p>

          <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
            Reporting tools designed for field operations
          </h2>

          <p className='mt-5 text-base leading-8 text-slate-600'>
            Start with browser-based tools that generate structured reports,
            live previews and professional PDF documents.
          </p>
        </div>

        <Link
          href='/tools'
          className='inline-flex w-fit items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
        >
          View all tools
        </Link>
      </div>

      <div className='mt-12 grid gap-6 lg:grid-cols-3'>
        {tools.map((tool) => (
          <div
            key={tool.title}
            className='group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70'
          >
            <div className='flex items-start justify-between gap-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white'>
                RT
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  tool.status === 'Available'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tool.status}
              </span>
            </div>

            <h3 className='mt-6 text-xl font-bold text-slate-950'>
              {tool.title}
            </h3>

            <p className='mt-3 text-sm leading-6 text-slate-600'>
              {tool.description}
            </p>

            <div className='mt-8'>
              {tool.href !== '#' ? (
                <Link
                  href={tool.href}
                  className='inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-600'
                >
                  Open tool
                </Link>
              ) : (
                <span className='inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500'>
                  Coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
