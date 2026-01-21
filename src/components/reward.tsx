// --- ADDED REWARDS COMPONENT ---
import { Trophy } from "lucide-react"; // Ensure this import is at the top

const RewardsSection = () => {
  const prizes = [
    { rank: "1ST RUNNER UP", amount: "₹15,000", label: "ALPHA_REWARD", c: "text-blue-400", b: "border-blue-500/30", order: "order-2 md:order-1" },
    { rank: "WINNER", amount: "₹25,000", label: "PRIME_REWARD", c: "text-yellow-400", b: "border-yellow-400/40", order: "order-1 md:order-2", featured: true },
    { rank: "2ND RUNNER UP", amount: "₹10,000", label: "BETA_REWARD", c: "text-orange-500", b: "border-orange-500/30", order: "order-3 md:order-3" }
  ];

  return (
    <section id="rewards" className="py-20 px-6 max-w-6xl mx-auto relative z-10 bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-cyber text-white uppercase tracking-widest">PRIZE POOL PROTOCOL</h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {prizes.map((p, i) => (
          <div key={i} className={`${p.order} relative bg-[#0a0a0a] border ${p.b} ${p.featured ? 'h-96' : 'h-80'} p-8 flex flex-col justify-between rounded-sm transition-all hover:bg-[#111]`}>
            <div>
               <span className={`font-mono text-[10px] ${p.c} block mb-2`}>{p.label}</span>
               <h3 className="text-gray-400 font-cyber text-sm">{p.rank}</h3>
            </div>
            <div className="text-center">
               <span className={`text-4xl font-black font-cyber ${p.c}`}>{p.amount}</span>
            </div>
            <div className="flex justify-between items-center opacity-50">
               <Trophy size={20} className={p.c} />
               <div className="text-[10px] font-mono text-gray-600">VERIFIED_REWARD</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};