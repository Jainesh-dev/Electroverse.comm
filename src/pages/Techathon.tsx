import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useVelocity, 
  useAnimationFrame, 
  useMotionValue
} from "framer-motion";
import { Link } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import { 
  ChevronRight, Hexagon, Shield, Zap, Globe, Target, 
  Brain, Bot, Wifi, Leaf, Lightbulb, Clock, Rocket,
  Twitter, Instagram, Github, Mail, Menu, X, Download,
  Database, Cloud, Glasses, Coins, Cpu, Users, Coffee,
  Timer
} from "lucide-react";
import { wrap } from "@motionone/utils";

// --- CONFIGURATION ---
const HERO_IMAGE_URL = "/Tech_BG.png"; 
const REGISTRATION_URL = "https://your-google-form-link.com";
const BROCHURE_URL = "/brochure.pdf"; 
const EVENT_DATE = "2026-10-12T09:00:00"; 

// --- ANIMATION VARIANTS ---
const smoothTransition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] };

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: smoothTransition }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: smoothTransition }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: smoothTransition }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: smoothTransition }
};

// --- HELPER COMPONENTS ---

const ScrollToLink = ({ target, children, className }: any) => {
  const handleClick = () => {
    const element = document.getElementById(target);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  return <button onClick={handleClick} className={className}>{children}</button>;
};

const SectionHeader = ({ chapter, title, color = "fuchsia" }: { chapter: string, title: string, color?: string }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
    className="flex justify-center mb-16"
  >
    <div className={`inline-flex items-center gap-4 border border-${color}-500/30 px-6 py-2 bg-black/40 backdrop-blur-sm rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
      <span className={`text-${color}-400/80 animate-pulse`}><Clock size={12} /></span>
      <span className={`text-[10px] font-mono tracking-[0.3em] text-${color}-400 uppercase`}>
        {chapter} <span className="text-gray-600 mx-2">//</span> {title}
      </span>
    </div>
  </motion.div>
);

const ChamferCard = ({ children, className = "" }: any) => (
  <div 
    className={`relative bg-[#050505]/80 backdrop-blur-md border border-white/5 p-8 hover:border-white/20 transition-all duration-500 hover:shadow-2xl ${className}`}
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

// --- COUNTDOWN COMPONENT ---
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(EVENT_DATE) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 font-cyber text-white">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="text-xl md:text-2xl font-bold bg-[#0a0a0a] border border-fuchsia-500/30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-sm text-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.1)]">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[8px] tracking-widest text-gray-500 mt-1 uppercase">{unit.substring(0,3)}</span>
        </div>
      ))}
    </div>
  );
};

// --- SECTIONS ---

// 1. SCROLL VELOCITY MARQUEE
function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (smoothVelocity.get() < 0) directionFactor.current = -1;
    else if (smoothVelocity.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * (Math.abs(smoothVelocity.get()) / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap opacity-10 select-none pointer-events-none">
      <motion.div className="flex whitespace-nowrap flex-nowrap text-6xl md:text-9xl font-black font-cyber uppercase text-white" style={{ x }}>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
      </motion.div>
    </div>
  );
}

// 2. NAVBAR
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-fuchsia-500/20 py-3' : 'bg-transparent border-transparent py-6'}`}
      >
        <div className="px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <Hexagon className="text-yellow-400 fill-yellow-400/10 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-cyber font-bold text-white tracking-widest text-lg group-hover:text-yellow-400 transition-colors">
              Electroverse.comm
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <ScrollToLink target="mission" className="text-xs font-mono text-gray-300 hover:text-fuchsia-400 tracking-widest transition-colors uppercase">MISSION</ScrollToLink>
            <ScrollToLink target="domains" className="text-xs font-mono text-gray-300 hover:text-fuchsia-400 tracking-widest transition-colors uppercase">DOMAINS</ScrollToLink>
            <ScrollToLink target="timeline" className="text-xs font-mono text-gray-300 hover:text-fuchsia-400 tracking-widest transition-colors uppercase">TIMELINE</ScrollToLink>
            
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black font-bold font-cyber px-6 py-2 text-sm tracking-widest hover:bg-white transition-colors hover:shadow-[0_0_15px_rgba(250,204,21,0.6)]" style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}>
              REGISTER
            </a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

// 3. HERO
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
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">
      <motion.div 
        className="absolute inset-0 z-0" 
        animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }} 
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      >
        <img src={HERO_IMAGE_URL} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center leading-none select-none">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <motion.h1 style={{ y: y2 }} className="font-cyber text-[15vw] md:text-[180px] font-black text-yellow-400 tracking-tighter z-20 drop-shadow-[0_0_35px_rgba(250,204,21,0.6)] mix-blend-screen">TECH</motion.h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
            <motion.h1 style={{ y: y1 }} className="font-cyber text-[15vw] md:text-[180px] font-black text-fuchsia-500 tracking-tighter -mt-[4vw] md:-mt-[60px] z-10 drop-shadow-[0_0_35px_rgba(217,70,239,0.6)] mix-blend-screen">ATHON</motion.h1>
        </motion.div>
        
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="mt-8 bg-yellow-400 text-black px-8 py-1 shadow-[0_0_20px_rgba(250,204,21,0.5)]" style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}>
          <span className="font-cyber text-4xl font-black">4.0</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-80 z-20 animate-bounce">
        <span className="text-[10px] font-mono tracking-widest text-fuchsia-400">SCROLL TO INITIALIZE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fuchsia-400 to-transparent"></div>
      </div>
    </section>
  );
};

// 4. MISSION (UPDATED WITH ANIMATED STATS)
const MissionSection = () => (
  <section id="mission" className="py-32 px-6 max-w-7xl mx-auto relative">
    <SectionHeader chapter="CHAPTER II" title="THE MISSION" color="fuchsia" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeRight}>
        <h2 className="text-6xl md:text-8xl font-black font-cyber leading-[0.9] mb-8">
          <span className="text-white">MISSION</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">BRIEFING</span>
        </h2>
        <p className="text-xl text-gray-400 font-hud max-w-md border-l-2 border-fuchsia-500 pl-6 mb-8">
          Your guide to understanding the protocol. Read carefully before initialization. We are looking for the architects of the next digital age.
        </p>
        
        {/* COUNTDOWN & BUTTON GROUP */}
        <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-mono tracking-widest">
                <Timer size={14} />
                <span>T-MINUS INITIALIZATION</span>
            </div>
            
            <CountdownTimer />

            <a href={BROCHURE_URL} download className="inline-flex items-center gap-3 px-8 py-4 bg-fuchsia-900/20 border border-fuchsia-500/50 hover:bg-fuchsia-500 hover:text-white transition-all duration-300 font-mono text-sm tracking-widest text-fuchsia-300 group w-fit">
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> DOWNLOAD DATA PACK
            </a>
        </div>

      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeLeft} className="bg-[#050505]/80 backdrop-blur-md border border-white/5 p-8" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
        {/* ANIMATED STATS GRID */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-12 text-center">
          {[
            { label: "PLAYERS", val: "500+", icon: <Shield size={20} className="text-fuchsia-400" /> },
            { label: "RUNTIME", val: "48H", icon: <Zap size={20} className="text-yellow-400" /> },
            { label: "PROJECTS", val: "50+", icon: <Target size={20} className="text-fuchsia-400" /> },
            { label: "REWARDS", val: "₹1L+", icon: <Globe size={20} className="text-blue-400" /> },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-2 group hover:scale-105 transition-transform duration-300">
              <div className="mb-2 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">{stat.icon}</div>
              <span className="text-4xl font-black font-cyber text-white">{stat.val}</span>
              <span className="text-xs font-mono text-gray-500 tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// 5. WHY SECTION (The Trilogy)
const WhySection = () => {
  const cards = [
    {
      id: "01",
      title: "THE GENESIS",
      desc: "It began with a simple question: What if we could build anything? The origin of Techathon lies in the pursuit of pure, unadulterated innovation.",
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      hoverBorder: "group-hover:border-cyan-400",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
      delay: 0
    },
    {
      id: "02",
      title: "WHY WE EXIST",
      desc: "We believe in breaking barriers. Our mission is to create a space where creativity meets technology, where students transform into builders.",
      color: "text-yellow-400",
      border: "border-yellow-500/30",
      hoverBorder: "group-hover:border-yellow-400",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]",
      delay: 0.2
    },
    {
      id: "03",
      title: "WHAT YOU'LL BUILD",
      desc: "Create cutting-edge solutions across AI, IoT, blockchain, and more. From prototypes to MVPs, build products that define the future.",
      color: "text-fuchsia-500",
      border: "border-fuchsia-500/30",
      hoverBorder: "group-hover:border-fuchsia-500",
      hoverGlow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto space-y-12">
      {cards.map((card, i) => (
        <motion.div 
          key={card.id}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: card.delay }}
          className="relative pl-12 md:pl-0 group"
        >
          {/* Animated Connecting Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 + card.delay }}
            className="hidden md:block absolute left-[-50px] top-1/2 w-[50px] h-[1px] bg-white/10 origin-left"
          />

          <div 
            className={`flex flex-col md:flex-row gap-8 items-start md:items-center bg-[#050505]/80 backdrop-blur-sm border border-white/5 p-8 transition-all duration-500 ${card.hoverBorder} ${card.hoverGlow} hover:bg-[#080808]`}
            style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
          >
            {/* Number Box */}
            <div className={`w-24 h-24 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent font-cyber text-4xl font-bold text-white/20 ${card.border} border-l-4 transition-colors duration-300 group-hover:text-white group-hover:bg-white/5`}>
              {card.id}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className={`text-2xl font-bold font-cyber flex items-center gap-3 ${card.color} transition-transform duration-300 group-hover:translate-x-2`}>
                <Hexagon size={20} className="fill-current transition-transform duration-700 group-hover:rotate-180" />
                {card.title}
              </h3>
              <p className="text-gray-400 font-hud text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                {card.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
// 6. DOMAINS
const DomainsSection = () => (
  <section id="domains" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
    <div className="absolute inset-0 top-20 pointer-events-none">
        <ParallaxText baseVelocity={2}>DOMAINS REALMS SECTORS</ParallaxText>
        <ParallaxText baseVelocity={-2}>BUILD DEPLOY INNOVATE</ParallaxText>
    </div>
    
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20 relative z-10">
       <div className="inline-flex items-center gap-4 border border-blue-500/30 px-8 py-2 bg-black/40 backdrop-blur rounded-full mb-8">
          <span className="text-xs font-mono tracking-[0.3em] text-blue-400 uppercase">CHAPTER III // THE REALMS</span>
       </div>
       <h2 className="text-5xl md:text-7xl font-black font-cyber text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">CHOOSE YOUR<br/>DOMAIN</h2>
    </motion.div>
    
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {[
        { t: "AI & Neural Nets", i: Brain, c: "yellow" }, { t: "Robotics & Auto", i: Bot, c: "pink" },
        { t: "IoT & Smart Tech", i: Wifi, c: "purple" }, { t: "Cybersecurity", i: Shield, c: "pink" },
        { t: "Green Energy", i: Leaf, c: "yellow" }, { t: "Open Innovation", i: Lightbulb, c: "purple" },
        { t: "Blockchain", i: Database, c: "yellow" }, { t: "Cloud & DevOps", i: Cloud, c: "pink" },
        { t: "AR / VR / XR", i: Glasses, c: "purple" }, { t: "Fintech", i: Coins, c: "yellow" },
      ].map((d, i) => (
        <motion.div key={i} variants={fadeUp} className="group relative bg-[#050505] border border-white/5 h-72 flex flex-col justify-between p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 ${d.c === 'yellow' ? 'border-yellow-400' : d.c === 'pink' ? 'border-fuchsia-500' : 'border-purple-500'} opacity-50 group-hover:opacity-100`}></div>
          <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center"><d.i size={24} className={d.c === 'yellow' ? 'text-yellow-400' : d.c === 'pink' ? 'text-fuchsia-500' : 'text-purple-500'} /></div>
          <h3 className="text-xl font-bold font-cyber text-white">{d.t}</h3>
        </motion.div>
      ))}
    </motion.div>

    {/* PERK CARDS */}
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 relative z-10">
       {[
         { icon: Cpu, title: "HARDWARE LAB", desc: "IoT Kits & Rasp Pi provided", c: "yellow" },
         { icon: Users, title: "24/7 MENTORSHIP", desc: "Expert guidance available", c: "pink" },
         { icon: Coffee, title: "REFRESHMENTS", desc: "Energy for the marathon", c: "purple" }
       ].map((card, i) => (
         <motion.div key={i} variants={fadeUp} className="flex items-center gap-4 bg-[#050505] border border-white/10 p-6 rounded-sm hover:border-white/30 transition-colors">
            <div className={`p-3 rounded-full bg-${card.c === 'yellow' ? 'yellow-400' : card.c === 'pink' ? 'fuchsia-500' : 'purple-500'}/10 text-${card.c === 'yellow' ? 'yellow-400' : card.c === 'pink' ? 'fuchsia-500' : 'purple-500'}`}>
               <card.icon size={20} />
            </div>
            <div>
               <h4 className="font-cyber font-bold text-white text-sm">{card.title}</h4>
               <p className="font-mono text-xs text-gray-500">{card.desc}</p>
            </div>
         </motion.div>
       ))}
    </motion.div>
  </section>
);

// 8. TIMELINE
const TimelineSection = () => (
  <section id="timeline" className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
    <SectionHeader chapter="CHAPTER IV" title="THE JOURNEY" color="red" />
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24 relative z-10">
      <h2 className="text-6xl md:text-8xl font-black font-cyber mb-4"><span className="text-white">48-HOUR</span><br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">PROTOCOL</span></h2>
    </motion.div>
    <div className="absolute left-4 md:left-1/2 top-[300px] bottom-0 w-[1px] bg-gradient-to-b from-red-900 via-red-500 to-transparent opacity-30 md:-translate-x-1/2"></div>
    <div className="space-y-24 relative z-10">
      {[ 
        { id: "1", title: "INITIALIZATION", sub: "System Boot", align: "left", color: "red" },
        { id: "2", title: "DEVELOPMENT", sub: "Build & Optimize", align: "right", color: "orange" },
        { id: "3", title: "DEPLOYMENT", sub: "Final Evaluation", align: "left", color: "purple" }
      ].map((item, i) => (
        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={item.align === "left" ? fadeRight : fadeLeft} className={`flex flex-col md:flex-row items-center justify-between w-full`}>
           <div className={`w-full md:w-5/12 ${item.align === "left" ? "order-2 md:order-1" : "order-2 md:order-3"} relative`}>
              <div className={`border-${item.color}-500/30 bg-[#050505] border p-8 hover:bg-[#0a0a0a] transition-colors duration-500`} style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
                 <h3 className={`text-2xl font-bold font-cyber text-white mb-1 text-${item.color}-400`}>{item.title}</h3>
                 <p className={`text-${item.color}-400/60 text-sm`}>{item.sub}</p>
                 
                 {/* RESTORED DETAILED CONTENT FOR PHASES */}
                 {item.id === "1" && <ul className="space-y-2 font-mono text-xs text-gray-400 mt-4">{["Opening Ceremony", "Team Formation", "Idea Validation"].map(li => <li key={li} className="flex gap-2"><span className="text-red-500">&gt;</span> {li}</li>)}</ul>}
                 {item.id === "2" && <ul className="space-y-2 font-mono text-xs text-gray-400 mt-4">{["Prototyping", "Mentorship Rounds", "Midnight Refresh"].map(li => <li key={li} className="flex gap-2"><span className="text-orange-500">&gt;</span> {li}</li>)}</ul>}
                 {item.id === "3" && <ul className="space-y-2 font-mono text-xs text-gray-400 mt-4">{["Final Pitch", "Jury Verdict", "Prize Distribution"].map(li => <li key={li} className="flex gap-2"><span className="text-purple-500">&gt;</span> {li}</li>)}</ul>}

              </div>
           </div>
           <div className={`w-12 h-12 bg-[#050505] border-2 border-${item.color}-500 flex items-center justify-center font-bold text-${item.color}-500 z-10 mb-8 md:mb-0 order-1 md:order-2 rounded-full shadow-[0_0_15px_${item.color}]`}>{item.id}</div>
           <div className={`w-full md:w-5/12 ${item.align === "left" ? "order-3" : "order-3 md:order-1"}`}></div>
        </motion.div>
      ))}
    </div>
  </section>
);

// 9. CTA
const CTASection = () => (
  <section id="register" className="py-32 px-6 text-center relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none"></div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="relative z-10">
      <h2 className="text-6xl md:text-9xl font-black font-cyber text-yellow-400 mb-6 drop-shadow-[0_0_25px_rgba(252,238,10,0.5)]">READY TO ENTER<br/>THE GRID?</h2>
      <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-4 bg-yellow-400 text-black font-black font-cyber text-xl px-12 py-6 hover:bg-white transition-colors shadow-[0_0_20px_rgba(252,238,10,0.4)]" style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}>
         INITIALIZE PROTOCOL <ChevronRight />
      </a>
    </motion.div>
  </section>
);

// 10. COMPACT & ORGANIZED FOOTER (ANIMATED)
const Footer = () => (
  <footer className="border-t border-white/10 bg-black py-8 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Brand */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="flex items-center gap-2 mb-4">
            <Hexagon className="text-fuchsia-600 w-6 h-6" />
            <span className="font-cyber font-bold text-lg text-white tracking-widest">TECHATHON v4.0</span>
          </div>
          <p className="text-gray-500 font-mono text-xs leading-relaxed max-w-xs">
            The ultimate convergence of code, creativity, and chaos. Join the revolution.
          </p>
        </motion.div>

        {/* Organized Links */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.1 }} className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-cyber text-white font-bold tracking-widest mb-3 text-xs">EXPLORE</h4>
            <div className="flex flex-col gap-2">
              {["Mission", "Domains", "Timeline", "Register"].map((item) => (
                <ScrollToLink key={item} target={item.toLowerCase()} className="text-left text-gray-500 hover:text-yellow-400 font-mono text-xs transition-colors w-fit flex items-center group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 mr-1">&gt;</span> {item}
                </ScrollToLink>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-cyber text-white font-bold tracking-widest mb-3 text-xs">LEGAL</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-left text-gray-500 hover:text-yellow-400 font-mono text-xs transition-colors w-fit">Privacy Policy</a>
              <a href="#" className="text-left text-gray-500 hover:text-yellow-400 font-mono text-xs transition-colors w-fit">Terms of Service</a>
              <a href="#" className="text-left text-gray-500 hover:text-yellow-400 font-mono text-xs transition-colors w-fit">Code of Conduct</a>
            </div>
          </div>
        </motion.div>

        {/* Connect (CENTERED CONTENT) */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }} className="flex flex-col items-center md:items-start">
          <h4 className="font-cyber text-white font-bold tracking-widest mb-3 text-xs">CONNECT</h4>
          <div className="flex gap-4 mb-4">
            {[Twitter, Instagram, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-yellow-400 hover:text-yellow-400 transition-all rounded-sm">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="text-gray-600 font-mono text-[10px] text-center md:text-left">
            <p>San Francisco, CA // Sector 7G</p>
            <p>contact@electroverse.io</p>
          </div>
        </motion.div>

      </div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.3 }} className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-700 font-mono text-[10px]">© 2026 ELECTROVERSE SYSTEMS. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-2 text-gray-700 font-mono text-[10px]">
            <span>SYSTEM_STATUS:</span>
            <span className="text-green-500 animate-pulse">ONLINE</span>
        </div>
      </motion.div>
    </div>
  </footer>
);

// --- MAIN PAGE COMPONENT ---
const TechathonPage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 0.7, 1], // Tweaked for smoother transition
    [
      "#050505", // Hero: Void Black
      "#050505", // Mission: Stay Black longer
      "#0f0518", // Why/Chapter 3: DEEP OBSIDIAN PURPLE (Professional)
      "#050a14", // Domains: Deep Navy
      "#120505", // Timeline: Dark Oxide
      "#000000"  // Footer: Pitch Black
    ]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1.2 }}> {/* ULTRA SMOOTH SCROLL TUNING */}
      <motion.div style={{ backgroundColor }} className="min-h-screen text-white font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden transition-colors duration-1000">
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
        <MissionSection />
        <WhySection />
        <DomainsSection />
        <TimelineSection />
        <CTASection />
        <Footer />
      </motion.div>
    </ReactLenis>
  );
};

export default TechathonPage;
