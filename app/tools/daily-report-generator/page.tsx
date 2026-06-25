import BenefitCards from '@/components/report/BenefitCards'
import HowItWorks from '@/components/report/HowItWorks'
import ToolHero from '@/components/report/ToolHero'
import DailyReportTool from '@/components/report/DailyReportTool'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import DailyReportSEO from '@/components/report/DailyReportSEO'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Report Generator',
  description:
    'Create professional daily reports for operations, construction, mining and maintenance with automatic KPIs, activities tracking and PDF export.',
  keywords: [
    'daily report generator',
    'daily report template',
    'construction daily report',
    'mining daily report',
    'operations daily report',
    'daily report PDF',
    'shift report generator',
  ],
  alternates: {
    canonical:
      'https://reporting-tools-platform.vercel.app/tools/daily-report-generator',
  },
}

export default function DailyReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />
      <ToolHero />

      <BenefitCards />
      <DailyReportTool />

      <HowItWorks />
      <DailyReportSEO />
      <Footer />
    </main>
  )
}
