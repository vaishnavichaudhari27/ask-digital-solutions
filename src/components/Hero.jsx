import { ArrowRight, CalendarDays, Star, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import dashboardHeroImage from '../assets/digital-dashboard-hero.png'
import { HERO_DATA } from '../data/homeData'

const metricIcons = [CalendarDays, UsersRound, Star]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div aria-hidden="true" className="hero-backdrop">
        <span className="hero-light-beam hero-light-beam-one" />
        <span className="hero-light-beam hero-light-beam-two" />
        <span className="hero-floor-glow" />
      </div>

      <div className="hero-container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span>{HERO_DATA.eyebrow}</span>
            </div>

            <h1 className="hero-heading">
              <span>{HERO_DATA.headlineMain}</span>
              <span className="hero-heading-highlight">{HERO_DATA.headlineHighlight}</span>
            </h1>

            <p className="hero-description">{HERO_DATA.supportingText}</p>

            <div className="hero-actions">
              <Link className="hero-button hero-button-primary" to="/contact#contact-form">
                {HERO_DATA.primaryCtaText}
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="hero-button hero-button-secondary" to="/services">
                {HERO_DATA.secondaryCtaText}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-dashboard-image"
              src={dashboardHeroImage}
              alt="Ask Digital Solution analytics dashboard displayed on a laptop with golden light trails"
            />
          </div>
        </div>

        <div className="hero-stats" aria-label="Ask Digital Solution statistics">
          {HERO_DATA.metrics.map(({ value, label }, index) => {
            const Icon = metricIcons[index]
            return (
              <div className="hero-stat" key={label}>
                <div className="hero-stat-icon"><Icon aria-hidden="true" /></div>
                <div className="hero-stat-copy">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
