import { useEffect } from 'react'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

const menuSections = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (href: string) => {
    onClose()
    setTimeout(() => {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`slideover ${open ? 'open' : ''} fixed top-0 right-0 z-50 h-full w-[80vw] max-w-xs flex flex-col`}
        style={{
          background: 'rgba(0, 30, 50, 0.75)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          boxShadow: '-8px 0 48px rgba(0,0,0,0.5), inset 1px 0 0 rgba(255,255,255,0.1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <span
            className="text-2xl tracking-tight text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Agar J.<sup className="text-xs">®</sup>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
          {menuSections.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-left py-4 border-b border-white/8 group"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                className="text-3xl font-normal text-white/80 group-hover:text-white transition-colors"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-8 py-8">
          <a
            href="mailto:joshuaagarjj@gmail.com"
            className="text-sm text-white/50 hover:text-white/80 transition-colors"
          >
            joshuaagarjj@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
