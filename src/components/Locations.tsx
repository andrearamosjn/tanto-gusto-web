import { Phone, Timer, MapPin, Navigation, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { locations } from "@/lib/data";

export default function Locations() {
  return (
    <section
      id="locales"
      className="bg-white py-20"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex rounded-full bg-green-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-green">
            Nuestros locales
          </span>
          <h2
            id="locations-heading"
            className="text-3xl font-bold tracking-tight text-text-primary lg:text-[42px]"
          >
            Encuéntranos cerca de ti
          </h2>
          <p className="text-lg text-text-secondary">
            Tres ubicaciones únicas, la misma calidad y cariño en cada bocado
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="group overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm transition-shadow hover:shadow-md"
              aria-label={`Local de ${loc.name}`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`Vista de ${loc.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-[22px]" aria-hidden="true">
                    {loc.emoji}
                  </span>
                  <h3 className="text-[22px] font-bold text-text-primary">
                    {loc.name}
                  </h3>
                </div>

                <span
                  className={`w-fit rounded-md px-2.5 py-1 text-xs font-semibold ${
                    loc.serviceType === "cafeteria-takeaway"
                      ? "bg-green-light text-green"
                      : "bg-amber-50 text-terracotta"
                  }`}
                >
                  {loc.tagline}
                </span>

                <p className="text-sm leading-relaxed text-text-secondary">
                  {loc.description}
                </p>

                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-green" aria-hidden="true" />
                    <a
                      href={`tel:${loc.phone}`}
                      className="text-sm font-medium text-text-primary hover:text-green"
                      aria-label={`Llamar al local de ${loc.name}: ${loc.formattedPhone}`}
                    >
                      {loc.formattedPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-3.5 w-3.5 text-green" aria-hidden="true" />
                    <span className="text-sm text-text-secondary">
                      {loc.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-green" aria-hidden="true" />
                    <span className="text-sm text-text-secondary">
                      {loc.address}
                    </span>
                  </div>
                </div>

                <div className="mt-1 flex gap-3">
                  <a
                    href={`/carta?local=${loc.id}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-green py-3 text-sm font-semibold text-white transition-colors hover:bg-green-dark"
                    aria-label={`Ver carta del local de ${loc.name}`}
                  >
                    <UtensilsCrossed className="h-3.5 w-3.5" aria-hidden="true" />
                    Ver carta
                  </a>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border-subtle py-3 text-sm font-semibold text-text-secondary transition-colors hover:border-green hover:text-green"
                    aria-label={`Cómo llegar al local de ${loc.name}`}
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
