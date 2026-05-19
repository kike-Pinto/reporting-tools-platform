import type { Metadata } from 'next'

import IncidentReportTool from '@/components/incident/IncidentReportTool'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Incident Report Generator',
  description:
    'Create structured incident reports with severity, root cause, corrective actions and PDF export.',
  keywords: [
    'incident report generator',
    'incident report template',
    'safety incident report',
    'near miss report',
    'corrective action report',
    'workplace incident report',
  ],
}

export default function IncidentReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-20'>
          <div className='grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
                Safety Reporting Tool
              </div>

              <h1 className='mt-8 text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl'>
                Incident Report Generator
              </h1>

              <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
                Create structured incident and safety reports with severity,
                root cause, immediate actions, corrective actions and PDF
                export.
              </p>

              <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                <a
                  href='#report-tool'
                  className='inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Create incident report
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
                  <p className='text-2xl font-bold text-slate-950'>Risk</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Severity tracking
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>RCA</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Root cause notes
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
                    Incident Report Preview
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Safety and corrective action document
                  </p>
                </div>

                <span className='rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700'>
                  Review
                </span>
              </div>

              <div className='mt-6 space-y-4'>
                <div className='rounded-2xl bg-slate-50 p-5'>
                  <p className='text-xs uppercase tracking-wide text-slate-500'>
                    Incident
                  </p>
                  <p className='mt-1 font-semibold text-slate-950'>
                    Restricted access near conveyor area
                  </p>
                </div>

                <div className='grid grid-cols-3 gap-3'>
                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Severity</p>
                    <p className='mt-2 text-xl font-bold text-slate-950'>
                      High
                    </p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Actions</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>3</p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Open</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>2</p>
                  </div>
                </div>

                <div className='rounded-2xl border border-slate-200 p-5'>
                  <p className='text-sm font-semibold text-slate-950'>
                    Corrective actions
                  </p>

                  <div className='mt-4 space-y-3'>
                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-red-500' />
                      <p className='text-sm text-slate-600'>
                        Review access control procedure
                      </p>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-amber-500' />
                      <p className='text-sm text-slate-600'>
                        Communicate exclusion zone update
                      </p>
                    </div>
                  </div>
                </div>

                <div className='rounded-2xl bg-slate-900 px-5 py-4 text-white'>
                  <p className='text-sm font-semibold'>PDF export available</p>
                  <p className='mt-1 text-xs text-slate-400'>
                    Ready for safety documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IncidentReportTool />
      <section className='mx-auto max-w-7xl px-6 pb-20'>
        <div className='rounded-4xl border border-slate-200 bg-white p-8 shadow-sm'>
          <div className='grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Related Resources
              </p>

              <h2 className='mt-4 text-3xl font-bold tracking-tight text-slate-950'>
                Learn how to structure professional incident reports
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-600'>
                Read our incident report guide to learn what information should
                be included in incident documentation, root cause notes,
                corrective actions and recommendations.
              </p>
            </div>

            <div className='space-y-4'>
              <a
                href='/guides/how-to-write-an-incident-report'
                className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:bg-slate-100'
              >
                <div>
                  <p className='text-sm font-semibold text-slate-950'>
                    Read incident report guide
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Structure, severity, root cause and actions
                  </p>
                </div>

                <span className='text-slate-400'>→</span>
              </a>

              <a
                href='/guides'
                className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:bg-slate-100'
              >
                <div>
                  <p className='text-sm font-semibold text-slate-950'>
                    View all guides
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Explore operational reporting resources
                  </p>
                </div>

                <span className='text-slate-400'>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
