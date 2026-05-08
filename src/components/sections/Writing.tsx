const posts = [
  {
    date: 'May 2025',
    title: 'The Code Ophanim',
    excerpt:
      'I like using VSCode — it is easy to set up and equally easy to use. Its side effects of RAM consumption aside, a thoughtful breakdown of the dev environment that actually works.',
    readTime: 'Medium',
    href: 'https://medium.com/@joshuaagarjj',
  },
  {
    date: 'Mar 2025',
    title: 'Killing Ports 🤖',
    excerpt:
      'A quick practical guide to killing stubborn ports on Linux-based distros — straight commands, no ceremony, just the fix when you need it.',
    readTime: 'Medium',
    href: 'https://medium.com/@joshuaagarjj',
  },
  {
    date: 'Jul 2024',
    title: 'How to set up HTMX in Django',
    excerpt:
      'HTMX makes it easy and straightforward for a backend engineer to write code from end to end without reaching for a heavy frontend framework.',
    readTime: 'Medium',
    href: 'https://medium.com/@joshuaagarjj',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="section-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Writing
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] max-w-2xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Thinking out loud,{' '}
            <em className="not-italic text-muted-foreground">in public.</em>
          </h2>
        </div>

        {/* Post list */}
        <div className="space-y-0 divide-y divide-white/10">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-10 flex flex-col sm:flex-row sm:items-start gap-6 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-lg cursor-pointer"
            >
              {/* Date */}
              <span className="text-xs text-muted-foreground font-mono shrink-0 pt-1 w-16">
                {post.date}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl sm:text-2xl font-normal text-foreground mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              {/* Read time + arrow */}
              <div className="flex items-center gap-3 shrink-0 sm:pt-1">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
