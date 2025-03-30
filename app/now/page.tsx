import { NowPosts } from 'app/components/now'

export const metadata = {
  title: 'Now',
  description: 'Read my now.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">What I'm doing now?</h1>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400 mb-8">Inspired by <a href="https://nownownow.com/about" className="underline">nownownow.com</a></p>
      <NowPosts />
    </section>
  )
}
