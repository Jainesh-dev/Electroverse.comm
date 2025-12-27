import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-vibranium/10 blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-24 right-4 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-royal/10 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[720px] h-72 sm:h-[720px] rounded-full bg-silver/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `
              linear-gradient(rgba(170,85,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(170,85,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Main Title – centered Electroverse.comm */}
          <h1 className="font-tech font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-gray-300 drop-shadow-[0_0_22px_rgba(168,85,247,0.45)] mb-6 leading-tight break-words px-2 text-[clamp(2.2rem,8vw,5.5rem)]">
            ELECTROVERSE
            <span className="text-vibranium">.COMM</span>
          </h1>


          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-xl sm:max-w-2xl mx-auto font-mono">
            Powering the campus tech culture with innovation, events and strong
            student leadership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16">
            <Button
              variant="vibranium"
              size="xl"
              onClick={() => onNavigate("events")}
              className="w-full sm:w-auto"
            >
              Explore Events
            </Button>
            <Button
              variant="outline_vibranium"
              size="xl"
              onClick={() => onNavigate("about")}
              className="w-full sm:w-auto"
            >
              About the Committee
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl md:max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-lg p-6 glow-vibranium group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-bold text-vibranium mb-2">50+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                Committee Events
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-royal/20 rounded-lg p-6 glow-royal group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-bold text-royal mb-2">1000+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                Students Impacted
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-silver/20 rounded-lg p-6 glow-silver group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-3xl font-bold text-silver mb-2">25+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">
                Core & Volunteer Members
              </div>
            </div>
          </div>

          {/* Scroll Indicator – simple chevron, no circle */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => onNavigate("about")}
              className="focus:outline-none"
            >
              <ChevronDown className="text-vibranium w-7 h-7 sm:w-8 sm:h-8 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
