import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'
import { playClickSound } from '../utils/soundEffects'

// ─── EmailJS Config ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_pqys3l4'
const EMAILJS_TEMPLATE_ID = 'template_ivqfebh'
const EMAILJS_PUBLIC_KEY  = 'TFhG4n1krSdGa7qJS'
// ─────────────────────────────────────────────────────────────────

const Contact = () => {
  const { darkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = (text, type) => {
    playClickSound(true)
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      toast.success('Email copied to clipboard')
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      toast.success('Phone number copied to clipboard')
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const socialLinks = [
    {
      icon: <FaGithub className="w-4 h-4" />,
      label: 'GitHub',
      href: 'https://github.com/sahbaj-dollop',
    },
    {
      icon: <FaLinkedinIn className="w-4 h-4" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahbaj-khan-24138a338/',
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      href: 'mailto:sahbajkhan6593@gmail.com',
    },
  ]

  const inquiryTopics = [
    'Web App / MVP',
    'Full-Stack Role',
    'E-Commerce / SaaS',
    'API & Backend',
  ]

  const handleTopicSelect = (topic) => {
    playClickSound(true)
    setFormData((prev) => ({
      ...prev,
      subject: `Inquiry: ${topic}`,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    playClickSound(true)
    setIsSubmitting(true)

    const toastId = toast.loading('Sending message...')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject || 'Portfolio Inquiry',
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      toast.success("Message sent! Thanks for reaching out—I'll reply shortly.", { id: toastId })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Failed to send. Please reach out via WhatsApp or email directly!', { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section
      id="contact"
      className={`py-16 md:py-24 border-t transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-[#070a0e] border-[rgba(171,201,203,0.18)] text-white' : 'bg-[#eef5f6] border-[#abc9cb]/60 text-[#081014]'
      }`}
    >
      {/* Ambient background lighting */}
      <div 
        className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none blur-[140px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(244,91,11,0.45) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none blur-[140px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)'
        }}
      />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 ${
            darkMode ? 'text-white' : 'text-[#081014]'
          }`}>
            Let&apos;s Build Something Great
          </h2>
          <p className={`text-xs sm:text-sm font-semibold max-w-2xl mx-auto ${
            darkMode ? 'text-[#abc9cb]' : 'text-[#2c6670]'
          }`}>
            Looking for a Full Stack Developer for your web product, MVP, or engineering team? Reach out and let&apos;s turn your idea into production software.
          </p>
        </motion.div>

        {/* Big Glass Container Frame matching reference */}
        <div>

          {/* Two Distinct Frosted Glass Cards with Cyan Glowing Rim */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            
            {/* ── Left Card: Contact Details ── */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-b from-[#101a24]/85 to-[#091018]/92 backdrop-blur-md text-white'
                  : 'bg-white border-[#abc9cb] shadow-sm text-[#081014]'
              }`}
              style={{
                border: darkMode ? '1px solid rgba(171, 201, 203, 0.24)' : '1px solid rgba(171, 201, 203, 0.8)',
                boxShadow: darkMode 
                  ? '0 14px 35px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
                  : '0 10px 30px rgba(171, 201, 203, 0.25)'
              }}
            >
              <div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1.5 ${
                  darkMode ? 'text-white' : 'text-[#081014]'
                }`}>
                  Direct Channels
                </h3>
                <p className={`text-xs sm:text-sm mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Prefer a direct conversation? Reach out via email, phone, or WhatsApp—I typically respond within a few hours.
                </p>

                {/* Contact Tiles with Orange Accent Borders */}
                <div className="space-y-3.5 mb-8">
                  
                  {/* Email Tile */}
                  <div 
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all duration-200 hover:translate-x-1 ${
                      darkMode ? 'bg-[#090f16]/90 border-[#f45b0b]/40 hover:border-[#f45b0b]' : 'bg-slate-50 border-[#abc9cb] hover:border-[#f45b0b]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-[#f45b0b]/15 text-[#f45b0b] shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email</p>
                        <a 
                          href="mailto:sahbajkhan6593@gmail.com" 
                          className={`text-xs sm:text-sm font-bold hover:text-[#f45b0b] transition truncate block ${
                            darkMode ? 'text-white' : 'text-[#081014]'
                          }`}
                        >
                          sahbajkhan6593@gmail.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('sahbajkhan6593@gmail.com', 'email')}
                      className={`p-2 rounded-lg transition cursor-pointer shrink-0 ${
                        darkMode ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-[#081014] hover:bg-slate-200/70'
                      }`}
                      title="Copy Email"
                      aria-label="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#f45b0b]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone / WhatsApp Tile */}
                  <div 
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all duration-200 hover:translate-x-1 ${
                      darkMode ? 'bg-[#090f16]/90 border-[#f45b0b]/40 hover:border-[#f45b0b]' : 'bg-slate-50 border-[#abc9cb] hover:border-[#f45b0b]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2.5 rounded-lg bg-[#f45b0b]/15 text-[#f45b0b] shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Phone / WhatsApp</p>
                        <a 
                          href="tel:+916265666859" 
                          className={`text-xs sm:text-sm font-bold hover:text-[#f45b0b] transition truncate block ${
                            darkMode ? 'text-white' : 'text-[#081014]'
                          }`}
                        >
                          +91 6265666859
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('+916265666859', 'phone')}
                      className={`p-2 rounded-lg transition cursor-pointer shrink-0 ${
                        darkMode ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-[#081014] hover:bg-slate-200/70'
                      }`}
                      title="Copy Phone"
                      aria-label="Copy Phone Number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-[#f45b0b]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location Tile */}
                  <div 
                    className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                      darkMode ? 'bg-[#090f16]/90 border-[#f45b0b]/40' : 'bg-slate-50 border-[#abc9cb]'
                    }`}
                  >
                    <div className="p-2.5 rounded-lg bg-[#f45b0b]/15 text-[#f45b0b] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Location</p>
                      <p className={`text-xs sm:text-sm font-bold truncate ${
                        darkMode ? 'text-white' : 'text-[#081014]'
                      }`}>
                        Indore, India &bull; Remote Worldwide
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Links Pills */}
              <div className="flex items-center gap-2 pt-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      darkMode 
                        ? 'bg-[#0c141e]/90 border-white/15 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10' 
                        : 'bg-white border-[#abc9cb] text-slate-700 hover:text-[#f45b0b] hover:border-[#f45b0b] shadow-sm'
                    }`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── Right Card: Send a Message ── */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-b from-[#101a24]/85 to-[#091018]/92 backdrop-blur-md text-white'
                  : 'bg-white border-[#abc9cb] shadow-sm text-[#081014]'
              }`}
              style={{
                border: darkMode ? '1px solid rgba(171, 201, 203, 0.24)' : '1px solid rgba(171, 201, 203, 0.8)',
                boxShadow: darkMode 
                  ? '0 14px 35px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)' 
                  : '0 10px 30px rgba(171, 201, 203, 0.25)'
              }}
            >
              <div>
                <h3 className={`text-lg sm:text-xl font-bold mb-1.5 ${
                  darkMode ? 'text-white' : 'text-[#081014]'
                }`}>
                  Start Your Inquiry
                </h3>
                <p className={`text-xs mb-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Select a quick topic or describe what you&apos;re building:
                </p>

                {/* Quick Topic Selector Chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {inquiryTopics.map((topic) => {
                    const isSelected = formData.subject === `Inquiry: ${topic}`
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => handleTopicSelect(topic)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition cursor-pointer ${
                          isSelected
                            ? 'bg-[#f45b0b] border-[#f45b0b] text-white shadow-sm shadow-[#f45b0b]/40'
                            : darkMode
                            ? 'bg-white/[0.05] border-white/15 text-slate-300 hover:border-[#f45b0b]/60 hover:text-white'
                            : 'bg-slate-50 border-[#abc9cb] text-slate-700 hover:border-[#f45b0b]'
                        }`}
                      >
                        {topic}
                      </button>
                    )
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Two Column Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className={`block text-xs font-semibold mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Name <span className="text-[#f45b0b]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ${
                          darkMode 
                            ? 'bg-[#090f16]/85 border-white/10 text-white placeholder-slate-500 focus:border-[#f45b0b] focus:ring-1 focus:ring-[#f45b0b]/30' 
                            : 'bg-slate-50 border-[#abc9cb] text-[#081014] placeholder-slate-400 focus:border-[#f45b0b]'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={`block text-xs font-semibold mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Your Email <span className="text-[#f45b0b]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ${
                          darkMode 
                            ? 'bg-[#090f16]/85 border-white/10 text-white placeholder-slate-500 focus:border-[#f45b0b] focus:ring-1 focus:ring-[#f45b0b]/30' 
                            : 'bg-slate-50 border-[#abc9cb] text-[#081014] placeholder-slate-400 focus:border-[#f45b0b]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, freelance scope, or job role"
                      className={`w-full px-4 py-2.5 rounded-xl border outline-none transition-all ${
                        darkMode 
                          ? 'bg-[#090f16]/85 border-white/10 text-white placeholder-slate-500 focus:border-[#f45b0b] focus:ring-1 focus:ring-[#f45b0b]/30' 
                          : 'bg-slate-50 border-[#abc9cb] text-[#081014] placeholder-slate-400 focus:border-[#f45b0b]'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Message <span className="text-[#f45b0b]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Tell me briefly about your project goals, timeline, or how we can work together..."
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none ${
                        darkMode 
                          ? 'bg-[#090f16]/85 border-white/10 text-white placeholder-slate-500 focus:border-[#f45b0b] focus:ring-1 focus:ring-[#f45b0b]/30' 
                          : 'bg-slate-50 border-[#abc9cb] text-[#081014] placeholder-slate-400 focus:border-[#f45b0b]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-sheen w-full py-3.5 px-6 rounded-full bg-[#f45b0b] hover:bg-[#e04f05] text-white font-bold text-xs sm:text-sm shadow-[0_4px_22px_rgba(244,91,11,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 group"
                    >
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.button>
                  </div>

                </form>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact