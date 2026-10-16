import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Heart, Mail } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/sahbaj-dollop',
      hover: 'hover:bg-[#191970] hover:text-[#2b3154]',
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahbaj-khan-24138a338/',
      hover: 'hover:bg-[#2b3154] hover:text-white',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:sahbajkhan6593@gmail.com',
      hover: 'hover:bg-gradient-to-r hover:from-[#191970] hover:to-[#2b3154] hover:text-white',
    },
  ]

  return (
    <footer
      className={`py-8 px-4 md:px-8 lg:px-16 border-t transition-colors duration-300
        ${darkMode ? 'bg-[#0b0e1b] border-[#191970]/40 text-white' : 'bg-[#2b3154]/10 border-[#2b3154]/20 text-[#191970]'}
      `}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start gap-1 text-sm md:text-base font-medium">
            Made with <Heart className="w-4 h-4 text-[#2b3154] fill-[#2b3154]" /> by Sahbaj Khan
          </p>
          <p
            className={`text-sm md:text-base mt-1
              ${darkMode ? 'text-gray-400' : 'text-[#191970]'}
            `}
          >
            © 2025 All rights reserved.
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-3 md:gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`h-10 w-10 md:h-12 md:w-12 rounded-full flex justify-center items-center text-lg md:text-xl transition-all duration-300 shadow-md hover:shadow-lg
                ${darkMode ? 'bg-[#191970]/20 text-gray-200' : 'bg-gray-100 text-[#191970]'}
                ${link.hover}
              `}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
