import CompanyPageLayout from '../../components/CompanyPageLayout'
import { IMAGES } from '../../constants/images'
import { Home, Key, MapPin, Building, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Real Estate | Al-Tanwir Group',
  description: 'Client-focused support for selected residential, commercial and investment property enquiries in the UAE.',
}

export default function RealEstatePage() {
  const categories = [
    { title: 'Buyer Requirements', desc: 'Requirement-led property searches and opportunity matching.' },
    { title: 'Seller Enquiries', desc: 'Initial discussions for owners and authorised representatives.' },
    { title: 'Commercial Opportunities', desc: 'Selected business, land and commercial property enquiries.' },
  ]

  const metrics = [
    { value: 'Off-Plan', label: 'Investment Opportunities', icon: TrendingUp },
    { value: 'Prime', label: 'Location Sourcing', icon: MapPin },
    { value: 'Exclusive', label: 'Commercial Mandates', icon: Key },
    { value: 'Turnkey', label: 'Property Handover', icon: Building },
  ]

  return (
    <CompanyPageLayout
      tag="Real Estate"
      title="Property decisions with a practical perspective"
      description="Client-focused support for selected residential, commercial and investment property enquiries in the UAE."
      coverImage={IMAGES.realEstateCover}
      primaryCtaLabel="Register an Enquiry"
      primaryCtaLink="#contact"
    >
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-amber-brand font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Market Intelligence</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-ink tracking-tight mb-6">How we can assist</h2>
              <p className="text-xl text-slate-muted leading-relaxed font-medium mb-6">
                Tell us whether you are buying, selling, leasing or exploring an investment opportunity. Our team will respond according to the available mandate and current market conditions.
              </p>
              <p className="text-sm text-slate-muted/80 p-4 bg-slate-wash border-l-2 border-amber-brand">
                Note: Property listings and high-resolution photographs will be added as verified, exclusive mandates become available.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {categories.map((c, i) => (
                <div key={i} className="p-6 bg-slate-wash border border-slate-border group hover:border-amber-brand/40 hover:bg-white transition-all shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 bg-amber-brand/10 flex items-center justify-center">
                    <Home className="text-amber-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-slate-ink mb-1">{c.title}</h3>
                    <p className="text-slate-muted text-[0.9375rem] leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Banner - Asset Focus */}
      <section className="py-24 bg-slate-ink text-white relative border-y-4 border-amber-brand">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">Navigating the UAE Property Market</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              From luxury residential villas to high-yield commercial assets, we leverage group-wide intelligence to match serious capital with legitimate opportunities.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {metrics.map((m, i) => (
              <div key={i} className="text-center">
                <m.icon className="w-8 h-8 text-amber-brand mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-display font-extrabold text-white mb-2">{m.value}</div>
                <div className="text-sm text-white/60 tracking-wider uppercase">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CompanyPageLayout>
  )
}
