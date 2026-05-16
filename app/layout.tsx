import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Reporting Tools Platform',
    template: '%s | Reporting Tools Platform',
  },

  description:
    'Professional reporting tools for operations, maintenance, construction and industrial teams.',

  keywords: [
    'daily report generator',
    'operations reporting',
    'maintenance reports',
    'construction reports',
    'incident report generator',
    'shift handover tool',
  ],
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
