'use client'

import { useState } from 'react'

export default function Topbar() {
  const [project, setProject] = useState('123 Main St')
  return (
    <header className="flex items-center justify-between bg-blue-900 p-4 text-white">
      <select
        value={project}
        onChange={e => setProject(e.target.value)}
        className="rounded bg-blue-800 p-2"
      >
        <option>123 Main St</option>
        <option>456 Oak Ave</option>
      </select>
      <div className="flex items-center gap-2">
        <span>Demo User</span>
      </div>
    </header>
  )
}
