import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import WeatherWidget from "./WeatherWidget";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(() => [
    { name: "Home",       href: "#home"       },
    { name: "About",      href: "#about"      },
    { name: "Skills",     href: "#skills"     },
    { name: "Experience", href: "#experience" },
    { name: "Projects",   href: "#projects"   },
    { name: "Contact",    href: "#contact"    },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(i => i.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) { 
      el.scrollIntoView({ behavior: "smooth", block: "start" }); 
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-[#070a0e]/90 backdrop-blur-md border-b border-[rgba(171,201,203,0.18)] shadow-md shadow-black/40"
            : "bg-[#eff5f6]/90 backdrop-blur-md border-b border-[#abc9cb]/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="px-4 sm:px-6 md:px-10 py-3.5 max-w-6xl mx-auto flex items-center justify-between gap-3">
        
        {/* Brand Name */}
        <button
          onClick={() => scrollToSection("#home")}
          className="text-left cursor-pointer group shrink-0"
        >
          <span className="text-lg font-bold tracking-tight transition-colors flex items-center gap-1">
            <span className={!scrolled || darkMode ? 'text-white' : 'text-[#081014]'}>Sahbaj</span>
            <span className="text-[#f45b0b]">Khan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f45b0b] inline-block" />
          </span>
          <span className="block text-[10px] font-medium text-[#abc9cb]">
            Full Stack Developer
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? darkMode
                      ? "text-[#f45b0b] font-semibold bg-[#f45b0b]/10 border border-[#f45b0b]/30"
                      : "text-[#f45b0b] font-semibold bg-white border border-[#abc9cb]"
                    : darkMode 
                    ? "text-slate-300 hover:text-white hover:bg-slate-800/60" 
                    : "text-slate-700 hover:text-[#081014] hover:bg-white/60"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Weather Indicator, Resume & Dark/Light Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Weather Widget */}
          <WeatherWidget />

          <a
            href="/sahbajkhan.pdf"
            download
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              darkMode 
                ? "bg-[#0f171e] hover:bg-[#152028] text-white border-[rgba(171,201,203,0.25)] hover:border-[#f45b0b]" 
                : "bg-white hover:bg-[#edf5f6] text-[#081014] border-[#abc9cb] shadow-sm"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#f45b0b]" />
            <span>Resume</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode 
                ? "bg-[#0f171e] border-[rgba(171,201,203,0.25)] text-amber-300 hover:bg-[#152028]" 
                : "bg-white border-[#abc9cb] text-slate-800 hover:bg-[#edf5f6]"
            }`}
            aria-label="Toggle theme"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={darkMode ? "dark" : "light"}
                initial={{ y: -6, opacity: 0, rotate: -30 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 6, opacity: 0, rotate: 30 }}
                transition={{ duration: 0.16 }}
              >
                {darkMode ? <Sun className="w-4 h-4 text-[#f45b0b]" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl border ${
              darkMode ? 'border-[rgba(171,201,203,0.3)] bg-[#0f171e] text-white' : 'border-[#abc9cb] bg-white text-[#081014]'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-4 h-3.5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-transform ${darkMode ? 'bg-white' : 'bg-[#081014]'} ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-opacity ${darkMode ? 'bg-white' : 'bg-[#081014]'} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-transform ${darkMode ? 'bg-white' : 'bg-[#081014]'} ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`lg:hidden px-5 py-4 border-b ${
              darkMode 
                ? "bg-[#070a0e] border-[rgba(171,201,203,0.2)] text-white" 
                : "bg-[#eff5f6] border-[#abc9cb] text-[#081014]"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-2 pb-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                    activeSection === item.href.replace("#", "")
                      ? darkMode ? "bg-[#f45b0b]/15 text-[#f45b0b] font-bold" : "bg-white text-[#f45b0b] font-bold border border-[#abc9cb]"
                      : darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/sahbajkhan.pdf"
                download
                className="inline-flex items-center gap-2 py-2 px-3 rounded-lg text-sm font-semibold text-[#f45b0b]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
