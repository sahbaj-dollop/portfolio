import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 left-3 sm:bottom-6 sm:left-6 md:left-8 z-40 p-1.5 md:p-3.5 md:rounded-full md:bg-green-500 md:hover:bg-green-600 text-green-500 md:text-white flex items-center justify-center gap-2 group transition-all duration-300 drop-shadow-[0_0_15px_rgba(34,197,94,0.9)] md:drop-shadow-none md:shadow-xl md:shadow-green-500/20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: [1, 1.12, 1],
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 md:w-6 md:h-6 text-green-500 md:text-white" />
      <span className="hidden md:inline-block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold pr-1">
        Chat on WhatsApp
      </span>
    </motion.a>
  )
}

export default FloatingWhatsApp
