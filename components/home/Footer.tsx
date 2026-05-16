export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='font-semibold text-slate-950'>
            Reporting Tools Platform
          </p>

          <p className='mt-1 text-sm text-slate-500'>
            Operational reporting and PDF automation tools.
          </p>
        </div>

        <p className='text-sm text-slate-500'>
          © 2026 Reporting Tools Platform
        </p>
      </div>
    </footer>
  )
}
