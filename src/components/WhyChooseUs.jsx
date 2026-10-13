import { motion } from 'motion/react'
import { 
  Sliders, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  MessageSquareQuote, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react'
import { WHY_CHOOSE_US_POINTS, WHY_CHOOSE_US_DATA } from '../data/whyChooseUsData'

const iconMap = {
  Sliders,
  Sparkles,
  Cpu,
  Smartphone,
  MessageSquareQuote,
  CheckCircle2
}

export default function WhyChooseUs({ onOpenQuote }) {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#080B12] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#40101D]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{WHY_CHOOSE_US_DATA.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F4] tracking-tight leading-tight mb-6">
            {WHY_CHOOSE_US_DATA.titleMain}{' '}
            <span className="bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#6595FF] bg-clip-text text-transparent">
              {WHY_CHOOSE_US_DATA.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A8AFBD] leading-relaxed">
            {WHY_CHOOSE_US_DATA.subtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => {
            const Icon = iconMap[point.iconName] || CheckCircle2

            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl p-7 bg-[#101522]/90 border border-white/[0.08] hover:border-[#D9B66F]/40 hover:bg-[#141B2D] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-[#080B12] border border-white/10 group-hover:border-[#D9B66F]/50 group-hover:bg-[#40101D]/40 text-[#D9B66F] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono font-bold text-white/30 group-hover:text-[#D9B66F] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D9B66F] transition-colors mb-3">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A8AFBD] leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-semibold text-[#6595FF] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Standard of Practice</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#101522] hover:bg-[#171D2E] text-white border border-[#D9B66F]/40 hover:border-[#D9B66F] transition-all cursor-pointer"
          >
            <span>{WHY_CHOOSE_US_DATA.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-[#D9B66F]" />
          </button>
        </div>

      </div>
    </section>
  )
}
