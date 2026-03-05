import Image from "next/image";

const stats = [
  { value: "4.8★", label: "Google Reviews" },
  { value: "1.443+", label: "Reseñas" },
  { value: "3", label: "Locales" },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-cream py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:px-20">
        {/* Image */}
        <div className="w-full lg:w-[560px] shrink-0">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/food/interior.jpg"
              alt="Interior del local de Tanto Gusto"
              width={800}
              height={680}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
            Nuestra historia
          </span>

          <h2
            id="about-heading"
            className="text-3xl font-bold leading-[1.15] tracking-tight text-text-primary lg:text-[40px]"
          >
            Que salgas contento
            <br />
            es siempre nuestro
            <br />
            objetivo
          </h2>

          <p className="max-w-lg text-base leading-[1.7] text-text-secondary">
            Cada día nos esforzamos por crear una experiencia especial. Cocinamos
            con ingredientes frescos, recetas argentinas auténticas y mucho amor.
            Desde nuestras empanadas artesanales hasta nuestro café de
            especialidad, cada detalle está pensado para que te sientas como en
            casa.
          </p>

          <div className="flex gap-8" role="list" aria-label="Estadísticas del negocio">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1" role="listitem">
                <span className="text-[28px] font-bold tracking-tight text-green">
                  {stat.value}
                </span>
                <span className="text-[13px] font-medium text-text-tertiary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
