'use client'
import {
  Shield,
  Leaf,
  HardHat,
  Building2,
  Receipt,
  Users,
  HandshakeIcon,
  Award,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    icon: Shield,
    title: 'ISO 9001:2015',
    category: 'Quality Management',
    description: 'Certified quality management systems ensuring consistent service delivery and continuous improvement processes.',
    accent: 'emerald',
  },
  {
    icon: Leaf,
    title: 'ISO 14001:2015',
    category: 'Environmental Management',
    description: 'Committed to minimizing environmental impact through systematic environmental management and sustainable practices.',
    accent: 'emerald',
  },
  {
    icon: HardHat,
    title: 'ISO 45001:2018',
    category: 'Occupational Health & Safety',
    description: 'Rigorous health and safety management systems protecting our workforce and your premises at every level.',
    accent: 'emerald',
  },
  {
    icon: Building2,
    title: 'ADPHC Licensed',
    category: 'Abu Dhabi Public Health Centre',
    description: 'Fully licensed and regulated by the Abu Dhabi Public Health Centre for pest control and public health services.',
    accent: 'amber',
  },
  {
    icon: Receipt,
    title: 'FTA Registered',
    category: 'Federal Tax Authority',
    description: 'Registered with the UAE Federal Tax Authority, ensuring full compliance with national tax and regulatory frameworks.',
    accent: 'amber',
  },
  {
    icon: Users,
    title: 'IFMA Member',
    category: 'Intl. Facility Management Assoc.',
    description: 'Active member of the world\'s largest facility management association, connected to global best practices.',
    accent: 'emerald',
  },
  {
    icon: HandshakeIcon,
    title: 'NPMA Member',
    category: 'National Pest Management Assoc.',
    description: 'Member of the National Pest Management Association, adhering to the highest standards in pest management.',
    accent: 'amber',
  },
  {
    icon: Award,
    title: 'MEPCA Member',
    category: 'Middle East Pest Control Assoc.',
    description: 'Part of the regional pest control ecosystem, contributing to industry standards and knowledge sharing.',
    accent: 'amber',
  },
]

export default function Accreditations() {
  const sectionRef = useScrollReveal()

  return (
    <section id="accreditations" className="section-padding bg-surface-warm relative">
      <div ref={sectionRef} className="mx-auto max-w-[90rem] px-6">
        {/* Section header */}
        <div className="fade-up text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px bg-amber-brand" />
            <span className="text-base font-semibold tracking-[0.2em] uppercase text-emerald-brand">
              Trust & Compliance
            </span>
            <span className="w-8 h-px bg-amber-brand" />
          </span>
          <h2 className="font-display font-bold text-slate-ink text-[1.875rem] sm:text-[2.25rem] tracking-tight leading-snug">
            Accreditations &
            <br className="hidden sm:block" />
            Certifications
          </h2>
          <p className="mt-4 text-slate-muted text-base leading-relaxed">
            Our operations are governed by internationally recognized standards and regulatory bodies — guaranteeing safety, quality, and environmental responsibility.
          </p>
        </div>

        {/* Cards grid */}
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => {
            const isEmerald = cert.accent === 'emerald'
            return (
              <div key={cert.title} className="fade-up card-elevated p-6 group">
                {/* Top accent bar */}
                <div className={`w-10 h-[3px] mb-5 ${isEmerald ? 'bg-emerald-brand' : 'bg-amber-brand'}`} />

                {/* Icon */}
                <div className={`w-11 h-11 flex items-center justify-center mb-4 ${isEmerald ? 'bg-emerald-brand/[0.07]' : 'bg-amber-brand/[0.08]'}`}>
                  <cert.icon
                    size={20}
                    className={isEmerald ? 'text-emerald-brand' : 'text-amber-brand'}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-slate-ink text-base tracking-tight">
                  {cert.title}
                </h3>
                <p className={`text-base font-semibold tracking-[0.08em] uppercase mt-1 mb-3 ${isEmerald ? 'text-emerald-brand' : 'text-amber-brand'}`}>
                  {cert.category}
                </p>
                <p className="text-base text-slate-muted leading-relaxed">
                  {cert.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
