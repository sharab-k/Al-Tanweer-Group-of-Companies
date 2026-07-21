import CompanyPageLayout from '../../components/CompanyPageLayout'
import { IMAGES } from '../../constants/images'
import { Hammer, HardHat, Ruler, Construction } from 'lucide-react'

export const metadata = {
  title: 'Technical Services | Al-Tanwir Group',
  description: 'Practical technical, construction and property-improvement support backed by experienced site teams.',
}

export default function TechnicalPage() {
  const services = [
    { title: 'Swimming Pools', desc: 'Custom pool construction, structural work, waterproofing, and associated site preparation.' },
    { title: 'Building Works', desc: 'Precision masonry, civil work, structural repair, and large-scale property-improvement assignments.' },
    { title: 'Outdoor Development', desc: 'Ground preparation, structural hardscaping, and comprehensive landscape-enabling works.' },
    { title: 'Fit-Out Support', desc: 'Coordinated execution for selected premium interior finishes and complex technical requirements.' },
    { title: 'Site Teams', desc: 'Highly supervised manpower and practical technical support for defined scopes and timelines.' },
    { title: 'Maintenance Support', desc: 'Corrective, preventive, and improvement work for existing commercial and residential properties.' },
  ]

  const methodologies = [
    { icon: Ruler, title: 'Precision Planning', desc: 'Rigorous site assessment and blueprint validation before any mobilization.' },
    { icon: HardHat, title: 'Supervised Execution', desc: 'Every site is managed by experienced foremen ensuring strict adherence to specs.' },
    { icon: Construction, title: 'Safety Compliance', desc: 'Zero-compromise approach to site safety, PPE requirements, and municipal regulations.' },
  ]

  return (
    <CompanyPageLayout
      tag="Technical Services"
      title="Built with skill. Delivered with care."
      description="Practical technical, construction and property-improvement support backed by experienced site teams."
      coverImage={IMAGES.technicalCover}
      primaryCtaLabel="Discuss a Project"
      primaryCtaLink="#contact"
    >
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-emerald-brand font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Capabilities</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-ink tracking-tight mb-6">Support across the project cycle</h2>
            <p className="text-xl text-slate-muted leading-relaxed font-medium">Flexible site execution for residential and commercial requirements, delivering structural integrity and premium finishes.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-slate-wash border border-slate-border group hover:border-emerald-brand/30 transition-all hover:bg-white hover:shadow-sm">
                <div className="w-12 h-12 bg-emerald-brand/10 flex items-center justify-center mb-6">
                  <Hammer className="text-emerald-brand" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-ink mb-3">{s.title}</h3>
                <p className="text-slate-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-wash border-y border-slate-border">
        <div className="mx-auto max-w-[90rem] px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-ink tracking-tight mb-6">Our Methodology</h2>
              <p className="text-lg text-slate-muted leading-relaxed mb-10">
                Technical excellence requires more than just skilled labor. It demands a rigorous framework of planning, supervision, and compliance. We execute every project with a relentless focus on structural integrity and client transparency.
              </p>
              <div className="space-y-8">
                {methodologies.map((method, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-slate-ink flex flex-shrink-0 items-center justify-center text-white shadow-md">
                      <method.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-ink mb-1.5">{method.title}</h4>
                      <p className="text-slate-muted">{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img src={IMAGES.technicalCover} alt="Site supervision" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-ink/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>
    </CompanyPageLayout>
  )
}
