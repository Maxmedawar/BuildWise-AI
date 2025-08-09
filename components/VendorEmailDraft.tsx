'use client'

import { useState } from 'react'

export default function VendorEmailDraft() {
  const [text, setText] = useState('Hello vendor, ...')
  return (
    <div className="space-y-4 rounded-2xl bg-white p-4 text-blue-900 shadow">
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full rounded border p-2"
        rows={5}
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setText('Hello vendor, ...')}
          className="rounded bg-blue-900 px-4 py-2 text-white"
        >
          Regenerate
        </button>
        <button
          type="button"
          className="rounded bg-gold-500 px-4 py-2 font-semibold text-blue-900"
        >
          Send later
        </button>
      </div>
    </div>
  )
}
