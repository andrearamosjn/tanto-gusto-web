import { Phone } from "lucide-react";
import { locations } from "@/lib/data";

export default function OrderCTA() {
  return (
    <section
      id="contacto"
      className="bg-green-dark py-20"
      aria-labelledby="order-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center">
            <h2
              id="order-heading"
              className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl"
            >
              Haz tu pedido
            </h2>
            <p className="text-lg text-white/80">
              Llámanos o pide a través de Just Eat y Uber Eats. Recogida en
              local o delivery.
            </p>
          </div>

          {/* Phone cards */}
          <div className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white">{loc.name}</h3>
                <a
                  href={`tel:${loc.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-green-dark transition-colors hover:bg-cream"
                  aria-label={`Llamar al local de ${loc.name}: ${loc.formattedPhone}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {loc.formattedPhone}
                </a>
                <span className="text-sm text-white/60">{loc.hours}</span>
              </div>
            ))}
          </div>

          {/* Delivery platforms */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">
              También disponible en
            </span>
            <span className="rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white">
              Just Eat
            </span>
            <span className="rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white">
              Uber Eats
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
