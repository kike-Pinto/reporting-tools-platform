import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://reporting-tools-platform.vercel.app'),

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

  verification: {
    google: 'rgBAbn7ULYgjI7L7ilydOVae5q7XBGyJGOCt5dOKE8w',
  },

  openGraph: {
    title: 'Reporting Tools Platform',
    description:
      'Professional reporting tools for operations, maintenance, construction and industrial teams.',
    url: 'https://reporting-tools-platform.vercel.app',
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
