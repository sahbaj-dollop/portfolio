import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const whatsappUrl = "https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20opportunity%20with%20you!"

  return (
    <footer 
      id="footer" 
      className={`w-full border-t transition-colors duration-300 py-6 sm:py-7 relative z-30 backdrop-blur-xl ${
        darkMode
          ? 'bg-[#060a0f]/95 border-[rgba(171,201,203,0.22)] text-white shadow-[0_-10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-white/95 border-[#abc9cb] text-[#081014] shadow-[0_-10px_25px_rgba(171,201,203,0.15)]'
      }`}
    >
      {/* Full Screen Inner Wrapper matching Image 3 design */}
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        
        {/* 1. Left: Glowing Circular WhatsApp Button */}
        <div className="flex items-center shrink-0">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative group flex items-center justify-center cursor-pointer"
          >
            {/* Outer Glowing Halo / Ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/25 blur-md group-hover:bg-[#25D366]/45 transition-all animate-pulse" />
            
            <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border text-[#25D366] flex items-center justify-center transition-all duration-300 ${
              darkMode
                ? 'bg-[#11241f] border-[#25D366]/70 shadow-[0_0_15px_rgba(37,211,102,0.4)]'
                : 'bg-[#ecfdf3] border-[#25D366]/60 shadow-sm'
            }`}>
              <FaWhatsapp className={`w-6 h-6 ${darkMode ? 'text-[#25D366]' : 'text-[#16a34a]'}`} />
            </div>
          </motion.a>
        </div>

        {/* 2. Middle: Copyright & Status Pill */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:px-6">
          <p className={`text-xs sm:text-sm md:text-[15px] font-bold tracking-tight ${
            darkMode ? 'text-white' : 'text-[#081014]'
          }`}>
            &copy; 2026 Sahbaj Khan. All rights reserved.
          </p>

          <div className={`mt-1.5 inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm ${
            darkMode ? 'bg-[#0d1820] border-[rgba(171,201,203,0.22)]' : 'bg-[#edf5f6] border-[#abc9cb]'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f45b0b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f45b0b]" />
            </span>
            <span className={`text-[11px] sm:text-xs font-medium ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Available for client projects &amp; full-time engineering roles
            </span>
          </div>
        </div>

        {/* 3. Right: Social Circles & Back to Top */}
        <div className="flex items-center shrink-0">
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href="https://github.com/sahbaj-dollop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition shadow-sm cursor-pointer ${
                darkMode
                  ? 'bg-[#111e27] border-[rgba(171,201,203,0.3)] hover:border-[#abc9cb] text-slate-300 hover:text-white'
                  : 'bg-[#edf5f6] border-[#abc9cb] hover:border-[#f45b0b] text-slate-700 hover:text-[#f45b0b]'
              }`}
            >
              <FaGithub className="w-4 h-4" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href="https://www.linkedin.com/in/sahbaj-khan-24138a338/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition shadow-sm cursor-pointer ${
                darkMode
                  ? 'bg-[#111e27] border-[rgba(171,201,203,0.3)] hover:border-[#abc9cb] text-slate-300 hover:text-white'
                  : 'bg-[#edf5f6] border-[#abc9cb] hover:border-[#f45b0b] text-slate-700 hover:text-[#f45b0b]'
              }`}
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href="mailto:sahbajkhan6593@gmail.com"
              aria-label="Send Email"
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition shadow-sm cursor-pointer ${
                darkMode
                  ? 'bg-[#111e27] border-[rgba(171,201,203,0.3)] hover:border-[#abc9cb] text-slate-300 hover:text-white'
                  : 'bg-[#edf5f6] border-[#abc9cb] hover:border-[#f45b0b] text-slate-700 hover:text-[#f45b0b]'
              }`}
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            {/* Orange Circular Back To Top Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f45b0b] hover:bg-[#e04f05] text-white flex items-center justify-center shadow-lg shadow-[#f45b0b]/40 border border-[#f45b0b] transition cursor-pointer ml-1"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
            </motion.button>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
