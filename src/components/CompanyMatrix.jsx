'use client'
import {
  Building2,
  Gem,
  Hammer,
  Home,
  Globe,
  ArrowRight,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../constants/images'

const companyData = [
  {
    id: 'facilities',
    label: 'Facilities Management',
    icon: Building2,
    image: IMAGES.facilitiesCover,
    tagline: 'Integrated cleaning, HVAC, pest control, maintenance, landscaping and property-care solutions.',
    href: '/facilities'
  },
  {
    id: 'gemstones',
    label: 'Diamonds & Gemstones',
    icon: Gem,
    image: IMAGES.gemstonesCover,
    tagline: 'Natural gemstones, diamonds, rough material and selected mineral specimens for qualified buyers.',
    href: '/gemstones'
  },
  {
    id: 'technical',
    label: 'Technical Services',
    icon: Hammer,
    image: IMAGES.technicalCover,
    tagline: 'Practical construction, fit-out, pool and site-support capabilities delivered by experienced teams.',
    href: '/technical'
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    icon: Home,
    image: IMAGES.realEstateCover,
    tagline: 'Property opportunities and client-focused support for real-estate enquiries in the UAE.',
    href: '/real-estate'
  },
  {
    id: 'trading',
    label: 'General Trading',
    icon: Globe,
    image: IMAGES.tradingCover,
    tagline: 'Responsive sourcing and commercial support across selected products and market opportunities.',
    href: '/general-trading'
  },
]

export default function CompanyMatrix() {
  const sectionRef = useScrollReveal()

  return (
    <section id="companies" className="section-padding bg-slate-wash relative border-t border-slate-border">
      <div ref={sectionRef} className="relative mx-auto max-w-[90rem] px-6">
        {/* Section header */}
        <div className="fade-up max-w-xl mb-12 lg:mb-16">
          <span className="flex items-center gap-3 mb-4">
            <span className="accent-line" />
            <span className="text-base font-semibold tracking-[0.2em] uppercase text-emerald-brand">
              Our Companies
            </span>
          </span>
          <h2 className="font-display font-bold text-slate-ink text-[1.875rem] sm:text-[2.25rem] tracking-tight leading-snug">
            Expertise for every
            <br className="hidden sm:block" />
            opportunity
          </h2>
          <p className="mt-4 text-slate-muted text-[1.0625rem] leading-relaxed max-w-lg">
            Each company serves its own market with focused knowledge, practical execution and the shared values of the Al‑Tanwir name.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companyData.map((company) => {
            const Icon = company.icon
            return (
              <a
                key={company.id}
                href={company.href}
                className="fade-up group relative flex flex-col min-h-[400px] overflow-hidden bg-slate-ink rounded-none isolation-auto"
              >
                {/* Background Image with elegant overlay */}
                <img
                  src={company.image}
                  alt={company.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-ink via-slate-ink/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-amber-brand/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow p-8 sm:p-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto border border-white/10 group-hover:bg-amber-brand group-hover:border-amber-brand transition-colors duration-300">
                    <Icon size={24} className="text-white group-hover:text-slate-ink transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <div className="mt-8 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="font-display font-bold text-white text-2xl tracking-tight mb-3">
                      {company.label}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed font-medium line-clamp-3">
                      {company.tagline}
                    </p>
                  </div>

                  {/* Explore button that appears on hover */}
                  <div className="mt-6 flex items-center gap-2 text-amber-brand font-semibold text-sm tracking-[0.1em] uppercase opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    Explore Company <ArrowRight size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
