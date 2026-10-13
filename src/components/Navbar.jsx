import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  TrendingUp, 
  Search, 
  Target, 
  Share2, 
  Layout, 
  Palette, 
  Video, 
  Zap,
} from 'lucide-react'
import BrandLogo from './BrandLogo'
import { COMPANY_INFO } from '../data/contactData'
import { SERVICES_DATA } from '../data/servicesData'
import { TOP_BAR_DATA } from '../data/navigationData'
import { SOCIAL_LINKS } from '../data/socialLinksData'

const serviceIconMap = {
  TrendingUp,
  Search,
  Target,
  Share2,
  Layout,
  Palette,
  Video,
  Zap
}

function renderSocialIcon(name) {
  if (name === 'Facebook') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.2V13H10v8h3.4Z" fill="currentColor" /></svg>
  }
  if (name === 'Instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.7" r="1.2" fill="currentColor" /></svg>
  }
  if (name === 'LinkedIn') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM5 10h3v9H5zm5 0h2.9v1.2h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.5V19h-3v-4.3c0-1 0-2.3-1.5-2.3s-1.8 1.1-1.8 2.2V19h-3z" fill="currentColor" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" fill="currentColor" /></svg>
}

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Top Information Bar */}
      <div className={`nav-contact-bar hidden md:block transition-all duration-300 ${isScrolled ? 'py-1 opacity-90' : 'py-2 opacity-100'}`}>
        <div className="nav-contact-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[#A8AFBD]">
          {/* Left contact info */}
          <div className="nav-contact-details flex items-center gap-6">
            <a 
              href={`mailto:${COMPANY_INFO.emailSales}`}
              className="flex items-center gap-2 hover:text-[#D9B66F] transition-colors focus:outline-none focus:text-[#D9B66F]"
              title="Email Sales Team"
            >
              <Mail className="w-3.5 h-3.5 text-[#D9B66F]" />
              <span>{COMPANY_INFO.emailSales}</span>
            </a>
            
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-[#D9B66F] transition-colors focus:outline-none focus:text-[#D9B66F]"
              title="Call Primary Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9B66F]" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#D9B66F]" />
              <span>{TOP_BAR_DATA.addressLabel}</span>
            </div>
          </div>
          <div className="nav-social-links">
            {SOCIAL_LINKS.map(({ name, url }) => {
              return (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Ask Digital Solution on ${name}`}>
                  {renderSocialIcon(name)}
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <nav 
        className={`nav-main w-full transition-all duration-300 ${isScrolled ? 'is-scrolled' : ''}`}
      >
        <div className="nav-frame max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <div className="nav-desktop-links hidden lg:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link text-sm font-medium transition-colors focus:outline-none ${
                isActive ? 'active text-[#D9B66F] font-semibold' : 'text-[#A8AFBD] hover:text-[#D9B66F]'
              }`}
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link text-sm font-medium transition-colors focus:outline-none ${
                isActive ? 'active text-[#D9B66F] font-semibold' : 'text-[#A8AFBD] hover:text-[#D9B66F]'
              }`}
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) => `nav-link text-sm font-medium transition-colors focus:outline-none ${
                isActive ? 'active text-[#D9B66F] font-semibold' : 'text-[#A8AFBD] hover:text-[#D9B66F]'
              }`}
            >
              Blog
            </NavLink>

            {/* Services with Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link flex items-center gap-1.5 text-sm font-medium transition-colors py-2 focus:outline-none ${
                  isActive ? 'active text-[#D9B66F] font-semibold' : 'text-[#A8AFBD] hover:text-[#D9B66F]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D9B66F]' : ''}`} />
              </NavLink>

              {/* Rich Dropdown Panel */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-[#101522]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-6 shadow-2xl shadow-black/80">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                      <div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D9B66F]">
                          Core Agency Solutions
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5">
                          What We Deliver for Your Business
                        </h4>
                      </div>
                      <Link 
                        to="/services" 
                        className="text-xs text-[#6595FF] hover:text-white flex items-center gap-1 transition-colors"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid max-h-[65vh] grid-cols-2 gap-3 overflow-y-auto">
                      {SERVICES_DATA.map((service) => {
                        const Icon = serviceIconMap[service.iconName] || Layout
                        return (
                          <Link
                            key={service.id}
                            to={service.path}
                            onClick={() => {
                              setServicesDropdownOpen(false)
                            }}
                            className="text-left group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-all border border-transparent hover:border-white/[0.06] cursor-pointer"
                          >
                            <div className="p-2 rounded-lg bg-[#080B12] border border-white/10 group-hover:border-[#D9B66F]/50 group-hover:bg-[#40101D]/40 transition-colors shrink-0">
                              <Icon className="w-4 h-4 text-[#D9B66F] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                                <span>{service.title}</span>
                              </div>
                              <p className="text-[11px] text-[#A8AFBD] line-clamp-1 mt-0.5">
                                {service.shortDesc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Dropdown footer banner */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A8AFBD]">
                      <button
                        type="button"
                        onClick={() => {
                          setServicesDropdownOpen(false)
                          onOpenQuote()
                        }}
                        className="text-[#D9B66F] hover:text-white font-medium flex items-center gap-1 cursor-pointer"
                      >
                        Request Quote <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link text-sm font-medium transition-colors focus:outline-none ${
                isActive ? 'active text-[#D9B66F] font-semibold' : 'text-[#A8AFBD] hover:text-[#D9B66F]'
              }`}
            >
              Contact
            </NavLink>
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact#contact-form"
              className="relative group hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-[#080B12] bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#D9B66F] hover:from-[#F0D69A] hover:to-[#D9B66F] shadow-lg shadow-[#D9B66F]/20 hover:shadow-[#D9B66F]/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D9B66F] cursor-pointer"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#101522] border border-white/10 text-white hover:text-[#D9B66F] hover:border-[#D9B66F]/30 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#080B12]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#D9B66F]/15 text-[#D9B66F] font-bold' : 'text-[#A8AFBD] hover:bg-white/[0.05] hover:text-[#D9B66F]'
                }`}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#D9B66F]/15 text-[#D9B66F] font-bold' : 'text-[#A8AFBD] hover:bg-white/[0.05] hover:text-[#D9B66F]'
                }`}
              >
                About
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#D9B66F]/15 text-[#D9B66F] font-bold' : 'text-[#A8AFBD] hover:bg-white/[0.05] hover:text-[#D9B66F]'
                }`}
              >
                Blog
              </NavLink>

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex items-center justify-between">
                  <NavLink
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => `flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-[#D9B66F]/15 text-[#D9B66F] font-bold' : 'text-[#A8AFBD] hover:bg-white/[0.05] hover:text-[#D9B66F]'
                    }`}
                  >
                    Services
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2.5 text-[#A8AFBD] hover:text-white"
                    aria-label="Toggle service links"
                    aria-expanded={mobileServicesOpen}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#D9B66F]' : ''}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-2 border-l border-white/10 ml-3 mt-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={srv.path}
                        onClick={() => {
                          setMobileMenuOpen(false)
                        }}
                        className="w-full text-left py-1.5 px-2 text-xs text-[#A8AFBD] hover:text-[#D9B66F] block rounded hover:bg-white/[0.03]"
                      >
                        {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-[#D9B66F]/15 text-[#D9B66F] font-bold' : 'text-[#A8AFBD] hover:bg-white/[0.05] hover:text-[#D9B66F]'
                }`}
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact#contact-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D9B66F] to-[#F0D69A] text-[#080B12] shadow-lg cursor-pointer"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-around text-xs text-[#A8AFBD] pt-2">
                <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-[#D9B66F]">
                  <Phone className="w-3.5 h-3.5 text-[#D9B66F]" />
                  <span>Call Now</span>
                </a>
                <span className="text-white/20">|</span>
                <a href={`mailto:${COMPANY_INFO.emailSales}`} className="flex items-center gap-1.5 hover:text-[#D9B66F]">
                  <Mail className="w-3.5 h-3.5 text-[#D9B66F]" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
