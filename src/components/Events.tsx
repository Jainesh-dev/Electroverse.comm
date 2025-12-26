import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Zap, Cpu, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  type: "upcoming";
  description: string;
  participants: number;
  icon: React.ReactNode;
  color: string;
  detailedDescription: string;
  learnings: string[];
  experience: string[];
  pastWinners: { name: string; project: string }[];
}

const EventsSection = () => {
  const navigate = useNavigate();
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const events: Event[] = [
  {
    id: 2,
    title: "Circuitry Maze Workshop",
    date: "2024-03-15",
    type: "upcoming",
    description:
      "Hands-on workshop covering PCB design and electronic circuit fundamentals.",
    detailedDescription:
      "Learn PCB design, circuit simulation, and hands-on soldering techniques. Perfect for beginners and intermediate electronics enthusiasts.",
    participants: 45,
    icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "silver",
    learnings: [
      "PCB design using KiCAD",
      "Circuit simulation",
      "Component selection",
      "Soldering techniques",
    ],
    experience: [
      "Hands-on PCB assembly",
      "Live troubleshooting sessions",
      "Take-home project kit",
      "Industry expert guidance",
    ],
    pastWinners: [
      { name: "Arjun Mehta", project: "Smart Home Automation System" },
      { name: "Priya Sharma", project: "Solar Tracker Circuit" },
      { name: "Rohan Verma", project: "Audio Amplifier Design" },
    ],
  },
  {
    id: 1,
    title: "Techathon 2024",
    date: "2024-06-20",
    type: "upcoming",
    description:
      "Our flagship annual hackathon bringing together the best tech minds.",
    detailedDescription:
      "A 48-hour hackathon where participants solve real-world problems using technology. Focus areas include AI/ML, Web3, IoT, and Sustainable Tech.",
    participants: 200,
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "vibranium",
    learnings: [
      "Full-stack development",
      "Team collaboration",
      "Pitching ideas to investors",
      "Problem-solving under pressure",
    ],
    experience: [
      "48 hours of intense coding",
      "Mentorship from industry experts",
      "Networking with tech companies",
      "Prize pool of ₹50,000+",
    ],
    pastWinners: [
      { name: "Team Quantum", project: "AI-based Healthcare Diagnosis" },
      { name: "Byte Crushers", project: "Blockchain Voting System" },
      { name: "Circuit Wizards", project: "Smart Energy Management" },
    ],
  },
];


  const handleEventClick = (eventTitle: string) => {
    const slug = eventTitle
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    navigate(`/event/${slug}`);
  };

  return (
    // ✅ add id="events" so /#events can scroll here
    <section
      id="events"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-electric/10 blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-neon/10 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3 text-electric">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider">
              Our Events
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-tech font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="text-electric">UPCOMING</span>{" "}
            <span className="text-cyber">EVENTS</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4">
            Explore our upcoming events designed to fuel innovation and learning.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div
                className={`h-full bg-card/50 backdrop-blur-sm border border-${event.color}/20 rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-${event.color}/40 hover:shadow-lg hover:shadow-${event.color}/10 cursor-pointer`}
              >
                {/* Event Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div
                    className={`text-${event.color} p-2 sm:p-3 rounded-lg bg-${event.color}/10`}
                  >
                    {event.icon}
                  </div>
                  <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-electric/20 text-electric font-semibold">
                    Upcoming
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-foreground">
                  {event.title}
                </h3>

                {/* Date & Participants */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                {/* Hover Detailed Overlay */}
                {hoveredEvent === event.id && (
                  <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-electric/30 shadow-2xl z-20 animate-fade-in">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-electric">
                      What to Expect:
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-3">
                      {event.detailedDescription}
                    </p>

                    <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                      <h5 className="text-xs sm:text-sm font-semibold text-cyber">
                        Key Learnings:
                      </h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {event.learnings.slice(0, 3).map((learning, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="text-electric">•</span> {learning}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="vibranium"
                      size="sm"
                      className="w-full mt-1 sm:mt-2 text-xs sm:text-sm"
                      onClick={() => handleEventClick(event.title)}
                    >
                      View Details
                      <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                )}

                {/* View Details Button (Always visible) */}
                <Button
                  variant="outline_vibranium"
                  size="sm"
                  className="w-full mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm"
                  onClick={() => handleEventClick(event.title)}
                >
                  View Full Details
                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* EVENT JOURNEY → FULL TIMELINE PAGE */}
        <div className="mt-10 flex justify-center">
          <Button
            variant="vibranium"
            size="sm"
            className="flex items-center gap-2 text-xs sm:text-sm"
            onClick={() => navigate("/timeline")}
          >
            View Event Journey
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

