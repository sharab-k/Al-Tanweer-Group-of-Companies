import CompanyPageLayout from '../../components/CompanyPageLayout'
import { IMAGES } from '../../constants/images'
import { CheckCircle2, ShieldCheck, Factory, Building2, Home } from 'lucide-react'

export const metadata = {
  title: 'Facilities Management | Al-Tanwir Group',
  description: 'Coordinated facilities solutions for residential, commercial and industrial properties across the UAE.',
}

export default function FacilitiesPage() {
  const services = [
    { title: 'HVAC & MEP', desc: 'Installation, preventive maintenance and responsive repair.' },
    { title: 'Professional Cleaning', desc: 'Deep cleaning, janitorial and specialist commercial cleaning.' },
    { title: 'Building Maintenance', desc: 'Electrical, plumbing, painting and general repairs.' },
    { title: 'Pest Control & Fumigation', desc: 'Safe pest-management and cargo-fumigation solutions.' },
    { title: 'Landscaping', desc: 'Garden, lawn and outdoor-space maintenance.' },
    { title: 'Water Tank & Duct Cleaning', desc: 'Hygiene-focused cleaning for healthier building systems.' },
  ]

  const industries = [
    { icon: Building2, title: 'Commercial', desc: 'Corporate offices, retail spaces, and business parks.' },
    { icon: Factory, title: 'Industrial', desc: 'Warehousing, logistics centers, and manufacturing plants.' },
    { icon: Home, title: 'Residential', desc: 'Premium villas, luxury apartments, and residential communities.' },
  ]

  return (
    <CompanyPageLayout
      tag="Facilities Management"
      title="Your property, managed with care"
      description="Coordinated facilities solutions for residential, commercial and industrial properties across the UAE."
      coverImage={IMAGES.facilitiesCover}
      primaryCtaLabel="Request a Quote"
      primaryCtaLink="#contact"
      secondaryCtaLabel="Call Us"
      secondaryCtaLink="tel:00971553173594"
    >
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="sticky top-32">
              <span className="text-emerald-brand font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Core Capabilities</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-ink tracking-tight mb-6">Complete facilities solutions</h2>
              <p className="text-xl text-slate-muted leading-relaxed font-medium">Flexible support from routine property care to specialist technical and hygiene services, scaled to your exact operational requirements.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="p-8 bg-slate-wash border border-slate-border hover:border-emerald-brand/30 transition-colors">
                  <div className="w-10 h-10 bg-emerald-brand/10 flex items-center justify-center mb-5">
                    <CheckCircle2 className="text-emerald-brand" size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-ink mb-2">{s.title}</h3>
                  <p className="text-slate-muted text-[0.9375rem] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Banner - Why Choose Us */}
      <section className="py-24 bg-slate-ink text-white relative border-y border-white/10">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ShieldCheck className="text-amber-brand w-16 h-16 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">Uncompromising Quality Standards</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Every Al-Tanwir facility assignment is executed under strict ISO-compliant protocols. We prioritize health, safety, and environmental sustainability, ensuring your assets are protected and your operations run flawlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-16 mt-8">
            {industries.map((ind, i) => (
              <div key={i} className="px-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <ind.icon className="text-emerald-brand w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{ind.title}</h3>
                <p className="text-white/60 text-[0.9375rem] leading-relaxed max-w-xs mx-auto">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CompanyPageLayout>
  )
}
