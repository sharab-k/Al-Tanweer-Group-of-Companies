'use client'
import { useState, useEffect } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#vision' },
    { label: 'Accreditations', href: '#accreditations' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top Utility Bar ── */}
      <div className={`bg-slate-ink text-white transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="mx-auto max-w-[90rem] px-6 py-2 flex items-center justify-between text-base tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-subtle">
              <MapPin size={13} strokeWidth={2} />
              <span className="text-white/70">Musaffah 14, Abu Dhabi, UAE</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5">
            <a href="tel:+971561277407" className="flex items-center gap-1.5 text-white/70 hover:text-amber-brand transition-colors">
              <Phone size={12} strokeWidth={2} />
              056 1277407
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="mailto:info@al-tanwir.com" className="flex items-center gap-1.5 text-white/70 hover:text-amber-brand transition-colors">
              <Mail size={12} strokeWidth={2} />
              info@al-tanwir.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <nav className={`transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-white/[0.05] backdrop-blur-md border-b border-white/[0.08]'
      }`}>
        <div className="mx-auto max-w-[90rem] px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Image */}
            <div className="flex items-center justify-center flex-shrink-0">
              <img 
                src="/WhatsApp_Image_2026-07-20_at_6.42.11_PM-removebg-preview.png" 
                alt="Al-Tanwir FM Logo" 
                className={`h-12 sm:h-14 w-auto scale-[2] sm:scale-[2.5] -translate-x-3 sm:-translate-x-5 origin-left object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert drop-shadow-sm'}`}
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-base font-medium tracking-wide relative group transition-colors ${
                  scrolled ? 'text-slate-body hover:text-emerald-brand' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  scrolled ? 'bg-emerald-brand' : 'bg-amber-brand'
                }`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-amber">
              Get a Quote
              <ChevronRight size={15} strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${scrolled ? 'text-slate-ink' : 'text-white'}`}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`lg:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-ink/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`relative bg-white shadow-xl transition-transform duration-300 ${mobileOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-body hover:text-emerald-brand hover:bg-emerald-mist transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-amber w-full justify-center">
                Get a Quote
                <ChevronRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-border px-6 py-4 flex flex-col gap-2 text-base text-slate-muted">
            <a href="tel:+971561277407" className="flex items-center gap-2 hover:text-emerald-brand">
              <Phone size={14} /> 056 1277407
            </a>
            <a href="mailto:info@al-tanwir.com" className="flex items-center gap-2 hover:text-emerald-brand">
              <Mail size={14} /> info@al-tanwir.com
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
