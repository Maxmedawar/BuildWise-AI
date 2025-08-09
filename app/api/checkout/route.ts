import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { priceId } = await request.json()
  // Placeholder: In production, create a Stripe checkout session with the priceId
  const url = `https://example.com/checkout?price=${priceId}`
  return NextResponse.json({ url })
}
