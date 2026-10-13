import { ArrowRight, ArrowUpRight, Code2, Eye, Gem, MapPin, Phone, Mail, Search, Share2, Sparkles, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import aboutTeamImage from '../assets/about-team.jpg'
import contactLaptopImage from '../assets/growth-analytics.jpg'
import { ABOUT_DATA } from '../data/aboutData'
import { BLOG_POSTS } from '../data/blogData'
import { BLOG_CARD_IMAGES } from '../data/blogCardImages'
import { COMPANY_INFO } from '../data/contactData'
import { SERVICES_DATA } from '../data/servicesData'

const aboutPillarIcons = [Target, Eye, Gem]
const homeServiceIds = ['digital-marketing', 'seo-services', 'web-design-development', 'social-media-marketing']
const homeServices = homeServiceIds
  .map((id) => SERVICES_DATA.find((service) => service.id === id))
  .filter(Boolean)
const homeServiceIcons = [TrendingUp, Search, Code2, Share2]

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#070a11]">
      <Hero />

      <section className="home-about-section relative overflow-hidden border-y border-[#d7a13b]/20 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#d8a542]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#17375a]/25 blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="home-about-image-wrap relative lg:col-span-5">
            <div className="home-about-image-frame absolute -inset-3 rounded-[2rem] border" />
            <img
              src={aboutTeamImage}
              alt="Team collaborating around a table"
              className="home-about-image relative aspect-[4/3] w-full rounded-[1.7rem] object-cover"
              loading="lazy"
            />
            <div className="home-about-experience absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[#d7a13b]/40 bg-[#090f18] text-[#efc052]">
                <Target className="h-6 w-6" />
              </div>
              <span className="font-display text-3xl font-semibold text-[#e3c887]">{ABOUT_DATA.experienceYears}</span>
              <span className="max-w-24 text-xs leading-relaxed text-[#eae6dd]">{ABOUT_DATA.experienceLabel}</span>
              <ArrowRight className="h-4 w-4 text-[#e3c887]" />
            </div>
          </div>

          <div className="home-about-copy lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#dfc27f]">
              <span className="h-px w-10 bg-[#dfc27f]" />
              <Sparkles className="h-4 w-4" />
              <span>{ABOUT_DATA.eyebrow}</span>
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-[#f3f0e9] sm:text-5xl">
              {ABOUT_DATA.titleMain}{' '}
              <span className="text-[#dfc27f]">{ABOUT_DATA.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#b9bec8]">{ABOUT_DATA.introduction}</p>
            <h3 className="mt-5 font-display text-xl text-white">{ABOUT_DATA.missionTitle}</h3>
            <p className="mt-2 max-w-2xl text-base leading-8 text-[#b9bec8]">{ABOUT_DATA.mission}</p>
            <h3 className="mt-5 font-display text-xl text-white">{ABOUT_DATA.visionTitle}</h3>
            <p className="mt-2 max-w-2xl text-base leading-8 text-[#b9bec8]">{ABOUT_DATA.vision}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#aeb5c3]">{ABOUT_DATA.closingStatement}</p>

            <div className="home-about-pillars mt-7 grid gap-4 sm:grid-cols-3">
              {ABOUT_DATA.pillars.map((item, index) => {
                const Icon = aboutPillarIcons[index]
                return (
                  <div className="home-about-pillar" key={item.title}>
                    <div className="home-about-pillar-icon"><Icon aria-hidden="true" /></div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#ffdc7b] to-[#e8aa35] px-7 py-3.5 text-sm font-bold text-[#11141b] shadow-[0_0_25px_rgba(228,169,54,0.28)] transition hover:-translate-y-0.5"
              >
                {ABOUT_DATA.primaryCtaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-b border-[#d9bb7c]/60 pb-2 text-sm font-semibold uppercase tracking-wide text-[#e6cc91] transition-colors hover:text-white"
              >
                {ABOUT_DATA.secondaryCtaText}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-[#aeb5c3] transition-colors hover:text-white"
              >
                Read about ASK Digital Solution
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-services-section relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#b67b27]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#b67b27]/10 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="home-services-heading relative mx-auto mb-9 max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold leading-tight text-[#f3f0e9] sm:text-5xl">
              Services we <span className="text-[#dfc27f]">offer</span>
            </h2>
            <span className="home-services-underline" />
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#c1c8d2]">
              We provide end-to-end digital solutions to help your business grow, engage and achieve long-term success.
            </p>
          </div>
          <div className="home-service-grid relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service, index) => {
              const Icon = homeServiceIcons[index]
              return (
                <article className="home-service-card group" key={service.id}>
                  <Link className="home-service-card-image" to={service.path} aria-label={`Explore ${service.title}`}>
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <span className="home-service-card-shade" />
                    <span className="home-service-card-icon"><Icon aria-hidden="true" /></span>
                  </Link>
                  <div className="home-service-card-content">
                    <h3>{service.id === 'web-design-development' ? 'Web Development' : service.title}</h3>
                    <p>{service.shortDesc}</p>
                    <Link className="home-service-card-link" to={service.path}>
                      Explore Scope <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="home-services-pagination" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#070a11] py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#b67b27]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dfc27f]">
                <Sparkles className="h-4 w-4" />
                Insights & Ideas
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight text-[#f3f0e9] sm:text-4xl">
                From our <span className="text-[#dfc27f]">blog</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border-b border-[#d9bb7c]/60 pb-2 text-sm font-semibold text-[#e6cc91] transition-colors hover:text-white"
            >
              Explore all articles <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101522]/85 transition duration-300 hover:-translate-y-1 hover:border-[#dfc27f]/40"
                key={post.id}
              >
                <Link to={post.path} className="block aspect-[16/9] overflow-hidden" aria-label={`Read ${post.title}`}>
                  <img
                    src={BLOG_CARD_IMAGES[post.id]}
                    alt={`${post.category} — ${post.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#dfc27f]">{post.category}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#dfc27f]">
                    <Link to={post.path}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#aeb5c3]">{post.summary}</p>
                  <Link
                    to={post.path}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#dfc27f] transition-colors hover:text-white"
                  >
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact-section relative overflow-hidden py-12 sm:py-16">
        <div className="home-contact-card relative mx-auto grid max-w-7xl items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 lg:col-span-6">
            <p className="mb-3 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dfc27f]">
              <span className="h-px w-8 bg-[#dfc27f]" />
              Ask Digital Solution Pune
            </p>
            <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-[#f3f0e9] sm:text-4xl">
              If you have any query,
              <span className="block text-[#dfc27f]">please contact us.</span>
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#d7dce5]">
              <a className="inline-flex items-center gap-2 transition hover:text-[#f0d69a]" href={`mailto:${COMPANY_INFO.emailInfo}`}>
                <span className="home-contact-icon"><Mail className="h-4 w-4" /></span>
                {COMPANY_INFO.emailInfo}
              </a>
              <a className="inline-flex items-center gap-2 transition hover:text-[#f0d69a]" href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}>
                <span className="home-contact-icon"><Phone className="h-4 w-4" /></span>
                {COMPANY_INFO.phonePrimary}
              </a>
              <span className="inline-flex items-center gap-2">
                <span className="home-contact-icon"><MapPin className="h-4 w-4" /></span>
                {COMPANY_INFO.city}
              </span>
            </div>
          </div>
          <div className="home-contact-visual relative lg:col-span-4">
            <img src={contactLaptopImage} alt="Analytics dashboard displayed on a laptop" loading="lazy" />
          </div>
          <div className="relative z-10 flex justify-start lg:col-span-2 lg:justify-end">
            <Link
              to="/contact#contact-form"
              className="inline-flex min-w-40 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ffdc7b] to-[#e8aa35] px-6 py-3.5 text-sm font-bold text-[#11141b] shadow-[0_0_25px_rgba(228,169,54,0.28)] transition hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
