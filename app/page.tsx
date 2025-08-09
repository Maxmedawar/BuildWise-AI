import Link from 'next/link'

export default function Landing() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 p-8 text-center">
      <section className="mt-24">
        <h1 className="text-4xl font-bold">Smarter property insights in minutes</h1>
        <Link href="/dashboard" className="mt-6 inline-block rounded-xl bg-gold-500 px-6 py-3 text-blue-900 font-semibold">
          Start free
        </Link>
      </section>
      <section className="grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 text-blue-900 shadow">Fast cost breakdowns</div>
        <div className="rounded-2xl bg-white p-6 text-blue-900 shadow">Simple timelines</div>
        <div className="rounded-2xl bg-white p-6 text-blue-900 shadow">Vendor outreach</div>
      </section>
      <section className="rounded-2xl bg-white p-6 text-blue-900 shadow">
        <h2 className="text-2xl font-bold">Just $20/mo after a free trial</h2>
        <Link href="/pricing" className="mt-2 inline-block rounded-xl bg-blue-900 px-4 py-2 text-white">
          See pricing
        </Link>
      </section>
    </main>
  )
}
