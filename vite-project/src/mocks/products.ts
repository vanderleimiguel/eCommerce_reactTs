import { Product } from "../utils/types/product.type";

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: "djkfhkdsjfkla",
      name: "Suporte Monitor",
      description: "Suporte Monitor articulado top",
      price: 55,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/31ihcMiGzgL._AC_SX184_.jpg",
    },
    {
      id: "djkfhkdsfrsde",
      name: "Monitor ultrawide",
      description: "monitor ultra wide lg 25 polegadas",
      price: 1200.00,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41bLxU3WOkL._AC_SX184_.jpg",
    },
  ];
}