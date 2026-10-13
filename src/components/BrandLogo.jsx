
import { Link } from 'react-router-dom'

export default function BrandLogo({ size = 'default', className = '' }) {
  const isSmall = size === 'small'

  return (
    <Link 
      to="/" 
      aria-label="Ask Digital Solution - Home" 
      className={`group inline-flex items-center select-none no-underline transition-all duration-300 hover:opacity-95 ${className}`}
    >
      <img
        src="/images/ask-digital-logo.png"
        alt="Ask Digital Solution - Expand Your Network"
        className={`object-contain transition-all duration-300 drop-shadow-[0_2px_10px_rgba(217,182,111,0.22)] ${
          isSmall 
            ? 'h-9 sm:h-10 w-auto max-w-[140px]' 
            : 'h-11 sm:h-12 md:h-13 w-auto max-w-[170px] sm:max-w-[190px]'
        }`}
        loading="eager"
      />
    </Link>
  )
}



