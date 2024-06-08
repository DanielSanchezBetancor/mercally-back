import { Product } from "./product";

type TNewCatalog = {
  [category: string]: Omit<Product, "idProduct">[];
};

export type { TNewCatalog };
