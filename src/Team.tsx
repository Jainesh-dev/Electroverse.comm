import { useNavigate } from "react-router-dom";
import { Linkedin, Instagram, Github } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
}

const Team = () => {
  const navigate = useNavigate();

  /* ======================================================
     DATA
  ====================================================== */

  const mentors: TeamMember[] = [
    { id: 101, name: "Dr. Maniroja Edinburg", role: "Head of Department", image: "/mentors/jennifer.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 102, name: "Prof. Bharti Ingale", role: "Committee Co-Ordinator", image: "/mentors/michael.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 103, name: "Dr. Manoj Kavedia", role: "Committee Co-Ordinator", image: "/mentors/rachel.jpg", linkedin: "#", instagram: "#", github: "#" },
  ];

  const coreMembers: TeamMember[] = [
    { id: 1, name: "Jainesh Patel", role: "Chairperson", image: "/CP.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 2, name: "Suyash Shirsat", role: "Vice Chairperson", image: "/VCP.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 3, name: "Unnati Mirani", role: "Secretary", image: "/Sec.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 4, name: "Janhavi Chaudhari", role: "Joint Secretary", image: "/Joint Sec.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 5, name: "Devesh Shelatkar", role: "Treasurer", image: "/Treasuer.jpg", linkedin: "#", instagram: "#", github: "#" },
  ];

  const heads: TeamMember[] = [
    { id: 10, name: "Jash Agarwal", role: "Event Head", image: "/EH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 11, name: "Pranav Amritwar", role: "Social Media Head", image: "/SMMH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 12, name: "Rahul Jain", role: "Design Head", image: "/DH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 13, name: "Priyani Gulgulia", role: "Technical Head", image: "/TH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 14, name: "Shravan Kundap", role: "Marketing Head", image: "/MH.jpg", linkedin: "#", instagram: "#", github: "#" },
    { id: 14, name: "Keya Desai", role: "Public Relations Head", image: "", linkedin: "#", instagram: "#", github: "#" },
  ];
  

  /* ======================================================
     TEAM CARD
  ====================================================== */

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-card/60 backdrop-blur-md border border-vibranium/20 
                    rounded-2xl p-6 shadow-lg hover:scale-105 transition-all
                    max-w-[260px] w-full">
      
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden 
                      border-2 border-vibranium mb-4">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-center text-base font-bold">{member.name}</h3>
      <p className="text-center text-sm text-vibranium mt-1">{member.role}</p>

      <div className="flex justify-center gap-3 mt-4">
        <a href={member.linkedin || "#"} className="p-2 bg-gray-800/60 rounded-full hover:bg-vibranium/80 transition">
          <Linkedin size={16} />
        </a>
        <a href={member.instagram || "#"} className="p-2 bg-gray-800/60 rounded-full hover:bg-pink-500/80 transition">
          <Instagram size={16} />
        </a>
        <a href={member.github || "#"} className="p-2 bg-gray-800/60 rounded-full hover:bg-gray-300 hover:text-black transition">
          <Github size={16} />
        </a>
      </div>
    </div>
  );

  /* ======================================================
     GRID
  ====================================================== */

  const renderGrid = (members: TeamMember[]) => (
    <div className="flex justify-center">
      <div
        className="grid gap-4 justify-items-center w-full max-w-5xl"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {members.map((m) => <TeamCard key={m.id} member={m} />)}
      </div>
    </div>
  );

  /* ======================================================
     UI
  ====================================================== */

  return (
    <section className="relative min-h-screen py-24">

      {/* BACK ARROW */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full
                   bg-gray-800/70 border border-vibranium/30
                   flex items-center justify-center text-xl
                   hover:bg-gray-700/80 transition"
      >
        ←
      </button>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-vibranium">OUR</span>{" "}
            <span className="text-royal">TEAM</span>
          </h1>
          <p className="text-muted-foreground mt-4">
            The minds powering Electroverse
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Mentors</h2>
            {renderGrid(mentors)}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Core Members</h2>
            {renderGrid(coreMembers)}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Heads</h2>
            {renderGrid(heads)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
