import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { 
  Mail, 
  ArrowRight, 
  FileDown, 
  Eye, 
  X, 
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
      darkMode ? "glass-dark text-orange-400 border border-orange-500/30 shadow-lg shadow-orange-500/10" : "glass-card text-orange-600 border border-orange-300/60 shadow-lg shadow-orange-500/10"
    }`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.span
      className="w-2.5 h-2.5 rounded-full bg-orange-500 glow-orange"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
    Available for work
  </motion.div>
)

const Home = () => {
  const { darkMode } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        darkMode ? "bg-black text-white" : "bg-gradient-to-br from-orange-50 via-white to-amber-50 text-black"
      } ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      {/* ── Animated background blobs ── */}
      <motion.div
        className="absolute top-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hi, I'm <span className="gradient-text">Sahbaj Khan</span> 👋
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-semibold text-orange-500 mb-6"
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

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10 justify-center md:justify-start w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {/* Primary Hire Me Button */}
              <motion.button
                onClick={scrollToContact}
                className="group relative px-6 py-3.5 bg-orange-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 overflow-hidden glow-orange text-sm md:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Mail className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                <span className="relative z-10">Hire Me</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Secondary Buttons Row on Mobile */}
              <div className="flex gap-2.5 w-full sm:w-auto">
                <motion.button
                  onClick={() => setShowResumeModal(true)}
                  className={`flex-1 sm:flex-none px-4 md:px-5 py-3 md:py-3.5 border-2 border-orange-500 font-semibold rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm transition-all duration-300 ${
                    darkMode ? "text-orange-400 hover:bg-orange-500/10" : "text-orange-600 hover:bg-orange-50"
                  }`}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Resume</span>
                </motion.button>

                <motion.a
                  href="/sahbajkhan.pdf"
                  download
                  className="flex-1 sm:flex-none"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <button className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-neutral-900 border border-neutral-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm transition-all duration-300 hover:border-orange-500">
                    <FileDown className="w-4 h-4 text-orange-400" />
                    <span>Download</span>
                  </button>
                </motion.a>
              </div>
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
                    darkMode ? "glass-dark text-white hover:text-orange-400 hover:border-orange-500/50" : "glass text-gray-700 hover:text-orange-600 hover:border-orange-400"
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
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/40"
                style={{ margin: "-8px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-amber-500/30"
                style={{ margin: "-20px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile image */}
              <motion.div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-orange-500/30 shadow-2xl relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: "0 0 40px rgba(249,115,22,0.35)" }}
              >
                {!imgLoaded && (
                  <div className="absolute inset-0 rounded-full shimmer bg-gray-300/50" />
                )}
                <img
                  src="/profile.jpeg"
                  alt="Sahbaj Khan"
                  className={`w-full h-full object-cover transition-all duration-700 ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  onLoad={() => setImgLoaded(true)}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Resume Modal Overlay ── */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              className={`relative w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
                darkMode ? "bg-neutral-900 border border-neutral-800" : "bg-white border border-orange-200"
              }`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-orange-500/20 bg-black/40">
                <div className="flex items-center gap-3">
                  <FileDown className="text-orange-500 w-6 h-6" />
                  <h2 className="font-bold text-lg text-white">Sahbaj Khan — Official Resume</h2>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/sahbajkhan.pdf"
                    download
                    className="px-4 py-1.5 text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-1.5 rounded-full hover:bg-neutral-800 text-gray-300 hover:text-white transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* PDF View */}
              <div className="flex-1 w-full h-full bg-neutral-950">
                <iframe
                  src="/sahbajkhan.pdf"
                  title="Sahbaj Khan Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
