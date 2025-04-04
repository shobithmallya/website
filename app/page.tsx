import { BlogPosts } from "app/components/blogs";
import { NowPosts } from "./components/now";
import Link from "next/link";

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
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Shobith Mallya
      </h1>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
      This is supposed to be the about section. Claude says I gotta use this as a reference to write content for this section. I'll update this when I find time :)
      </p>
        <div className="text-xs my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-2 dark:border-neutral-800 dark:bg-neutral-950 font-mono">
          <div>
            <strong>Your Persona Story:</strong> Expand on your persona in a
            narrative format. Don't just list bullet points. Tell a story that
            connects your early start, your diverse experiences, and your
            passion for human potential. Weave in elements like:
          </div>
          <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
            <li>
              From building MVPs at 18 to leading product teams at
              23...(Highlights your rapid growth)
            </li>
            <li>
              "...Driven by the belief that technology should empower, not
              overwhelm, people..." (Connects to your human capital vision)
            </li>
            <li>
              "...Bridging the gap between technical complexity and human
              needs through design thinking and AI..." (Reiterates your core
              skills)
            </li>
          </ul>

          <div className="mt-4">
            <strong>My Approach to Product Building:</strong> Use 3-4 concise
            bullet points or short paragraphs to highlight your key
            principles:
          </div>
          <ul className="mt-2" style={{ listStyleType: 'disc', paddingLeft: '1rem' }}>
            <li>
              Human-Centered by Design: Emphasize your user research, empathy,
              and accessibility focus (Rapture, Effinity, WeCP examples).
            </li>
            <li>
              Data-Informed & Technically Grounded: Highlight your engineering
              understanding and analytical approach (ClearFeed onboarding,
              WeCP AI, Mantrika.AI).
            </li>
            <li>
              Growth-Oriented & Scalable Solutions: Showcase your growth
              mindset and experience with PLG, scaling (ClearFeed customer
              growth, WeCP ARR).
            </li>
            <li>
              Impact-Driven & Purposeful: Reiterate your "human capital"
              vision and desire to solve meaningful problems (mention examples
              across your projects).
            </li>
          </ul>
        </div>

        <div className="my-8">
        <h1 className="font-semibold text-2xl tracking-tighter">What I'm doing now?</h1>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400 mb-8">Inspired by <a href="https://nownownow.com/about" className="underline">nownownow.com</a></p>
      <NowPosts />
      </div>

      <div className="my-8">
        <Link href="/blog">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold tracking-tighter mr-2 hover:underline">
              Blogs
            </h2>
            
          </div>
        </Link>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              also using this as a journal. please do not complain of the incosistent timelines to write another. might take months, years, decades, who knows?
            </p>

            

        <BlogPosts />
      </div>
    </section>
  );
}
