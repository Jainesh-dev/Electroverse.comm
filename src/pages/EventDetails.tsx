import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Trophy,
  Zap,
  ArrowLeft,
  MapPin,
  Clock,
  Award,
  BookOpen,
  Users as UsersIcon,
  Cpu,
  Globe,
  Brain,
  Shield,
} from "lucide-react";

interface EventDetail {
  id: number;
  slug: string;
  title: string;
  date: string;
  description: string;
  detailedDescription: string;
  participants: number;
  color: string;
  learnings: string[];
  experience: string[];
  pastWinners: { name: string; project: string }[];
  location: string;
  duration: string;
  domains: { title: string; icon: React.ReactNode }[];
}

const EventDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventDetail | null>(null);

  const mockEvents: EventDetail[] = [
    {
      id: 1,
      slug: "techathon-2026",
      title: "Techathon 2026",
      date: "2026-02-26",
      description:
        "Electroverse’s flagship 48-hour national level hackathon.",
      detailedDescription:
        "Techathon 2026 is a 48-hour inter-college hardware-focused innovation sprint where student teams collaborate to build real-world solutions using electronics, embedded systems, IoT, automation, and emerging technologies. Participants work continuously under expert mentorship, tackle industry-relevant problem statements, and present functional prototypes to a panel of industry judges.",
      participants: 150,
      color: "vibranium",
      learnings: [
        "Designing and building electronic circuits from scratch",
      "Working with microcontrollers and embedded platforms",
      "Sensor interfacing and actuator control",
      "Hardware–software integration and debugging",
      "Power management and component selection",
      "Rapid prototyping under real-world constraints"
      ],
      experience: [
        "48 hours of continuous hacking",
        "Industry mentor reviews",
        "Live demos & judging",
        "Certificates & prizes",
      ],
      pastWinners: [
        { name: "Team CXON", project:""},
        { name: "Tech Vision", project: "" },
        { name: "Circuit Paglu", project: "" },
        { name: "Vision Creator", project: "" },
        { name: "Electroboomers", project: "" },  
      ],
      location: "Thadomal Shahani Engineering College, Bandra(West)",
      duration: "48 Hours",
      domains: [
         { title: "Healthcare & Biomedical Technology", icon: <Brain className="w-5 h-5" /> },
        { title: "Agriculture & Rural Development", icon: <Globe className="w-5 h-5" /> },
        { title: "Defense & Security Systems", icon: <Shield className="w-5 h-5" /> },
        { title: "Robotics & Autonomous Systems", icon: <Cpu className="w-5 h-5" /> },
        { title: "Immersive & Educational Technologies", icon: <BookOpen className="w-5 h-5" /> },
        { title: "Energy & Environmental Sustainability", icon: <Zap className="w-5 h-5" /> },
        { title: "Industrial Automation & Control Systems", icon: <Cpu className="w-5 h-5" /> },
        { title: "Student Innovation", icon: <UsersIcon className="w-5 h-5" /> },
      ],
    },
  ];

  useEffect(() => {
    const found = mockEvents.find((e) => e.slug === slug);
    if (found) setEvent(found);
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Event not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 relative">

      {/* BACK ARROW */}
      <button
        onClick={() => navigate("/", { state: { scrollTo: "events" } })}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full
                   bg-card/70 backdrop-blur-md border border-vibranium/30
                   flex items-center justify-center
                   hover:bg-vibranium/20 transition"
        aria-label="Back to Events"
      >
        <ArrowLeft className="w-5 h-5 text-vibranium" />
      </button>

      <div className="container mx-auto px-6">

        {/* HERO */}
        <div className="relative bg-gradient-to-br from-vibranium/20 via-black to-black
                        border border-vibranium/30 rounded-3xl p-10 mb-14 overflow-hidden">

          <div className="absolute -top-20 -right-20 w-96 h-96 bg-vibranium/10 blur-3xl rounded-full" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {event.title}
          </h1>

          <p className="text-muted-foreground max-w-3xl mb-6">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex gap-2 items-center">
              <Calendar className="w-4 h-4" />
              {new Date(event.date).toDateString()}
            </span>
            <span className="flex gap-2 items-center">
              <Clock className="w-4 h-4" />
              {event.duration}
            </span>
            <span className="flex gap-2 items-center">
              <MapPin className="w-4 h-4" />
              {event.location}
            </span>
            <span className="flex gap-2 items-center">
              <UsersIcon className="w-4 h-4" />
              {event.participants}+ Participants
            </span>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">

            {/* ABOUT */}
            <section className="bg-card/50 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 flex gap-2">
                <BookOpen className="w-5 h-5 text-electric" />
                About the Event
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {event.detailedDescription}
              </p>
            </section>

            {/* EVENT FLOW */}
            <section className="bg-card/50 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6 flex gap-2">
                <Clock className="w-5 h-5 text-cyber" />
                Event Flow & Experience
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-vibranium">
                  Schedule Overview
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                   <div>Day 1 – Opening Ceremony & Problem Statement Release</div>
                    <div>Day 1 – Ideation, System Design & Hardware Planning</div>
                    <div>Day 1 – Hardware Development & Firmware Coding Begins</div>
                    <div>Day 2 – Mentor Reviews, Debugging & Prototype Refinement</div>
                    <div>Day 3 – Final Hardware Testing & Submissions</div> 
                    <div>Day 3 – Live Demonstrations, Judging & Presentations</div>
                    <div>Day 3 – Results Announcement & Closing Ceremony</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 text-vibranium">
                  What You’ll Experience
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {event.experience.map((exp, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-background/50 border border-white/10 text-sm text-muted-foreground"
                    >
                      {exp}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PAST WINNERS */}
            <section className="bg-card/50 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 flex gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Past Winners
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {event.pastWinners.map((w, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-background/50 border border-white/10"
                  >
                    <h3 className="font-semibold text-vibranium">{w.name}</h3>
                    <p className="text-sm text-muted-foreground">{w.project}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 sticky top-28 h-fit">

            {/* REGISTRATION */}
            <div className="bg-gradient-to-br from-card/80 to-card
                            border border-vibranium/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-3">Register</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Registrations for Techathon 2026 will open soon.
              </p>

              <Button disabled className="w-full opacity-70">
                Coming Soon 🚀
              </Button>

              <div className="border-t border-white/10 mt-6 pt-4 space-y-2 text-sm">
                {event.learnings.map((l, i) => (
                  <div key={i} className="flex gap-2 text-muted-foreground">
                    <Zap className="w-4 h-4 text-electric" />
                    {l}
                  </div>
                ))}
              </div>
            </div>

            {/* DOMAINS */}
            <div className="bg-card/50 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Domains</h3>

              <div className="space-y-3">
                {event.domains.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl
                               bg-background/40 border border-white/10
                               hover:border-vibranium/40 transition"
                  >
                    <div className="text-vibranium">{d.icon}</div>
                    <span className="font-medium">{d.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
