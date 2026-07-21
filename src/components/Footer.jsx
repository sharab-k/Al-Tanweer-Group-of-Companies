'use client'

import {
  MapPin,
  Phone,
  Mail,
  Shield,
  ExternalLink,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react'

const quickLinks = [
  { label: 'Pest Control', href: '#services' },
  { label: 'HVAC Services', href: '#services' },
  { label: 'Deep Cleaning', href: '#services' },
  { label: 'Building Repairs', href: '#services' },
  { label: 'Landscaping', href: '#services' },
  { label: 'Painting', href: '#services' },
]

const companyLinks = [
  { label: 'About Us', href: '#vision' },
  { label: 'Our Services', href: '#services' },
  { label: 'Accreditations', href: '#accreditations' },
  { label: 'Request a Quote', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-ink relative">
      {/* Top border accent */}
      <div className="h-[3px] bg-gradient-to-r from-emerald-brand via-amber-brand to-emerald-brand" />

      <div className="mx-auto max-w-[90rem] px-6 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/WhatsApp_Image_2026-07-20_at_6.42.11_PM-removebg-preview.png" 
                  alt="Al-Tanwir FM Logo" 
                  className="h-12 sm:h-14 w-auto scale-[2] sm:scale-[2.5] -translate-x-3 sm:-translate-x-5 origin-left object-contain brightness-0 invert drop-shadow-sm"
                />
              </div>
            </div>
            <p className="mt-6 text-white/60 text-base leading-relaxed max-w-sm">
              Al-Tanwir Group of Companies — Diverse expertise. One trusted name. Delivering value across the UAE.
            </p>

            {/* ISO mini badges */}
            <div className="flex items-center gap-2 mt-6">
              {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((iso) => (
                <span key={iso} className="flex items-center gap-1 px-2.5 py-1.5 bg-white/[0.05] border border-white/[0.08] text-[0.65rem] font-semibold text-white/60 tracking-[0.06em]">
                  <Shield size={10} className="text-emerald-brand" strokeWidth={2.5} />
                  {iso}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Our Companies */}
          <div className="lg:ml-auto">
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-brand"></span>
              Our Companies
            </h4>
            <ul className="space-y-3.5">
              <li><a href="/facilities" className="text-white/60 hover:text-amber-brand hover:translate-x-1 inline-block transition-all text-base">Facilities Management</a></li>
              <li><a href="/gemstones" className="text-white/60 hover:text-amber-brand hover:translate-x-1 inline-block transition-all text-base">Diamonds & Gemstones</a></li>
              <li><a href="/technical" className="text-white/60 hover:text-amber-brand hover:translate-x-1 inline-block transition-all text-base">Technical Services</a></li>
              <li><a href="/real-estate" className="text-white/60 hover:text-amber-brand hover:translate-x-1 inline-block transition-all text-base">Real Estate</a></li>
              <li><a href="/general-trading" className="text-white/60 hover:text-amber-brand hover:translate-x-1 inline-block transition-all text-base">General Trading</a></li>
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 className="text-base font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#vision" className="text-base text-white/60 hover:text-amber-brand transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-emerald-brand/60 group-hover:bg-amber-brand transition-colors" />About Us</a></li>
              <li><a href="#services" className="text-base text-white/60 hover:text-amber-brand transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-emerald-brand/60 group-hover:bg-amber-brand transition-colors" />Our Services</a></li>
              <li><a href="#accreditations" className="text-base text-white/60 hover:text-amber-brand transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-emerald-brand/60 group-hover:bg-amber-brand transition-colors" />Accreditations</a></li>
              <li><a href="#contact" className="text-base text-white/60 hover:text-amber-brand transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-emerald-brand/60 group-hover:bg-amber-brand transition-colors" />Request a Quote</a></li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-base font-semibold tracking-[0.18em] uppercase text-white/40 mb-5">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-emerald-brand mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-base text-white/60 leading-relaxed">
                  Office No. 16, Casa Bionco Building,
                  <br />Musaffah 14, Abu Dhabi, UAE
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white/70" />
                </div>
                <div>
                  <h4 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white/40 mb-1.5">Emergency / 24/7 Support</h4>
                  <a href="tel:00971553173594" className="block hover:text-amber-brand transition-colors text-white/60">00971553173594</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white/70" />
                </div>
                <div>
                  <h4 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-white/40 mb-1.5">Email Inquiries</h4>
                  <a href="mailto:altanvirgroup@gmail.com" className="text-base text-white/60 hover:text-amber-brand transition-colors flex items-center gap-1">
                    altanvirgroup@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Al-Tanwir Group of Companies. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-emerald-brand hover:border-emerald-brand transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-white/40 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}
