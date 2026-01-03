import React, { useState, useEffect } from "react";
import { ArrowRightCircle, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TimelineStatus = "past" | "upcoming";

interface TimelineEventItem {
  title: string;
  description: string;
  status: TimelineStatus;
  image?: string;
}

interface TimelineYearBlock {
  year: number;
  events: TimelineEventItem[];
}

const timelineData: TimelineYearBlock[] = [
  {
    year: 2026,
    events: [
      {
        title: "Techathon 2026",
        description: "Next-gen hackathon focusing on AI agents, Web3, and IoT.",
        status: "upcoming",
        image: "/events/techathon-2026.webp",
      },
      {
        title: "Circuitry Maze 2026",
        description: "Advanced circuit design and PCB sprint challenge.",
        status: "upcoming",
        image: "/events/circuitry-maze-2026.webp",
      },
    ],
  },
  {
    year: 2025,
    events: [
      {
        title: "Techathon 2025",
        description: "Hardware Hackathon with ₹50,000 prize pool",
        status: "past",
        image: "/Techathon 2025.webp",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: "Circuitry Maze ",
        description: "Hands-on PCB design workshop.",
        status: "past",
        image: "/Circuitary Maze 2024.webp",
      },
      {
        title: "Techathon 2024",
        description: "Hardware Hackathon with ₹50,000 prize pool.",
        status: "past",
        image: "/Techathon 2024.webp",
      },
    ],  
  },
  {
    year: 2023,
    events: [
      {
        title: "Techathon 2023",
        description: "Large-scale electronics building event.",
        status: "past",
        image: "/Techathon 2023.webp",
      },
    ],
  },
  
  
];

const FullTimeline = () => {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* glowing background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-electric/10 blur-3xl rounded-full" />
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-neon/10 blur-3xl rounded-full"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold">
            <span className="text-electric">Electroverse</span>{" "}
            <span className="text-neon">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A journey through our major workshops, hackathons, and innovations — from{" "}
            <strong>2023</strong> to <strong>2026</strong>.
          </p>
        </div>

        {/* FILTER TABS: ALL / PAST / UPCOMING */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { label: "All", value: "all" as const },
            { label: "Past", value: "past" as const },
            { label: "Upcoming", value: "upcoming" as const },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                filter === tab.value
                  ? "bg-electric/20 text-electric border-electric shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                  : "bg-card/40 text-muted-foreground border-white/10 hover:border-electric/40 hover:text-electric"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center laser line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 bg-gradient-to-b from-electric via-neon to-electric opacity-80 shadow-[0_0_25px_rgba(56,189,248,0.9)]" />
          {/* Inner animated beam */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-electric/60 animate-pulse" />

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((block, index) => {
              const filteredEvents =
                filter === "all"
                  ? block.events
                  : block.events.filter((ev) => ev.status === filter);

              if (filteredEvents.length === 0) return null;

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={block.year}
                  className="relative md:flex md:items-stretch md:min-h-[160px]"
                >
                  {/* Mobile (single column) */}
                  <div className="md:hidden w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-electric/40" />
                        <div className="relative w-5 h-5 rounded-full bg-electric border-2 border-white shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                      </div>
                      <span className="text-electric font-bold text-2xl">
                        {block.year}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {filteredEvents.map((event, idx) => (
                        <div
                          key={idx}
                          className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-electric/40 transition-all"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-electric" />
                            <h4 className="text-lg font-semibold">
                              {event.title}
                            </h4>
                          </div>

                          {event.image && (
                            <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-white/10">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-40 object-cover"
                              />
                            </div>
                          )}

                          <p className="text-sm text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LEFT SIDE (desktop) */}
                  <div className="hidden md:flex w-1/2 items-stretch justify-end">
                    {isLeft && (
                      <div className="w-full pr-6 text-right relative pt-6">
                        {/* Year label – pulled a bit away from center line */}
                        <div className="absolute right-10 top-0">
                          <span className="text-electric font-bold text-3xl">
                            {block.year}
                          </span>
                        </div>

                        {/* Connector from center line */}
                        <div className="absolute top-[52px] right-0 h-px w-8 bg-electric/60 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />

                        <div className="mt-6 space-y-4">
                          {filteredEvents.map((event, idx) => (
                            <div
                              key={idx}
                              className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-electric/40 transition-all"
                            >
                              <div className="flex items-center justify-end gap-2 mb-1">
                                <h4 className="text-lg font-semibold">
                                  {event.title}
                                </h4>
                                <Calendar className="w-4 h-4 text-electric" />
                              </div>

                              {event.image && (
                                <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-white/10">
                                  <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover"
                                  />
                                </div>
                              )}

                              <p className="text-sm text-muted-foreground text-right">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:flex w-0 flex-col items-center mx-4">
                    <div className="w-6 h-6 rounded-full bg-electric border-2 border-white shadow-[0_0_14px_rgba(56,189,248,0.9)]" />
                  </div>

                  {/* RIGHT SIDE (desktop) */}
                  <div className="hidden md:flex w-1/2 items-stretch">
                    {!isLeft && (
                      <div className="w-full pl-6 relative pt-6">
                        {/* Year label – pulled a bit away from center line */}
                        <div className="absolute left-10 top-0">
                          <span className="text-electric font-bold text-3xl">
                            {block.year}
                          </span>
                        </div>

                        {/* Connector from center line */}
                        <div className="absolute top-[52px] left-0 h-px w-8 bg-electric/60 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />

                        <div className="mt-6 space-y-4">
                          {filteredEvents.map((event, idx) => (
                            <div
                              key={idx}
                              className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-electric/40 transition-all"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4 text-electric" />
                                <h4 className="text-lg font-semibold">
                                  {event.title}
                                </h4>
                              </div>

                              {event.image && (
                                <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-white/10">
                                  <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover"
                                  />
                                </div>
                              )}

                              <p className="text-sm text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back Button → back to events section on home */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/", { state: { scrollTo: "events" } })}
            className="inline-flex items-center gap-2 text-electric hover:text-neon transition-all text-lg font-semibold"
          >
            Back to Events
            <ArrowRightCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FullTimeline;
