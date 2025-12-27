import React from "react";
import { Instagram, Facebook, Twitter, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/electroverse.comm_tsec/",
    linkedin: "https://www.linkedin.com/company/electroverse-comm-tsec/"
  };
  return (
    <footer className="w-full bg-black text-white py-16 border-t border-white/10 font-sans relative overflow-hidden">
      {/* --- THEME BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
          {/* 1. LOGO + SHORT ABOUT (improved layout) */}
          <div className="flex-shrink-0 max-w-md">
            {/* Logo + tagline in a row on larger screens */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="w-24 h-28 bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-3 rounded-lg group hover:border-purple-500/60 transition-colors duration-500 relative">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <img
                  src="/logo.png"
                  alt="Electroverse Logo"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              </div>

              <div className="text-center sm:text-left space-y-2">
                <h3 className="font-tech text-lg font-semibold tracking-[0.18em] uppercase text-gray-100">
                  Electroverse
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The official{" "}
                  <span className="text-purple-400 font-semibold">
                    technical innovation club
                  </span>{" "}
                  driven by students, powered by creativity &amp; teamwork.
                </p>
                <p className="text-xs text-purple-300/80 uppercase tracking-[0.25em]">
                  • learn • build • compete • grow •
                </p>
              </div>
            </div>
          </div>

          {/* 2. LINKS SECTION */}
          <div className="flex-grow flex flex-wrap gap-14 xl:gap-24">
            {/* Column 1 – About */}
            <div className="flex flex-col gap-6 min-w-[160px]">
              <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase relative inline-block">
                About Us
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-500"></span>
              </h4>

              <div className="flex flex-col gap-3">
                <a
                  href="#about"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Our Mission
                </a>
                <a
                  href="#team"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Team Members
                </a>
                <a
                  href="#events"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Events
                </a>
                <a
                  href="#mentors"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Faculty Advisors
                </a>
              </div>
            </div>

            {/* Column 2 – Get Involved */}
            <div className="flex flex-col gap-6 min-w-[160px]">
              <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase relative inline-block">
                Get Involved
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500"></span>
              </h4>

              <div className="flex flex-col gap-3">
                <a
                  href="#join"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Join the Club
                </a>
                <a
                  href="#volunteer"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Volunteer
                </a>
                <a
                  href="#sessions"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Attend Sessions
                </a>
                <a
                  href="#sponsor"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>

          {/* 3. SOCIALS + CONTACT */}
          <div className="flex flex-col gap-6 max-w-xs">
            <h4 className="font-tech font-bold text-lg text-white tracking-widest uppercase">
              Stay Connected
            </h4>

            <p className="text-sm text-gray-400">
              Follow us for{" "}
              <span className="text-purple-400 font-semibold">
                event updates, workshops &amp; announcements.
              </span>
            </p>

            <div className="grid grid-cols-4 gap-6 text-gray-500">
              <a
                href="#"
                className="hover:text-purple-400 hover:scale-110 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-purple-400 hover:scale-110 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                className="hover:text-purple-400 hover:scale-110 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                className="hover:text-purple-400 hover:scale-110 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="mailto:electroverse@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/60 bg-white/5 hover:bg-purple-500/10 hover:border-purple-400 text-xs font-medium uppercase tracking-wide transition-all"
            >
              <Send className="w-4 h-4" /> Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            
          </div>

          <p className="tracking-wide opacity-70 text-center md:text-right">
            © 2025 ELECTROVERSE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
