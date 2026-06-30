import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'
import { MdOutlineMailOutline, MdSend } from 'react-icons/md'
import { useTheme } from '../Context/ThemeContext'

// ─── EmailJS Config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Add an Email Service (Gmail) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → API Keys → copy the Public Key
// Then replace the three values below:
const EMAILJS_SERVICE_ID  = 'service_pqys3l4'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_ivqfebh'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'TFhG4n1krSdGa7qJS'   // e.g. 'abcDEFghiJKL'
// ─────────────────────────────────────────────────────────────────

const Contact = () => {
  const { darkMode } = useTheme()
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

   const socialLinks = [
      {
        icon: <FaGithub />,
        label: 'GitHub',
        href: 'https://github.com/shahbazkhan075',
        hover: 'hover:bg-gray-600 hover:text-white',
      },
      {
        icon: <FaLinkedinIn />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sahbaj-khan-24138a338/',
        hover: 'hover:bg-blue-600 hover:text-white',
      },
      {
        icon: <MdOutlineMailOutline />,
        label: 'Email',
        href: 'mailto:sahbajkhan645ue@gmail.com',
        hover: 'hover:bg-red-500 hover:text-white',
      },
    ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const toastId = toast.loading('Sending message...', {
      style: {
        borderRadius: '10px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '500',
      }
    })

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          subject:    formData.subject || 'Portfolio Contact Form',
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      toast.success('Message sent successfully! 🎉', { id: toastId })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      toast.error('Failed to send. Please try again!', { id: toastId })
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

  const sectionBg = darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const mutedText = darkMode ? 'text-gray-400' : 'text-gray-600'
  const labelText = darkMode ? 'text-gray-300' : 'text-gray-700'
  const inputBg = darkMode
    ? 'bg-gray-700 border-gray-600 text-white'
    : 'bg-white border-gray-300 text-black'

  return (
    <section
      id="contact"
      className={`py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${sectionBg}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${mutedText}`}>
            Get In Touch
          </h2>
          <p className={`text-base md:text-xl max-w-3xl mx-auto ${mutedText}`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-xl shadow-xl p-6 h-full ${cardBg}`}>
              {/* Info Cards */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <motion.div 
                  className={`flex items-start gap-4 p-4 rounded-xl ${cardBg}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:sahbajkhan6593@gmail.com"
                      className={`${mutedText} hover:text-blue-500`}
                    >
                      sahbajkhan6593@gmail.com
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Typically replies within 24 hours
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className={`flex items-start gap-4 p-4 rounded-xl ${cardBg}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaPhone className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+916265666859"
                      className={`${mutedText} hover:text-green-500`}
                    >
                      +91 6265666859
                    </a>
                    <p className="text-xs text-gray-500 mt-1">
                      Mon–Fri, 9am–6pm
                    </p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  className={`flex items-start gap-4 p-4 rounded-xl ${cardBg}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaMapMarkerAlt className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className={mutedText}>Indore, MP, India</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Open to remote work worldwide
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social */}
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex justify-center items-center text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg
                      ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}
                      ${link.hover}
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-xl shadow-xl p-6 h-full ${cardBg}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Send a Message
              </h3>
              <p className={`mb-6 ${mutedText}`}>
                Fill out the form below and I'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm mb-1 ${labelText}`}>
                      Your Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                      placeholder="Sahbaj Khan"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm mb-1 ${labelText}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm mb-1 ${labelText}`}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className={`block text-sm mb-1 ${labelText}`}>
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none ${inputBg}`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition font-semibold ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <MdSend />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
