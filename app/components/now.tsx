import Link from 'next/link'
import { formatDate, getNowPosts } from 'app/now/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface NowPostsProps {
  showPreviousUpdates?: boolean
}

export function NowPosts({ showPreviousUpdates = true }: NowPostsProps) {
  let allNows = getNowPosts()
  const sortedNows = allNows.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  const [latestPost, ...remainingPosts] = sortedNows

  return (
    <div className="space-y-8">
      {/* Latest Post */}
      <div className="prose dark:prose-invert max-w-none">
        <div className="mb-4">
          <p className="text-neutral-600 dark:text-neutral-400  text-sm tabular-nums">
            {formatDate(latestPost.metadata.publishedAt, false)}
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {latestPost.metadata.title}
          </h2>
        </div>
        <MDXRemote source={latestPost.content} />
      </div>

      {/* Remaining Posts */}
      {showPreviousUpdates && remainingPosts.length > 0 && (
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <h3 className="text-lg font-semibold mb-4">Previous Updates</h3>
          <div>
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`now/${post.slug}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.metadata.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
