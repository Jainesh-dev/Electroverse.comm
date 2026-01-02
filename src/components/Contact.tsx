import React from "react";
import { Instagram, Twitter, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/electroverse.comm_tsec/",
    linkedin: "https://www.linkedin.com/company/electroverse-comm-tsec/",
    twitter: "https://x.com/electrover27639",
  };

  return (
    <footer className="w-full bg-black text-white py-16 border-t border-white/10 font-sans relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12">

          {/* Logo + About */}
          <div className="max-w-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-28 bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-3 rounded-lg">
                <img
                  src="/logo.png"
                  alt="Electroverse Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              </div>

              <div className="text-center sm:text-left space-y-2">
                <h3 className="font-tech text-lg font-semibold tracking-[0.18em] uppercase">
                  Electroverse
                </h3>
                <p className="text-sm text-gray-400">
                  A student-driven technical committee powered by creativity,
                  collaboration, and innovation.
                </p>
                <p className="text-xs text-purple-300/80 uppercase tracking-[0.25em]">
                  • learn • build • compete • grow •
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16 xl:gap-24">

            {/* About */}
            <div className="flex flex-col gap-6 min-w-[160px]">
              <h4 className="font-tech font-bold text-lg tracking-widest uppercase relative">
                About Us
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-500"></span>
              </h4>

              <div className="flex flex-col gap-3">
                <a href="#about" className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Our Mission
                </a>
                <a href="/team" className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Team Members
                </a>
                <a href="#events" className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Events
                </a>
                <a href="/team" className="text-sm text-gray-400 hover:text-purple-400 transition">
                  Faculty Advisors
                </a>
              </div>
            </div>

            {/* Get Involved */}
            <div className="flex flex-col gap-6 min-w-[160px]">
              <h4 className="font-tech font-bold text-lg tracking-widest uppercase relative">
                Get Involved
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-500"></span>
              </h4>

              <div className="flex flex-col gap-3">
                <a href="#join" className="text-sm text-gray-400 hover:text-emerald-400 transition">
                  Join the Club
                </a>
                <a href="#volunteer" className="text-sm text-gray-400 hover:text-emerald-400 transition">
                  Volunteer
                </a>
                <a href="#sponsor" className="text-sm text-gray-400 hover:text-emerald-400 transition">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6 max-w-xs">
            <h4 className="font-tech font-bold text-lg tracking-widest uppercase">
              Stay Connected
            </h4>

            <p className="text-sm text-gray-400">
              Follow us for{" "}
              <span className="text-purple-400 font-semibold">
                event updates & announcements.
              </span>
            </p>

            {/* CENTERED SOCIAL ICONS */}
            <div className="grid grid-cols-3 gap-6 justify-center place-items-center text-gray-500">
              <a href={socialLinks.twitter} className="hover:text-purple-400 hover:scale-110 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} className="hover:text-purple-400 hover:scale-110 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} className="hover:text-purple-400 hover:scale-110 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <a
              href="mailto:electroverse@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/60 bg-white/5 hover:bg-purple-500/10 text-xs uppercase tracking-wide transition"
            >
              <Send className="w-4 h-4" /> Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
          <p className="opacity-70">© 2025 ELECTROVERSE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
