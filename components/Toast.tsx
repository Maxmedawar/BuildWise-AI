'use client'

import { useEffect } from 'react'

interface Props {
  message: string
  onDone: () => void
}

export default function Toast({ message, onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <div className="fixed bottom-4 right-4 rounded bg-blue-900 px-4 py-2 text-white shadow">
      {message}
    </div>
  )
}
