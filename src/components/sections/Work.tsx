const projects = [
  {
    index: '01',
    title: 'Enterprise Payroll & Compliance Platform',
    summary:
      'Designed and contributed to backend architecture for a high-volume payroll system handling statutory compliance, automated reporting, and PDF/CSV export pipelines.',
    tags: ['Python', 'Django', 'PostgreSQL', 'REST APIs'],
  },
  {
    index: '02',
    title: 'Digital Payments & Process Automation',
    summary:
      'Built payment-integrated workflow systems that replaced manual operational processes — transaction handling, mobile payment integrations, and real-time reporting layers.',
    tags: ['Backend Engineering', 'API Integration', 'Workflow Automation'],
  },
  {
    index: '03',
    title: 'Fisheries & Supply Chain Platforms',
    summary:
      'Deployed full-stack web platforms for supply chain and logistics operations, including CMS integration, Linux hosting infrastructure, and public-facing digital interfaces.',
    tags: ['Django', 'Strapi', 'JavaScript', 'Linux'],
  },
  {
    index: '04',
    title: 'Internal Operations & Reporting Tools',
    summary:
      'Built dynamic analytics dashboards, export systems, and administrative tooling designed for operational visibility and long-term maintainability.',
    tags: ['Data Processing', 'Reporting Automation', 'Analytics'],
  },
  {
    index: '05',
    title: 'API & Backend Systems',
    summary:
      'Designed scalable API-first backends powering web and mobile applications — covering authentication flows, database optimization, and service-oriented architecture.',
    tags: ['FastAPI', 'Django REST Framework', 'PostgreSQL'],
  },
  {
    index: '06',
    title: 'Infrastructure & Deployment Engineering',
    summary:
      'Designed and managed production deployment environments: containerized services, reverse proxies, SSL hardening, and automation scripts on Linux-based cloud infrastructure.',
    tags: ['Docker', 'Nginx', 'Linux', 'Cloud'],
  },
]

export default function Work() {
  return (
    <section id="work" className="section-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] max-w-2xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Systems built for the{' '}
            <em className="not-italic text-muted-foreground">real world.</em>
          </h2>
        </div>

        {/* Project list */}
        <div className="divide-y divide-white/10">
          {projects.map((p) => (
            <div
              key={p.index}
              className="group py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-lg"
            >
              {/* Index */}
              <span className="text-xs text-muted-foreground font-mono pt-1 shrink-0 w-8">
                {p.index}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl sm:text-2xl font-normal text-foreground mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                  {p.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:justify-end shrink-0 sm:max-w-[220px]">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
