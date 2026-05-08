const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart'] },
  { category: 'Frameworks', items: ['Django', 'FastAPI', 'DRF', 'Vue.js', 'React'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Linux', 'GCP', 'Nginx'] },
  { category: 'Specialisms', items: ['Distributed Systems', 'API Design', 'Automation', 'System Architecture'] },
]

const education = [
  {
    degree: 'M.Sc. Computer Systems',
    institution: 'JKUAT',
    period: '2023 — 2026 (expected)',
  },
  {
    degree: 'B.B.I.T',
    institution: 'JKUAT',
    period: '2016 — 2021',
  },
]

export default function About() {
  return (
    <section id="about" className="section-darker py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            About
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] max-w-3xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Engineering as a{' '}
            <em className="not-italic text-muted-foreground">systems problem.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              I'm a software engineer working at the intersection of backend
              systems, infrastructure, and product engineering. My work spans
              government platforms, enterprise software, telecommunications
              environments, and independent consulting — always with a focus on
              systems that remain stable and maintainable under real-world constraints.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I specialize in Python-based backend engineering — Django, FastAPI, and
              API-driven architectures — while working across cloud infrastructure,
              containerization, distributed systems, and full-stack delivery.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              My long-term interests sit at the edge of distributed systems, platform
              engineering, and building scalable African technology infrastructure.
              Good software, to me, is as much about understanding operations and
              people as it is about writing clean code.
            </p>

            {/* Education */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              {education.map((e) => (
                <div key={e.degree} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm text-foreground">{e.degree}</p>
                    <p className="text-xs text-muted-foreground">{e.institution}</p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono shrink-0">
                    {e.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="liquid-glass text-sm text-foreground px-4 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
