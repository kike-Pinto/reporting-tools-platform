import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='border-b border-slate-200 bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <Link href='/' className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white'>
            RT
          </div>

          <div>
            <p className='text-sm font-semibold text-slate-950'>
              Reporting Tools Platform
            </p>

            <p className='text-xs text-slate-500'>
              Operational reporting tools
            </p>
          </div>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          <Link
            href='/tools'
            className='text-sm font-medium text-slate-600 transition hover:text-slate-950'
          >
            Tools
          </Link>

          <Link
            href='/guides'
            className='text-sm font-medium text-slate-600 transition hover:text-slate-950'
          >
            Guides
          </Link>

          <Link
            href='/#benefits'
            className='text-sm font-medium text-slate-600 transition hover:text-slate-950'
          >
            Benefits
          </Link>

          <Link
            href='/#workflow'
            className='text-sm font-medium text-slate-600 transition hover:text-slate-950'
          >
            Workflow
          </Link>
        </nav>
      </div>
    </header>
  )
}
