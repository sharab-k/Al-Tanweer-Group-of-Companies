'use client'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'
import QuoteForm from './QuoteForm'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CompanyPageLayout({
  tag,
  title,
  description,
  coverImage,
  primaryCtaLabel,
  primaryCtaLink,
  secondaryCtaLabel,
  secondaryCtaLink,
  children
}) {
  const heroRef = useScrollReveal()

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-amber-brand/20 selection:text-emerald-950">
      <Header />
      <main className="flex-grow">
        {/* Reusing hero styles */}
        <section ref={heroRef} className="relative min-h-[75vh] flex items-center bg-slate-wash overflow-hidden">
            {/* Background Image with elegant fade */}
            <div className="absolute inset-0 z-0">
              <img
                src={coverImage}
                alt="Company Cover"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-ink/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-ink via-slate-ink/50 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-[90rem] px-6 py-32 lg:py-0 w-full">
              <div className="fade-up flex items-center gap-3 mb-8">
                <span className="accent-line bg-amber-brand h-[2px] w-12 block" />
                <span className="text-base font-semibold tracking-[0.2em] uppercase text-amber-brand">
                  {tag}
                </span>
              </div>

              <h1 className="fade-up font-display font-extrabold text-white text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] leading-[1.08] tracking-tight drop-shadow-2xl max-w-4xl">
                {title}
              </h1>

              <p className="fade-up mt-7 text-white/90 text-[1.0625rem] sm:text-lg leading-relaxed max-w-2xl font-medium drop-shadow-md">
                {description}
              </p>

              <div className="fade-up mt-10 flex flex-wrap gap-4">
                {primaryCtaLabel && (
                  <a href={primaryCtaLink} className="btn-primary inline-flex items-center gap-2">
                    {primaryCtaLabel} <ArrowRight size={16} strokeWidth={2.5} />
                  </a>
                )}
                {secondaryCtaLabel && (
                  <a href={secondaryCtaLink} className="btn-secondary inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-ink hover:border-white">
                    {secondaryCtaLabel} <ChevronDown size={16} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </div>
        </section>

        {children}

        {/* Global Quote / Contact Form shared by all companies */}
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
