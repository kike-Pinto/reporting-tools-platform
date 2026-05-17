import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://reportingtoolsplatform.com'),

  title: {
    default: 'Reporting Tools Platform',
    template: '%s | Reporting Tools Platform',
  },

  description:
    'Professional reporting tools for operations, maintenance, construction and industrial teams.',

  keywords: [
    'reporting tools',
    'daily report generator',
    'shift handover generator',
    'operations reporting',
    'maintenance reports',
    'construction reports',
    'industrial reporting',
    'PDF report generator',
  ],

  openGraph: {
    title: 'Reporting Tools Platform',
    description:
      'Professional reporting tools for operations, maintenance, construction and industrial teams.',
    url: 'https://reportingtoolsplatform.com',
    siteName: 'Reporting Tools Platform',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Reporting Tools Platform',
    description:
      'Professional reporting tools for operations, maintenance, construction and industrial teams.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
