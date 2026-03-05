import { Metadata } from "next";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carta - Tanto Gusto",
  description:
    "Descubre nuestra carta: empanadas artesanales, dulces caseros, café de especialidad y más en Sitges, Castelldefels y Vielha.",
};

export default function CartaPage() {
  return (
    <>
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </>
  );
}
