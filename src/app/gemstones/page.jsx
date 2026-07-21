import CompanyPageLayout from '../../components/CompanyPageLayout'
import { IMAGES } from '../../constants/images'
import { Gem, FileText, Lock, Globe2 } from 'lucide-react'

export const metadata = {
  title: 'Diamonds & Gemstones | Al-Tanwir Group',
  description: 'Selected polished gemstones, rough material, diamonds and mineral specimens presented for qualified buyers and commercial enquiries.',
}

export default function GemstonesPage() {
  const categories = [
    { title: 'Polished Gemstones', desc: 'Expertly cut and polished natural colored gemstones, meticulously graded.' },
    { title: 'Rough Material', desc: 'Unprocessed natural minerals directly from source, available for wholesale.' },
    { title: 'Selected Faceted Stones', desc: 'Premium clarity stones curated exclusively for investment or high-end bespoke jewelry.' },
    { title: 'Responsible Presentation', desc: 'Full transparency on origin, weight, and strict adherence to ethical sourcing.' },
  ]

  const assurances = [
    { icon: FileText, title: 'Independent Certification', desc: 'All premium stones are accompanied by independent laboratory documentation verifying authenticity and characteristics.' },
    { icon: Lock, title: 'Secure Transactions', desc: 'Discreet, secure, and compliant transaction frameworks established for all qualified buyers and institutional clients.' },
    { icon: Globe2, title: 'Global Sourcing', desc: 'Direct relationships with ethical mining operations worldwide, ensuring a pristine chain of custody.' },
  ]

  return (
    <CompanyPageLayout
      tag="Diamonds & Gemstones"
      title="Natural beauty. Serious opportunity."
      description="Selected polished gemstones, rough material, diamonds and mineral specimens presented for qualified buyers and commercial enquiries."
      coverImage={IMAGES.gemstonesCover}
      primaryCtaLabel="Make an Enquiry"
      primaryCtaLink="#contact"
    >
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="max-w-4xl mb-20 text-center mx-auto">
            <span className="text-amber-brand font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">The Collection</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-ink tracking-tight mb-6">From rough to remarkable</h2>
            <p className="text-xl text-slate-muted leading-relaxed font-medium">Availability, origin, weight and laboratory documentation are shared individually for each offered item, ensuring complete transparency for our clientele.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((c, i) => (
              <div key={i} className="p-8 bg-slate-wash border border-slate-border group hover:border-amber-brand/40 hover:bg-white transition-all shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-amber-brand/10 flex items-center justify-center mb-6">
                  <Gem className="text-amber-brand" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-ink mb-3">{c.title}</h3>
                <p className="text-slate-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Mode Banner - Assurance */}
      <section className="py-24 bg-slate-ink text-white relative border-y-4 border-amber-brand">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="mx-auto max-w-[90rem] px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-amber-brand">Assurance & Documentation</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Serious buyers may request available reports, videos, measurements and transaction terms for a specific stone. We prioritize absolute certainty before any commercial engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {assurances.map((assure, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
                <assure.icon className="text-amber-brand w-10 h-10 mb-5" />
                <h3 className="text-xl font-display font-bold mb-3">{assure.title}</h3>
                <p className="text-white/60 text-[0.9375rem] leading-relaxed">{assure.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">
              Images are representative of available or previously presented material. No gemstone identity, treatment, origin, grade or value should be inferred from an image alone. Specifications are confirmed only through the item's stated documentation and independent verification.
            </p>
          </div>
        </div>
      </section>
    </CompanyPageLayout>
  )
}
