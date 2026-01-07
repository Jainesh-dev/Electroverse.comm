import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set next event date (example: 30 days from now)
 const nextEventDate = new Date(2026, 1, 26, 9, 0, 0); 
  nextEventDate.setDate(nextEventDate.getDate() );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextEventDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-vibranium/20 blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-royal/20 blur-2xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-vibranium">
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Next Event</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-4">
            <span className="text-vibranium">TECH-A-THON</span> <span className="text-royal">2026</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for the most electrifying tech event of the year. Innovation meets creativity!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Days", value: timeLeft.days, color: "vibranium" },
              { label: "Hours", value: timeLeft.hours, color: "royal" },
              { label: "Minutes", value: timeLeft.minutes, color: "silver" },
              { label: "Seconds", value: timeLeft.seconds, color: "vibranium" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`bg-card/50 backdrop-blur-sm border border-${item.color}/20 rounded-lg p-6 text-center glow-${item.color === "vibranium" ? "vibranium" : item.color === "royal" ? "royal" : "silver"}`}
              >
                <div className={`text-4xl md:text-5xl font-bold text-${item.color} mb-2 font-mono`}>
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-muted-foreground font-semibold uppercase tracking-wide text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Event Details */}
          <div className="bg-card/30 backdrop-blur-sm border border-vibranium/20 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4 text-royal">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Event Details</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-vibranium mb-1">Date</div>
                <div className="text-muted-foreground">
                  {nextEventDate.toLocaleDateString("en-GB", { day: "numeric",month: "short",year: "numeric",})}
                </div>
              </div>
              <div>
                <div className="font-semibold text-royal mb-1">Time</div>
                <div className="text-muted-foreground">9:00 AM - 6:00 PM</div>
              </div>
              <div>
                <div className="font-semibold text-silver mb-1">Venue</div>
                <div className="text-muted-foreground"> Thadomal Shahani Engineering College,Bandra(W),Mumbai  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default EventCountdown;
