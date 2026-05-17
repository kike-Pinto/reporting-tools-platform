import type { Metadata } from 'next'

import ShiftHandoverTool from '@/components/handover/ShiftHandoverTool'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'Shift Handover Generator',
  description:
    'Create structured shift handover reports for operations, maintenance and field teams with pending tasks, incidents and PDF export.',
}

export default function ShiftHandoverGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />

      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-16'>
          <div className='max-w-3xl'>
            <p className='mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600'>
              Operations Reporting Tool
            </p>

            <h1 className='text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>
              Shift Handover Generator
            </h1>

            <p className='mt-5 text-lg leading-8 text-slate-600'>
              Create structured shift handover reports with pending tasks,
              incidents, equipment status and next-shift recommendations.
            </p>
          </div>
        </div>
      </section>

      <ShiftHandoverTool />

      <Footer />
    </main>
  )
}
