import { NextRequest, NextResponse } from 'next/server'
import { medusaClient } from "@lib/config"

export async function GET() {
  try {
    const { collections } = await medusaClient.collections.list()
    return NextResponse.json(collections)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching collections' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const selectedCollections = await request.json()
  // Here you would save the selected collection IDs
  // For now, we'll just echo back the received data
  return NextResponse.json(selectedCollections)
}