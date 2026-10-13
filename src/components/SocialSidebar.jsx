import { useState } from 'react'
import { SOCIAL_LINKS } from '../data/socialLinksData'

export default function SocialSidebar() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const renderIcon = (type) => {
    switch (type) {
      case 'facebook':
        return (
          <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.06 1.53 1.53 0 0 0 .01 3.06m-1.4 9.74h2.8v-8.37h-2.8v8.37Z" />
          </svg>
        )
      case 'instagram':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="100%" stopColor="#285AEB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#igGradient)"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        )
      case 'youtube':
        return (
          <svg className="w-5 h-5 fill-[#FF0000]" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <aside
      aria-label="Social media quick links"
      className="fixed z-45 select-none pointer-events-auto 
        bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0
        md:bottom-auto md:left-2.5 md:top-1/2 md:-translate-y-1/2"
    >
      {/* 
        Mobile view: आडवा (horizontal) pill बार, स्क्रीनच्या खाली मध्यभागी (bottom center), मजकूर झाकणार नाही
        Desktop view: उभा (vertical) pill बार, डाव्या बाजूला मध्यभागी (left 50%)
      */}
      <div className="social-sidebar-bar flex flex-row md:flex-col items-center gap-3 sm:gap-2.5 px-3 py-1.5 md:p-2 rounded-full backdrop-blur-md">
        {SOCIAL_LINKS.map((item, idx) => (
          <div key={item.name} className="relative flex items-center justify-center">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask Digital Solution on ${item.name}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="social-sidebar-link w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-115 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D9B66F] focus:ring-offset-2 focus:ring-offset-[#080B12]"
            >
              {renderIcon(item.iconType)}
            </a>

            {/* Platform name tooltip (desktop: डावीकडून उजवीकडे, mobile: वरच्या बाजूला) */}
            {hoveredIdx === idx && (
              <div 
                role="tooltip"
                className="absolute hidden md:block left-full ml-3 px-2.5 py-1 rounded-md text-xs font-semibold text-white bg-[#101522]/95 backdrop-blur-sm border border-white/15 shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-150 pointer-events-none"
              >
                {item.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
}
