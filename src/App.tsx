import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MobileMenu from '@/components/MobileMenu'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Writing from '@/components/sections/Writing'
import Contact from '@/components/sections/Contact'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── Hero (fullscreen video) ─────────────────────── */}
      <div className="relative h-screen overflow-hidden bg-background">
        {/* Fullscreen video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        {/* Bottom vignette — ensures CTA text is always legible */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 to-transparent z-[1] pointer-events-none" />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar onMenuOpen={() => setMenuOpen(true)} />
          <Hero onExplore={() => setMenuOpen(true)} />
        </div>
      </div>

      {/* ── Sections ───────────────────────────────────── */}
      <Work />
      <About />
      <Writing />
      <Contact />

      {/* ── Mobile slide-over ──────────────────────────── */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

