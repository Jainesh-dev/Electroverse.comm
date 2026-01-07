import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Zap, ArrowRight } from "lucide-react";
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

  const events: Event[] = [
    {
      id: 1,
      title: "Techathon 2026",
      date: "2026-02-26",
      type: "upcoming",
      description:
        "Our flagship annual hackathon bringing together the best tech minds.",
      detailedDescription:
        "A 48-hour hackathon where participants solve real-world problems using AI/ML, Web3, IoT, and Sustainable Tech.",
      participants: 100,
      icon: <Zap className="w-6 h-6" />,
      color: "vibranium",
      learnings: [],
      experience: [],
      pastWinners: [],
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
    <section id="events" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-48 h-48 bg-electric/10 blur-3xl rounded-full animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-neon/10 blur-3xl rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 text-electric">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Events
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-tech font-bold mb-4">
            <span className="text-electric">UPCOMING</span>{" "}
            <span className="text-cyber">EVENT</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our flagship event designed to push innovation and collaboration.
          </p>
        </div>

        {/* CENTERED EVENT CARD */}
        <div className="flex justify-center">
          {events.map((event) => (
            <div key={event.id} className="relative group w-full max-w-xl">
              <div className="relative bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-xl p-6 transition-all duration-300 hover:border-vibranium/40 hover:shadow-lg hover:shadow-vibranium/10">
                
                {/* ===== BASE CONTENT ===== */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-vibranium p-3 rounded-lg bg-vibranium/10">
                      {event.icon}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-electric/20 text-electric font-semibold">
                      Upcoming
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.participants}+ participants
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {event.description}
                  </p>

                  <Button
                    variant="outline_vibranium"
                    size="sm"
                    className="w-full"
                    onClick={() => handleEventClick(event.title)}
                  >
                    View Full Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* ===== HOVER OVERLAY (NO LAYOUT SHIFT) ===== */}
                <div
                  className="
                    absolute inset-0 rounded-xl bg-card/95 backdrop-blur-md
                    p-6 border border-electric/30
                    opacity-0 pointer-events-none
                    group-hover:opacity-100 group-hover:pointer-events-auto
                    transition-all duration-300
                    flex flex-col justify-center
                  "
                >
                  <h4 className="text-lg font-bold text-electric mb-3 text-center">
                    What to Expect
                  </h4>

                  <p className="text-sm text-muted-foreground mb-6 text-center">
                    {event.detailedDescription}
                  </p>

                  <Button
                    variant="vibranium"
                    size="sm"
                    className="w-full"
                    onClick={() => handleEventClick(event.title)}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Timeline Button */}
        <div className="mt-12 flex justify-center">
          <Button variant="vibranium" onClick={() => navigate("/timeline")}>
            View Event Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
