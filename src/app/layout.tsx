import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanto Gusto | Comida casera para llevar",
  description:
    "Comida casera para llevar en Sitges, Castelldefels y Vielha. Empanadas artesanales, pastelería argentina y café de especialidad. Tres locales, un solo propósito.",
  metadataBase: new URL("https://tantogusto.net"),
  openGraph: {
    title: "Tanto Gusto | Comida casera para llevar",
    description:
      "Empanadas artesanales, pastelería argentina y café de especialidad en Sitges, Castelldefels y Vielha.",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={outfit.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
