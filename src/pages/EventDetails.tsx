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
        "Techathon 2026 is a 48-hour innovation sprint where teams build impactful solutions using AI, Web3, IoT, and emerging technologies. Participants collaborate under expert mentorship, solve real-world problem statements, and pitch solutions to industry judges.",
      participants: 200,
      color: "vibranium",
      learnings: [
        "Full-stack system design",
        "AI & ML model integration",
        "IoT & hardware prototyping",
        "Startup-style pitching",
      ],
      experience: [
        "48 hours of continuous hacking",
        "Industry mentor reviews",
        "Live demos & judging",
        "Certificates & prizes",
      ],
      pastWinners: [
        { name: "Team Quantum", project: "AI Healthcare Platform" },
        { name: "Byte Crushers", project: "Blockchain Voting System" },
      ],
      location: "Tech Hub Auditorium, TSEC",
      duration: "48 Hours",
      domains: [
        { title: "Artificial Intelligence", icon: <Brain /> },
        { title: "Web & Web3", icon: <Globe /> },
        { title: "IoT & Hardware", icon: <Cpu /> },
        { title: "Cybersecurity", icon: <Shield /> },
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
                        border border-vibranium/30 rounded-3xl
                        p-6 md:p-10 mb-14 overflow-hidden">

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

            <section className="bg-card/50 p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-4 flex gap-2">
                <BookOpen className="w-5 h-5 text-electric" />
                About the Event
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {event.detailedDescription}
              </p>
            </section>

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

          {/* RIGHT COLUMN — FIXED FOR MOBILE */}
          <div className="space-y-8 lg:sticky lg:top-28">

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
