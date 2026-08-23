import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Volume2, VolumeX, Zap } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { playClickSound, playHoverSound } from "../utils/soundEffects";

const Navbar = () => {
  const { darkMode, toggleTheme, recruiterMode, toggleRecruiterMode, soundEnabled, toggleSound } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home",         href: "#home"          },
    { name: "About",        href: "#about"         },
    { name: "Skills",       href: "#skills"        },
    { name: "Experience",   href: "#experience"    },
    { name: "Projects",     href: "#projects"      },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact",      href: "#contact"       },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navItems.map(i => i.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const scrollToSection = (href) => {
    playClickSound(soundEnabled);
    const el = document.querySelector(href);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "glass-dark shadow-lg shadow-[#3B4371]/20 border-b border-[#3B4371]/30"
            : "glass shadow-lg shadow-[#F3904F]/10 border-b border-[#F3904F]/20"
          : darkMode ? "bg-[#0b0e1b]/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="px-4 md:px-6 py-3 md:py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="text-xl md:text-2xl font-bold gradient-text cursor-default flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => playHoverSound(soundEnabled)}
          >
            Sahbaj Khan
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => playHoverSound(soundEnabled)}
                  className={`relative px-3.5 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-[#F3904F]"
                      : darkMode ? "text-gray-300 hover:text-[#F3904F]" : "text-gray-700 hover:text-[#F3904F]"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-[#F3904F]/15 border border-[#F3904F]/35"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                    />
                  )}
                  {item.name}
                </motion.button>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">

            {/* Recruiter Mode Toggle */}
            <motion.button
              onClick={() => {
                toggleRecruiterMode();
              }}
              onMouseEnter={() => playHoverSound(soundEnabled)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                recruiterMode
                  ? "bg-gradient-to-r from-[#3B4371] to-[#F3904F] text-white border-[#F3904F] shadow-lg shadow-[#F3904F]/25 animate-pulse"
                  : darkMode
                  ? "bg-[#3B4371]/20 text-[#F3904F] border-[#3B4371]/50 hover:bg-[#3B4371]/40"
                  : "bg-[#F3904F]/10 text-[#F3904F] border-[#F3904F]/30 hover:bg-[#F3904F]/20"
              }`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              title="Toggle Recruiter Executive 30s View"
            >
              <Zap className={`w-3.5 h-3.5 ${recruiterMode ? "fill-white" : "fill-current"}`} />
              <span className="hidden sm:inline">
                {recruiterMode ? "Recruiter Mode ON" : "Recruiter View ⚡"}
              </span>
            </motion.button>

            {/* Sound Toggle */}
            <motion.button
              onClick={toggleSound}
              onMouseEnter={() => playHoverSound(soundEnabled)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode ? "glass-dark hover:bg-[#3B4371]/30" : "glass hover:bg-[#F3904F]/10"
              }`}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Sound Effects"
              title={soundEnabled ? "Mute sound effects" : "Unmute sound effects"}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#F3904F]" />
              ) : (
                <VolumeX className="w-4 h-4 text-gray-400" />
              )}
            </motion.button>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              onMouseEnter={() => playHoverSound(soundEnabled)}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode ? "glass-dark hover:bg-[#3B4371]/30" : "glass hover:bg-[#F3904F]/10"
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="light" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-4 h-4 text-[#F3904F]" />
                  </motion.div>
                ) : (
                  <motion.div key="dark" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-4 h-4 text-[#3B4371]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Hamburger */}
            <motion.button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className={`w-full h-0.5 rounded-full ${darkMode ? "bg-gray-200" : "bg-gray-800"}`}
                    animate={
                      isOpen
                        ? i === 0 ? { rotate: 45, y: 9 }
                        : i === 1 ? { opacity: 0 }
                        : { rotate: -45, y: -9 }
                        : { rotate: 0, y: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`md:hidden fixed inset-x-0 top-[60px] h-[calc(100vh-60px)] w-full z-50 shadow-2xl ${
                darkMode ? "bg-[#0b0e1b] text-white border-t border-[#3B4371]/40" : "bg-white text-black border-t border-[#F3904F]/30"
              }`}
              style={{ backgroundColor: darkMode ? "#0b0e1b" : "#ffffff" }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col p-8 space-y-4 pt-12">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
                      darkMode ? "text-gray-200 hover:bg-[#3B4371]/30 hover:text-[#F3904F]" : "text-gray-700 hover:bg-[#F3904F]/10 hover:text-[#F3904F]"
                    }`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
