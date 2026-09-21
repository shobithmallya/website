'use client'

import { useState } from 'react'
import { verifyPostPassword } from 'app/actions'

function BlurredPlaceholder() {
  return (
    <div className="space-y-4 blur-md select-none pointer-events-none" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-neutral-400/25 rounded"
          style={{ width: `${65 + (i % 4) * 8}%` }}
        />
      ))}
    </div>
  )
}

export function PrivatePostGate({ slug }: { slug: string }) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string
    const result = await verifyPostPassword(slug, password)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <div className="relative">
      <article className="prose max-h-[60vh] overflow-hidden">
        <BlurredPlaceholder />
      </article>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-custom/80">
        <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-xs px-4">
          <input
            name="password"
            type="password"
            required
            autoFocus
            placeholder="Password"
            className="flex-1 min-w-0 bg-transparent border-b border-neutral-400 py-1 px-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="text-sm text-gray-500 hover:text-gray-900 shrink-0 disabled:opacity-100"
          
          >
            {loading ? '…' : 'Go'}
          </button>
        </form>
        {error && <p className="text-sm text-gray-500">{error}</p>}
      </div>
    </div>
  )
}
