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
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-12 pt-24 pb-14 bg-[#abc9cb] transition-colors duration-300"
    >
      {/* Main Asymmetrical Card Container */}
      <div className="max-w-6xl w-full mx-auto relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl bg-[#abc9cb] border border-white/30">
        
        {/* Asymmetrical Dark Background with Diagonal Angle Slice */}
        <div 
          className="absolute inset-0 bg-[#121820] pointer-events-none z-0 hidden lg:block"
          style={{
            clipPath: "polygon(0 0, 68% 0, 47% 100%, 0 100%)"
          }}
        >
          {/* Subtle Layered Organic Curved Wave Shapes */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-60" 
            viewBox="0 0 900 600" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <path
              d="M320 -80 C480 80, 560 220, 420 400 C340 500, 240 560, 100 620 L-40 620 L-40 -80 Z"
              fill="rgba(24, 34, 44, 0.7)"
            />
            <path
              d="M480 -80 C620 120, 640 300, 480 480 C390 580, 310 600, 220 640 L-40 640 L-40 -80 Z"
              fill="rgba(32, 45, 58, 0.45)"
            />
            <path
              d="M580 -80 C740 160, 720 360, 560 540 C490 620, 410 650, 320 680 L-40 680 L-40 -80 Z"
              fill="rgba(171, 201, 203, 0.04)"
            />
          </svg>
        </div>

        {/* Mobile / Tablet dark background fallback */}
        <div className="absolute inset-0 bg-[#121820] pointer-events-none z-0 lg:hidden" />

        {/* Card Content Grid */}
        <div className="relative z-10 px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Asymmetrical Typography & Actions */}
          <div className="w-full lg:w-7/12 text-left">
            
            {/* Main Headline with Sahbaj's Real Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] text-white mb-2">
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
                <MapPin className="w-3 h-3 text-[#f45b0b]" />
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
          <div className="w-full lg:w-5/12 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[420px]">
            
            {/* Top Layer: Photo Card with Powder Blue Border Frame (Offset Up & Right) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative z-20 self-center lg:self-end lg:mr-4 mb-[-50px] sm:mb-[-65px] lg:mb-[-80px]"
            >
              <div className="p-3 sm:p-3.5 bg-[#abc9cb] rounded-3xl shadow-2xl shadow-black/40 border border-white/40">
                <div className="w-44 h-48 sm:w-52 sm:h-56 md:w-56 md:h-60 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="/profile.jpeg"
                    alt="Sahbaj Khan"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bottom Layer: Dark Terminal Code Editor Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative z-10 w-full max-w-sm sm:max-w-md rounded-2xl bg-[#0c1217] border border-slate-700/70 p-4 sm:p-5 shadow-2xl shadow-black/60 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200"
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
                <p>&#125;</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
