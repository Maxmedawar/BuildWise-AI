'use client'

interface Props {
  onClose: () => void
}

export default function SignInModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="rounded-2xl bg-white p-8 text-blue-900 shadow">
        <h2 className="mb-4 text-2xl font-bold">Sign in</h2>
        <p className="mb-4">Stubbed sign in. Continue in demo mode.</p>
        <button onClick={onClose} className="rounded bg-gold-500 px-4 py-2 text-blue-900">Demo mode</button>
      </div>
    </div>
  )
}
