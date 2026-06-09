import type { Metadata } from 'next'

import ShiftHandoverTool from '@/components/handover/ShiftHandoverTool'
import ShiftHandoverSEO from '@/components/handover/ShiftHandoverSEO'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Shift Handover Generator',
  description:
    'Create structured shift handover reports for operations, maintenance and field teams with pending tasks, incidents, risks and PDF export.',
  keywords: [
    'shift handover generator',
    'shift handover report',
    'shift handover template',
    'handover report example',
    'operations handover',
    'maintenance handover report',
  ],
}

export default function ShiftHandoverGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
                Shift Continuity Tool
              </div>

              <h1 className='mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Shift Handover Generator
              </h1>

              <p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Create structured shift handover reports with pending tasks,
                incidents, equipment status and next-shift recommendations.
              </p>

              <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                <a
                  href='#report-tool'
                  className='inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Create handover
                </a>

                <a
                  href='/guides/how-to-write-a-shift-handover-report'
                  className='inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
                >
                  Read guide
                </a>
              </div>

              <div className='mt-12 grid gap-4 sm:grid-cols-3'>
                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>Tasks</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Pending work
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>Risk</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Incident tracking
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

            <div className='rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:rounded-4xl sm:p-6'>
              <div className='flex items-center justify-between border-b border-slate-200 pb-4'>
                <div>
                  <p className='text-sm font-semibold text-slate-950'>
                    Shift Handover Preview
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Operational continuity document
                  </p>
                </div>

                <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                  Ready
                </span>
              </div>

              <div className='mt-6 space-y-4'>
                <div className='rounded-2xl bg-slate-50 p-5'>
                  <p className='text-xs uppercase tracking-wide text-slate-500'>
                    Site
                  </p>
                  <p className='mt-1 font-semibold text-slate-950'>
                    Concentrator Plant Area 2
                  </p>
                </div>

                <div className='grid grid-cols-3 gap-2 sm:gap-3'>
                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Pending</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>4</p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Incidents</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>1</p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Critical</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>1</p>
                  </div>
                </div>

                <div className='rounded-2xl border border-slate-200 p-5'>
                  <p className='text-sm font-semibold text-slate-950'>
                    Pending tasks
                  </p>

                  <div className='mt-4 space-y-3'>
                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-amber-500' />
                      <p className='text-sm text-slate-600'>
                        Complete alignment verification
                      </p>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-red-500' />
                      <p className='text-sm text-slate-600'>
                        Monitor vibration during startup
                      </p>
                    </div>
                  </div>
                </div>

                <div className='rounded-2xl bg-slate-900 px-5 py-4 text-white'>
                  <p className='text-sm font-semibold'>PDF export available</p>
                  <p className='mt-1 text-xs text-slate-400'>
                    Ready for incoming shift review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShiftHandoverTool />
      <ShiftHandoverSEO />
      <Footer />
    </main>
  )
}
