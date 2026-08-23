import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { 
  Mail, 
  ArrowRight, 
  FileDown, 
  Eye, 
  X,
  ChevronDown, 
  Code2, 
  Terminal, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Server, 
  FolderGit2, 
  Workflow, 
  Sparkles 
} from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

// Inline Available for work badge
const AvailableBadge = ({ darkMode }) => (
  <motion.div
    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-6 ${
      darkMode ? "glass-dark text-[#F3904F] border border-[#F3904F]/30 shadow-lg shadow-[#F3904F]/10 bg-[#3B4371]/20" : "glass-card text-[#F3904F] border border-[#F3904F]/40 shadow-lg shadow-[#F3904F]/10"
    }`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.span
      className="w-2.5 h-2.5 rounded-full bg-[#F3904F] glow-orange"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
    Available for work
  </motion.div>
)

const Home = () => {
  const { darkMode, recruiterMode, soundEnabled } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const [showDirectContactModal, setShowDirectContactModal] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const scrollToContact = () => {
    playClickSound(soundEnabled);
    setShowDirectContactModal(false);
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const nameInput = document.getElementById("contact-form-name");
        if (nameInput) {
          nameInput.focus();
        }
      }, 700);
    }
  };

  const handleDirectContactClick = () => {
    playClickSound(soundEnabled);
    setShowDirectContactModal(true);
  };

  const titleWords = [
    { text: "Hi,", gradient: false },
    { text: "I'm", gradient: false },
    { text: "Sahbaj", gradient: true },
    { text: "Khan", gradient: true },
  ];

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 110,
      },
    },
  };

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />,     href: "https://github.com/sahbaj-dollop",                   label: "GitHub"   },
    { icon: <FaLinkedinIn className="w-5 h-5" />, href: "https://www.linkedin.com/in/sahbaj-khan-24138a338/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />,         href: "mailto:sahbajkhan6593@gmail.com",                    label: "Email"    },
  ];

  return (
    <div
      id="home"
      className={`relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-28 md:pt-36 pb-16 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-[#0b0e1b] text-white" : "bg-gradient-to-br from-[#3B4371]/10 via-white to-[#F3904F]/10 text-black"
      } ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      {/* ── Animated background blobs ── */}
      <motion.div
        className="absolute top-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(243,144,79,0.18) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,67,113,0.25) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        
        {/* Recruiter Mode Executive Banner */}
        <AnimatePresence>
          {recruiterMode && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="mb-8 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-[#3B4371] via-[#1d2138] to-[#3B4371] text-white border-2 border-[#F3904F] shadow-2xl shadow-[#F3904F]/20 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F3904F] text-white animate-bounce shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#F3904F]">
                        Recruiter Fast-Track (30s Executive Pitch)
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mt-0.5">
                      Full Stack Engineer (MERN / Next.js) — 1+ Year Experience
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 mt-1 max-w-3xl leading-relaxed">
                      Specialized in React 19, Next.js, Node.js REST APIs, MongoDB, and TypeScript. Hands-on experience engineering kids visual Blockly code editor and full-stack MERN e-commerce platforms at Dollop Infotech.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
                  <a
                    href="/sahbajkhan.pdf"
                    download
                    onClick={() => playClickSound(soundEnabled)}
                    className="px-4 py-2.5 rounded-xl bg-[#F3904F] hover:bg-[#d87535] text-white font-bold text-xs flex items-center gap-1.5 transition shadow-md cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    Download Resume PDF
                  </a>
                  <a
                    href="https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity!"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound(soundEnabled)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-md"
                  >
                    <Mail className="w-4 h-4 text-[#F3904F]" />
                    Direct Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <AvailableBadge darkMode={darkMode} />

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight flex flex-wrap items-center gap-x-3 justify-center md:justify-start"
              variants={wordContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className={
                    word.gradient
                      ? "bg-gradient-to-r from-[#3B4371] via-[#8c5667] to-[#F3904F] dark:from-[#7d8adb] dark:via-[#f6a772] dark:to-[#F3904F] bg-clip-text text-transparent font-extrabold inline-block"
                      : darkMode
                      ? "text-white font-extrabold inline-block"
                      : "text-gray-900 font-extrabold inline-block"
                  }
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-semibold text-[#F3904F] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full Stack Developer (MERN / Next.js)
            </motion.p>

            <motion.p
              className={`text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto md:mx-0 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I architect high-performance, full-stack web applications combining sleek modern UI design, scalable backend REST APIs, and intuitive user experiences built on React, Next.js, Node.js, and MongoDB.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center md:justify-start w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {/* Primary Hire Me Button */}
              <motion.button
                onClick={scrollToContact}
                onMouseEnter={() => playHoverSound(soundEnabled)}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-[#3B4371] to-[#F3904F] text-white font-semibold rounded-xl flex items-center justify-center gap-2 overflow-hidden glow-orange text-sm md:text-base w-full sm:w-auto whitespace-nowrap shadow-lg shadow-[#F3904F]/20 cursor-pointer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#F3904F] to-[#3B4371]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Mail className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                <span className="relative z-10">Hire Me</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Download Resume Button */}
              <motion.a
                href="/sahbajkhan.pdf"
                download
                onClick={() => playClickSound(soundEnabled)}
                onMouseEnter={() => playHoverSound(soundEnabled)}
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <button className="w-full px-7 py-3.5 bg-[#0f1226] border border-[#3B4371] text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-sm whitespace-nowrap transition-all duration-300 hover:border-[#F3904F] hover:shadow-lg hover:shadow-[#F3904F]/10 cursor-pointer">
                  <FileDown className="w-4 h-4 text-[#F3904F]" />
                  <span>Download Resume</span>
                </button>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`h-11 w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center text-lg md:text-xl transition-colors ${
                    darkMode ? "glass-dark text-white hover:text-[#F3904F] hover:border-[#F3904F]/50" : "glass text-gray-700 hover:text-[#F3904F] hover:border-[#F3904F]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile image */}
          <motion.div
            className="md:w-1/2 flex justify-center py-4 md:py-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative p-4 md:p-6">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#F3904F]/50"
                style={{ margin: "-8px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-[#3B4371]/60"
                style={{ margin: "-20px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile image */}
              <motion.div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#F3904F]/40 shadow-2xl relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: "0 0 40px rgba(243,144,79,0.35)" }}
              >
                {!imgLoaded && (
                  <div className="absolute inset-0 rounded-full shimmer bg-[#3B4371]/20" />
                )}
                <img
                  src="/profile.jpeg"
                  alt="Sahbaj Khan"
                  className={`w-full h-full object-cover transition-all duration-700 ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  onLoad={() => setImgLoaded(true)}
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Direct Contact Quick Action Modal ── */}
      <AnimatePresence>
        {showDirectContactModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDirectContactModal(false)}
          >
            <motion.div
              className={`relative w-full max-w-md p-6 rounded-3xl shadow-2xl border ${
                darkMode ? "bg-[#0b0e1b] border-[#3B4371] text-white" : "bg-white border-[#F3904F]/30 text-gray-900"
              }`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F3904F]/20">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#F3904F]/20 text-[#F3904F]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg">Direct Executive Contact</h3>
                    <p className="text-xs text-gray-400">Get in touch with Sahbaj Khan instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDirectContactModal(false)}
                  className="p-1.5 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 my-4">
                <a
                  href="mailto:sahbajkhan6593@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#3B4371]/20 hover:bg-[#F3904F]/20 border border-[#F3904F]/30 flex items-center justify-between gap-3 text-sm font-bold text-[#F3904F] transition group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#F3904F]" />
                    <span>Email: sahbajkhan6593@gmail.com</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+916265666859"
                  className="p-3.5 rounded-2xl bg-[#3B4371]/20 hover:bg-[#F3904F]/20 border border-[#F3904F]/30 flex items-center justify-between gap-3 text-sm font-bold text-[#F3904F] transition group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-[#F3904F]" />
                    <span>Call: +91 6265666859</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/916265666859?text=Hi%20Sahbaj,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-green-500/15 hover:bg-green-500/25 border border-green-500/40 flex items-center justify-between gap-3 text-sm font-bold text-green-400 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span>WhatsApp Direct Chat</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#3B4371] to-[#F3904F] text-white font-extrabold text-sm hover:opacity-95 transition shadow-lg shadow-[#F3904F]/20 cursor-pointer"
              >
                Or Fill Full Contact Form
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bouncing Scroll Indicator ── */}
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full text-[#F3904F] hover:text-[#f6a772] transition-colors hidden sm:flex items-center justify-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down to About section"
      >
        <ChevronDown className="w-7 h-7 text-[#F3904F]" />
      </motion.button>
    </div>
  );
};

export default Home;
