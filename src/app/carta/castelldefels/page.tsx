import { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Carta Castelldefels - Tanto Gusto",
  description:
    "Descubre nuestra carta en Castelldefels: empanadas artesanales, dulces caseros, café de especialidad y más. Cafetería y para llevar.",
};

export default function CartaCastelldefels() {
  const menu = menus.find((m) => m.locationId === "castelldefels")!;
  return <MenuPage menu={menu} />;
}
