import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function CaseStudyCard({ project, index, onSelectProject, onOpenQuote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl overflow-hidden bg-[#101522] border border-white/[0.08] hover:border-[#D9B66F]/40 transition-all duration-500 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Visual Preview Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#080B12]">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101522] via-[#101522]/30 to-transparent" />

          {/* Category & Metric badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#080B12]/80 backdrop-blur-md text-[#D9B66F] border border-white/10">
              {project.tag}
            </span>
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#6595FF]/20 text-[#6595FF] border border-[#6595FF]/30 backdrop-blur-md">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white group-hover:text-[#D9B66F] transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A8AFBD] leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Scope pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.scope.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-[#A8AFBD] border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9B66F] group-hover:text-white transition-colors focus:outline-none cursor-pointer"
        >
          <span>View Case Overview</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          onClick={onOpenQuote}
          className="text-xs text-[#A8AFBD] hover:text-[#6595FF] transition-colors cursor-pointer"
        >
          Enquire Similar
        </button>
      </div>
    </motion.div>
  )
}
