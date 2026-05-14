import BenefitCards from '@/components/report/BenefitCards'
import HowItWorks from '@/components/report/HowItWorks'
import ReportForm from '@/components/report/ReportForm'
import ToolHero from '@/components/report/ToolHero'
import ReportPreview from '@/components/report/ReportPreview'

export default function DailyReportGeneratorPage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <ToolHero />

      <BenefitCards />

      <section id='report-tool' className='mx-auto max-w-7xl px-6 py-8'>
        <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <ReportForm />
          <ReportPreview />
        </div>
      </section>

      <HowItWorks />
    </main>
  )
}
