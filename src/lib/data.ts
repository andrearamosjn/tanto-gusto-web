export interface Location {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  phone: string;
  formattedPhone: string;
  hours: string;
  address: string;
  mapUrl: string;
  image: string;
  serviceType: "takeaway" | "cafeteria-takeaway";
}

export const locations: Location[] = [
  {
    id: "sitges",
    name: "Sitges",
    emoji: "🏖️",
    tagline: "Solo para llevar",
    description:
      "Junto a la playa, a 2 minutos del mar. Comida casera con brisa marina.",
    phone: "631333891",
    formattedPhone: "631 33 38 91",
    hours: "L-D 8:00 – 23:00",
    address: "C/ Rafael Llopart, 68",
    mapUrl: "https://maps.google.com/?q=Tanto+Gusto+Sitges",
    image: "/images/locations/sitges.jpg",
    serviceType: "takeaway",
  },
  {
    id: "castelldefels",
    name: "Castelldefels",
    emoji: "🏙️",
    tagline: "Cafetería + para llevar",
    description:
      "Mar, montaña y ciudad. Nuestro local más completo con cafetería y servicio para llevar.",
    phone: "608067449",
    formattedPhone: "608 06 74 49",
    hours: "L-S 9:00 – 22:00 · D 10:00 – 22:00",
    address: "C/ de la Llibertat, 9",
    mapUrl: "https://maps.google.com/?q=Tanto+Gusto+Castelldefels",
    image: "/images/locations/castelldefels.jpg",
    serviceType: "cafeteria-takeaway",
  },
  {
    id: "vielha",
    name: "Vielha",
    emoji: "⛰️",
    tagline: "Cafetería + para llevar",
    description:
      "Un rincón en la montaña. Brunch y comida casera en el Valle de Arán.",
    phone: "973828513",
    formattedPhone: "973 82 85 13",
    hours: "L-D 8:00 – 20:00",
    address: "Av. Baile Calbetó Barra, 2",
    mapUrl: "https://maps.google.com/?q=Tanto+Gusto+Vielha",
    image: "/images/locations/vielha.jpg",
    serviceType: "cafeteria-takeaway",
  },
];
