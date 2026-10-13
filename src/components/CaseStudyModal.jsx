import { motion } from 'motion/react'
import { X, Check, ArrowRight, Layers } from 'lucide-react'

export default function CaseStudyModal({ project, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#101522] border border-white/[0.15] rounded-3xl overflow-hidden shadow-2xl z-10 my-8 text-left"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/60 hover:bg-black/90 text-white transition-colors"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#080B12]">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101522] via-[#101522]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D9B66F] bg-[#080B12]/80 px-3 py-1 rounded-md border border-white/10">
              {project.category}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#A8AFBD] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Project Architecture & Scope */}
          <div className="p-5 rounded-2xl bg-[#080B12] border border-white/[0.08]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#6595FF]" />
              <span>Project Deliverables & Architecture</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#F8F7F4]/90">
                  <Check className="w-3.5 h-3.5 text-[#D9B66F] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose()
                if (onOpenQuote) onOpenQuote()
              }}
              className="w-full sm:flex-1 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D9B66F] to-[#F0D69A] text-[#080B12] hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Request Solution For Your Brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-semibold text-[#A8AFBD] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
