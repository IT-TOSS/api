let products = [
  { id: 1, title: "Dell XPS 8950 - Intel Core i9", brand: "Dell", category: "Computer", processor: "Intel Core i9", quantity: 10 },
  { id: 2, title: "Dell OptiPlex 7010 - Intel Core i7", brand: "Dell", category: "Computer", processor: "Intel Core i7", quantity: 5 },
  { id: 3, title: "Dell Vostro 3910 - Intel Core i3", brand: "Dell", category: "Computer", processor: "Intel Core i3", quantity: 5 },
  { id: 4, title: "HP Omen 45L - Intel Core i9", brand: "HP", category: "Computer", processor: "Intel Core i9", quantity: 10 },
  { id: 5, title: "HP EliteDesk 800 G9 - Intel Core i7", brand: "HP", category: "Computer", processor: "Intel Core i7", quantity: 5 },
  { id: 6, title: "HP ProDesk 400 G9 - Intel Core i3", brand: "HP", category: "Computer", processor: "Intel Core i3", quantity: 5 },
  { id: 7, title: "Logitech B100 Mouse", brand: "Logitech", category: "Accessory", quantity: 30 },
  { id: 8, title: "Dell SE2222H Monitor 21.5-inch", brand: "Dell", category: "Monitor", quantity: 20 }
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