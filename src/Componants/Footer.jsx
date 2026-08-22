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
      hover: 'hover:bg-neutral-700 hover:text-orange-400',
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahbaj-khan-24138a338/',
      hover: 'hover:bg-orange-500 hover:text-white',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:sahbajkhan645ue@gmail.com',
      hover: 'hover:bg-amber-500 hover:text-white',
    },
  ]

  return (
    <footer
      className={`py-8 px-4 md:px-8 lg:px-16 border-t transition-colors duration-300
        ${darkMode ? 'bg-black border-neutral-800 text-white' : 'bg-orange-50/50 border-orange-200 text-black'}
      `}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start gap-1 text-sm md:text-base">
            Made with <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> by Sahbaj Khan
          </p>
          <p
            className={`text-sm md:text-base mt-1
              ${darkMode ? 'text-gray-400' : 'text-gray-600'}
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
                ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}
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