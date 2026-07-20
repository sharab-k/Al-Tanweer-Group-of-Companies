'use client'
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Award,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IMAGES } from '../constants/images'

export default function Hero() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden pt-[88px] lg:pt-[120px]"
    >
      {/* ── Cinematic Background Image ── */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Abu Dhabi skyline at dusk"
          className="img-cover"
        />
        {/* Base darkening for the whole image */}
        <div className="absolute inset-0 bg-slate-ink/20" />
        {/* Strong dark gradient overlay on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-ink via-slate-ink/80 to-transparent w-full md:w-4/5" />
        {/* Bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-ink/80 via-transparent to-slate-ink/20" />
      </div>

      {/* ── Subtle grid texture over image ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 py-12 lg:py-8 w-full">
        <div className="max-w-2xl">
          {/* Overline badge */}
          <div className="fade-up flex items-center gap-3 mb-8">
            <span className="accent-line" />
            <span className="text-base font-semibold tracking-[0.2em] uppercase text-amber-brand">
              Integrated Facility Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up font-display font-extrabold text-white text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] leading-[1.08] tracking-tight drop-shadow-2xl">
            Managing Properties,
            <br />
            <span className="relative inline-block mt-1">
              Maximizing Returns
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-amber-brand/90 drop-shadow-lg" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="fade-up mt-7 text-white/90 text-[1.0625rem] sm:text-lg leading-relaxed max-w-xl font-medium drop-shadow-md">
            Leading provider of sustainable, integrated facilities management solutions across
            <span className="font-semibold text-white"> Commercial</span>,
            <span className="font-semibold text-white"> Industrial</span>, and
            <span className="font-semibold text-white"> Residential</span> sectors in the UAE.
          </p>

          {/* CTAs */}
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Request Facility Audit
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Our Services
              <ChevronDown size={16} strokeWidth={2.5} />
            </a>
          </div>

          {/* Trust badges */}
          <div className="fade-up mt-14 flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2.5 px-4 py-3 bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
              <Shield size={18} className="text-emerald-brand" strokeWidth={2} />
              <div className="leading-none">
                <span className="block text-base font-semibold tracking-[0.1em] uppercase text-white">
                  ISO 9001 / 14001 / 45001
                </span>
                <span className="block text-[0.65rem] text-white/50 mt-0.5">
                  Certified Management Systems
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm">
              <Award size={18} className="text-amber-brand" strokeWidth={2} />
              <div className="leading-none">
                <span className="block text-base font-semibold tracking-[0.1em] uppercase text-white">
                  ADPHC Licensed
                </span>
                <span className="block text-[0.65rem] text-white/50 mt-0.5">
                  Abu Dhabi Public Health Centre
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Amber accent line at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-brand to-transparent z-10" />
    </section>
  )
}
