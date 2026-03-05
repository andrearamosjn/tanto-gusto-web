import { Instagram as InstagramIcon } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "/images/instagram/ig1.jpg",
    alt: "Plato de comida casera de Tanto Gusto",
  },
  {
    src: "/images/instagram/ig2.jpg",
    alt: "Productos artesanales de Tanto Gusto",
  },
  {
    src: "/images/instagram/ig3.jpg",
    alt: "Especialidades argentinas de Tanto Gusto",
  },
  {
    src: "/images/instagram/ig4.jpg",
    alt: "Empanadas y café de especialidad de Tanto Gusto",
  },
];

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="bg-white py-20"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex rounded-full bg-purple-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple">
            Síguenos
          </span>
          <h2
            id="instagram-heading"
            className="text-3xl font-bold tracking-tight text-text-primary lg:text-[42px]"
          >
            Inspira tu próximo bocado
          </h2>
          <p className="text-lg text-text-secondary">
            Recetas, ofertas especiales y el día a día de nuestros locales.
            Síguenos en @tantogusto.es
          </p>
        </div>

        {/* Image grid */}
        <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="https://instagram.com/tantogusto.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-purple px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-purple/90"
            aria-label="Síguenos en Instagram (abre en nueva ventana)"
          >
            <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            Síguenos en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
