"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

const navLinks = [
  { label: "Locales", href: "/#locales" },
  { label: "Carta", href: "/carta" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

function MobileMenu({ onClose }: { onClose: () => void }) {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-0 z-[100] flex flex-col bg-white md:hidden"
      role="navigation"
      aria-label="Menú móvil"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3" onClick={onClose}>
          <Image src="/images/logo-ig.jpg" alt="" width={36} height={36} aria-hidden="true" className="rounded-full" />
          <span className="text-xl font-bold tracking-tight text-text-primary">
            TANTO GUSTO
          </span>
        </a>
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="rounded-lg p-2 text-text-primary"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Links centered */}
      <div className="flex flex-1 flex-col items-center justify-center gap-9">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-2xl font-light text-text-tertiary transition-colors hover:text-text-primary"
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/#contacto"
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-green px-10 py-4 text-base font-semibold text-white"
          onClick={onClose}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Haz tu pedido
        </a>
      </div>
    </div>,
    document.body
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-20"
          aria-label="Navegación principal"
        >
          <a href="/" className="flex items-center gap-3" aria-label="Tanto Gusto - Inicio">
            <Image src="/images/logo-ig.jpg" alt="" width={36} height={36} aria-hidden="true" className="rounded-full" />
            <span className="text-xl font-bold tracking-tight text-text-primary">
              TANTO GUSTO
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-text-secondary transition-colors hover:text-green"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-green-dark"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Haz tu pedido
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden rounded-lg p-2 text-text-primary"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </>
  );
}
