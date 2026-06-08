'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Tools', href: '/tools' },
  { label: 'Guides', href: '/guides' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Workflow', href: '/#workflow' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <Link
          href='/'
          className='flex items-center gap-3'
          onClick={() => setIsOpen(false)}
        >
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white'>
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-slate-600 transition hover:text-slate-950'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type='button'
          onClick={() => setIsOpen((current) => !current)}
          className='relative z-50 inline-flex h-10 w-10 touch-manipulation cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={isOpen}
        >
          <span className='sr-only'>Open menu</span>

          <div className='space-y-1.5'>
            <span
              className={`block h-0.5 w-5 bg-slate-800 transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-800 transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-800 transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className='border-t border-slate-200 bg-white md:hidden'>
          <nav className='mx-auto grid max-w-7xl gap-2 px-6 py-4'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
