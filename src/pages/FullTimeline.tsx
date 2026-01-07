import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
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

/* =========================
   DATA (Circuitry Maze 2026 REMOVED)
========================= */
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
        title: "Circuitry Maze",
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full
                   bg-gray-800/70 backdrop-blur-md
                   border border-electric/30
                   flex items-center justify-center
                   hover:bg-gray-700/80 transition-all"
      >
        <ArrowLeft className="w-5 h-5 text-electric" />
      </button>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-electric/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-neon/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold">
            <span className="text-electric">Electroverse</span>{" "}
            <span className="text-neon">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A journey through our workshops, hackathons, and innovations —
            from <strong>2023</strong> to <strong>2026</strong>.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-12">
          {["all", "past", "upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === tab
                  ? "bg-electric/20 text-electric border-electric shadow-[0_0_14px_rgba(56,189,248,0.8)]"
                  : "bg-card/40 text-muted-foreground border-white/10 hover:text-electric"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">

          {/* 🔥 CONTINUOUS CENTER GLOW LINE */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2
                          w-[4px] bg-gradient-to-b
                          from-electric via-neon to-electric
                          opacity-90
                          shadow-[0_0_25px_rgba(56,189,248,0.9)]" />

          <div className="space-y-16">
            {timelineData.map((block, index) => {
              const filteredEvents =
                filter === "all"
                  ? block.events
                  : block.events.filter((e) => e.status === filter);

              if (!filteredEvents.length) return null;

              const isLeft = index % 2 === 0;

              return (
                <div key={block.year} className="relative md:flex">

                  {/* LEFT */}
                  <div className={`hidden md:block w-1/2 ${isLeft ? "pr-8 text-right" : ""}`}>
                    {isLeft && (
                      <>
                        <h3 className="text-electric font-bold text-3xl mb-4">
                          {block.year}
                        </h3>
                        {filteredEvents.map((event, i) => (
                          <div key={i} className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 mb-4">
                            <div className="flex justify-end gap-2 mb-2">
                              <h4 className="font-semibold">{event.title}</h4>
                              <Calendar className="w-4 h-4 text-electric" />
                            </div>
                            {event.image && (
                              <img src={event.image} alt={event.title} className="rounded mb-3" />
                            )}
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex w-0 justify-center">
                    <div className="w-6 h-6 bg-electric rounded-full border-2 border-white
                                    shadow-[0_0_18px_rgba(56,189,248,1)]" />
                  </div>

                  {/* RIGHT */}
                  <div className={`hidden md:block w-1/2 ${!isLeft ? "pl-8" : ""}`}>
                    {!isLeft && (
                      <>
                        <h3 className="text-electric font-bold text-3xl mb-4">
                          {block.year}
                        </h3>
                        {filteredEvents.map((event, i) => (
                          <div key={i} className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 mb-4">
                            <div className="flex gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-electric" />
                              <h4 className="font-semibold">{event.title}</h4>
                            </div>
                            {event.image && (
                              <img src={event.image} alt={event.title} className="rounded mb-3" />
                            )}
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden">
                    <h3 className="text-electric font-bold text-2xl mb-4">
                      {block.year}
                    </h3>
                    {filteredEvents.map((event, i) => (
                      <div key={i} className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 mb-4">
                        <div className="flex gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-electric" />
                          <h4 className="font-semibold">{event.title}</h4>
                        </div>
                        {event.image && (
                          <img src={event.image} alt={event.title} className="rounded mb-3" />
                        )}
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullTimeline;
