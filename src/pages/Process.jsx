import { motion } from 'motion/react'
import { 
  Compass, 
  FileSpreadsheet, 
  Code, 
  BarChart3, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { PROCESS_STEPS, PROCESS_PAGE_DATA } from '../data/processData'

const iconMap = {
  Compass,
  FileSpreadsheet,
  Code,
  BarChart3
}

export default function Process({ onOpenQuote }) {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#080B12] relative overflow-hidden border-t border-b border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#6595FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{PROCESS_PAGE_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F4] tracking-tight leading-tight mb-6">
            {PROCESS_PAGE_DATA.titleMain}{' '}
            <span className="bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#6595FF] bg-clip-text text-transparent">
              {PROCESS_PAGE_DATA.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A8AFBD] leading-relaxed">
            {PROCESS_PAGE_DATA.subtitle}
          </p>
        </div>

        {/* Process Steps (Connected Timeline Layout) */}
        <div className="relative">
          {/* Desktop Connecting Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D9B66F]/30 to-transparent -translate-y-12 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.iconName] || Compass

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-2xl p-6 bg-[#101522] border border-white/[0.08] hover:border-[#D9B66F]/40 hover:bg-[#141B2D] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#080B12] border border-white/10 group-hover:border-[#D9B66F]/50 group-hover:bg-[#40101D]/40 text-[#D9B66F] flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-2xl font-black font-mono text-[#D9B66F]/40 group-hover:text-[#D9B66F] transition-colors">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#D9B66F] transition-colors mb-1">
                      {step.title}
                    </h3>

                    <h4 className="text-xs font-semibold text-[#6595FF] mb-3 uppercase tracking-wide">
                      {step.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A8AFBD] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Key Deliverables Pills */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9B66F]/80 block mb-1">
                      Key Deliverables
                    </span>
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#F8F7F4]/70">
                        <Check className="w-3 h-3 text-[#D9B66F] shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D9B66F] to-[#F0D69A] text-[#080B12] shadow-xl hover:shadow-[#D9B66F]/30 transition-all cursor-pointer"
          >
            <span>{PROCESS_PAGE_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  )
}
