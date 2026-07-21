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
              United by trust and enterprise
            </span>
          </div>

          {/* Main heading */}
          <h1 className="fade-up font-display font-extrabold text-white text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] leading-[1.08] tracking-tight drop-shadow-2xl">
            Building value across
            <br />
            <span className="relative inline-block mt-1">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-brand to-emerald-300">
                diverse industries
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-amber-brand/90 drop-shadow-lg" />
            </span>
          </h1>

          {/* Description */}
          <p className="fade-up mt-7 text-white/90 text-[1.0625rem] sm:text-lg leading-relaxed max-w-xl font-medium drop-shadow-md">
            Al‑Tanwir Group brings together specialist businesses in facilities management, gemstones, technical services, real estate and general trading across the UAE.
          </p>

          {/* CTA Buttons */}
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <a href="#companies" className="btn-primary">
              Explore Our Companies <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact the Group <ChevronDown size={16} />
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
