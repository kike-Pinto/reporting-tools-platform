import BenefitCards from '@/components/report/BenefitCards'
import HowItWorks from '@/components/report/HowItWorks'
import ToolHero from '@/components/report/ToolHero'
import DailyReportTool from '@/components/report/DailyReportTool'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Report Generator',
  description:
    'Create professional daily operational reports with automatic KPIs, activities tracking and PDF export.',
}

export default function DailyReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <ToolHero />

      <BenefitCards />
      <DailyReportTool />

      <HowItWorks />
    </main>
  )
}
