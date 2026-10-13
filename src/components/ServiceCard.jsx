import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Search, 
  Target, 
  Share2, 
  Layout, 
  Palette, 
  Video, 
  Zap, 
  ArrowRight, 
  Check,
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

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.iconName] || Layout
  const isFeatured = service.featured

  return (
    <motion.div
      initial={{ y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between border ${
        isFeatured 
          ? 'bg-gradient-to-b from-[#101628] to-[#0A0E1A] border-[#E4C16B]/40 hover:border-[#E4C16B] shadow-[0_12px_40px_rgba(228,193,107,0.12)]' 
          : 'bg-[#0E1322]/90 border-white/[0.08] hover:border-[#E4C16B]/50 hover:bg-[#141B30] shadow-xl'
      } hover:-translate-y-1.5`}
    >
      {/* Top Media Preview Frame */}
      {service.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070910]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1322] via-[#0E1322]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#070910]/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Floating Category / Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#070910]/85 backdrop-blur-md text-[#E4C16B] border border-[#E4C16B]/30 shadow-md">
              {service.badge || service.category}
            </span>
          </div>

          {/* Icon Badge */}
          <div className="absolute -bottom-3 right-4 p-2.5 rounded-xl bg-[#070910] border border-white/15 text-[#E4C16B] shadow-lg group-hover:border-[#E4C16B] transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Service Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-[#E4C16B] transition-colors mb-2.5 leading-snug">
            {service.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#A8AFBD] leading-relaxed mb-5 line-clamp-3">
            {service.shortDesc}
          </p>

          {/* Deliverables / Highlights */}
          {service.highlights?.length > 0 && <ul className="space-y-2 mb-6">
            {service.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-white/80">
                <Check className="w-3.5 h-3.5 text-[#E4C16B] shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>}
        </div>

        {/* Bottom Action Footer */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between mt-auto">
          <Link
            to={service.path}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E4C16B] group-hover:text-white transition-colors focus:outline-none"
          >
            <span>Explore Scope</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link to="/contact" className="text-xs text-[#A8AFBD] hover:text-[#6595FF] transition-colors focus:outline-none">
            Contact
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
