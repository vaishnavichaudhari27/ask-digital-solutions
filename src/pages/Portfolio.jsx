import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import CaseStudyCard from '../components/CaseStudyCard'
import { PORTFOLIO_PROJECTS, PORTFOLIO_PAGE_DATA, PORTFOLIO_CATEGORIES } from '../data/portfolioData'

export default function Portfolio({ onSelectProject, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="pt-36 pb-24 md:pt-44 md:pb-32 bg-[#080B12] relative overflow-hidden min-h-screen">
      {/* Blurred background image layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-15 filter blur-2xl scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Dark luxury gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#080B12] via-[#080B12]/90 to-[#080B12]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial from-[#40101D]/20 via-transparent to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#40101D]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6595FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{PORTFOLIO_PAGE_DATA.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F4] tracking-tight leading-tight mb-4">
              {PORTFOLIO_PAGE_DATA.titleMain}{' '}
              <span className="bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#6595FF] bg-clip-text text-transparent">
                {PORTFOLIO_PAGE_DATA.titleHighlight}
              </span>
            </h2>

            <p className="text-base text-[#A8AFBD] leading-relaxed">
              {PORTFOLIO_PAGE_DATA.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#D9B66F] to-[#F0D69A] text-[#080B12] shadow-md shadow-[#D9B66F]/20'
                    : 'bg-[#101522] text-[#A8AFBD] hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid using reusable CaseStudyCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={idx}
              onSelectProject={onSelectProject}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>

        {/* Note on portfolio transparency */}
        <div className="mt-12 text-center text-xs text-[#A8AFBD]/70">
          <span>{PORTFOLIO_PAGE_DATA.note}</span>
        </div>

      </div>
    </section>
  )
}
