import { ShieldCheck, ExternalLink } from 'lucide-react'
import TestimonialCard from './TestimonialCard'
import { AUTHENTIC_TESTIMONIALS, TESTIMONIALS_DATA } from '../data/testimonialsData'
import { COMPANY_INFO } from '../data/contactData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#080B12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#40101D]/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{TESTIMONIALS_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F4] tracking-tight leading-tight mb-6">
            {TESTIMONIALS_DATA.titleMain}{' '}
            <span className="bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#6595FF] bg-clip-text text-transparent">
              {TESTIMONIALS_DATA.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A8AFBD] leading-relaxed">
            {TESTIMONIALS_DATA.subtitle}
          </p>
        </div>

        {/* Testimonials Grid using reusable TestimonialCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUTHENTIC_TESTIMONIALS.map((item, index) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
              index={index}
            />
          ))}
        </div>

        {/* Link to all Google Reviews */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101522] hover:bg-[#171D2E] border border-white/10 hover:border-[#D9B66F]/40 text-xs font-semibold text-[#F8F7F4] transition-all"
          >
            <span>{TESTIMONIALS_DATA.allReviewsLinkText}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D9B66F]" />
          </a>
        </div>

      </div>
    </section>
  )
}
