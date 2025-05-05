export type TCategory = {
  id: number;
  name: string;
  image: string;
  prefix: string;
};

export type TProduct = {
  id: number;
  name: string;
  brand: string;
  categoryId: number;
  price: number;
  oldPrice: number;
  description: string;
  image: string;
  stock: number;
  volume: string;
  rating: number;
  featured: boolean;
  ingredients: string[];
  tags: string[];
  cartQuantity?: number
}

export type TLoading = "idle" | "pending" | "succeeded" | "failed";