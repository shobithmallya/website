import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function getUpvotes(slug: string) {
  const upvotes = await redis.get(`upvotes:${slug}`)
  return upvotes ? parseInt(upvotes as string) : 0
}

export async function incrementUpvotes(slug: string) {
  const current = await getUpvotes(slug)
  await redis.set(`upvotes:${slug}`, current + 1)
  return current + 1
} 