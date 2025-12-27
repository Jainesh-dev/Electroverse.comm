import { useEffect, useState } from "react";
import { Users, Target, Zap, Code } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student-Led Community",
      description:
        "A core team of passionate students driving events, initiatives, and collaborations that represent the spirit of our department.",
      color: "electric",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Clear Mission & Vision",
      description:
        "To bridge the gap between classroom learning and industry expectations through structured events, mentorship, and projects.",
      color: "cyber",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flagship Events",
      description:
        "From hackathons and circuitry challenges to tech summits and panel talks, we curate experiences that define the academic year.",
      color: "neon",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech Tracks & Growth",
      description:
        "Dedicated focus tracks in coding, electronics, AI/ML, and product building so every member can grow in a structured way.",
      color: "electric",
    },
  ];

  // ---------------------------
  // PHOTO SLIDER LOGIC
  // ---------------------------
  const photos = [
    "/Event_1.jpg",
    "/Techathon 2025.jpg",
    "/Event_2.jpg",
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timeout);
  }, [photos.length]);

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" id="about">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-4 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-cyber/10 blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 left-4 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-electric/10 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 text-cyber">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
              About The Committee
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-tech font-bold mb-3 sm:mb-4">
            <span className="text-electric">POWERING</span>{" "}
            <span className="text-cyber">THE FUTURE</span>
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4 sm:mb-6">
            Official Technical Committee • By the Students • For the Students
          </p>

          <div className="max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground">
            <p>
              <span className="text-electric font-semibold">Electroverse</span>{" "}
              is the official student-driven technical committee that brings
              together developers, hardware geeks, designers, and innovators
              under one banner.
            </p>
            <p>
              We act as a bridge between{" "}
              <span className="font-medium text-foreground">
                academics, industry, and peer learning
              </span>
              . Through events, workshops, mentorship, and hands-on sessions, we
              ensure every member gets exposure to real-world technologies.
            </p>
            <p>
              Whether you're beginning or already advanced, Electroverse gives
              you a platform to{" "}
              <span className="text-electric font-semibold">
                learn, lead & leave a legacy
              </span>
              .
            </p>
          </div>
        </div>

        {/* ---------------------------------- */}
        {/* NEW: PHOTO SLIDER (AUTO-CHANGING) */}
        {/* ---------------------------------- */}
        <div className="relative w-full max-w-3xl mx-auto h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`event-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] 
                ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              `}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`bg-card/50 backdrop-blur-sm border border-${feature.color}/20 rounded-lg p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 ${
                feature.color === "electric"
                  ? "glow-electric"
                  : feature.color === "cyber"
                  ? "glow-cyan"
                  : "glow-purple"
              }`}
            >
              <div className={`text-${feature.color} mb-3 flex justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Badge Row */}
        <div className="flex flex-wrap justify-center gap-3 text-[11px] sm:text-xs text-muted-foreground">
          <span className="px-3 py-1 rounded-full border border-electric/40 bg-electric/10 text-electric font-medium">
            Student-Led Technical Body
          </span>
          <span className="px-3 py-1 rounded-full border border-cyber/40 bg-cyber/10 text-cyber font-medium">
            Hackathons • Workshops • Summits
          </span>
          <span className="px-3 py-1 rounded-full border border-neon/40 bg-neon/10 text-neon font-medium">
            Open to All Passionate Tech Enthusiasts
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
