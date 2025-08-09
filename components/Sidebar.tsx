'use client'

import { useState } from 'react'
import Link from 'next/link'

const items = ['Projects', 'Analyze', 'Vendors', 'Billing', 'Settings']

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className={`bg-blue-900 p-4 text-white ${open ? 'w-48' : 'w-12'} md:w-48`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="mb-4 md:hidden"
      >
        ☰
      </button>
      <ul className={`${open ? 'block' : 'hidden'} md:block space-y-2`}>
        {items.map(i => (
          <li key={i}>
            <Link href="#" className="block rounded px-2 py-1 hover:bg-blue-800">
              {i}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
