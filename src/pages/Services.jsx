import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { SERVICES_DATA, SERVICES_PAGE_DATA, SERVICES_CATEGORIES } from '../data/servicesData'

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredServices = activeFilter === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((service) => service.category === activeFilter)

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070a11] pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute -right-20 top-20 h-[34rem] w-[34rem] rounded-full bg-[#557db7]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -left-32 top-[55rem] h-[30rem] w-[30rem] rounded-full bg-[#d9bb7c]/[0.06] blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#dfc27f]">
            <Sparkles className="h-4 w-4" />
            {SERVICES_PAGE_DATA.eyebrow}
          </div>
          <h1 className="font-display text-4xl font-medium leading-tight text-[#f3f0e9] sm:text-5xl md:text-6xl">
            {SERVICES_PAGE_DATA.titleMain}{' '}
            <span className="text-[#dfc27f]">{SERVICES_PAGE_DATA.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#b9bec8]">
            {SERVICES_PAGE_DATA.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SERVICES_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                aria-pressed={activeFilter === category}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  activeFilter === category
                    ? 'border-[#dfc27f] bg-[#dfc27f] text-[#10131a]'
                    : 'border-white/10 bg-white/[0.03] text-[#b9bec8] hover:border-[#dfc27f]/50 hover:text-white'
                }`}
              >
                {category === 'All' ? `All Services (${SERVICES_DATA.length})` : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl text-white">{SERVICES_PAGE_DATA.bannerTitle}</h2>
            <p className="mt-2 text-sm text-[#aeb5c3]">{SERVICES_PAGE_DATA.bannerSubtitle}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#dfc27f] px-6 py-3 text-sm font-semibold text-[#11141b] hover:bg-[#f0d99f]"
          >
            {SERVICES_PAGE_DATA.bannerButtonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
