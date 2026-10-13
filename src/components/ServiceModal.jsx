import { motion } from 'motion/react'
import { 
  X, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Search, 
  Target, 
  Share2, 
  Layout, 
  Palette, 
  Video, 
  Zap,
  Sparkles
} from 'lucide-react'

const iconMap = {
  TrendingUp,
  Search,
  Target,
  Share2,
  Layout,
  Palette,
  Video,
  Zap
}

export default function ServiceModal({ service, isOpen, onClose, onOpenQuote }) {
  if (!isOpen || !service) return null

  const Icon = iconMap[service.iconName] || Layout

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
        className="relative w-full max-w-xl bg-[#101522] border border-white/[0.15] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 text-left"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-[#A8AFBD] hover:text-white transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-[#40101D]/70 border border-[#D9B66F]/40 text-[#D9B66F]">
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#D9B66F] bg-white/[0.04] px-2.5 py-1 rounded border border-white/10">
              {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Full Narrative */}
        <div className="space-y-4 mb-6 text-sm text-[#A8AFBD] leading-relaxed">
          <p>{service.fullDesc}</p>
        </div>

        {/* Core Deliverables List */}
        <div className="p-5 rounded-2xl bg-[#080B12] border border-white/[0.08] mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D9B66F]" />
            <span>Scope & Key Deliverables</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#F8F7F4]/90">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              onClose()
              if (onOpenQuote) onOpenQuote()
            }}
            className="w-full sm:flex-1 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D9B66F] to-[#F0D69A] text-[#080B12] hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Request Proposal for {service.title}</span>
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

      </motion.div>
    </div>
  )
}
