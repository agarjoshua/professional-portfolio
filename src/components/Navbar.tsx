interface NavbarProps {
  onMenuOpen: () => void
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onMenuOpen }: NavbarProps) {
  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row items-center justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl tracking-tight text-foreground select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Agar Joshua.<sup className="text-xs">®</sup>
        </a>

        {/* Nav Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:joshuaagarjj@gmail.com"
          className="hidden md:inline-flex liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform items-center"
        >
          Get In Touch
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={onMenuOpen}
          aria-label="Open menu"
          className="md:hidden liquid-glass rounded-full p-2.5 text-foreground hover:scale-[1.03] transition-transform"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
