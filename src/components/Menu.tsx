"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { menus } from "@/lib/menu-data";

const tagLabels: Record<string, string> = {
  V: "Vegetariano",
  SG: "Sin Gluten",
};

const tagColors: Record<string, string> = {
  V: "bg-green-light text-green",
  SG: "bg-amber-50 text-terracotta",
};

export default function Menu() {
  const searchParams = useSearchParams();
  const initialLocal = searchParams.get("local") || "sitges";
  const [activeTab, setActiveTab] = useState(
    menus.some((m) => m.locationId === initialLocal) ? initialLocal : "sitges"
  );
  const activeMenu = menus.find((m) => m.locationId === activeTab)!;

  return (
    <section
      id="carta"
      className="bg-white py-20"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex rounded-full bg-green-light px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-green">
            Nuestra carta
          </span>
          <h2
            id="menu-heading"
            className="text-3xl font-bold tracking-tight text-text-primary lg:text-[42px]"
          >
            Descubre nuestro menú
          </h2>
          <p className="max-w-lg text-lg text-text-secondary">
            Cada local tiene su carta adaptada. Selecciona tu ubicación para ver
            los platos disponibles.
          </p>
        </div>

        {/* Location tabs */}
        <div
          className="mb-10 flex justify-center"
          role="tablist"
          aria-label="Seleccionar carta por ubicación"
        >
          <div className="inline-flex rounded-full bg-cream p-1.5">
            {menus.map((menu) => (
              <button
                key={menu.locationId}
                role="tab"
                aria-selected={activeTab === menu.locationId}
                aria-controls={`panel-${menu.locationId}`}
                id={`tab-${menu.locationId}`}
                onClick={() => setActiveTab(menu.locationId)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === menu.locationId
                    ? "bg-green text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {menu.locationName}
              </button>
            ))}
          </div>
        </div>

        {/* Tag legend */}
        <div className="mb-8 flex justify-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-light" aria-hidden="true" />
            V = Vegetariano
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-text-tertiary">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-50" aria-hidden="true" />
            SG = Sin Gluten
          </span>
        </div>

        {/* Menu content */}
        <div
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="mx-auto max-w-4xl"
        >
          <div className="grid gap-10 md:grid-cols-2">
            {activeMenu.categories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-border-subtle bg-white p-6"
              >
                <h3 className="mb-1 text-lg font-bold text-text-primary">
                  {category.name}
                </h3>
                {category.note && (
                  <p className="mb-4 text-xs leading-relaxed text-text-tertiary">
                    {category.note}
                  </p>
                )}
                {!category.note && <div className="mb-4" />}

                <ul className="flex flex-col gap-2.5" aria-label={`Productos de ${category.name}`}>
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
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
        </div>
      </div>
    </section>
  );
}
