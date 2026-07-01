import Link from 'next/link'
import { formatDate, getPosts } from 'app/posts/utils'

export function Posts() {
  const allPosts = getPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .filter((post) => post.metadata.title !== "Sample")

  return (
    <div>
      {allPosts.length === 0 ? (
        <p className="text-gray-500">No posts found, yet.</p>
      ) : (
        allPosts.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-gray-500 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-gray-900 tracking-tight hover:underline">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}
