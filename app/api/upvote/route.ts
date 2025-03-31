import { NextResponse } from 'next/server'
import { incrementUpvotes } from 'app/lib/redis'

export async function POST(request: Request) {
  const { slug } = await request.json()
  
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
  }

  try {
    const newCount = await incrementUpvotes(slug)
    return NextResponse.json({ count: newCount })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to increment upvotes' }, { status: 500 })
  }
} 