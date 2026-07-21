'use client'
import { Briefcase, ShieldCheck, CheckCircle2, Handshake } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function VisionBanner() {
  const sectionRef = useScrollReveal()

  const values = [
    {
      icon: Briefcase,
      label: 'Practical Expertise',
      description: 'Knowledge shaped by real assignments and market experience.',
    },
    {
      icon: ShieldCheck,
      label: 'Accountability',
      description: 'Clear communication and responsible execution.',
    },
    {
      icon: CheckCircle2,
      label: 'Quality Focus',
      description: 'Careful attention to service and commercial standards.',
    },
    {
      icon: Handshake,
      label: 'Long-Term Value',
      description: 'Relationships built beyond a single transaction.',
    },
  ]

  return (
    <section id="about" className="relative bg-slate-ink overflow-hidden">
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
            About the Group
            <span className="w-8 h-px bg-amber-brand/60" />
          </span>
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl lg:text-[2.25rem] tracking-tight leading-snug max-w-3xl mx-auto">
            One group. <span className="text-amber-brand">Multiple strengths.</span>
          </h2>
          <p className="mt-6 text-white/80 text-base leading-relaxed max-w-2xl mx-auto">
            Al‑Tanwir Group connects sector-specific experience with a common commitment to reliability, transparency and long-term business relationships.
          </p>
        </div>

        {/* Values grid */}
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {values.map((val) => (
            <div key={val.label} className="fade-up text-center group relative">
              <div className="inline-flex items-center justify-center w-14 h-14 border border-white/10 mb-5 group-hover:border-amber-brand/40 transition-colors">
                <val.icon size={26} className="text-amber-brand" strokeWidth={1.5} />
              </div>
              <div className="text-lg font-display font-semibold text-white tracking-wide mb-2">
                {val.label}
              </div>
              <div className="text-[0.9375rem] text-white/60 leading-relaxed max-w-[14rem] mx-auto">
                {val.description}
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
