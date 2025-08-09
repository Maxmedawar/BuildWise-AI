import { useState } from 'react'

const PRICES = {
  monthly: { amount: 79, stripeId: process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY || 'price_79_monthly' },
  annual: { amount: 790, stripeId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ANNUAL || 'price_790_annual' },
}

export default function Pricing() {
  const [plan, setPlan] = useState<'monthly' | 'annual'>('monthly')

  const handleSubscribe = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: PRICES[plan].stripeId }),
    })
    const data = await res.json()
    window.location.href = data.url
  }

  const isAnnual = plan === 'annual'

  return (
    <main className="flex flex-col items-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold">BeamLot Pricing</h1>
      <p className="mb-8 max-w-xl text-white">
        BeamLot is the premium AI tool for property investors, contractors, and flippers.
      </p>
      <div className="mb-6 flex rounded-xl overflow-hidden">
        <button
          onClick={() => setPlan('monthly')}
          className={`px-4 py-2 ${plan === 'monthly' ? 'bg-gold-500 text-blue-900' : 'bg-blue-900 text-white'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setPlan('annual')}
          className={`px-4 py-2 ${plan === 'annual' ? 'bg-gold-500 text-blue-900' : 'bg-blue-900 text-white'}`}
        >
          Annual
        </button>
      </div>
      <div className="rounded-2xl bg-white p-8 text-blue-900 shadow">
        <p className="mb-4 text-6xl font-bold">${isAnnual ? '790' : '79'}</p>
        <p className="mb-6">{isAnnual ? 'per year (2 months free)' : 'per month'}</p>
        <ul className="mb-6 space-y-2 text-left">
          <li>Unlimited projects</li>
          <li>AI cost & ARV analysis</li>
          <li>Email drafts to vendors</li>
        </ul>
        <button
          onClick={handleSubscribe}
          className="rounded-xl bg-gold-500 px-6 py-3 text-blue-900 font-semibold"
        >
          Subscribe
        </button>
      </div>
    </main>
  )
}
