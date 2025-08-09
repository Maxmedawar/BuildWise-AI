'use client'

import { useState, useEffect } from 'react'

interface Props {
  onResults: (data: any) => void
}

export default function AnalyzeForm({ onResults }: Props) {
  const [address, setAddress] = useState('')
  const [scope, setScope] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('analyzeForm')
    if (saved) {
      const obj = JSON.parse(saved)
      setAddress(obj.address)
      setScope(obj.scope)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('analyzeForm', JSON.stringify({ address, scope }))
  }, [address, scope])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!address) {
      setError('Address required')
      return
    }
    setError('')
    setLoading(true)
    const res = await fetch('/api/analyze')
    const json = await res.json()
    setLoading(false)
    onResults(json)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-4 text-blue-900 shadow">
      <input
        value={address}
        onChange={e => setAddress(e.target.value)}
        placeholder="Address"
        className="w-full rounded border p-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <textarea
        value={scope}
        onChange={e => setScope(e.target.value)}
        placeholder="Scope"
        className="w-full rounded border p-2"
      />
      <button disabled={loading} className="rounded-xl bg-gold-500 px-4 py-2 font-semibold disabled:opacity-50">
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
    </form>
  )
}
