import { MapPin, Utensils, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="bg-cream"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:px-20 lg:py-0 lg:min-h-[700px]">
        {/* Text */}
        <div className="flex flex-1 flex-col gap-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-green-light px-4 py-2">
            <MapPin className="h-3.5 w-3.5 text-green" aria-hidden="true" />
            <span className="text-[13px] font-semibold text-green">
              Sitges · Castelldefels · Vielha
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-[1.1] tracking-tight text-text-primary lg:text-[64px]"
          >
            Comida casera
            <br />
            hecha con amor
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-text-secondary">
            Tres locales, un solo propósito: hacerte sentir como en casa con
            cada bocado. Empanadas artesanales, pastelería argentina y café de
            especialidad. Cafetería y para llevar.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#locales"
              className="inline-flex items-center gap-2.5 rounded-full bg-green px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-green-dark"
            >
              <Utensils className="h-[18px] w-[18px]" aria-hidden="true" />
              Ver nuestros locales
            </a>
          </div>

          <div className="flex items-center gap-4" aria-label="Valoración media: 4.9 sobre 5 basada en más de 677 reseñas">
            <div className="flex gap-1" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-[18px] w-[18px] fill-star text-star"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-text-secondary">
              4.9/5 en Google · +677 reseñas
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/food/hero.jpg"
              alt="Empanadas artesanales argentinas de Tanto Gusto"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
