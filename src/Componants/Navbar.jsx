import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

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
            ? "bg-[#090b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/20"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : darkMode 
          ? "bg-transparent" 
          : "bg-transparent"
      }`}
    >
      <nav className="px-5 md:px-10 py-4 max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Name */}
        <button
          onClick={() => scrollToSection("#home")}
          className="text-left cursor-pointer group"
        >
          <span className={`text-lg font-bold tracking-tight transition-colors ${
            darkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
          }`}>
            Sahbaj Khan
          </span>
          <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Full Stack Developer
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? darkMode
                      ? "text-blue-400 font-semibold bg-slate-800/60"
                      : "text-blue-600 font-semibold bg-slate-100"
                    : darkMode 
                    ? "text-slate-400 hover:text-white hover:bg-slate-850" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Resume & Dark/Light Toggle */}
        <div className="flex items-center space-x-2.5">
          <a
            href="/sahbajkhan.pdf"
            download
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              darkMode 
                ? "bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600" 
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 shadow-sm"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span>Resume</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              darkMode 
                ? "bg-slate-850 border-slate-800 text-amber-300 hover:bg-slate-800" 
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
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
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-slate-700 dark:border-slate-800 text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-4 h-3.5 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-transform ${darkMode ? 'bg-white' : 'bg-slate-900'} ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-opacity ${darkMode ? 'bg-white' : 'bg-slate-900'} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-transform ${darkMode ? 'bg-white' : 'bg-slate-900'} ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden px-5 py-4 border-b ${
              darkMode ? "bg-[#090b11] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
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
                  className={`text-left py-2 px-3 rounded-md text-sm font-medium ${
                    activeSection === item.href.replace("#", "")
                      ? darkMode ? "bg-slate-800 text-blue-400" : "bg-slate-100 text-blue-600"
                      : darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/sahbajkhan.pdf"
                download
                className="inline-flex items-center gap-2 py-2 px-3 rounded-md text-sm font-semibold text-blue-500"
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
