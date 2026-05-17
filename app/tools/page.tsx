import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

import { tools } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Reporting Tools',
  description:
    'Explore professional reporting tools for operations, maintenance, construction and field teams.',
}

export default function ToolsPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-20'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
            Reporting Tools
          </p>

          <h1 className='mt-4 text-5xl font-bold tracking-tight text-slate-950'>
            Explore operational reporting tools
          </h1>

          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600'>
            Use simple reporting tools to generate professional operational
            documents, PDF reports, shift updates and field summaries.
          </p>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-6 lg:grid-cols-3'>
          {tools.map((tool) => (
            <div
              key={tool.title}
              className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'
            >
              <div className='flex items-center justify-between gap-4'>
                <h2 className='text-lg font-bold text-slate-950'>
                  {tool.title}
                </h2>

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

      <Footer />
    </main>
  )
}
