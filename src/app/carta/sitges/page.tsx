import { Metadata } from "next";
import MenuPage from "@/components/MenuPage";
import { menus } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Carta Sitges - Tanto Gusto",
  description:
    "Descubre nuestra carta en Sitges: empanadas artesanales, dulces caseros, café de especialidad y más. Solo para llevar.",
};

export default function CartaSitges() {
  const menu = menus.find((m) => m.locationId === "sitges")!;
  return <MenuPage menu={menu} />;
}
