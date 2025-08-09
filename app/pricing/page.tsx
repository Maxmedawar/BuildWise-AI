export default function Pricing() {
  return (
    <main className="flex flex-col items-center p-8 text-center">
      <h1 className="mb-6 text-4xl font-bold">Simple pricing</h1>
      <div className="rounded-2xl bg-white p-8 text-blue-900 shadow">
        <p className="text-6xl font-bold mb-4">$20</p>
        <p className="mb-6">per month</p>
        <ul className="mb-6 space-y-2 text-left">
          <li>Unlimited projects</li>
          <li>AI cost & ARV analysis</li>
          <li>Email drafts to vendors</li>
        </ul>
        <button className="rounded-xl bg-gold-500 px-6 py-3 text-blue-900 font-semibold">Subscribe</button>
      </div>
    </main>
  )
}
