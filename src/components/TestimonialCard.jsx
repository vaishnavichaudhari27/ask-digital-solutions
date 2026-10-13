import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-7 bg-[#101522]/90 border border-white/[0.08] hover:border-[#D9B66F]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Link to the original review source */}
        <div className="flex items-center justify-between mb-5">
          <a
            href={testimonial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6595FF] hover:text-white transition-colors"
          >
            <span>{testimonial.verifiedSource}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Review Content */}
        <p className="text-sm sm:text-base text-[#F8F7F4]/90 leading-relaxed mb-6">{testimonial.content}</p>
      </div>

      {/* Reviewer Details */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#40101D] to-[#101522] border border-[#D9B66F]/40 flex items-center justify-center font-bold text-sm text-[#D9B66F]">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white leading-snug">
              {testimonial.name}
            </h4>
            <span className="text-xs text-[#A8AFBD]">{testimonial.verifiedSource}</span>
          </div>
        </div>

      </div>
    </motion.div>
  )
}
