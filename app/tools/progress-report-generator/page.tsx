import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ProgressReportTool from '@/components/progress/ProgressReportTool'

export const metadata: Metadata = {
  title: 'Progress Report Generator',
  description:
    'Create structured project progress reports with planned progress, actual progress, activities, issues and PDF export.',
  keywords: [
    'progress report generator',
    'project progress report',
    'construction progress report',
    'weekly progress report',
    'progress report template',
    'project status report',
  ],
}

export default function ProgressReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-20'>
          <div className='grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
                Project Progress Tool
              </div>

              <h1 className='mt-8 text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl'>
                Progress Report Generator
              </h1>

              <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
                Create structured progress reports with planned progress, actual
                progress, activities, issues, delays, next steps and PDF export.
              </p>

              <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                <a
                  href='#report-tool'
                  className='inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Create progress report
                </a>

                <a
                  href='/guides'
                  className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
                >
                  View guides
                </a>
              </div>

              <div className='mt-12 grid gap-4 sm:grid-cols-3'>
                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>Plan</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Planned progress
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>Actual</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Real progress
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>PDF</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Export ready
                  </p>
                </div>
              </div>
            </div>

            <div className='rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70'>
              <div className='flex items-center justify-between border-b border-slate-200 pb-4'>
                <div>
                  <p className='text-sm font-semibold text-slate-950'>
                    Progress Report Preview
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Project progress summary
                  </p>
                </div>

                <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                  Tracking
                </span>
              </div>

              <div className='mt-6 space-y-4'>
                <div className='rounded-2xl bg-slate-50 p-5'>
                  <p className='text-xs uppercase tracking-wide text-slate-500'>
                    Project
                  </p>
                  <p className='mt-1 font-semibold text-slate-950'>
                    Conveyor Upgrade Project
                  </p>
                </div>

                <div className='grid grid-cols-3 gap-3'>
                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Planned</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>
                      80%
                    </p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Actual</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>
                      72%
                    </p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Delayed</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>1</p>
                  </div>
                </div>

                <div className='rounded-2xl border border-slate-200 p-5'>
                  <p className='text-sm font-semibold text-slate-950'>
                    Progress activities
                  </p>

                  <div className='mt-4 space-y-3'>
                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500' />
                      <p className='text-sm text-slate-600'>
                        Structural installation completed
                      </p>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-amber-500' />
                      <p className='text-sm text-slate-600'>
                        Electrical work behind schedule
                      </p>
                    </div>
                  </div>
                </div>

                <div className='rounded-2xl bg-slate-900 px-5 py-4 text-white'>
                  <p className='text-sm font-semibold'>PDF export available</p>
                  <p className='mt-1 text-xs text-slate-400'>
                    Ready for project review meetings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProgressReportTool />
      <Footer />
    </main>
  )
}
