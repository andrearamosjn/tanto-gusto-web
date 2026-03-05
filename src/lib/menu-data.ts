export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tags?: string[]; // V = Vegetariano, SG = Sin Gluten
}

export interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
}

export interface LocationMenu {
  locationId: string;
  locationName: string;
  categories: MenuCategory[];
}

export const menus: LocationMenu[] = [
  {
    locationId: "sitges",
    locationName: "Sitges",
    categories: [
      {
        name: "Empanadas",
        note: "Solo para llevar · Unidad: €3,00 · Promo 6 empa + bebida: €18,00 · Promo 12 empas: €30,00",
        items: [
          { name: "Carne suave", price: "3,00" },
          { name: "Carne picante", price: "3,00" },
          { name: "Pollo", price: "3,00" },
          { name: "Cerdo BBQ", price: "3,00" },
          { name: "Cerdo a la cerveza", price: "3,00" },
          { name: "Vacío y provolone", price: "3,00" },
          { name: "Jamón y mozzarella", price: "3,00" },
          { name: "Bacon, cebolla y mozzarella", price: "3,00" },
          { name: "Espinaca y bechamel", price: "3,00", tags: ["V"] },
          { name: "Cebolla y mozzarella", price: "3,00" },
          { name: "Caprese", price: "3,00" },
          { name: "Setas, cebolla y mozzarella", price: "3,00" },
          { name: "Calabaza, curry y tofu", price: "3,00" },
          { name: "Cuatro quesos", price: "3,00" },
          { name: "Calabacín y gorgonzola", price: "3,00" },
          { name: "Brócoli, ajo y setas", price: "3,00" },
        ],
      },
      {
        name: "Platos del día",
        items: [
          { name: "Milanesa napolitana de ternera", price: "16,00" },
          { name: "Parmigiana de berenjenas", price: "13,00" },
          { name: "Lasaña boloñesa", price: "13,00" },
        ],
      },
      {
        name: "Ensaladas",
        items: [
          { name: "Ensalada de queso de cabra", price: "12,00", description: "Mango, tomate cherry, nuez, zanahoria, vinagreta de frutos rojos" },
          { name: "Ensalada de burrata", price: "12,00", description: "Rúcula, cherry, jamón serrano, pesto" },
        ],
      },
      {
        name: "Desayunos",
        note: "De 8:00 a 12:30. Extras: huevo, aguacate, jamón serrano, queso, bacon: €2,00",
        items: [
          { name: "Tostada de tomate", price: "5,00" },
          { name: "Tostada de tomate y jamón serrano", price: "7,00" },
          { name: "Tostada de aguacate", price: "9,00", description: "Tomate, huevo revuelto, aguacate, rúcula" },
          { name: "Tostada de bacon", price: "9,50", description: "Tomate, queso, bacon, huevo frito" },
          { name: "Tostada de burrata", price: "10,50", description: "Rúcula, tomate cherry confitado, burrata, pesto" },
        ],
      },
      {
        name: "Bocadillos",
        note: "Pan cristal. Extras: huevo, aguacate, jamón serrano, queso, bacon: €2,00",
        items: [
          { name: "Bocadillo de queso", price: "4,00" },
          { name: "Bocadillo de jamón", price: "5,00" },
          { name: "Bocadillo de bacon", price: "6,00" },
          { name: "Bocadillo de jamón serrano", price: "7,00" },
        ],
      },
      {
        name: "Dulces caseros",
        items: [
          { name: "Apple Roll", price: "5,00", tags: ["V"] },
          { name: "Carrot Cake", price: "5,00", tags: ["SG"] },
          { name: "Banana Bread", price: "5,00", tags: ["SG"] },
          { name: "Coco y dulce de leche", price: "4,00" },
          { name: "Chocolate y dulce de leche", price: "4,00" },
          { name: "Crumble de manzana", price: "4,00" },
          { name: "Crumble de frutos rojos", price: "4,00" },
          { name: "Alfajor de maicena", price: "3,00" },
          { name: "Alfajor de chocolate", price: "3,00" },
          { name: "Alfajor sable", price: "3,00" },
          { name: "Cookies de avena", price: "3,00", tags: ["V", "SG"] },
          { name: "Cookie de chocolate", price: "3,00", tags: ["V", "SG"] },
          { name: "Merengues", price: "2,00", tags: ["SG"] },
        ],
      },
      {
        name: "Cafetería",
        note: "Café orgánico de especialidad · Origen Honduras. Extra leche vegetal o hielo: +€0,30",
        items: [
          { name: "Espresso", price: "1,60" },
          { name: "Cortado", price: "1,90" },
          { name: "Macchiato", price: "1,90" },
          { name: "Bombón", price: "2,20" },
          { name: "Carajillo", price: "3,20" },
          { name: "Café con leche", price: "2,20" },
          { name: "Flat White", price: "3,20" },
          { name: "Americano", price: "2,20" },
          { name: "Doble", price: "2,70" },
          { name: "Cappuccino", price: "3,20" },
          { name: "Latte Macchiato", price: "2,90" },
          { name: "Mocha", price: "3,20" },
          { name: "Infusiones", price: "2,30" },
          { name: "Chai Latte", price: "4,50" },
          { name: "Matcha Latte", price: "4,50" },
          { name: "Golden Milk", price: "4,50" },
        ],
      },
      {
        name: "Bebidas sin alcohol",
        items: [
          { name: "Refresco lata", price: "2,00" },
          { name: "Refresco botella", price: "2,50" },
          { name: "Vichy", price: "2,50" },
          { name: "Limonada (menta/jengibre)", price: "3,00" },
          { name: "Zumo de naranja", price: "4,00" },
          { name: "Berries Paradise", price: "5,00" },
          { name: "Colada Jungle", price: "6,00" },
          { name: "Green Power", price: "6,00" },
          { name: "Coffee Frappé", price: "6,00" },
          { name: "Cacaolat", price: "2,80" },
        ],
      },
      {
        name: "Bebidas con alcohol",
        items: [
          { name: "Cerveza lata", price: "2,50" },
          { name: "Cerveza de grifo", price: "3,20" },
          { name: "IPA", price: "4,20" },
          { name: "Copa vino de la casa", price: "3,50" },
          { name: "Copa Malbec", price: "5,00" },
          { name: "Botella vino de la casa", price: "13,00" },
          { name: "Botella Malbec", price: "17,00" },
        ],
      },
    ],
  },
  {
    locationId: "castelldefels",
    locationName: "Castelldefels",
    categories: [
      {
        name: "Empanadas",
        note: "Unidad para llevar: €3,00 · Unidad en salón: €3,75",
        items: [
          { name: "Carne suave", price: "3,00" },
          { name: "Carne picante", price: "3,00" },
          { name: "Pollo", price: "3,00" },
          { name: "Cerdo BBQ", price: "3,00" },
          { name: "Vacío y provolone", price: "3,00" },
          { name: "Jamón y mozzarella", price: "3,00" },
          { name: "Bacon, cebolla y mozzarella", price: "3,00" },
          { name: "Espinaca y bechamel", price: "3,00", tags: ["V"] },
          { name: "Cebolla y mozzarella", price: "3,00" },
          { name: "Caprese", price: "3,00" },
          { name: "Setas, cebolla y mozzarella", price: "3,00" },
        ],
      },
      {
        name: "Platos del día",
        items: [
          { name: "Milanesa napolitana", price: "14,00" },
          { name: "Parmigiana de berenjenas", price: "10,50", tags: ["SG"] },
          { name: "Lasaña boloñesa", price: "10,50" },
          { name: "Ensalada de burrata", price: "10,50", tags: ["SG"] },
        ],
      },
      {
        name: "Tostadas y bocadillos",
        note: "Extras: jamón serrano €2,50 · huevo €2,00 · aguacate €2,50 · queso €2,00",
        items: [
          { name: "Tostada aguacate y huevo", price: "7,00" },
          { name: "Tostada bacon y huevo", price: "7,50" },
          { name: "Tostada mantequilla y mermelada", price: "4,00" },
          { name: "Bocadillo de queso", price: "5,00" },
          { name: "Bocadillo de jamón serrano", price: "7,00" },
          { name: "Bocadillo de jamón dulce", price: "6,00" },
          { name: "Bocadillo de bacon", price: "6,00" },
          { name: "Bocadillo de milanesa", price: "14,00" },
        ],
      },
      {
        name: "Dulces caseros",
        items: [
          { name: "Apple Roll", price: "5,00", tags: ["V"] },
          { name: "Carrot Cake", price: "5,00", tags: ["SG"] },
          { name: "Banana Bread", price: "5,00", tags: ["SG"] },
          { name: "Coco y dulce de leche", price: "4,00" },
          { name: "Chocolate y dulce de leche", price: "4,00" },
          { name: "Crumble de manzana", price: "4,00" },
          { name: "Crumble de frutos rojos", price: "4,00" },
          { name: "Alfajor de maicena", price: "3,00" },
          { name: "Alfajor de chocolate", price: "3,00" },
          { name: "Alfajor sable", price: "3,00" },
          { name: "Cookies de avena", price: "3,00", tags: ["V", "SG"] },
          { name: "Cookie de chocolate", price: "3,00", tags: ["V", "SG"] },
          { name: "Merengues", price: "2,00", tags: ["SG"] },
        ],
      },
      {
        name: "Cafetería",
        note: "Café orgánico de especialidad. Extra leche vegetal o hielo: +€0,30",
        items: [
          { name: "Café", price: "1,60" },
          { name: "Café Tallat", price: "1,70" },
          { name: "Café Doble", price: "2,50" },
          { name: "Americano", price: "2,20" },
          { name: "Café amb llet", price: "2,20" },
          { name: "Capuchino", price: "2,80" },
          { name: "Flat White", price: "3,00" },
          { name: "Latte Macchiato", price: "4,50" },
          { name: "Matcha Latte", price: "4,50" },
          { name: "Chai Latte", price: "4,50" },
          { name: "Infusiones", price: "2,50" },
          { name: "Té", price: "2,50" },
          { name: "Golden Milk", price: "4,50" },
        ],
      },
    ],
  },
  {
    locationId: "vielha",
    locationName: "Vielha",
    categories: [
      {
        name: "Empanadas",
        note: "Unidad para llevar: €3,00 · Unidad en salón: €3,75",
        items: [
          { name: "Carne suave", price: "3,00" },
          { name: "Carne picante", price: "3,00" },
          { name: "Pollo", price: "3,00" },
          { name: "Cerdo BBQ", price: "3,00" },
          { name: "Vacío y provolone", price: "3,00" },
          { name: "Jamón y mozzarella", price: "3,00" },
          { name: "Bacon, cebolla y mozzarella", price: "3,00" },
          { name: "Espinaca y bechamel", price: "3,00", tags: ["V"] },
          { name: "Cebolla y mozzarella", price: "3,00" },
          { name: "Caprese", price: "3,00", description: "Tomate, mozzarella y albahaca" },
          { name: "Setas, cebolla y mozzarella", price: "3,00" },
        ],
      },
      {
        name: "Bocadillos",
        items: [
          { name: "Patagónico", price: "9,00", description: "Vacío, provolone, verdes frescos, tomate, salsa criolla" },
          { name: "Santafesino", price: "9,00", description: "Pulled pork, cheddar, rúcula, cebolla crispy" },
          { name: "Buenos Aires", price: "9,00", description: "Pollo desmenuzado, setas asadas, cebollino, Philadelphia, pimiento, cebolla asada" },
          { name: "Veggie", price: "8,00", description: "Verduras asadas, hummus, semillas de calabaza", tags: ["V"] },
          { name: "Bocadillo de queso", price: "5,00" },
          { name: "Bocadillo de jamón serrano", price: "7,00" },
          { name: "Bocadillo de jamón dulce", price: "6,00" },
          { name: "Bocadillo de bacon", price: "6,00" },
        ],
      },
      {
        name: "Tostadas",
        note: "Extras: jamón serrano €2,50 · huevo €2,00 · aguacate €2,50 · rúcula €1,50 · queso €2,00",
        items: [
          { name: "Tomate y jamón", price: "7,00" },
          { name: "Philadelphia y huevo", price: "7,00" },
          { name: "Mantequilla y mermelada", price: "4,00" },
          { name: "Tomate y aguacate", price: "8,00" },
          { name: "Aceite y tomate", price: "4,00" },
        ],
      },
      {
        name: "Dulces caseros",
        items: [
          { name: "Apple Roll", price: "5,00", tags: ["V"] },
          { name: "Carrot Cake", price: "5,00", tags: ["SG"] },
          { name: "Banana Bread", price: "5,00", tags: ["SG"] },
          { name: "Coco y dulce de leche", price: "5,00" },
          { name: "Chocolate y dulce de leche", price: "5,00" },
          { name: "Crumble de manzana", price: "5,00" },
          { name: "Crumble de frutos rojos", price: "5,00" },
          { name: "Alfajor de maicena", price: "3,50" },
          { name: "Alfajor de chocolate", price: "3,50" },
          { name: "Alfajor sable", price: "3,50" },
          { name: "Cookies de avena", price: "3,00", tags: ["V", "SG"] },
          { name: "Cookie de chocolate", price: "3,00", tags: ["V", "SG"] },
          { name: "Merengues", price: "2,00", tags: ["SG"] },
        ],
      },
      {
        name: "Cafetería",
        note: "Café orgánico de especialidad · Origen Guatemala. Extra leche vegetal o hielo: +€0,30",
        items: [
          { name: "Café", price: "1,60" },
          { name: "Café Tallat", price: "1,70" },
          { name: "Café Doble", price: "2,50" },
          { name: "Americano", price: "2,20" },
          { name: "Café amb llet", price: "2,20" },
          { name: "Capuchino", price: "2,80" },
          { name: "Flat White", price: "3,00" },
          { name: "Latte Macchiato", price: "4,50" },
          { name: "Matcha Latte", price: "4,50" },
          { name: "Chai Latte", price: "4,50" },
          { name: "Infusiones", price: "2,50" },
          { name: "Té", price: "2,50" },
          { name: "Golden Milk", price: "4,50" },
        ],
      },
    ],
  },
];
