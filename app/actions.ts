'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPosts } from 'app/posts/utils'

export async function verifyPostPassword(slug: string, password: string) {
  const post = getPosts().find((p) => p.slug === slug)

  if (!post?.metadata.password) {
    redirect(`/${slug}`)
  }

  if (password === post.metadata.password) {
    cookies().set(`unlock-${slug}`, '1', {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    })
    redirect(`/${slug}`)
  }

  return { error: 'Incorrect password' }
}
