import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutTeamImage from '../assets/about-team.jpg'
import { ABOUT_DATA } from '../data/aboutData'
import { COMPANY_INFO } from '../data/contactData'

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070a11] pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute right-0 top-20 h-[34rem] w-[34rem] rounded-full bg-[#527bb9]/10 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-xs uppercase tracking-[0.24em] text-[#dfc27f]">
          <Link to="/" className="text-[#aeb5c3] hover:text-white">Home</Link>
          <span className="mx-3 text-white/30">/</span>
          About Us
        </div>
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#dfc27f]/20" />
            <img
              src={aboutTeamImage}
              alt="Team collaborating at a table"
              className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/15 bg-[#080b12]/90 px-4 py-3 backdrop-blur">
              <MapPin className="h-4 w-4 text-[#dfc27f]" />
              <span className="text-sm text-white">Ask Digital Solution Pune</span>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#dfc27f]">
              <Sparkles className="h-4 w-4" />
              {ABOUT_DATA.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-medium leading-tight text-[#f3f0e9] sm:text-5xl">
              {ABOUT_DATA.titleMain}{' '}
              <span className="text-[#dfc27f]">{ABOUT_DATA.titleHighlight}</span>
            </h1>
            <div className="my-8 h-px w-20 bg-[#dfc27f]/60" />
            <p className="mt-5 text-lg leading-8 text-[#c1c5cd]">{ABOUT_DATA.introduction}</p>
            <h2 className="mt-6 font-display text-2xl text-white">{ABOUT_DATA.missionTitle}</h2>
            <p className="mt-3 text-base leading-8 text-[#aeb5c3]">{ABOUT_DATA.mission}</p>
            <h2 className="mt-6 font-display text-2xl text-white">{ABOUT_DATA.visionTitle}</h2>
            <p className="mt-3 text-base leading-8 text-[#aeb5c3]">{ABOUT_DATA.vision}</p>
            <p className="mt-4 text-base leading-8 text-[#aeb5c3]">{ABOUT_DATA.closingStatement}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#dfc27f] px-6 py-3 text-sm font-semibold text-[#11141b] hover:bg-[#f0d99f]"
              >
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:border-[#dfc27f]/60 hover:text-[#f0d99f]"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 border-t border-white/10 pt-10 sm:grid-cols-3">
          {ABOUT_DATA.pillars.map((item, index) => (
            <div key={item.title} className="relative border-l border-[#dfc27f]/40 py-2 pl-5">
              <span className="font-display text-sm tracking-[0.2em] text-[#dfc27f]/70">0{index + 1}</span>
              <h3 className="mt-3 font-display text-xl text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#aeb5c3]">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href={COMPANY_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-start gap-3 text-sm leading-6 text-[#aeb5c3] hover:text-white"
        >
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#dfc27f]" />
          {COMPANY_INFO.address}
        </a>
      </div>
    </div>
  )
}
