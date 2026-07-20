import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import MaintenanceReportTool from '@/components/maintenance/MaintenanceReportTool'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import SoftwareSchema from '@/components/seo/SoftwareSchema'

export const metadata: Metadata = {
  title: 'Maintenance Report Generator',
  description:
    'Create structured maintenance reports for equipment service, inspections, parts used, findings and PDF export.',
  keywords: [
    'maintenance report generator',
    'maintenance report template',
    'equipment maintenance report',
    'maintenance checklist',
    'service report PDF',
    'industrial maintenance report',
  ],
}

export default function MaintenanceReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: 'https://reporting-tools-platform.vercel.app',
          },
          {
            name: 'Tools',
            url: 'https://reporting-tools-platform.vercel.app/tools',
          },
          {
            name: 'Maintenance Report Generator',
            url: 'https://reporting-tools-platform.vercel.app/tools/maintenance-report-generator',
          },
        ]}
      />

      <SoftwareSchema
        name='Maintenance Report Generator'
        description='Create structured equipment maintenance reports with work completed, findings, parts used, recommendations, live preview and PDF export.'
        url='https://reporting-tools-platform.vercel.app/tools/maintenance-report-generator'
        featureList={[
          'Equipment and asset identification',
          'Maintenance type and work summary',
          'Completed task documentation',
          'Inspection findings',
          'Parts and materials used',
          'Recommendations and follow-up actions',
          'Live report preview',
          'Professional PDF export',
        ]}
      />
      <Navbar />

      <section className='relative overflow-hidden border-b border-slate-200 bg-white'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]' />

        <div className='relative mx-auto max-w-7xl px-6 py-16 sm:py-20'>
          <div className='grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <div className='inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700'>
                Equipment Maintenance Tool
              </div>

              <h1 className='mt-7 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl'>
                Maintenance Report Generator
              </h1>

              <p className='mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8'>
                Create structured maintenance reports with equipment details,
                completed tasks, parts used, findings, recommendations and PDF
                export.
              </p>

              <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                <a
                  href='#report-tool'
                  className='inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800'
                >
                  Create maintenance report
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
                  <p className='text-2xl font-bold text-slate-950'>Tasks</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Track work
                  </p>
                </div>

                <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                  <p className='text-2xl font-bold text-slate-950'>Parts</p>
                  <p className='mt-2 text-sm font-medium text-slate-700'>
                    Materials used
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
                    Maintenance Report Preview
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Equipment service document
                  </p>
                </div>

                <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>
                  Ready
                </span>
              </div>

              <div className='mt-6 space-y-4'>
                <div className='rounded-2xl bg-slate-50 p-5'>
                  <p className='text-xs uppercase tracking-wide text-slate-500'>
                    Equipment
                  </p>
                  <p className='mt-1 font-semibold text-slate-950'>
                    Conveyor Belt B
                  </p>
                </div>

                <div className='grid grid-cols-3 gap-2 sm:gap-3'>
                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Hours</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>8</p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Tasks</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>3</p>
                  </div>

                  <div className='rounded-2xl border border-slate-200 p-4'>
                    <p className='text-xs text-slate-500'>Parts</p>
                    <p className='mt-2 text-2xl font-bold text-slate-950'>5</p>
                  </div>
                </div>

                <div className='rounded-2xl border border-slate-200 p-5'>
                  <p className='text-sm font-semibold text-slate-950'>
                    Maintenance tasks
                  </p>

                  <div className='mt-4 space-y-3'>
                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500' />
                      <p className='text-sm text-slate-600'>
                        Roller replacement completed
                      </p>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='mt-1 h-2.5 w-2.5 rounded-full bg-amber-500' />
                      <p className='text-sm text-slate-600'>
                        Follow-up inspection required
                      </p>
                    </div>
                  </div>
                </div>

                <div className='rounded-2xl bg-slate-900 px-5 py-4 text-white'>
                  <p className='text-sm font-semibold'>PDF export available</p>
                  <p className='mt-1 text-xs text-slate-400'>
                    Ready for maintenance documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MaintenanceReportTool />
      <section className='mx-auto max-w-7xl px-6 pb-14 sm:pb-20'>
        <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:rounded-4xl'>
          <div className='grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-blue-600'>
                Related Resources
              </p>

              <h2 className='mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl'>
                Learn how to structure professional maintenance reports
              </h2>

              <p className='mt-5 max-w-2xl leading-8 text-slate-600'>
                Read our maintenance report guide to learn what information
                should be included in equipment service documentation,
                inspections, findings, parts used and follow-up recommendations.
              </p>
            </div>

            <div className='space-y-4'>
              <a
                href='/guides/how-to-write-a-maintenance-report'
                className='flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:bg-slate-100'
              >
                <div>
                  <p className='text-sm font-semibold text-slate-950'>
                    Read maintenance report guide
                  </p>

                  <p className='mt-1 text-xs text-slate-500'>
                    Structure, sections and best practices
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
