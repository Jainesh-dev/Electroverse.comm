import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
}

const TeamSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<"mentors" | "core" | "heads">("mentors");

  // ICONS -----------------------------------------------------
  const LinkedinIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5v15.5H.25V8.25zM8 8.25h4.2v2.1h.06c.58-1.09 2-2.25 4.1-2.25 4.4 0 5.2 2.9 5.2 6.7v8.95H17V15c0-2-.03-4.5-2.75-4.5-2.75 0-3.18 2.15-3.18 4.37v8.9H8V8.25z" />
    </svg>
  );

  // CLEAN MODERN INSTAGRAM ICON
  const InstagramIcon = () => (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );

  const GithubIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.8 0-1.1.4-2 1-2.8-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c2-1.3 2.8-1 2.8-1 .5 1.3.2 2.4.1 2.6.6.8 1 1.7 1 2.8 0 4.5-2.8 5.5-5.4 5.8.4.4.7 1 .7 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );

  // DATA -----------------------------------------------------

  const leadershipTeam: TeamMember[] = [
    { id: 1, name: "Jash Agarwal", role: "Event Head", image: "/EH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 2, name: "Pranav Amritwar", role: "Social Media Head", image: "/SMMH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 3, name: "Rahul Jain", role: "Design Head", image: "/DH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 4, name: "Priyani Gulgulia", role: "Technical Head", image: "/TH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 5, name: "Keya Desai", role: "Publicity Head", image: "/team/marcus.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 6, name: "Shravan Kundap", role: "Marketing Head", image: "/MH.jpg", linkedin: "#", instagram: "#", github: "#" },
  ];

  const coreMembers: TeamMember[] = [
    { id: 7, name: "Jainesh Patel", role: "Chairperson", image: "/CP.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 8, name: "Suyash Shirsat", role: "Vice-Chairperson", image: "/VCP.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 9, name: "Unnati Mirani", role: "Secretary", image: "/Sec.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 10, name: "Janhavi Chaudhari", role: "Joint-Secretary", image: "/Joint Sec.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 11, name: "Devesh Shelatkar", role: "Treasurer", image: "/Treasuer.jpg", linkedin: "#", instagram: "#", github: "#" },
  ];

  const mentors: TeamMember[] = [
    { id: 101, name: "Dr. Maniroja Edinburg", role: "Head of Department", image: "/mentors/jennifer.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 102, name: "Prof. Bharti Ingale", role: "Committee Co-Ordinator", image: "/mentors/michael.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 103, name: "Dr. Manoj Kavedia", role: "Committee Co-Ordinator", image: "/mentors/rachel.jpg", linkedin: "#", instagram: "#", github: "#" },
  ];

  // FILTER -----------------------------------------------------

  const filteredMembers =
    activeCategory === "mentors"
      ? mentors
      : activeCategory === "heads"
      ? leadershipTeam
      : coreMembers;

  const gridClasses =
    activeCategory === "core"
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      : activeCategory === "heads"
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  // CARD -----------------------------------------------------

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-xl p-6 hover:scale-105 transition-all duration-300 group shadow-lg">
      <div className="mb-4">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-vibranium to-royal overflow-hidden border-2 border-vibranium/40">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8B5CF6&color=fff&bold=true&size=112`;
            }}
          />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-base font-bold mb-1">{member.name}</h3>
        <div className="text-sm text-vibranium font-medium mb-3">{member.role}</div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3">
          {member.linkedin && (
            <a className="p-2 bg-gray-800/60 hover:bg-vibranium/80 rounded-full" href={member.linkedin} target="_blank">
              <LinkedinIcon />
            </a>
          )}
          {member.instagram && (
            <a className="p-2 bg-gray-800/60 hover:bg-rose-500/80 rounded-full" href={member.instagram} target="_blank">
              <InstagramIcon />
            </a>
          )}
          {member.github && (
            <a className="p-2 bg-gray-800/60 hover:bg-gray-300 text-black rounded-full" href={member.github} target="_blank">
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  // CATEGORY BUTTON --------------------------------------------

  const CategoryButton = ({ category, label }: { category: any; label: string }) => (
    <button
      onClick={() => setActiveCategory(category)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        activeCategory === category
          ? "bg-vibranium text-background glow-vibranium"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-vibranium/20"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-20 relative overflow-hidden" id="team">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-tech font-bold">
            <span className="text-vibranium">OUR</span>{" "}
            <span className="text-royal">TEAM</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            The brilliant minds behind Electroverse
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <CategoryButton category="mentors" label="Mentors" />
            <CategoryButton category="core" label="Core Members" />
            <CategoryButton category="heads" label="Heads" />
          </div>
        </div>

        {/* TEAM GRID */}
        <div className={`grid ${gridClasses} gap-6 w-fit mx-auto`}>
          {filteredMembers.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

