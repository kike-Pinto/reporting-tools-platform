import Link from 'next/link'

const relatedPlatforms = [
  {
    title: 'Data Tools Platform',
    href: 'https://data-tools-platform.vercel.app/',
    description: 'CSV, Excel and JSON tools',
  },
  {
    title: 'Dashboard Tools Platform',
    href: 'https://dashboard-tools-platform.vercel.app/',
    description: 'KPI dashboards from Excel and CSV',
  },
]

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]'>
        <div>
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white'>
              RT
            </div>

            <div>
              <p className='font-semibold text-slate-950'>
                Reporting Tools Platform
              </p>

              <p className='text-sm text-slate-500'>
                Operational reporting tools
              </p>
            </div>
          </div>

          <p className='mt-5 max-w-md text-sm leading-6 text-slate-600'>
            Browser-based tools for creating professional operational reports,
            shift handovers and PDF documents for field teams.
          </p>
        </div>

        <div>
          <p className='text-sm font-semibold text-slate-950'>Tools</p>

          <div className='mt-4 space-y-3'>
            <Link
              href='/tools/daily-report-generator'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Daily Report Generator
            </Link>

            <Link
              href='/tools/shift-handover-generator'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Shift Handover Generator
            </Link>

            <Link
              href='/tools/maintenance-report-generator'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Maintenance Report Generator
            </Link>

            <Link
              href='/tools/incident-report-generator'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Incident Report Generator
            </Link>

            <Link
              href='/tools/progress-report-generator'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Progress Report Generator
            </Link>

            <Link
              href='/tools'
              className='block text-sm font-semibold text-slate-900 transition hover:text-blue-600'
            >
              All tools →
            </Link>
          </div>
        </div>

        <div>
          <p className='text-sm font-semibold text-slate-950'>Guides</p>

          <div className='mt-4 space-y-3'>
            <Link
              href='/guides/how-to-write-a-daily-report'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Daily Report Guide
            </Link>

            <Link
              href='/guides/how-to-write-a-shift-handover-report'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Shift Handover Guide
            </Link>

            <Link
              href='/guides/how-to-write-a-maintenance-report'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Maintenance Report Guide
            </Link>

            <Link
              href='/guides/how-to-write-an-incident-report'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Incident Report Guide
            </Link>

            <Link
              href='/guides/how-to-write-a-progress-report'
              className='block text-sm text-slate-600 transition hover:text-slate-950'
            >
              Progress Report Guide
            </Link>

            <Link
              href='/guides'
              className='block text-sm font-semibold text-slate-900 transition hover:text-blue-600'
            >
              All guides →
            </Link>
          </div>
        </div>

        <div>
          <p className='text-sm font-semibold text-slate-950'>
            Related Platforms
          </p>

          <div className='mt-4 space-y-4'>
            {relatedPlatforms.map((platform) => (
              <a
                key={platform.href}
                href={platform.href}
                target='_blank'
                rel='noopener noreferrer'
                className='block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50'
              >
                <p className='text-sm font-semibold text-slate-950'>
                  {platform.title}
                </p>

                <p className='mt-1 text-xs leading-5 text-slate-500'>
                  {platform.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='border-t border-slate-200'>
        <div className='mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
          <p>© 2026 Reporting Tools Platform. All rights reserved.</p>

          <p>Built for operational reporting workflows.</p>
        </div>
      </div>
    </footer>
  )
}
