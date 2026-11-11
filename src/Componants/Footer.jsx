import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Mail, ArrowUp, Terminal } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleOpenTerminal = () => {
    window.dispatchEvent(new CustomEvent('toggle-terminal'))
  }

  const whatsappUrl = "https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20Full%20Stack%20opportunity!"

  return (
    <footer 
      id="footer" 
      className={`w-full border-t transition-colors duration-300 py-6 sm:py-7 px-4 sm:px-8 lg:px-12 relative z-30 backdrop-blur-xl ${
        darkMode
          ? 'bg-[#060a0f]/95 border-[rgba(171,201,203,0.22)] text-white shadow-[0_-10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-white/95 border-[#abc9cb] text-[#081014] shadow-[0_-10px_25px_rgba(171,201,203,0.15)]'
      }`}
    >
      {/* Full Screen Inner Wrapper matching Image 3 design */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        
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
            
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#11241f] border border-[#25D366]/70 text-[#25D366] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.4)]">
              <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
            </div>
          </motion.a>
        </div>

        {/* 2. Middle: Copyright & Status Pill */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:px-6">
          <p className="text-xs sm:text-sm md:text-[15px] font-bold text-white tracking-tight dark:text-white">
            &copy; 2026 Sahbaj Khan. Designed &amp; built with React &amp; Tailwind CSS.
          </p>

          <div className="mt-1.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1820] border border-[rgba(171,201,203,0.22)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f45b0b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f45b0b]" />
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
              Open to full-time engineering roles...
            </span>
          </div>
        </div>

        {/* 3. Right: Terminal Pill, Social Circles & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-2.5 shrink-0">
          
          {/* Top: Terminal Drawer Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpenTerminal}
            className="px-3 py-1 rounded-xl bg-[#0e1c24] border border-[#abc9cb]/60 hover:border-[#f45b0b] text-[#abc9cb] hover:text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-[0_0_12px_rgba(171,201,203,0.22)] transition cursor-pointer"
            title="Open CLI Terminal (Hotkey: `)"
          >
            <Terminal className="w-3.5 h-3.5 text-[#f45b0b]" />
            <span>Terminal</span>
          </motion.button>

          {/* Bottom: Social Icons Row + Back to Top */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href="https://github.com/sahbaj-dollop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111e27] border border-[rgba(171,201,203,0.3)] hover:border-[#abc9cb] text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm cursor-pointer"
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
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111e27] border border-[rgba(171,201,203,0.3)] hover:border-[#abc9cb] text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm cursor-pointer"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              href="mailto:sahbajkhan6593@gmail.com"
              aria-label="Send Email"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111e27] border border-[rgba(171,201,203,0.3)] hover:border-[#abc9cb] text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm cursor-pointer"
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
