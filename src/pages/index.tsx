import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ ADDED
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import EventCountdown from "@/components/EventCountdown";
import AboutSection from "@/components/About";
import EventsSection from "@/components/Events";
import ContactSection from "@/components/Contact";
import PastSponsors from "@/components/PastSponsors";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation(); // ✅ ADDED

  const handleNavigate = (section: string) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ✅ HANDLE SCROLL WHEN COMING BACK FROM EVENT DETAILS
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;

    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  // ✅ UPDATE ACTIVE SECTION ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "events", "contact"];
      const scrollPosition = window.scrollY + 120;

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
