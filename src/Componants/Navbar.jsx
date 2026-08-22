import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
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
      // active section tracking
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
    const el = document.querySelector(href);
    if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "glass-dark shadow-lg shadow-orange-500/10"
            : "glass shadow-lg shadow-orange-500/10"
          : darkMode ? "bg-black/90" : "bg-white/90"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="px-4 md:px-6 py-3 md:py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="text-xl md:text-2xl font-bold gradient-text cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            Sahbaj Khan
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : darkMode ? "text-gray-300 hover:text-orange-400" : "text-gray-700 hover:text-orange-500"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-orange-500/10 border border-orange-500/30"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                    />
                  )}
                  {item.name}
                </motion.button>
              );
            })}
          </div>

          {/* Right */}
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                darkMode ? "glass-dark hover:bg-neutral-800" : "glass hover:bg-orange-50"
              }`}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div key="light" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-5 h-5 text-orange-400" />
                  </motion.div>
                ) : (
                  <motion.div key="dark" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-5 h-5 text-gray-700" />
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
                darkMode ? "bg-black text-white border-t border-neutral-800" : "bg-white text-black border-t border-orange-200"
              }`}
              style={{ backgroundColor: darkMode ? "#000000" : "#ffffff" }}
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
                      darkMode ? "text-gray-200 hover:bg-neutral-800" : "text-gray-700 hover:bg-orange-50"
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
