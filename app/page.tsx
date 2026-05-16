import Benefits from '@/components/home/Benefits'
import CTA from '@/components/home/CTA'
import FeaturedTools from '@/components/home/FeaturedTools'
import Hero from '@/components/home/Hero'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Workflow from '@/components/home/Workflow'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reporting Tools Platform',
  description:
    'Professional operational reporting tools with PDF export, KPI tracking and reusable workflows.',
}

export default function HomePage() {
  return (
    <main className='min-h-screen bg-slate-50 text-slate-900'>
      <Navbar />
      <Hero />
      <FeaturedTools />
      <Benefits />
      <Workflow />
      <CTA />
      <Footer />
    </main>
  )
}
