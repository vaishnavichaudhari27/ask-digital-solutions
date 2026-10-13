import { useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogCover from '../components/BlogCover'
import { BLOG_POSTS } from '../data/blogData'
import { updatePageMetadata } from '../utils/pageMetadata'

const BLOG_DESCRIPTION = 'Explore practical digital marketing, SEO, social media, web development, content marketing and Google Ads insights from ASK Digital Solution Pune.'

function formatDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(`${date}T00:00:00`))
}

export default function Blog() {
  useEffect(() => updatePageMetadata({
    title: 'Digital Marketing Blog & Insights | ASK Digital Solution Pune',
    description: BLOG_DESCRIPTION,
    path: '/blog'
  }), [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080B12] pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,182,111,0.11),transparent_48%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9B66F]/30 bg-[#101522] px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D9B66F]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Digital Growth Journal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 font-display text-4xl font-semibold leading-tight tracking-tight text-[#F8F7F4] sm:text-5xl md:text-6xl"
          >
            Ideas for a stronger
            <span className="block bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#D9B66F] bg-clip-text text-transparent">
              digital presence
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base leading-relaxed text-[#A8AFBD] sm:text-lg"
          >
            Practical insights on marketing, technology and creative strategy to help your business move forward.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.36) }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101522]/90 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#D9B66F]/40"
            >
              <Link to={post.path} className="relative block aspect-[16/10] overflow-hidden" aria-label={`Read ${post.title}`}>
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                  <BlogCover type={post.coverType} title={post.title} />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-[#D9B66F]/30 bg-[#080B12]/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#D9B66F] backdrop-blur">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A8AFBD]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#D9B66F]" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#8aade0]" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#D9B66F]">
                  <Link to={post.path}>{post.title}</Link>
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-[#A8AFBD]">{post.summary}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <span className="text-xs text-white/70">{post.author}</span>
                  <Link
                    to={post.path}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D9B66F] transition-colors hover:text-white"
                  >
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
