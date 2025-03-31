import { BlogPosts } from 'app/components/blogs'

export const metadata = {
  title: 'Blog',
  description: 'Read my blogs.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blogs</h1>
      <BlogPosts />
    </section>
  )
}
