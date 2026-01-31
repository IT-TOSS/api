let products = [
  {
    id: 1,
    title: "Dell XPS 8950 - Intel Core i9",
    brand: "Dell",
    category: "Computer",
    processor: "Intel Core i9",
    quantity: 10,
    price: 195000,
    mrp: 210000
  },
  {
    id: 2,
    title: "Dell OptiPlex 7010 - Intel Core i7",
    brand: "Dell",
    category: "Computer",
    processor: "Intel Core i7",
    quantity: 5,
    price: 125000,
    mrp: 135000
  },
  {
    id: 3,
    title: "Dell Vostro 3910 - Intel Core i3",
    brand: "Dell",
    category: "Computer",
    processor: "Intel Core i3",
    quantity: 5,
    price: 55000,
    mrp: 60000
  },
  {
    id: 4,
    title: "HP Omen 45L - Intel Core i9",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i9",
    quantity: 10,
    price: 190000,
    mrp: 205000
  },
  {
    id: 5,
    title: "HP EliteDesk 800 G9 - Intel Core i7",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i7",
    quantity: 5,
    price: 120000,
    mrp: 130000
  },
  {
    id: 6,
    title: "HP ProDesk 400 G9 - Intel Core i3",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i3",
    quantity: 5,
    price: 52000,
    mrp: 58000
  },
  {
    id: 7,
    title: "Logitech B100 Mouse",
    brand: "Logitech",
    category: "Accessory",
    quantity: 30,
    price: 350,
    mrp: 499
  },
  {
    id: 8,
    title: "Dell SE2222H Monitor 21.5-inch",
    brand: "Dell",
    category: "Monitor",
    quantity: 20,
    price: 9000,
    mrp: 11000
  },

  // 🔹 New HP Products (4)
  {
    id: 9,
    title: "HP Pavilion Desktop - Intel Core i5",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i5",
    quantity: 4,
    price: 75000,
    mrp: 82000
  },
  {
    id: 10,
    title: "HP Victus Desktop - Intel Core i7",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i7",
    quantity: 3,
    price: 115000,
    mrp: 125000
  },
  {
    id: 11,
    title: "HP Slim Desktop - Intel Core i3",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i3",
    quantity: 5,
    price: 48000,
    mrp: 54000
  },
  {
    id: 12,
    title: "HP Envy Desktop - Intel Core i9",
    brand: "HP",
    category: "Computer",
    processor: "Intel Core i9",
    quantity: 2,
    price: 185000,
    mrp: 200000
  },

  // 🔹 New Lenovo Products (5)
  {
    id: 13,
    title: "Lenovo ThinkCentre M90t - Intel Core i9",
    brand: "Lenovo",
    category: "Computer",
    processor: "Intel Core i9",
    quantity: 3,
    price: 180000,
    mrp: 195000
  },
  {
    id: 14,
    title: "Lenovo ThinkCentre M70t - Intel Core i7",
    brand: "Lenovo",
    category: "Computer",
    processor: "Intel Core i7",
    quantity: 4,
    price: 110000,
    mrp: 120000
  },
  {
    id: 15,
    title: "Lenovo IdeaCentre 3 - Intel Core i5",
    brand: "Lenovo",
    category: "Computer",
    processor: "Intel Core i5",
    quantity: 6,
    price: 65000,
    mrp: 72000
  },
  {
    id: 16,
    title: "Lenovo IdeaCentre 3 - Intel Core i3",
    brand: "Lenovo",
    category: "Computer",
    processor: "Intel Core i3",
    quantity: 8,
    price: 45000,
    mrp: 50000
  },
  {
    id: 17,
    title: "Lenovo Legion Tower 5i - Intel Core i9",
    brand: "Lenovo",
    category: "Computer",
    processor: "Intel Core i9",
    quantity: 2,
    price: 200000,
    mrp: 220000
  }
];

export async function GET() {
  return Response.json({ success: true, total: products.length, products });
}

export async function POST(request) {
  const body = await request.json();
  const newProduct = { id: products.length + 1, ...body };
  products.push(newProduct);
  return Response.json({ success: true, message: "Product added", product: newProduct });
}