import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

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
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/sahbaj-dollop',
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahbaj-khan-24138a338/',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:sahbajkhan6593@gmail.com',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
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

      toast.success('Message sent! I will reply soon.', { id: toastId })
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
      className={`py-16 md:py-24 px-5 md:px-10 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#090b11] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Get In Touch
          </h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind, an opportunity, or just want to say hi? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Column: Direct Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-slate-850 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <h3 className="text-lg font-bold mb-2">Contact Details</h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Feel free to contact me directly via email or WhatsApp.
              </p>

              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email</p>
                      <a href="mailto:sahbajkhan6593@gmail.com" className="text-xs sm:text-sm font-semibold hover:underline">
                        sahbajkhan6593@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('sahbajkhan6593@gmail.com', 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Phone / WhatsApp</p>
                      <a href="tel:+916265666859" className="text-xs sm:text-sm font-semibold hover:underline">
                        +91 6265666859
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+916265666859', 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Location</p>
                    <p className="text-xs sm:text-sm font-semibold">Indore, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-2.5 rounded-lg border transition ${
                    darkMode 
                      ? 'bg-slate-850 border-slate-750 text-slate-300 hover:text-white hover:border-slate-600' 
                      : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4 }}
            className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-850 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3 className="text-lg font-bold mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-1.5 text-slate-400">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition ${
                      darkMode ? 'bg-slate-900 border-slate-750 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1.5 text-slate-400">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition ${
                      darkMode ? 'bg-slate-900 border-slate-750 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1.5 text-slate-400">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-3.5 py-2.5 rounded-lg border outline-none transition ${
                    darkMode ? 'bg-slate-900 border-slate-750 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                  }`}
                />
              </div>

              <div>
                <label className="block font-medium mb-1.5 text-slate-400">
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                  className={`w-full px-3.5 py-2.5 rounded-lg border outline-none resize-none transition ${
                    darkMode ? 'bg-slate-900 border-slate-750 focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                  }`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition cursor-pointer shadow-sm ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact
