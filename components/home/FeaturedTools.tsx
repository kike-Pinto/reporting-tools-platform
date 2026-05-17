import Link from 'next/link'
import { tools } from '@/lib/tools'

export default function FeaturedTools() {
  return (
    <section id='tools' className='mx-auto max-w-7xl px-6 py-20'>
      <div className='max-w-3xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
          Platform Tools
        </p>

        <h2 className='mt-4 text-4xl font-bold tracking-tight text-slate-950'>
          Reporting tools designed for operational teams
        </h2>
      </div>

      <div className='mt-10 grid gap-6 lg:grid-cols-3'>
        {tools.map((tool) => (
          <div
            key={tool.title}
            className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
          >
            <div className='flex items-center justify-between gap-4'>
              <h3 className='text-lg font-bold text-slate-950'>{tool.title}</h3>

              <span className='rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600'>
                {tool.status}
              </span>
            </div>

            <p className='mt-4 text-sm leading-6 text-slate-600'>
              {tool.description}
            </p>

            <div className='mt-6'>
              {tool.href !== '#' ? (
                <Link
                  href={tool.href}
                  className='inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800'
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
