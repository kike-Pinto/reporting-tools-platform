import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import BenefitCards from '@/components/report/BenefitCards'
import DailyReportSEO from '@/components/report/DailyReportSEO'
import DailyReportTool from '@/components/report/DailyReportTool'
import HowItWorks from '@/components/report/HowItWorks'
import ToolHero from '@/components/report/ToolHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import SoftwareSchema from '@/components/seo/SoftwareSchema'

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
            name: 'Daily Report Generator',
            url: 'https://reporting-tools-platform.vercel.app/tools/daily-report-generator',
          },
        ]}
      />

      <SoftwareSchema
        name='Daily Report Generator'
        description='Create structured daily operational reports with activities, KPIs, observations, pending tasks, live preview and PDF export.'
        url='https://reporting-tools-platform.vercel.app/tools/daily-report-generator'
        featureList={[
          'Structured daily report form',
          'Activities and working hours tracking',
          'Automatic report KPIs',
          'Safety and incident documentation',
          'Observations and pending tasks',
          'Live report preview',
          'Professional PDF export',
        ]}
      />

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
