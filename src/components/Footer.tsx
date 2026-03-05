import { Instagram } from "lucide-react";
import Image from "next/image";
import { locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#1A1918] text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-20">
        {/* Top */}
        <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4 flex items-center gap-2.5">
              <Image src="/images/logo-ig.jpg" alt="" width={32} height={32} aria-hidden="true" className="rounded-full" />
              <span className="text-xl font-bold">TANTO GUSTO</span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white/50">
              Comida casera para llevar. Recetas argentinas auténticas hechas con
              amor en Sitges, Castelldefels y Vielha.
            </p>
            <a
              href="https://instagram.com/tantogusto.es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
              aria-label="Instagram de Tanto Gusto (abre en nueva ventana)"
            >
              <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>

          {/* Location columns */}
          {locations.map((loc) => (
            <div key={loc.id}>
              <h3 className="mb-4 text-[15px] font-semibold">{loc.name}</h3>
              <ul className="flex flex-col gap-2 text-sm" aria-label={`Información de contacto de ${loc.name}`}>
                <li>
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-white/50 hover:text-white"
                  >
                    {loc.formattedPhone}
                  </a>
                </li>
                <li className="text-white/40">{loc.hours}</li>
                <li className="text-white/40">{loc.address}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/10" role="separator" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[13px] text-white/30">
            © 2026 Tanto Gusto. Todos los derechos reservados.
          </p>
          <nav className="flex gap-6" aria-label="Enlaces legales">
            <a
              href="/politica-cookies"
              className="text-[13px] text-white/30 hover:text-white/60"
            >
              Política de cookies
            </a>
            <a
              href="/politica-privacidad"
              className="text-[13px] text-white/30 hover:text-white/60"
            >
              Política de privacidad
            </a>
            <a
              href="/aviso-legal"
              className="text-[13px] text-white/30 hover:text-white/60"
            >
              Aviso legal
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
