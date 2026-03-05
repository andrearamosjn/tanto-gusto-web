import { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Carta Vielha - Tanto Gusto",
  description:
    "Descubre nuestra carta en Vielha: empanadas artesanales, bocadillos argentinos, dulces caseros y café de especialidad. Cafetería y para llevar.",
};

export default function CartaVielha() {
  const menu = menus.find((m) => m.locationId === "vielha")!;
  return <MenuPage menu={menu} />;
}
