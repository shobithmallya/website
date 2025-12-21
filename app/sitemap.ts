import { getPosts } from 'app/posts/utils'

export const baseUrl = 'https://shobith.vercel.app'

export default async function sitemap() {
  let blogs = getPosts().map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/posts', '/now'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
