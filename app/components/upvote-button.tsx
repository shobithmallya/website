'use client'

import { useState, useEffect } from 'react'

interface UpvoteButtonProps {
  slug: string
  initialCount?: number
}

export function UpvoteButton({ slug, initialCount = 0 }: UpvoteButtonProps) {
  const [count, setCount] = useState(initialCount)
  const [isUpvoted, setIsUpvoted] = useState(false)

  useEffect(() => {
    // Check if user has upvoted this post
    const upvotedPosts = JSON.parse(localStorage.getItem('upvotedPosts') || '{}')
    setIsUpvoted(!!upvotedPosts[slug])
  }, [slug])

  const handleUpvote = async () => {
    if (isUpvoted) return

    try {
      const response = await fetch('/api/upvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      })

      if (!response.ok) throw new Error('Failed to upvote')

      const data = await response.json()
      setCount(data.count)
      setIsUpvoted(true)

      // Store upvote in localStorage
      const upvotedPosts = JSON.parse(localStorage.getItem('upvotedPosts') || '{}')
      upvotedPosts[slug] = true
      localStorage.setItem('upvotedPosts', JSON.stringify(upvotedPosts))
    } catch (error) {
      console.error('Error upvoting:', error)
    }
  }

  return (
    <button
      onClick={handleUpvote}
      className={`fixed bottom-8 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-200 ${
        isUpvoted
          ? 'bg-white text-black hover:bg-gray-100'
          : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${isUpvoted ? 'fill-current' : 'fill-none'}`}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <span className="text-xs">{count}</span>
      <span className="text-xs">Upvote</span>
    </button>
  )
} 