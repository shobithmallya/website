import { BlogPosts } from 'app/components/blogs'
import { NowPosts } from './components/now'


function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Shobith Mallya
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <h2 className="text-lg font-semibold tracking-tighter">What I'm doing <span className='underline'><a href="https://nownownow.com/about">now</a></span>?</h2>
        <NowPosts showPreviousUpdates={false} />
      </div>
      <div className="my-8">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold tracking-tighter mr-2">Blogs</h2>
          <ArrowIcon />
        </div>
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">also serving as my journal. sort most recent posts first.</p>
        <BlogPosts />
      </div>

    </section>
  )
}
