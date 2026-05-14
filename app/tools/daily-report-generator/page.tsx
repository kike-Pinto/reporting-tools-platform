import BenefitCards from '@/components/report/BenefitCards'
import HowItWorks from '@/components/report/HowItWorks'
import ToolHero from '@/components/report/ToolHero'
import DailyReportTool from '@/components/report/DailyReportTool'

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
