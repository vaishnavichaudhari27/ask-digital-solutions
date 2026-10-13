import {
  BarChart3,
  CreditCard,
  Globe2,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Share2
} from 'lucide-react'

const COVER_STYLES = {
  advertising: {
    icon: Megaphone,
    accent: '#e4bd73',
    glow: 'rgba(228,189,115,.2)',
    label: 'PAID MEDIA',
    shapes: ['w-12', 'w-20', 'w-16']
  },
  ecard: {
    icon: CreditCard,
    accent: '#bd9c69',
    glow: 'rgba(189,156,105,.2)',
    label: 'DIGITAL CONNECTION',
    shapes: ['w-16', 'w-12', 'w-20']
  },
  local: {
    icon: MapPin,
    accent: '#78b9ad',
    glow: 'rgba(120,185,173,.18)',
    label: 'LOCAL REACH',
    shapes: ['w-20', 'w-16', 'w-12']
  },
  web: {
    icon: MonitorSmartphone,
    accent: '#8aade0',
    glow: 'rgba(138,173,224,.2)',
    label: 'WEB EXPERIENCE',
    shapes: ['w-12', 'w-16', 'w-20']
  },
  social: {
    icon: Share2,
    accent: '#d99ba9',
    glow: 'rgba(217,155,169,.18)',
    label: 'SOCIAL CHANNELS',
    shapes: ['w-16', 'w-20', 'w-12']
  },
  design: {
    icon: Palette,
    accent: '#c6a1dc',
    glow: 'rgba(198,161,220,.18)',
    label: 'VISUAL IDENTITY',
    shapes: ['w-20', 'w-12', 'w-16']
  },
  digital: {
    icon: Globe2,
    accent: '#80aee0',
    glow: 'rgba(128,174,224,.18)',
    label: 'DIGITAL STRATEGY',
    shapes: ['w-12', 'w-20', 'w-16']
  },
  seo: {
    icon: BarChart3,
    accent: '#9bb88b',
    glow: 'rgba(155,184,139,.18)',
    label: 'SEARCH VISIBILITY',
    shapes: ['w-16', 'w-12', 'w-20']
  }
}

export default function BlogCover({ type, title }) {
  const style = COVER_STYLES[type] ?? COVER_STYLES.digital
  const Icon = style.icon

  return (
    <div
      role="img"
      aria-label={`${title} cover illustration`}
      className="relative h-full w-full overflow-hidden bg-[#0a1020]"
      style={{ '--cover-accent': style.accent, '--cover-glow': style.glow }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,var(--cover-glow),transparent_58%),linear-gradient(140deg,#111c31_0%,#080d18_70%)]" />
      <div className="absolute -right-8 -top-16 h-52 w-52 rounded-full border border-white/[0.08]" />
      <div className="absolute -right-1 -top-9 h-40 w-40 rounded-full border border-white/[0.06]" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--cover-accent)]/50 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.7rem] border border-white/15 bg-white/[0.06] shadow-[0_18px_55px_rgba(0,0,0,.3)] backdrop-blur-sm transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-3deg] sm:h-28 sm:w-28">
          <div className="absolute inset-2 rounded-[1.2rem] border border-white/[0.07]" />
          <Icon className="h-11 w-11 text-[var(--cover-accent)] drop-shadow-[0_0_18px_var(--cover-glow)] sm:h-12 sm:w-12" strokeWidth={1.35} />
        </div>
        <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[10px] text-white/60">
          0{Object.keys(COVER_STYLES).indexOf(type) + 1}
        </div>
        <div className="absolute bottom-5 left-5 flex flex-col gap-1.5">
          {style.shapes.map((width, index) => (
            <span
              key={`${width}-${index}`}
              className={`${width} h-0.5 rounded-full bg-[var(--cover-accent)]`}
              style={{ opacity: 0.65 - index * 0.15 }}
            />
          ))}
        </div>
        <span className="absolute bottom-5 right-5 text-[9px] font-medium tracking-[0.18em] text-white/55 sm:text-[10px]">
          {style.label}
        </span>
      </div>
    </div>
  )
}
