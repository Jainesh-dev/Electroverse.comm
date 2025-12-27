import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import EventCountdown from "@/components/EventCountdown";
import AboutSection from "@/components/About";
import EventsSection from "@/components/Events";
import TeamSection from "@/components/Team";
import ContactSection from "@/components/Contact";
import PastSponsors from "@/components/PastSponsors";

import { Instagram, Linkedin } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const socialLinks = {
     instagram: "https://www.instagram.com/electroverse.comm_tsec/",
    linkedin: "https://www.linkedin.com/company/electroverse-comm-tsec/"
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "team", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <section id="home">
          <HeroSection onNavigate={handleNavigate} />
          <EventCountdown />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="events">
          <EventsSection />
        </section>

        <section id="team">
          <TeamSection />
        </section>

        <section id="sponsors">
          <PastSponsors />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      
    </div>
  );
};

export default Index;