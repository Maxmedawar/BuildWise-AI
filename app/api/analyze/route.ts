import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise(r => setTimeout(r, 500))
  return NextResponse.json({
    cost: '$10,000',
    schedule: '30 days',
    arv: '$150,000',
    risks: 'Market shift'
  })
}
