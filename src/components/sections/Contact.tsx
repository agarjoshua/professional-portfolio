const socials = [
  { label: 'GitHub', href: 'https://github.com/agarjoshua' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-agar/' },
  { label: 'Twitter / X', href: 'https://twitter.com/AgarJoshua' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-darker py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          {/* Left — CTA */}
          <div>
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] mb-8"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let's build something{' '}
              <em className="not-italic text-muted-foreground">worth building.</em>
            </h2>

            <a
              href="mailto:joshuaagarjj@gmail.com"
              className="group inline-flex items-center gap-3 text-xl sm:text-2xl text-foreground hover:text-muted-foreground transition-colors"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              joshuaagarjj@gmail.com
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Right — socials + note */}
          <div className="space-y-10">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-5">
                Elsewhere
              </p>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group py-2 border-b border-white/10 hover:border-white/30 transition-colors"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {s.label}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Open to backend engineering roles, consulting engagements, and
              interesting problems in distributed systems or platform engineering.
            </p>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span
            className="text-xl text-muted-foreground/50"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Agar J.<sup className="text-xs">®</sup>
          </span>
          <span className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Joshua Agar. Nairobi, Kenya.
          </span>
        </div>
      </div>
    </section>
  )
}
