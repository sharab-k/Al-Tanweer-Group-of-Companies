'use client'
import { Target, TrendingUp, Users } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function VisionBanner() {
  const sectionRef = useScrollReveal()

  const stats = [
    {
      icon: Target,
      value: '#1',
      label: 'Target Rank',
      sublabel: 'FM Provider in UAE',
    },
    {
      icon: TrendingUp,
      value: '2026',
      label: 'Goal Year',
      sublabel: 'Strategic Milestone',
    },
    {
      icon: Users,
      value: '3',
      label: 'Sectors Served',
      sublabel: 'Commercial · Industrial · Residential',
    },
  ]

  return (
    <section id="vision" className="relative bg-slate-ink overflow-hidden">
      {/* Subtle geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div ref={sectionRef} className="relative mx-auto max-w-[90rem] px-6 py-16 lg:py-20">
        {/* Title */}
        <div className="fade-up text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-base font-semibold tracking-[0.22em] uppercase text-amber-brand mb-4">
            <span className="w-8 h-px bg-amber-brand/60" />
            Our Vision
            <span className="w-8 h-px bg-amber-brand/60" />
          </span>
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-[2.25rem] tracking-tight leading-snug max-w-2xl mx-auto">
            Targeting <span className="text-amber-brand">#1</span> Facility Management Provider Status in the UAE
            by <span className="text-amber-brand">2026</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="fade-up text-center group relative">
              {/* Amber divider between stats (desktop only) */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-amber-brand/20 hidden sm:block" />
              )}
              <div className="inline-flex items-center justify-center w-12 h-12 border border-white/10 mb-4 group-hover:border-amber-brand/40 transition-colors">
                <stat.icon size={22} className="text-amber-brand" strokeWidth={1.5} />
              </div>
              <div className="text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-white/80 tracking-wide mt-1">
                {stat.label}
              </div>
              <div className="text-base text-white/40 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom amber line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-amber-brand to-transparent" />
    </section>
  )
}
