export type TCategoryResponse = {
  id: number;
  name: string;
  image: string;
  prefix: string;
};

export type TProductResponse = {
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
}

export type TLoading = "idle" | "pending" | "succeeded" | "failed";