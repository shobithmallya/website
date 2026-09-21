import Link from 'next/link'
import { formatDate, getPosts, isPrivatePost } from 'app/posts/utils'
import { Lock } from 'lucide-react'

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
        <p className="text-gray-500"></p>
      ) : (
        allPosts.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:items-center space-x-0 md:space-x-2">
              <p className="text-gray-500 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-gray-900 tracking-tight hover:underline">
                  {post.metadata.title}
                </p>
                {isPrivatePost(post.metadata) && (
                  <Lock className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  )
}
