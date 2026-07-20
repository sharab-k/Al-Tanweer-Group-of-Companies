'use client'
import { useState } from 'react'
import {
  Bug,
  Wrench,
  Wind,
  Sparkles,
  TreePine,
  Paintbrush,
  Check,
  ArrowRight,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../constants/images'

const serviceData = [
  {
    id: 'pest',
    label: 'Pest Control',
    icon: Bug,
    image: IMAGES.pestControl,
    tagline: 'Comprehensive Integrated Pest Management',
    description: 'Industry-leading pest management solutions using IPM methodology, ensuring safe and effective control for commercial and residential properties.',
    items: [
      'Integrated Pest Management (IPM)',
      'Bed Bug Treatment & Elimination',
      'Mosquito Control Programs',
      'Anti-Termite Proofing & Barriers',
      'Cargo & Warehouse Fumigation',
      'Rodent Control & Monitoring',
    ],
  },
  {
    id: 'repairs',
    label: 'Building Repairs',
    icon: Wrench,
    image: IMAGES.repairs,
    tagline: 'Full-Spectrum Building Maintenance',
    description: 'End-to-end building repair services from minor fixes to major renovations, keeping your facilities in optimal condition year-round.',
    items: [
      'Plumbing Systems & Fixtures',
      'Electrical Works & Wiring',
      'Woodwork & Carpentry',
      'Interior & Exterior Painting',
      'General Maintenance & Upkeep',
    ],
  },
  {
    id: 'hvac',
    label: 'HVAC',
    icon: Wind,
    image: IMAGES.hvac,
    tagline: 'Climate Control & Air Quality',
    description: 'Professional HVAC services ensuring optimal indoor air quality and energy-efficient climate control systems for all facility types.',
    items: [
      'AC Repair & Troubleshooting',
      'System Overhauling & Upgrades',
      'Duct Cleaning & Sanitization',
      'New Installation & Commissioning',
      'Preventive Maintenance Contracts',
    ],
  },
  {
    id: 'cleaning',
    label: 'Deep Cleaning',
    icon: Sparkles,
    image: IMAGES.cleaning,
    tagline: 'Professional Grade Cleaning Solutions',
    description: 'Specialized deep cleaning services using industrial-grade equipment and eco-friendly products for spotless, hygienic environments.',
    items: [
      'Floor & Tile Deep Cleaning',
      'Carpet & Upholstery Treatment',
      'Mattress Cleaning & Sanitization',
      'Blinds & Window Treatment',
      'Solar Panel Cleaning',
      'Water Tank Chemical Treatment',
    ],
  },
  {
    id: 'landscape',
    label: 'Landscaping',
    icon: TreePine,
    image: IMAGES.landscaping,
    tagline: 'Green Space Design & Maintenance',
    description: 'Transform and maintain outdoor spaces with professional landscaping services tailored to the UAE climate and environment.',
    items: [
      'Lawn Care & Maintenance',
      'Garden Design & Installation',
      'Plant Protection & Treatments',
      'Spray Programs & Fertilization',
    ],
  },
  {
    id: 'painting',
    label: 'Painting',
    icon: Paintbrush,
    image: IMAGES.painting,
    tagline: 'Surface Finishing & Coatings',
    description: 'Expert painting and surface treatment services for commercial, industrial, and residential properties with premium-grade materials.',
    items: [
      'Interior Painting & Finishes',
      'Exterior Coating & Protection',
      'High-Pressure Washing',
      'Commercial Logos & Murals',
    ],
  },
]

export default function ServiceMatrix() {
  const [activeTab, setActiveTab] = useState('pest')
  const sectionRef = useScrollReveal()

  const activeService = serviceData.find((s) => s.id === activeTab)

  return (
    <section id="services" className="section-padding bg-emerald-light relative">
      <div ref={sectionRef} className="relative mx-auto max-w-[90rem] px-6">
        {/* Section header */}
        <div className="fade-up max-w-xl mb-12 lg:mb-16">
          <span className="flex items-center gap-3 mb-4">
            <span className="accent-line" />
            <span className="text-base font-semibold tracking-[0.2em] uppercase text-emerald-brand">
              What We Do
            </span>
          </span>
          <h2 className="font-display font-bold text-slate-ink text-[1.875rem] sm:text-[2.25rem] tracking-tight leading-snug">
            Comprehensive Service
            <br className="hidden sm:block" />
            Portfolio
          </h2>
          <p className="mt-4 text-slate-muted text-base leading-relaxed">
            Six specialized divisions delivering integrated facility management solutions — each backed by certified expertise and ISO-compliant processes.
          </p>
        </div>

        {/* Tab row */}
        <div className="fade-up flex flex-wrap gap-2 mb-10">
          {serviceData.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`tab-btn flex items-center gap-2 ${activeTab === service.id ? 'active' : ''}`}
              >
                <Icon size={16} strokeWidth={activeTab === service.id ? 2.5 : 1.5} />
                <span className="hidden sm:inline">{service.label}</span>
              </button>
            )
          })}
        </div>

        {/* ── Active Service Detail — 50/50 Split ── */}
        {activeService && (
          <div className="fade-up visible" key={activeService.id}>
            <div className="bg-white border border-slate-border shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left — Service info & checklist */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  {/* Top: header + description */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-emerald-brand/[0.08] flex items-center justify-center">
                        <activeService.icon size={22} className="text-emerald-brand" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-slate-ink text-xl tracking-tight">
                          {activeService.label}
                        </h3>
                        <p className="text-base text-amber-brand font-medium tracking-wide">
                          {activeService.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-body text-base leading-relaxed mb-6">
                      {activeService.description}
                    </p>

                    {/* Checklist */}
                    <div className="mb-8">
                      <h4 className="text-base font-semibold tracking-[0.18em] uppercase text-slate-muted mb-4">
                        Service Scope
                      </h4>
                      <ul className="space-y-2.5">
                        {activeService.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <span className="mt-0.5 w-5 h-5 flex-shrink-0 bg-emerald-brand/[0.08] flex items-center justify-center group-hover:bg-emerald-brand transition-colors duration-200">
                              <Check size={12} className="text-emerald-brand group-hover:text-white transition-colors duration-200" strokeWidth={3} />
                            </span>
                            <span className="text-base text-slate-body group-hover:text-slate-ink transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom: CTA */}
                  <a href="#contact" className="btn-primary inline-flex self-start">
                    Request This Service
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </a>
                </div>

                {/* Right — Full-bleed service photograph */}
                <div className="relative min-h-[320px] lg:min-h-0 order-first lg:order-last bg-slate-wash">
                  <img
                    src={activeService.image}
                    alt={activeService.label}
                    className="w-full h-full object-contain absolute inset-0"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-ink/20 via-transparent to-transparent" />
                  {/* Service badge on image */}
                  <div className="absolute top-5 right-5 px-3 py-1.5 bg-emerald-brand/90 backdrop-blur-sm">
                    <span className="text-base font-semibold tracking-[0.12em] uppercase text-white">
                      {activeService.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
