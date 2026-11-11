import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import { useTheme } from '../Context/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()

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

  return (
    <footer
      className={`py-8 px-5 md:px-10 lg:px-16 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#05070b] border-[rgba(171,201,203,0.18)] text-white' : 'bg-white border-[#abc9cb]/60 text-[#081014]'
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Branding & Status */}
        <div className="text-center sm:text-left">
          <p className="text-xs sm:text-sm font-semibold text-[#abc9cb]">
            © {new Date().getFullYear()} Sahbaj Khan. Designed & built with React & Tailwind CSS.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-1 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#f45b0b] inline-block" />
            <span>Open to full-time engineering roles & freelance projects</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`h-9 w-9 rounded-xl flex justify-center items-center text-sm transition-all border ${
                darkMode 
                  ? 'bg-[#0e161c] border-[rgba(171,201,203,0.22)] text-slate-400 hover:text-white hover:border-[#f45b0b]' 
                  : 'bg-[#edf5f6] border-[#abc9cb] text-slate-700 hover:text-[#f45b0b] hover:border-[#f45b0b] shadow-sm'
              }`}
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
