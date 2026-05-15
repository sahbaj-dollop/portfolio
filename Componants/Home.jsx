import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaArrowRight, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiPostman } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { useTheme } from "../Context/ThemeContext";

// ── Full-screen floating tech icons ──────────────────────────────
const floatingTechs = [
  // left side
  { Icon: FaReact,       color: "#61DAFB", size: 38, x: "6%",   y: "15%", dur: 6,   delay: 0,   rotate: true  },
  { Icon: SiMongodb,     color: "#47A248", size: 34, x: "4%",   y: "45%", dur: 7,   delay: 1,   rotate: false },
  { Icon: FaNodeJs,      color: "#339933", size: 36, x: "8%",   y: "72%", dur: 5,   delay: 0.5, rotate: false },
 
  { Icon: FaHtml5,       color: "#E34F26", size: 32, x: "3%",   y: "85%", dur: 6.5, delay: 1.5, rotate: false },
  { Icon: SiTailwindcss, color: "#06B6D4", size: 28, x: "18%",  y: "60%", dur: 9,   delay: 0.8, rotate: false },
  // right side
  { Icon: SiExpress,     color: "#888888", size: 30, x: "82%",  y: "20%", dur: 7,   delay: 0.3, rotate: false },
  { Icon: FaCss3Alt,     color: "#1572B6", size: 34, x: "88%",  y: "50%", dur: 6,   delay: 1.2, rotate: false },
  { Icon: FaGitAlt,      color: "#F05032", size: 32, x: "78%",  y: "75%", dur: 8,   delay: 0.7, rotate: false },
  { Icon: SiPostman,     color: "#FF6C37", size: 28, x: "92%",  y: "35%", dur: 5.5, delay: 1.8, rotate: false },
  { Icon: FaReact,       color: "#61DAFB", size: 24, x: "85%",  y: "85%", dur: 7.5, delay: 2.5, rotate: true  },
  { Icon: SiMongodb,     color: "#47A248", size: 26, x: "75%",  y: "12%", dur: 6,   delay: 0.4, rotate: false },
  // top / bottom scattered
  
  { Icon: FaNodeJs,      color: "#339933", size: 26, x: "60%",  y: "8%",  dur: 7,   delay: 0.6, rotate: false },
  { Icon: FaHtml5,       color: "#E34F26", size: 24, x: "45%",  y: "92%", dur: 8,   delay: 1.4, rotate: false },
  { Icon: SiTailwindcss, color: "#06B6D4", size: 22, x: "25%",  y: "90%", dur: 6,   delay: 2,   rotate: false },
]

// "Available for work" badge also floats
const FloatingBadge = ({ darkMode }) => (
  <motion.div
    className={`absolute z-20 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold pointer-events-none ${
      darkMode ? "glass-dark text-green-400 border border-green-500/20" : "glass-card text-green-600 border border-green-300/50"
    }`}
    style={{ top: "12%", left: "22%" }}
    animate={{
      y: [0, -12, 0],
      x: [0, 8, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
  >
    <motion.span
      className="w-2 h-2 rounded-full bg-green-500"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
    Available for work
  </motion.div>
)

const FloatingTechIcon = ({ Icon, color, size, x, y, dur, delay, rotate, darkMode }) => (
  <motion.div
    className={`absolute z-10 flex items-center justify-center rounded-xl pointer-events-none ${
      darkMode ? "glass-dark" : "glass-card"
    }`}
    style={{
      left: x,
      top: y,
      width: size + 20,
      height: size + 20,
      boxShadow: `0 0 20px ${color}22`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.6, 1, 0.6],
      y: [0, -18, 0],
      x: [0, 10, 0],
      scale: [1, 1.08, 1],
      rotate: rotate ? [0, 360] : [0, 0],
    }}
    transition={{
      opacity: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
      y:       { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
      x:       { duration: dur * 1.3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
      scale:   { duration: dur * 0.8, repeat: Infinity, ease: "easeInOut", delay },
      rotate:  rotate ? { duration: 8, repeat: Infinity, ease: "linear" } : {},
      opacity: { delay: 0.5 + delay * 0.3, duration: 0.5 },
      scale:   { delay: 0.5 + delay * 0.3, duration: 0.4, type: "spring" },
    }}
  >
    <Icon style={{ color, fontSize: size }} />
  </motion.div>
)

const Home = () => {
  const { darkMode } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialLinks = [
    { icon: <FaGithub />,             href: "https://github.com/shahbazkhan075",                  label: "GitHub"   },
    { icon: <FaLinkedinIn />,         href: "https://www.linkedin.com/in/sahbaj-khan-24138a338/", label: "LinkedIn" },
    { icon: <MdOutlineMailOutline />, href: "mailto:sahbajkhan6593@gmail.com",                    label: "Email"    },
  ];

  return (
    <div
      id="home"
      className={`relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-8 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-black"
      } ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      {/* ── Animated background blobs ── */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ── Full-screen floating tech icons ── */}
      {floatingTechs.map((tech, i) => (
        <FloatingTechIcon key={i} {...tech} darkMode={darkMode} />
      ))}

      {/* ── Floating "Available for work" badge ── */}
      <FloatingBadge darkMode={darkMode} />

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Sahbaj Khan</span>
            </motion.h1>

            <motion.div
              className="h-1 w-32 rounded-full mx-auto md:mx-0 mb-5"
              style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.p
              className={`text-2xl md:text-3xl font-semibold mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className={`text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              I craft digital experiences that blend creativity with functionality.
              Passionate about building scalable web applications using modern technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-3 overflow-hidden glow-blue"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <MdOutlineMailOutline className="text-xl relative z-10" />
                <span className="relative z-10">Hire Me</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.a
                href="/sahbajkhan.pdf"
                download
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className={`px-8 py-4 border-2 border-blue-600 font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                  darkMode ? "text-blue-400 hover:bg-blue-600/10" : "text-blue-600 hover:bg-blue-50"
                }`}>
                  <HiDocumentArrowDown className="text-xl" />
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
                  className={`h-12 w-12 rounded-full flex items-center justify-center text-xl ${
                    darkMode ? "glass-dark text-white" : "glass text-gray-700"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/40"
                style={{ margin: "-20px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-purple-400/20"
                style={{ margin: "-40px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-blue-300/10"
                style={{ margin: "-60px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Profile image */}
              <motion.div
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: "0 0 50px rgba(59,130,246,0.35)" }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </motion.div>

              {/* Glow blobs */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-blue-500/25 blur-2xl pointer-events-none"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-purple-500/25 blur-2xl pointer-events-none"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Home;
