import CompanyPageLayout from '../../components/CompanyPageLayout'
import { IMAGES } from '../../constants/images'
import { Globe, PlaneTakeoff, ShieldAlert, BadgeCheck } from 'lucide-react'

export const metadata = {
  title: 'General Trading | Al-Tanwir Group',
  description: 'Responsive sourcing and commercial coordination for selected products, bulk requirements and market-led opportunities.',
}

export default function GeneralTradingPage() {
  const categories = [
    { title: 'Product Sourcing', desc: 'Requirement-based searches for selected commercial goods and raw materials.' },
    { title: 'Bulk Enquiries', desc: 'Initial coordination for volume purchase and large-scale supply opportunities.' },
    { title: 'Market Connections', desc: 'Strategic introductions and opportunity support where a suitable mandate exists.' },
  ]

  const logistics = [
    { icon: PlaneTakeoff, title: 'Global Network', desc: 'Leveraging an extensive international supplier base to fulfill precise commercial requirements.' },
    { icon: ShieldAlert, title: 'Risk Mitigation', desc: 'Strict due diligence on all counterparties to ensure secure and reliable commercial transactions.' },
    { icon: BadgeCheck, title: 'Quality Assurance', desc: 'Verifying product specifications and securing necessary compliance documentation prior to shipment.' },
  ]

  return (
    <CompanyPageLayout
      tag="General Trading"
      title="Connecting requirements with opportunity"
      description="Responsive sourcing and commercial coordination for selected products, bulk requirements and market-led opportunities."
      coverImage={IMAGES.tradingCover}
      primaryCtaLabel="Send a Requirement"
      primaryCtaLink="#contact"
    >
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <span className="text-amber-brand font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Commercial Mandates</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-ink tracking-tight mb-6">Clear commercial enquiries</h2>
            <p className="text-xl text-slate-muted leading-relaxed font-medium mb-6">
              For a faster response, share the product, specification, quantity, destination, delivery timeline and preferred transaction terms.
            </p>
            <p className="inline-block text-xs font-semibold text-slate-ink/60 bg-slate-wash px-4 py-2 uppercase tracking-widest border border-slate-border">
              Specific product categories will be added after portfolio confirmation
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((c, i) => (
              <div key={i} className="p-8 bg-slate-wash border border-slate-border group hover:border-amber-brand/40 hover:bg-white transition-all shadow-sm text-center">
                <div className="w-14 h-14 bg-amber-brand/10 flex items-center justify-center mx-auto mb-6 rounded-full">
                  <Globe className="text-amber-brand" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-ink mb-3">{c.title}</h3>
                <p className="text-slate-muted text-[0.9375rem] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Mode Banner - Logistics & Assurance */}
      <section className="py-24 bg-slate-ink text-white relative border-y border-white/10">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">Sourcing & Logistics Excellence</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Successful trading requires more than just capital; it demands an agile network, strict quality control, and rigorous compliance. We bridge the gap between global supply and regional demand.
              </p>
              <div className="space-y-8 border-t border-white/10 pt-8">
                {logistics.map((log, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <log.icon className="w-8 h-8 text-amber-brand flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold mb-1.5">{log.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{log.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative min-h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img src={IMAGES.tradingCover} alt="Global Logistics" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-ink via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </CompanyPageLayout>
  )
}
