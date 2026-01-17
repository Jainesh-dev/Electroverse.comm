import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ChevronRight, Hexagon, Shield, Zap, Globe, Target, 
  Brain, Bot, Wifi, Leaf, Lightbulb, Clock, Rocket,
  Twitter, Instagram, Github, Mail, Menu, X
} from "lucide-react";

// --- CONFIGURATION ---
// 1. PASTE YOUR BACKGROUND IMAGE URL HERE
const HERO_IMAGE_URL = "/public/Tech_BG.png"; 

// 2. PASTE YOUR MAIN WEBSITE URL HERE
const MAIN_WEBSITE_URL = "https://electroverse.io"; 

// --- HELPER FUNCTIONS ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- REUSABLE COMPONENTS ---

// Section Header 
const SectionHeader = ({ chapter, title }: { chapter: string, title: string }) => (
  <div className="flex justify-center mb-16">
    <div className="inline-flex items-center gap-4 border border-fuchsia-500/30 px-8 py-2 bg-black/40 backdrop-blur">
      <span className="text-yellow-400/80"><Clock size={14} /></span>
      <span className="text-xs font-mono tracking-[0.3em] text-fuchsia-400 uppercase">
        {chapter} <span className="text-gray-500 mx-2">//</span> {title}
      </span>
    </div>
  </div>
);

// Chamfered Card
const ChamferCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div 
    className={`relative bg-[#0f0f0f] border border-white/5 p-8 ${className}`}
    style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
  >
    {/* Corner Accents */}
    <div className="absolute top-0 left-0 w-4 h-[1px] bg-white/20"></div>
    <div className="absolute top-0 left-0 h-4 w-[1px] bg-white/20"></div>
    <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white/20"></div>
    <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-white/20"></div>
    {children}
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "MISSION", target: "mission" },
    { name: "DOMAINS", target: "domains" },
    { name: "TIMELINE", target: "timeline" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-fuchsia-500/20 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Now Links to Main Website */}
          <a 
            href={MAIN_WEBSITE_URL}
            className="flex items-center gap-2 cursor-pointer group"
          >
           <img
                  src="/logo.webp"
                  alt="Electroverse Logo"
                  className="w-12 sm:w-14 object-contain"
                />
            <span className="font-cyber font-bold text-white tracking-widest text-lg group-hover:text-yellow-400 transition-colors">
              Electroverse.comm
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => scrollToSection(link.target)}
                className="text-xs font-mono text-gray-400 hover:text-fuchsia-400 tracking-widest transition-colors relative group"
              >
                <span className="opacity-0 group-hover:opacity-100 absolute -left-3 text-fuchsia-500 transition-opacity">&gt;</span>
                {link.name}
              </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('register')}
              className="bg-yellow-400 text-black font-bold font-cyber px-6 py-2 text-sm tracking-widest hover:bg-white transition-colors"
              style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
            >
              REGISTER
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
           {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => { scrollToSection(link.target); setMobileMenuOpen(false); }}
                className="text-xl font-cyber text-white hover:text-yellow-400 tracking-widest"
              >
                {link.name}
              </button>
            ))}
             <button 
              onClick={() => { scrollToSection('register'); setMobileMenuOpen(false); }}
              className="text-xl font-cyber text-yellow-400 tracking-widest mt-4"
            >
              [ REGISTER NOW ]
            </button>
        </div>
      )}
    </>
  );
};

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      
      {/* --- HERO BACKGROUND IMAGE SPACE --- */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: 1.1, x: mousePos.x * -1, y: mousePos.y * -1 }}
      >
        <img 
          src={HERO_IMAGE_URL} 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
          alt="Hero Background" 
        />
        {/* This gradient fades the image into the background color at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </motion.div>
      {/* ----------------------------------- */}

      <div className="relative z-10 flex flex-col items-center leading-none select-none">
        <motion.h1 style={{ y: y2 }} className="font-cyber text-[15vw] md:text-[180px] font-black text-yellow-400 tracking-tighter mix-blend-difference z-20">
          TECH-A-
        </motion.h1>
        <motion.h1 style={{ y: y1 }} className="font-cyber text-[15vw] md:text-[180px] font-black text-fuchsia-500 tracking-tighter -mt-[4vw] md:-mt-[60px] mix-blend-difference z-10">
          THON
        </motion.h1>
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}
          className="mt-8 bg-yellow-400 text-black px-8 py-1"
          style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
        >
          <span className="font-cyber text-4xl font-black">4.0</span>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50 z-20">
        <span className="text-[10px] font-mono tracking-widest text-fuchsia-400">SCROLL TO INITIALIZE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fuchsia-400 to-transparent"></div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
    <SectionHeader chapter="CHAPTER I" title="ABOUT TECHATHON" />

    <ChamferCard className="border-fuchsia-500/30">
      <h2 className="text-4xl font-cyber text-yellow-400 mb-6">
        WHAT IS TECHATHON 4.0?
      </h2>

      <p className="text-gray-400 font-hud text-lg leading-relaxed">
        Techathon 4.0 is Electroverse’s flagship 48-hour national-level hackathon,
        where innovators, developers, and creators collaborate to solve
        real-world problems using cutting-edge technology.
      </p>
      <section id="brochure">
        <a
          href="/Techathon_4.0_Brochure.pdf"
          download
          className="inline-flex items-center gap-3 mt-6 bg-fuchsia-500 text-black px-8 py-3 font-cyber"
          >
        DOWNLOAD BROCHURE
        </a>
      </section>
      

    </ChamferCard>
    
  </section>
  
);


const MissionSection = () => {
  return (
    <section id="mission" className="py-32 px-6 max-w-7xl mx-auto relative">
      <SectionHeader chapter="CHAPTER II" title="THE MISSION" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-6xl md:text-8xl font-black font-cyber leading-[0.9] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">MISSION</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">BRIEFING</span>
          </h2>
          <p className="text-xl text-gray-400 font-hud max-w-md border-l-2 border-fuchsia-500 pl-6">
            Your guide to understanding the protocol. Read carefully before initialization. 
          </p>
        </div>

        <ChamferCard className="bg-[#0f0f0f]/50 backdrop-blur-sm border-fuchsia-500/20">
          <div className="grid grid-cols-2 gap-12 text-center">
            {[
              { label: "PLAYERS", val: "500+", icon: <Shield size={20} className="text-fuchsia-500" /> },
              { label: "RUNTIME", val: "48H", icon: <Zap size={20} className="text-yellow-400" /> },
              { label: "PROJECTS", val: "50+", icon: <Target size={20} className="text-fuchsia-500" /> },
              { label: "REWARDS", val: "₹1L+", icon: <Globe size={20} className="text-purple-500" /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="mb-2 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">{stat.icon}</div>
                <span className={`text-4xl font-black font-cyber ${i % 2 === 0 ? 'text-fuchsia-500' : (i === 1 ? 'text-yellow-400' : 'text-purple-500')}`}>
                  {stat.val}
                </span>
                <span className="text-xs font-mono text-gray-500 tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </ChamferCard>
      </div>
    </section>
  );
};

const ProblemStatementsSection = () => (
  <section id="problems" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionHeader chapter="CHAPTER V" title="PROBLEM STATEMENTS" />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Smart Healthcare Monitoring",
        "AI-based Campus Security",
        "Sustainable Energy Solutions",
        "Women Safety Systems",
        "Smart City Automation",
        "FinTech for Rural India",
      ].map((title, i) => (
        <ChamferCard key={i} className="hover:border-yellow-400/40">
          <h3 className="font-cyber text-lg text-yellow-400 mb-2">
            PROBLEM {i + 1}
          </h3>
          <p className="text-gray-400 font-mono text-sm">
            {title}
          </p>
        </ChamferCard>
      ))}
    </div>
  </section>
);

const WhySection = () => {
  const cards = [
    {
      id: "02",
      title: "WHY WE EXIST",
      desc: "We believe in breaking barriers. Our mission is to create a space where creativity meets technology.",
      color: "text-yellow-400",
      border: "border-yellow-400/50"
    },
    {
      id: "03",
      title: "WHAT YOU'LL BUILD",
      desc: "Create cutting-edge solutions across AI, IoT, blockchain, and more. From prototypes to MVPs.",
      color: "text-fuchsia-500",
      border: "border-fuchsia-500/50"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      {cards.map((card, i) => (
        <motion.div 
          key={card.id}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-12 md:pl-0"
        >
          <div className="hidden md:block absolute left-[-50px] top-1/2 w-[50px] h-[1px] bg-gray-800"></div>
          <ChamferCard className="flex flex-col md:flex-row gap-8 items-start md:items-center group hover:bg-white/5 transition-colors">
            <div className={`w-24 h-24 flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent font-cyber text-4xl font-bold text-white/20 group-hover:text-white transition-colors ${card.border} border-l-4`}>
              {card.id}
            </div>
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold font-cyber flex items-center gap-3 ${card.color}`}>
                <img
                  src="/logo.webp"
                  alt="Electroverse Logo"
                  className="w-12 sm:w-14 object-contain"
                />
                {card.title}
              </h3>
              <p className="text-gray-400 font-hud text-lg leading-relaxed max-w-2xl">{card.desc}</p>
            </div>
          </ChamferCard>
        </motion.div>
      ))}
    </section>
  );
};

const DomainsSection = () => {
  const domains = [
    { title: "AI & Machine Intelligence", sub: "Neural networks & cognitive computing", icon: Brain, color: "yellow" },
    { title: "Robotics & Automation", sub: "Autonomous systems & mechatronics", icon: Bot, color: "pink" },
    { title: "IoT & Embedded", sub: "Connected devices & edge computing", icon: Wifi, color: "purple" },
    { title: "Cybersecurity", sub: "Threat detection & cryptography", icon: Shield, color: "pink" },
    { title: "Sustainability", sub: "Green tech & eco-innovations", icon: Leaf, color: "yellow" },
    { title: "Open Innovation", sub: "Creative solutions for tomorrow", icon: Lightbulb, color: "purple" },
  ];

  return (
    <section id="domains" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader chapter="CHAPTER III" title="THE REALMS" />
      <div className="text-center mb-20">
         <h2 className="text-5xl md:text-7xl font-black font-cyber text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-500 mb-6">
            CHOOSE YOUR<br/>DOMAIN
         </h2>
         <p className="font-mono text-gray-500 text-sm tracking-widest">Six realms. Infinite possibilities. Select your battlefield.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((d, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
            className="group relative bg-[#0f0f0f] border border-white/5 overflow-hidden h-72 flex flex-col justify-between p-6 hover:border-white/20 transition-colors"
          >
            <div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 ${d.color === 'yellow' ? 'border-yellow-400 text-yellow-400' : d.color === 'pink' ? 'border-fuchsia-500 text-fuchsia-500' : 'border-purple-500 text-purple-500'} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <d.icon size={24} className={d.color === 'yellow' ? 'text-yellow-400' : d.color === 'pink' ? 'text-fuchsia-500' : 'text-purple-500'} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-cyber text-white mb-2">{d.title}</h3>
              <p className="text-sm text-gray-500 font-mono">{d.sub}</p>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${d.color === 'yellow' ? 'from-yellow-400/5' : d.color === 'pink' ? 'from-fuchsia-500/5' : 'from-purple-500/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
const RewardsSection = () => (
  <section id="rewards" className="py-32 px-6 max-w-6xl mx-auto">
    <SectionHeader chapter="CHAPTER VI" title="REWARDS & PERKS" />

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Cash Prizes", desc: "₹1,00,000+ prize pool" },
        { title: "Mentorship", desc: "Expert industry mentors" },
        { title: "Certificates", desc: "Participation & Merit" },
        { title: "Medals & Goodies", desc: "Top teams rewarded" },
      ].map((r, i) => (
        <ChamferCard key={i}>
          <h3 className="font-cyber text-yellow-400 mb-2">{r.title}</h3>
          <p className="text-gray-400 font-mono text-sm">{r.desc}</p>
        </ChamferCard>
      ))}
    </div>
  </section>
);


const TimelineSection = () => {
  return (
    <section id="timeline" className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
      <SectionHeader chapter="CHAPTER IV" title="THE JOURNEY" />
      
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-6xl md:text-8xl font-black font-cyber mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">48-HOUR</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">PROTOCOL</span>
        </h2>
        <p className="font-mono text-gray-400">Three phases. One destination. Infinite glory.</p>
      </div>

      <div className="absolute left-4 md:left-1/2 top-[300px] bottom-0 w-[1px] bg-gradient-to-b from-fuchsia-500 via-yellow-400 to-purple-500 opacity-30 md:-translate-x-1/2"></div>

      <div className="space-y-24 relative z-10">
        {/* PHASE 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-5/12 order-2 md:order-1 relative">
             <ChamferCard className="border-fuchsia-500/30">
                <div className="absolute -right-2 top-10 w-4 h-4 bg-fuchsia-500 rotate-45 hidden md:block"></div>
                <h3 className="text-2xl font-bold font-cyber text-white mb-1">INITIALIZATION</h3>
                <p className="text-gray-500 text-sm mb-6">System Boot</p>
                <ul className="space-y-3 font-mono text-sm text-gray-300">
                  {["Opening Ceremony", "Team Formation", "Problem Statement", "Mentor Matching", "Development Begins"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
             </ChamferCard>
          </div>
          <div className="w-12 h-12 bg-[#0f0f0f] border border-yellow-400 flex items-center justify-center font-bold text-yellow-400 z-10 mb-8 md:mb-0 order-1 md:order-2" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>1</div>
          <div className="w-full md:w-5/12 order-3"></div>
        </div>

        {/* PHASE 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
           <div className="w-full md:w-5/12 order-3 md:order-1"></div>
           <div className="w-12 h-12 bg-[#0f0f0f] border border-yellow-400 flex items-center justify-center font-bold text-yellow-400 z-10 mb-8 md:mb-0 order-1 md:order-2" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>2</div>
           <div className="w-full md:w-5/12 order-2 md:order-3 relative text-left">
              <div className="border-l border-t border-orange-400/50 p-6 relative">
                 <div className="absolute top-0 right-0 w-8 h-[1px] bg-orange-400"></div>
                 <h3 className="text-3xl font-bold font-cyber text-white mb-2">DEVELOPMENT</h3>
                 <p className="text-gray-400 mb-6">Build & Optimize</p>
                 <div className="inline-block border border-purple-500/50 bg-purple-500/10 px-4 py-2 text-purple-300 font-mono text-sm mb-6">
                    <Clock size={14} className="inline mr-2" /> 00:00 - 23:59
                 </div>
                 <button className="flex items-center gap-2 text-xs font-mono text-white hover:text-orange-400 transition-colors uppercase tracking-widest">
                    View Details <ChevronRight size={14} />
                 </button>
              </div>
           </div>
        </div>

        {/* PHASE 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="w-full md:w-5/12 order-2 md:order-1 relative text-right">
              <div className="border-r border-b border-yellow-400/50 p-6 relative">
                 <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-yellow-400"></div>
                 <div className="flex items-center justify-end gap-3 mb-2">
                    <h3 className="text-3xl font-bold font-cyber text-white">DEPLOYMENT</h3>
                    <Rocket className="text-pink-500" />
                 </div>
                 <p className="text-gray-400 mb-6">Final Evaluation</p>
                 <div className="inline-block border border-purple-500/50 bg-purple-500/10 px-4 py-2 text-purple-300 font-mono text-sm">
                    <Clock size={14} className="inline mr-2" /> 00:00 - 18:00
                 </div>
              </div>
          </div>
          <div className="w-12 h-12 bg-[#0f0f0f] border border-yellow-400 flex items-center justify-center font-bold text-yellow-400 z-10 mb-8 md:mb-0 order-1 md:order-2" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>3</div>
          <div className="w-full md:w-5/12 order-3"></div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="register" className="py-32 px-6 text-center relative overflow-hidden">
      <SectionHeader chapter="THE FINAL CALL" title="SYSTEM READY" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-6xl md:text-9xl font-black font-cyber text-yellow-400 mb-6 drop-shadow-[0_0_25px_rgba(252,238,10,0.5)]">
          READY TO ENTER<br/>THE GRID?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Join 500+ innovators in the ultimate 48-hour challenge. Build barriers. Become legend.
        </p>
        
        <button className="group relative inline-flex items-center justify-center gap-4 bg-yellow-400 text-black font-black font-cyber text-xl px-12 py-6 hover:bg-white transition-colors"
          style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
        >
           <Zap className="fill-black group-hover:rotate-12 transition-transform" />
           INITIALIZE PROTOCOL
           <Zap className="fill-black group-hover:-rotate-12 transition-transform" />
        </button>
      </div>
    </section>
  );
};
const FAQSection = () => (
  <section id="faq" className="py-32 px-6 max-w-5xl mx-auto">
    <SectionHeader chapter="CHAPTER VII" title="FAQ" />

    {[
      ["Who can participate?", "Students from any discipline."],
      ["Team size?", "2–4 members per team."],
      ["Is it free?", "Yes, completely free."],
      ["Mode?", "Offline / Hybrid."],
    ].map(([q, a], i) => (
      <ChamferCard key={i}>
        <h4 className="font-cyber text-yellow-400">{q}</h4>
        <p className="text-gray-400 mt-2">{a}</p>
      </ChamferCard>
    ))}
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-16">

        {/* BRAND */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div className="flex items-center gap-3">
            <img
                  src="/logo.webp"
                  alt="Electroverse Logo"
                  className="w-12 sm:w-14 object-contain"
                />
            <span className="font-cyber font-bold text-2xl text-white tracking-widest">
              TECHATHON 4.0
            </span>
          </div>

          <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm">
            The ultimate convergence of code, creativity, and chaos.  
            Join the revolution and build the future.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="font-cyber text-white font-bold tracking-widest text-lg mb-2">
            QUICK LINKS
          </h4>

          {["Mission", "Domains", "Timeline", "Register"].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item.toLowerCase() === "register"
                    ? "register"
                    : item.toLowerCase()
                )
              }
              className="text-gray-400 hover:text-yellow-400 font-mono text-sm transition-colors"
            >
              &gt; {item}
            </button>
          ))}
        </div>

        {/* CONNECT */}
        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <h4 className="font-cyber text-white font-bold tracking-widest text-lg">
            CONNECT
          </h4>

          <div className="flex gap-5 justify-center md:justify-end">
            {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-white/10 flex items-center justify-center 
                           text-gray-400 hover:text-black hover:bg-yellow-400 
                           hover:border-yellow-400 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-gray-500 font-mono text-xs">
            tsec.electroverse@gmail.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 pt-8 text-center">
        <p className="text-gray-600 font-mono text-xs">
          © {new Date().getFullYear()} ELECTROVERSE SYSTEMS. ALL RIGHTS RESERVED.
        </p>
      </div>

    </div>
  </footer>
);



// --- MAIN PAGE ---

const TechathonPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;700&family=Share+Tech+Mono&display=swap');
        .font-cyber { font-family: 'Orbitron', sans-serif; }
        .font-hud { font-family: 'Rajdhani', sans-serif; }
        .font-mono { font-family: 'Share Tech Mono', monospace; }
        .bg-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      <Navbar />
      <HeroSection />
      <AboutSection/>
      <MissionSection />
      <WhySection />
      <RewardsSection/>
      <DomainsSection />
      <TimelineSection />
      <CTASection />
      <FAQSection/>
      <Footer />
    </div>
  );
};

export default TechathonPage;
