'use client'
import { useState } from 'react'
import {
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
  Factory,
  Home,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../constants/images'

const serviceOptions = [
  'Pest Control',
  'Building Repairs',
  'HVAC Services',
  'Deep Cleaning',
  'Landscaping',
  'Painting & Coatings',
  'Integrated FM Package',
]

const sectorOptions = [
  { value: 'commercial', label: 'Commercial', icon: Building2 },
  { value: 'industrial', label: 'Industrial', icon: Factory },
  { value: 'residential', label: 'Residential', icon: Home },
]

export default function QuoteForm() {
  const sectionRef = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [sector, setSector] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-surface-warm relative">
      <div ref={sectionRef} className="relative mx-auto max-w-[90rem] px-6">
        {/* Section header — centered */}
        <div className="fade-up text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 justify-center mb-4">
            <span className="w-8 h-px bg-amber-brand" />
            <span className="text-base font-semibold tracking-[0.2em] uppercase text-emerald-brand">
              Get Started
            </span>
            <span className="w-8 h-px bg-amber-brand" />
          </span>
          <h2 className="font-display font-bold text-slate-ink text-[1.875rem] sm:text-[2.25rem] tracking-tight leading-snug">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-slate-muted text-base leading-relaxed">
            Tell us about your facility needs. Our team will prepare a customized proposal within 24 business hours.
          </p>
        </div>

        {/* ── Split Layout ── */}
        <div className="fade-up">
          <div className="bg-white border border-slate-border shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* ── Left: Lifestyle Image with Contact Overlay ── */}
              <div className="relative lg:col-span-2 min-h-[300px] lg:min-h-0">
                <img
                  src={IMAGES.contact}
                  alt="Facilities manager reviewing operations on-site"
                  className="img-cover absolute inset-0"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-ink/90 via-slate-ink/40 to-slate-ink/20" />

                {/* Overlaid contact info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg tracking-tight mb-1">
                        Al-Tanwir FM
                      </h3>
                      <p className="text-base text-white/60">
                        Your trusted FM partner in the UAE
                      </p>
                    </div>

                    <div className="w-10 h-px bg-amber-brand" />

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone size={14} className="text-amber-brand flex-shrink-0" />
                        <div className="text-base text-white/80">
                          <a href="tel:+971561277407" className="hover:text-amber-brand transition-colors">056 1277407</a>
                          <span className="text-white/30 mx-1.5">·</span>
                          <a href="tel:+971553173594" className="hover:text-amber-brand transition-colors">055 3173594</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={14} className="text-amber-brand flex-shrink-0" />
                        <a href="mailto:info@al-tanwir.com" className="text-base text-white/80 hover:text-amber-brand transition-colors">
                          info@al-tanwir.com
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={14} className="text-amber-brand flex-shrink-0 mt-0.5" />
                        <p className="text-base text-white/60 leading-relaxed">
                          Office No. 16, Casa Bionco Bldg,
                          <br />Musaffah 14, Abu Dhabi, UAE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right: Interactive Form ── */}
              <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitted && (
                    <div className="flex items-center gap-3 p-4 bg-emerald-light border border-emerald-brand/20 mb-2">
                      <CheckCircle2 size={20} className="text-emerald-brand flex-shrink-0" />
                      <p className="text-base text-emerald-deep font-medium">
                        Thank you! Your quote request has been received. We'll be in touch within 24 hours.
                      </p>
                    </div>
                  )}

                  {/* Name & Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-subtle" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="form-input !pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-subtle" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="form-input !pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Service row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-subtle" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+971 XX XXX XXXX"
                          className="form-input !pl-10"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-2">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="form-input appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.75rem_center]"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sector selection */}
                  <div>
                    <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-3">
                      Sector
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {sectorOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setSector(opt.value)}
                          className={`flex items-center justify-center gap-2 py-3 px-4 border text-base font-medium transition-all ${
                            sector === opt.value
                              ? 'border-emerald-brand bg-emerald-brand/[0.05] text-emerald-brand'
                              : 'border-slate-border text-slate-muted hover:border-slate-body hover:text-slate-body'
                          }`}
                        >
                          <opt.icon size={16} strokeWidth={1.5} />
                          <span className="hidden sm:inline">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-2">
                      Location / Area
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-subtle" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Musaffah, Abu Dhabi"
                        className="form-input pl-10"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-base font-semibold tracking-[0.1em] uppercase text-slate-muted mb-2">
                      Project Details
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3 top-3.5 text-slate-subtle" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your facility management needs..."
                        className="form-input pl-10 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    <Send size={16} strokeWidth={2.5} />
                    Submit Quote Request
                  </button>

                  <p className="text-base text-slate-subtle text-center">
                    By submitting, you agree to be contacted regarding your inquiry. No spam — guaranteed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
