import { useEffect, useState } from "react";

const Techathon = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
  ];

  const toggleRegister = () => {
    setShowRegister(prev => !prev);
  };

  const changeSlide = (dir: number) => {
    setCurrentSlide(prev =>
      dir === 1 ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
    );
  };

  /** Countdown */
  const [time, setTime] = useState({ days: "00", hours: "00", mins: "00" });

  useEffect(() => {
    const target = new Date("March 10, 2026 09:00:00").getTime();

    const timer = setInterval(() => {
      const now = Date.now();
      const diff = target - now;

      setTime({
        days: String(Math.max(0, Math.floor(diff / 86400000))).padStart(2, "0"),
        hours: String(Math.max(0, Math.floor(diff / 3600000) % 24)).padStart(2, "0"),
        mins: String(Math.max(0, Math.floor(diff / 60000) % 60)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-gray-200 overflow-x-hidden">

      {/* REGISTER OVERLAY */}
      {showRegister && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur z-[9999] flex items-center justify-center"
          onClick={toggleRegister}
        >
          <div
            className="tech-card p-10 max-w-lg w-full text-center relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={toggleRegister}
            >
              ✕
            </button>

            <h2 className="cyber text-2xl text-yellow-400 mb-4 italic">
              ESTABLISH_LINK
            </h2>

            <a
              href="PASTE_GOOGLE_FORM_URL"
              target="_blank"
              className="inline-block bg-purple-600 px-10 py-4 cyber text-white font-bold"
            >
              ACCESS_FORM_v4.0
            </a>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-12 h-[85px] bg-black/95 border-b border-purple-500/30 z-50">
        <h1 className="cyber text-white text-xs tracking-widest">
          Electroverse
        </h1>

        <button
          onClick={toggleRegister}
          className="bg-purple-600 px-6 py-2 cyber text-xs italic hover:bg-yellow-400"
        >
          REGISTER_NODE
        </button>
      </nav>

      {/* HERO */}
      <header className="pt-52 pb-32 text-center">
        <h1 className="cyber text-7xl font-bold italic mb-6">
          <span>TECH</span>
          <span className="text-purple-500">ATHON</span>
          <span className="text-yellow-400">4.0</span>
        </h1>

        <div className="flex justify-center gap-8 mt-16">
          <div className="tech-card p-6 w-28">
            <span className="cyber text-4xl">{time.days}</span>
            <p className="text-xs">DAYS</p>
          </div>

          <div className="tech-card p-6 w-28">
            <span className="cyber text-4xl">{time.hours}</span>
            <p className="text-xs">HOURS</p>
          </div>

          <div className="tech-card p-6 w-28">
            <span className="cyber text-4xl text-purple-500">{time.mins}</span>
            <p className="text-xs">MINS</p>
          </div>
        </div>
      </header>

      {/* CAROUSEL */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="relative h-[500px] tech-card overflow-hidden">
          <img
            src={slides[currentSlide]}
            className="w-full h-full object-cover opacity-40"
          />

          <button
            onClick={() => changeSlide(-1)}
            className="absolute left-4 top-1/2"
          >
            ◀
          </button>

          <button
            onClick={() => changeSlide(1)}
            className="absolute right-4 top-1/2"
          >
            ▶
          </button>
        </div>
      </section>
    </div>
  );
};

export default Techathon;
