'use client'

import { useState } from 'react'

interface Props {
  data: any
}

const tabs = ['Cost', 'Schedule', 'ARV', 'Risks'] as const

type Tab = typeof tabs[number]

export default function ResultsView({ data }: Props) {
  const [tab, setTab] = useState<Tab>('Cost')
  const content = data[tab.toLowerCase()] || 'N/A'
  return (
    <div className="rounded-2xl bg-white p-4 text-blue-900 shadow">
      <div className="mb-4 flex gap-2">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded px-3 py-1 ${tab === t ? 'bg-gold-500 text-blue-900' : 'bg-blue-900 text-white'}`}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="mb-4 whitespace-pre-wrap">{content}</p>
      <button
        onClick={() => navigator.clipboard.writeText(content)}
        className="rounded bg-blue-900 px-3 py-1 text-white"
      >
        Copy
      </button>
    </div>
  )
}
