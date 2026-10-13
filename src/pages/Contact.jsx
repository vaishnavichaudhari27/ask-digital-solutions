import { useState } from 'react'
import { motion } from 'motion/react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react'
import { COMPANY_INFO, CONTACT_PAGE_DATA } from '../data/contactData'
import { SERVICES_DATA } from '../data/servicesData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing',
    budget: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [emailDraftUrl, setEmailDraftUrl] = useState('')

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.'
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.'
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number (min 8 digits).'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please tell us briefly about your business goals or enquiry.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = `Website enquiry - ${formData.service}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      `Budget: ${formData.budget || 'Not specified'}`,
      '',
      formData.message
    ].join('\n')
    const draftUrl = `mailto:${COMPANY_INFO.emailInfo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmailDraftUrl(draftUrl)
    window.location.href = draftUrl
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Digital Marketing',
      budget: '',
      message: ''
    })
    setErrors({})
    setEmailDraftUrl('')
  }

  return (
    <section id="contact" className="pt-36 pb-24 md:pt-44 md:pb-32 bg-[#080B12] relative overflow-hidden min-h-screen">
      {/* Blurred background image layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-15 filter blur-2xl scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Dark luxury gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#080B12] via-[#080B12]/90 to-[#080B12]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial from-[#40101D]/20 via-transparent to-transparent" />

      {/* Background radial glows */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#40101D]/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6595FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{CONTACT_PAGE_DATA.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F4] tracking-tight leading-tight mb-6">
            {CONTACT_PAGE_DATA.title}{' '}
            <span className="bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#6595FF] bg-clip-text text-transparent">
              {CONTACT_PAGE_DATA.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8AFBD] leading-relaxed">
            {CONTACT_PAGE_DATA.subtitle}
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Verified Office & Contact Channels (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-7 rounded-2xl bg-[#101522] border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#40101D]/60 border border-[#D9B66F]/40 text-[#D9B66F] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {CONTACT_PAGE_DATA.officeTitle}
                  </h3>
                  <p className="text-sm text-[#A8AFBD] leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6595FF] hover:text-white mt-3 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-7 rounded-2xl bg-[#101522] border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#080B12] border border-white/10 text-[#6595FF] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {CONTACT_PAGE_DATA.phonesTitle}
                  </h3>
                  <div className="space-y-1.5">
                    <div>
                      <a 
                        href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} 
                        className="text-sm font-semibold text-[#D9B66F] hover:underline block"
                      >
                        {COMPANY_INFO.phonePrimary} (Primary)
                      </a>
                    </div>
                    <div>
                      <a 
                        href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s+/g, '')}`} 
                        className="text-xs text-[#A8AFBD] hover:text-white block"
                      >
                        {COMPANY_INFO.phoneSecondary}
                      </a>
                    </div>
                    <div>
                      <a 
                        href={`tel:${COMPANY_INFO.phoneTertiary.replace(/\s+/g, '')}`} 
                        className="text-xs text-[#A8AFBD] hover:text-white block"
                      >
                        {COMPANY_INFO.phoneTertiary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="p-7 rounded-2xl bg-[#101522] border border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#080B12] border border-white/10 text-[#D9B66F] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {CONTACT_PAGE_DATA.emailsTitle}
                  </h3>
                  <div className="space-y-1.5">
                    <a 
                      href={`mailto:${COMPANY_INFO.emailSales}`} 
                      className="text-sm font-semibold text-[#D9B66F] hover:underline block"
                    >
                      {COMPANY_INFO.emailSales}
                    </a>
                    <a 
                      href={`mailto:${COMPANY_INFO.emailInfo}`} 
                      className="text-xs text-[#A8AFBD] hover:text-white block"
                    >
                      {COMPANY_INFO.emailInfo}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Enquiry Form (7 cols on lg) */}
          <div id="contact-form" className="scroll-mt-24 lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#101522] border border-white/[0.12] shadow-2xl relative">
              
              {emailDraftUrl ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    Continue Sending Your Enquiry
                  </h3>

                  <p className="text-sm text-[#A8AFBD] max-w-md mx-auto leading-relaxed mb-6">
                    Your email application should open with your enquiry addressed to ASK Digital Solution. The message has not been sent yet; review and send it in your email application.
                  </p>

                  <a href={emailDraftUrl} className="mb-8 inline-block text-sm text-[#D9B66F] hover:text-white">
                    Open the email draft again
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#171D2E] text-white hover:bg-[#232C40] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-white/[0.08] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {CONTACT_PAGE_DATA.formTitle}
                    </h3>
                    <p className="text-xs text-[#A8AFBD] mt-1">
                      {CONTACT_PAGE_DATA.formSubtitle}
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99605 50864"
                        className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D9B66F] transition-colors"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-[#101522] text-white">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget / Scope (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] mb-2">
                      Estimated Project Scope or Budget (Optional)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D9B66F] transition-colors"
                    >
                      {CONTACT_PAGE_DATA.timelineOptions.map((opt, i) => (
                        <option key={i} value={opt.value} className="bg-[#101522]">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F8F7F4] mb-2">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand, current challenges, and target milestones..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#080B12] bg-gradient-to-r from-[#D9B66F] via-[#F0D69A] to-[#D9B66F] hover:from-[#F0D69A] hover:to-[#D9B66F] shadow-xl shadow-[#D9B66F]/25 hover:shadow-[#D9B66F]/40 transition-all duration-300 disabled:opacity-70 cursor-pointer"
                  >
                    <span>{CONTACT_PAGE_DATA.submitButtonText}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-[#A8AFBD]/70 text-center">
                    {CONTACT_PAGE_DATA.privacyNotice}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* 3. Interactive Office Location Map (Exact Google Maps Location) */}
        <div className="mt-20 pt-10 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101522] border border-[#D9B66F]/30 text-[#D9B66F] text-xs font-bold tracking-widest uppercase mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Our Office</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Find Ask Digital Solution on the Map
              </h3>
              <p className="text-xs sm:text-sm text-[#A8AFBD] mt-1.5 max-w-xl">
                {COMPANY_INFO.address}
              </p>
            </div>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101522] hover:bg-[#1a2236] border border-[#D9B66F]/40 hover:border-[#D9B66F] text-xs font-semibold text-[#D9B66F] hover:text-white transition-all shadow-md shrink-0 w-fit"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl bg-[#101522]">
            <iframe
              title="Ask Digital Solution Location Map"
              src="https://maps.google.com/maps?q=Ask%20Digital%20Solution,%202nd%20Floor,%20Hem%20House,%20240,%20MG%20Road,%20Camp,%20Pune,%20Maharashtra%20411001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
