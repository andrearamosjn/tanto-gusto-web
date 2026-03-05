import { ArrowLeft } from "lucide-react";
import { locations } from "@/lib/data";
import type { LocationMenu } from "@/lib/menu-data";

const tagColors: Record<string, string> = {
  V: "bg-green-light text-green",
  SG: "bg-amber-50 text-terracotta",
};

const tagLabels: Record<string, string> = {
  V: "Vegetariano",
  SG: "Sin Gluten",
};

export default function MenuPage({ menu }: { menu: LocationMenu }) {
  const location = locations.find((l) => l.id === menu.locationId);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-5 lg:px-20">
          <a
            href="/#locales"
            className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-green hover:text-green"
            aria-label="Volver a la página principal"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver
          </a>
          <div>
            <h1 className="text-xl font-bold text-text-primary">
              Carta de {menu.locationName}
            </h1>
            {location && (
              <p className="text-sm text-text-tertiary">
                {location.tagline} · {location.hours}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Tag legend */}
      <div className="mx-auto max-w-5xl px-6 pt-8 lg:px-20">
        <div className="flex gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-light" aria-hidden="true" />
            V = Vegetariano
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-50 border border-amber-200" aria-hidden="true" />
            SG = Sin Gluten
          </span>
        </div>
      </div>

      {/* Menu categories */}
      <main className="mx-auto max-w-5xl px-6 py-8 lg:px-20">
        <div className="grid gap-8 md:grid-cols-2">
          {menu.categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-border-subtle bg-white p-6 shadow-sm"
            >
              <h2 className="mb-1 text-lg font-bold text-text-primary">
                {category.name}
              </h2>
              {category.note && (
                <p className="mb-4 text-xs leading-relaxed text-text-tertiary">
                  {category.note}
                </p>
              )}
              {!category.note && <div className="mb-4" />}

              <ul className="flex flex-col gap-2.5" aria-label={`Productos de ${category.name}`}>
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-text-primary">
                          {item.name}
                        </span>
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${tagColors[tag] || "bg-gray-100 text-gray-600"}`}
                            title={tagLabels[tag]}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {item.description && (
                        <p className="mt-0.5 text-xs text-text-tertiary">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-green">
                      €{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        {location && (
          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-text-secondary">
              ¿Te apetece algo? Haz tu pedido ahora.
            </p>
            <a
              href={`tel:${location.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-green-dark"
              aria-label={`Llamar al local de ${location.name}: ${location.formattedPhone}`}
            >
              Llamar al {location.formattedPhone}
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
