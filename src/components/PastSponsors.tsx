import { sponsors } from "@/SponsorData/Sponsors";

export default function PastSponsors() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Past Sponsors
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee w-max">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <a
                key={`${sponsor.name}-${index}`}
                href={sponsor.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-12 opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
