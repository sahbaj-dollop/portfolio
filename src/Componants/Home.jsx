import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Copy, Check, Terminal } from "lucide-react";
import toast from "react-hot-toast";

const Home = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const codeSnippet = `const engineer = {
  name: "Sahbaj Khan",
  role: "Full Stack Dev",
  company: "Dollop Infotech",
  experience: "2+ Years"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    toast.success("Snippet copied to clipboard");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center bg-[#abc9cb] transition-colors duration-300 overflow-hidden"
    >
      {/* 
        Asymmetrical Dark Left Half:
        Spans full height from top: 0 to bottom: 100% and left: 0.
        NO blue space on top, NO blue space at the bottom, NO blue space on the left!
      */}
      <div 
        className="absolute inset-0 bg-[#11171f] pointer-events-none z-0 hidden lg:block"
        style={{
          clipPath: "polygon(0 0, 68% 0, 47% 100%, 0 100%)"
        }}
      >
        {/* Layered Organic Curved Wave Contours */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-70" 
          viewBox="0 0 900 600" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path
            d="M340 -80 C500 80, 580 230, 440 410 C350 510, 250 570, 110 630 L-40 630 L-40 -80 Z"
            fill="rgba(22, 32, 42, 0.75)"
          />
          <path
            d="M490 -80 C640 120, 650 310, 490 490 C400 590, 320 610, 230 650 L-40 650 L-40 -80 Z"
            fill="rgba(28, 42, 54, 0.55)"
          />
          <path
            d="M600 -80 C760 160, 740 370, 570 550 C500 630, 420 660, 330 690 L-40 690 L-40 -80 Z"
            fill="rgba(171, 201, 203, 0.05)"
          />
        </svg>
      </div>

      {/* Mobile / Tablet dark background fallback covering full section */}
      <div className="absolute inset-0 bg-[#11171f] pointer-events-none z-0 lg:hidden" />

      {/* Content Container (Padded inside z-10 so navbar floats cleanly above text) */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* Left Column: Restored Original Content */}
        <div className="w-full lg:w-[56%] text-left">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white mb-2">
            <span className="block">Hi, I&apos;m</span>
            <span className="block">Full Stack Developer</span>
            <span className="block text-[#f45b0b] mt-1">Sahbaj Khan</span>
          </h1>

          {/* Subtitle / Bio Paragraph */}
          <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-300 max-w-xl mt-5 mb-5 font-normal">
            I have 2+ years of hands-on experience building modern full-stack web applications. Currently engineering visual code editors, e-commerce applications, and scalable REST APIs at <strong className="text-white font-semibold">Dollop Infotech</strong>.
          </p>

          {/* Location Line */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-8 font-medium">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#f45b0b]/20 text-[#f45b0b]">
              <MapPin className="w-3.5 h-3.5 text-[#f45b0b]" />
            </span>
            <span>Based in Indore, MP, India • Open to remote worldwide</span>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="px-6 py-3 bg-[#f45b0b] hover:bg-[#e04f05] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 transition cursor-pointer shadow-lg shadow-[#f45b0b]/40"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/sahbajkhan.pdf"
              download
              className="px-6 py-3 bg-[#182028] hover:bg-[#202b36] text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 hover:border-white/40 transition flex items-center justify-center cursor-pointer shadow-md"
            >
              <span>Download Resume</span>
            </motion.a>
          </div>

        </div>

        {/* Right Column: Layered Offset Elements (Photo Card + Code Editor) */}
        <div className="w-full lg:w-[44%] flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[460px]">
          
          {/* Top Layer: Photo Card with Powder Blue Border Frame (Offset Up & Right) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-20 self-center lg:self-end lg:mr-4 mb-[-60px] sm:mb-[-75px] lg:mb-[-85px]"
          >
            <div className="p-3 sm:p-3.5 bg-[#abc9cb] rounded-3xl shadow-2xl shadow-black/40 border border-white/40">
              <div className="w-48 h-52 sm:w-56 sm:h-60 md:w-60 md:h-64 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="/profile.jpeg"
                  alt="Sahbaj Khan"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom Layer: Dark Terminal Code Editor Card (Offset Down & Left across the diagonal seam) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative z-10 w-full max-w-sm sm:max-w-md lg:self-start lg:ml-2 rounded-2xl bg-[#0c1217] border border-slate-700/70 p-4 sm:p-5 shadow-2xl shadow-black/60 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold text-xs">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                <span>engineer.ts</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition cursor-pointer"
                title="Copy snippet"
              >
                {copiedCode ? <Check className="w-3 h-3 text-[#f45b0b]" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Code Snippet Content */}
            <div className="space-y-1 text-slate-200">
              <p>
                <span className="text-[#f45b0b] font-bold">const</span> engineer = &#123;
              </p>
              <p className="pl-4">
                name: <span className="text-[#f45b0b] font-medium">&quot;Sahbaj Khan&quot;</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-[#f45b0b] font-medium">&quot;Full Stack Dev&quot;</span>,
              </p>
              <p className="pl-4">
                company: <span className="text-[#f45b0b] font-medium">&quot;Dollop Infotech&quot;</span>,
              </p>
              <p className="pl-4">
                experience: <span className="text-[#f45b0b] font-medium">&quot;2+ Years&quot;</span>
              </p>
              <p>&#125;;</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Home;
