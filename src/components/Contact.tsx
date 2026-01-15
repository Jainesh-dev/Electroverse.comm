import React from "react";
import { Instagram, Twitter, Linkedin, Send, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/electroverse.comm_tsec/",
    linkedin: "https://www.linkedin.com/company/electroverse-comm-tsec/",
    twitter: "https://x.com/electrover27639",
    youtube:"https://www.youtube.com/@tsecextcdepartment8926",
  };

  return (
    <footer className="w-full bg-black text-white py-16 border-t border-white/10 relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center xl:items-start justify-between">

          {/* LOGO + ABOUT */}
          <div className="max-w-md w-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

              {/* LOGO */}
              <div
                className="w-20 h-20 sm:w-24 sm:h-24
                           rounded-full
                           bg-white/5 backdrop-blur-md
                           border border-white/10
                           flex items-center justify-center
                           shadow-[0_0_30px_rgba(168,85,247,0.25)]
                           transition hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
              >
                <img
                  src="/logo.webp"
                  alt="Electroverse Logo"
                  className="w-12 sm:w-14 object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="space-y-2">
                <h3 className="font-tech text-lg font-semibold tracking-[0.22em] uppercase">
                  Electroverse.COMM
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  A student-driven technical committee powered by creativity,
                  collaboration, and innovation.
                </p>

                <p className="text-xs text-purple-300/80 uppercase tracking-[0.3em]">
                  • learn • build • compete • grow•
                </p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 text-center sm:text-left">

            {/* ABOUT */}
            <div className="flex flex-col gap-4 min-w-[160px]">
              <h4 className="font-tech font-bold text-lg tracking-widest uppercase relative">
                About Us
                <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-8 h-0.5 bg-purple-500"></span>
              </h4>

              <div className="flex flex-col gap-3">
                <a href="#about" className="text-sm text-gray-400 hover:text-purple-400 transition">Our Mission</a>
                <a href="/team" className="text-sm text-gray-400 hover:text-purple-400 transition">Team Members</a>
                <a href="#events" className="text-sm text-gray-400 hover:text-purple-400 transition">Events</a>
                <a href="/team" className="text-sm text-gray-400 hover:text-purple-400 transition">Faculty Advisors</a>
              </div>
            </div>

            {/* GET INVOLVED */}
            <div className="flex flex-col gap-4 min-w-[160px]">
              <h4 className="font-tech font-bold text-lg tracking-widest uppercase relative">
                Get Involved
                <span className="absolute -bottom-2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 w-8 h-0.5 bg-emerald-500"></span>
              </h4>

              <div className="flex flex-col gap-3">
                <a href="#join" className="text-sm text-gray-400 hover:text-emerald-400 transition">Join the Club</a>
                <a href="#volunteer" className="text-sm text-gray-400 hover:text-emerald-400 transition">Volunteer</a>
                <a href="#sponsor" className="text-sm text-gray-400 hover:text-emerald-400 transition">Partner With Us</a>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-6 max-w-xs text-center xl:text-left">
            <h4 className="font-tech font-bold text-lg tracking-widest uppercase">
              Stay Connected
            </h4>

            <p className="text-sm text-gray-400">
              Follow us for{" "}
              <span className="text-purple-400 font-semibold">
                event updates & announcements.
              </span>
            </p>

            <div className="flex justify-center xl:justify-start gap-8 text-gray-500">
              <a href={socialLinks.twitter} className="hover:text-purple-400 hover:scale-110 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} className="hover:text-purple-400 hover:scale-110 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} className="hover:text-purple-400 hover:scale-110 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socialLinks.youtube} className="hover:text-purple-400 hover:scale-110 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <a
              href="mailto:tsec.electroverse@gmail.com"
              className="inline-flex mx-auto xl:mx-0 items-center gap-2 px-5 py-2 rounded-full
                         border border-purple-500/60 bg-white/5
                         hover:bg-purple-500/10
                         text-xs uppercase tracking-wide transition"
            >
              <Send className="w-4 h-4" /> Contact Us
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} ELECTROVERSE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
