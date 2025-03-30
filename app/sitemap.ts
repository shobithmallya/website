import { getBlogPosts } from 'app/blog/utils'
import { getNowPosts } from 'app/now/utils'

export const baseUrl = 'https://shobith.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/now'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  let nows = getNowPosts().map((post) => ({
    url: `${baseUrl}/now/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  return [...routes, ...blogs, ...nows]
}
