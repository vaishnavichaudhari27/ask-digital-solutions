import { motion } from 'motion/react'
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { BLOG_POSTS } from '../data/blogData'

export default function Blog({ onOpenQuote }) {
  return (
    <div className="relative min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#080B12]">
      {/* Blurred background image layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-15 filter blur-2xl scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Dark luxury gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#080B12] via-[#080B12]/90 to-[#080B12]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial from-[#40101D]/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Insights & Industry Knowledge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8F7F4] tracking-tight leading-tight mb-6"
          >
            Latest News & <br />
            <span className="bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#6595FF] bg-clip-text text-transparent">
              Digital Insights
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#A8AFBD] leading-relaxed"
          >
            Actionable strategies, expert analyses, and industry trends curated by our digital specialists in Pune.
          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * idx }}
              className="group bg-[#101522]/90 backdrop-blur-xl border border-white/[0.1] hover:border-[#D9B66F]/40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Frame */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101522] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#080B12]/85 backdrop-blur-md text-[#D9B66F] border border-[#D9B66F]/30">
                  {post.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#A8AFBD] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D9B66F]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#6595FF]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#D9B66F] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#A8AFBD] leading-relaxed line-clamp-3 mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <User className="w-3.5 h-3.5 text-[#D9B66F]" />
                    <span>{post.author}</span>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D9B66F] group-hover:text-white transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
