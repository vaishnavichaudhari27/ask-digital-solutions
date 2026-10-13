import { Link } from 'react-router-dom'
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight
} from 'lucide-react'
import BrandLogo from './BrandLogo'
import { COMPANY_INFO } from '../data/contactData'
import { SERVICES_DATA } from '../data/servicesData'
import { FOOTER_DATA } from '../data/navigationData'

const DIGITAL_MARKETING_SERVICE_IDS = [
  'digital-marketing',
  'seo-services',
  'google-adwords',
  'social-media-marketing',
  'lead-generation',
  'graphic-design',
  'video-creation',
  'content-marketing',
  'ecard-services'
]

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#05070C] border-t border-white/[0.08] text-[#A8AFBD] text-sm relative">
      {/* Top accent gradient bar */}
      <div className="h-1 bg-gradient-to-r from-[#40101D] via-[#D9B66F] to-[#6595FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5 pb-5 border-b border-white/[0.06]">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-3 space-y-3">
            <BrandLogo />
            <p className="text-xs sm:text-sm text-[#A8AFBD] leading-relaxed max-w-sm">
              {FOOTER_DATA.bio}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101522] border border-white/10 text-xs text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{FOOTER_DATA.establishedBadge}</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={COMPANY_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D9B66F] hover:underline"
              >
                <span>Read client reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F7F4] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#D9B66F]/60" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#D9B66F]/60" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#D9B66F]/60" />
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#D9B66F]/60" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#D9B66F]/60" />
                  <span>Contact & Location</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F7F4] mb-3">
              Digital Marketing
            </h4>
            <ul className="space-y-1 text-xs">
              {SERVICES_DATA.filter((service) => DIGITAL_MARKETING_SERVICE_IDS.includes(service.id)).map((srv) => (
                <li key={srv.id}>
                  <Link to={srv.path} className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F7F4] mb-3">
              Website Development
            </h4>
            <ul className="space-y-1 text-xs">
              {SERVICES_DATA.filter((service) => !DIGITAL_MARKETING_SERVICE_IDS.includes(service.id)).map((srv) => (
                <li key={srv.id}>
                  <Link to={srv.path} className="hover:text-[#D9B66F] transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F7F4] mb-3">
              Get In Touch
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#D9B66F] shrink-0 mt-0.5" />
              <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-white">
                {COMPANY_INFO.address}
              </a>
            </div>

            {[COMPANY_INFO.phonePrimary, COMPANY_INFO.phoneSecondary, COMPANY_INFO.phoneTertiary].map((phone) => (
              <div key={phone} className="flex items-center gap-2.5 text-xs">
                <Phone className="w-4 h-4 text-[#6595FF] shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white hover:text-[#D9B66F] transition-colors font-medium">{phone}</a>
              </div>
            ))}

            {[COMPANY_INFO.emailSales, COMPANY_INFO.emailInfo].map((email) => (
              <div key={email} className="flex items-center gap-2.5 text-xs">
                <Mail className="w-4 h-4 text-[#D9B66F] shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
              </div>
            ))}

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#D9B66F] hover:text-[#080B12] text-white transition-all text-center"
              >
                Request Free Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {FOOTER_DATA.copyrightNotice}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-[#D9B66F]">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-[#D9B66F]">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-[#D9B66F]">Refund Policy</Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101522] border border-white/10 hover:border-[#D9B66F]/40 hover:text-white text-xs transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D9B66F]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
