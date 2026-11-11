
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowRight, FileDown, MapPin, Copy, Check, Terminal } from "lucide-react";
import toast from "react-hot-toast";
import { useTheme } from "../Context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();
  const [copiedCode, setCopiedCode] = useState(false);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />,     href: "https://github.com/sahbaj-dollop",                   label: "GitHub"   },
    { icon: <FaLinkedinIn className="w-5 h-5" />, href: "https://www.linkedin.com/in/sahbaj-khan-24138a338/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />,         href: "mailto:sahbajkhan6593@gmail.com",                    label: "Email"    },
  ];

  const coreTech = [
    "React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"
  ];

  const codeSnippet = `const engineer = {
  name: "Sahbaj Khan",
  role: "Full Stack Developer",
  experience: "2+ Years",
  currentCompany: "Dollop Infotech",
  stack: ["React", "Next.js", "Node.js"]
};`

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    toast.success("Snippet copied to clipboard");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-[92vh] flex items-center justify-center px-5 md:px-10 lg:px-12 pt-28 pb-16 transition-colors duration-300 overflow-hidden ${
        darkMode ? "bg-[#090b11] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Subtle Ambient Background Mesh */}
      {darkMode && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      )}

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Left Column: Natural Human Introduction */}
          <div className="md:w-7/12 text-center md:text-left">
            
            {/* Status Pill */}
            <motion.div 
              variants={itemVariants}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border ${
                darkMode 
                  ? "bg-slate-800/80 text-emerald-400 border-slate-700" 
                  : "bg-white text-emerald-700 border-slate-200 shadow-sm"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Available for full-time roles & projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
            >
              Hi, I&apos;m <span className="text-blue-500">Sahbaj Khan</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl font-medium text-slate-400 dark:text-slate-300 mb-5"
            >
              Full Stack Developer specializing in React, Next.js & Node.js
            </motion.p>

            {/* Natural Bio */}
            <motion.p 
              variants={itemVariants}
              className={`text-base leading-relaxed mb-6 max-w-xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I have 2+ years of hands-on experience building full-stack web applications. Currently working at <strong>Dollop Infotech</strong>, where I develop visual code editors, e-commerce applications, and scalable REST APIs. I enjoy writing clean, maintainable code and building interfaces that feel fast and intuitive.
            </motion.p>

            {/* Location Tag */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-8"
            >
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Based in Indore, MP, India • Open to remote worldwide</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 mb-8 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/sahbajkhan.pdf"
                download
                className={`w-full sm:w-auto px-6 py-3 font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition border ${
                  darkMode 
                    ? "bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700" 
                    : "bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm"
                }`}
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`p-2.5 rounded-lg border transition-colors ${
                    darkMode 
                      ? "bg-slate-850 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700" 
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Profile Image + Interactive Code Snippet */}
          <motion.div 
            className="md:w-5/12 flex flex-col items-center gap-4"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src="/profile.jpeg"
                  alt="Sahbaj Khan"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Minimal floating badge */}
              <div className={`absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl border text-xs font-semibold shadow-md ${
                darkMode ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-800"
              }`}>
                <span>2+ Yrs Experience</span>
              </div>
            </div>

            {/* Interactive Developer Code Card */}
            <div className={`w-full max-w-sm rounded-xl border p-3.5 font-mono text-[11px] leading-relaxed shadow-sm transition-all ${
              darkMode 
                ? "bg-slate-900/90 border-slate-800 text-slate-300" 
                : "bg-white border-slate-200 text-slate-700"
            }`}>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  <span className="font-semibold text-[10px]">engineer.ts</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] hover:text-white transition cursor-pointer"
                  title="Copy snippet"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="space-y-0.5">
                <p><span className="text-purple-400">const</span> engineer = &#123;</p>
                <p className="pl-3">name: <span className="text-emerald-400">&quot;Sahbaj Khan&quot;</span>,</p>
                <p className="pl-3">role: <span className="text-emerald-400">&quot;Full Stack Dev&quot;</span>,</p>
                <p className="pl-3">company: <span className="text-blue-400">&quot;Dollop Infotech&quot;</span>,</p>
                <p className="pl-3">experience: <span className="text-amber-400">&quot;2+ Years&quot;</span></p>
                <p>&#125;;</p>
              </div>
            </div>

          </motion.div>

        </motion.div>

        {/* Tech Stack Bar */}
        <motion.div 
          className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center gap-4 text-xs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
            Primary Tech:
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {coreTech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-md font-medium border transition-colors ${
                  darkMode 
                    ? "bg-slate-850 border-slate-800 text-slate-300 hover:border-slate-700" 
                    : "bg-white border-slate-200 text-slate-700 shadow-sm hover:border-slate-300"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
