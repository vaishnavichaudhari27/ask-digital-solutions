import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceDetail({ service }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a11] pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute right-0 top-16 h-[34rem] w-[34rem] rounded-full bg-[#557db7]/10 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#9ea6b5]">
          <Link to="/" className="hover:text-white">Home</Link><span>/</span>
          <Link to="/services" className="hover:text-white">Services</Link><span>/</span>
          <span className="text-[#dfc27f]">{service.title}</span>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.24em] text-[#dfc27f]">{service.category}</p>
            <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-[#f3f0e9] sm:text-5xl md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b9bec8]">{service.shortDesc}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#dfc27f] px-6 py-3.5 text-sm font-semibold text-[#11141b] hover:bg-[#f0d99f]">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {service.image && (
            <div className="relative lg:col-span-5">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#dfc27f]/20" />
              <img src={service.image} alt="" className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover" />
            </div>
          )}
        </div>

        <div className="mt-20 grid gap-x-14 gap-y-12 border-t border-white/10 pt-12 md:grid-cols-2">
          {service.sections.map((section, index) => (
            <section key={`${section.title}-${index}`} className="max-w-2xl">
              <p className="text-xs tracking-[0.2em] text-[#dfc27f]/80">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#aeb5c3]">{section.body}</p>
              {section.link && (
                <Link to={section.link} className="mt-4 inline-flex items-center gap-2 text-sm text-[#dfc27f] hover:text-white">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {section.links?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {section.links.map((link) => (
                    <Link key={link.to} to={link.to} className="inline-flex items-center gap-2 text-sm text-[#dfc27f] hover:text-white">
                      {link.label}<ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-y border-white/10 py-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 text-[#b9bec8]">
            <MapPin className="h-4 w-4 text-[#dfc27f]" />
            <span>Ask Digital Solution Pune</span>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[#dfc27f] hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
        </div>
      </div>
    </main>
  )
}
