interface HeroProps {
  onExplore: () => void
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="home"
      className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-[90px]"
    >
      {/* Headline */}
      <h1
        className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl animate-fade-rise"
        style={{
          fontFamily: "'Instrument Serif', serif",
          letterSpacing: '-2.46px',
        }}
      >
        Where{' '}
        <em className="not-italic text-muted-foreground">ideas</em>{' '}
        become infrastructure,{' '}
        <em className="not-italic text-muted-foreground">
          and systems endure.
        </em>
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
        Engineering scalable backend systems, distributed architectures, and
        enterprise platforms — from government infrastructure to cloud-native
        APIs. Built for performance, reliability, and real-world impact.
      </p>

      {/* CTA — scrolls on desktop, opens menu on mobile */}
      <div className="flex gap-4 mt-12 animate-fade-rise-delay-2">
        {/* Desktop: scroll to work */}
        <a
          href="#work"
          className="hidden md:inline-flex liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer items-center"
        >
          Explore My Work
        </a>

        {/* Mobile: open slide-over menu */}
        <button
          onClick={onExplore}
          className="md:hidden liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
        >
          Explore My Work
        </button>
      </div>
    </section>
  )
}
