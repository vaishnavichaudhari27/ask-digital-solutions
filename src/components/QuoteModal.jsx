import { useState } from 'react'
import { motion } from 'motion/react'
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react'
import { COMPANY_INFO } from '../data/contactData'
import { SERVICES_DATA } from '../data/servicesData'

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing',
    budget: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Full name is required'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required'
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Valid phone number is required'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  const handleClose = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Digital Marketing',
      budget: '',
      message: ''
    })
    setErrors({})
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-[#101522] border border-white/[0.15] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 text-left"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-[#A8AFBD] hover:text-white transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
            <p className="text-sm text-[#A8AFBD] leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our digital strategy team at ASK Digital Solution Pune will review your project requirements and connect with you directly.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#D9B66F] text-[#080B12] text-xs font-bold uppercase tracking-wider hover:bg-[#F0D69A] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#D9B66F] mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Fast Project Quotation</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Get a Quote for Your Business
              </h3>
              <p className="text-xs text-[#A8AFBD] mt-1">
                Tell us what you need and our specialists will prepare a tailored proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9960550864"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-[#D9B66F]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Primary Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D9B66F]"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#101522]">
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">
                    Timeline / Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-sm text-white focus:outline-none focus:border-[#D9B66F]"
                  >
                    <option value="" className="bg-[#101522]">Standard Timeline</option>
                    <option value="Urgent (1-2 weeks)" className="bg-[#101522]">Urgent (1-2 weeks)</option>
                    <option value="Standard (1-2 months)" className="bg-[#101522]">Standard (1-2 months)</option>
                    <option value="Flexible / Retainer" className="bg-[#101522]">Flexible / Retainer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Project Brief or Goal
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share website link or target outcomes..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D9B66F] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#080B12] bg-gradient-to-r from-[#D9B66F] to-[#F0D69A] hover:from-[#F0D69A] hover:to-[#D9B66F] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? 'Processing...' : 'Submit Quote Request'}
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="pt-2 text-center text-[11px] text-[#A8AFBD]">
                Prefer to speak now? Call <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="text-[#D9B66F] font-semibold">{COMPANY_INFO.phonePrimary}</a>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  )
}
