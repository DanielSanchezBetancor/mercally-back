import { TProduct } from "./product";

type TNewCatalog = {
  [category: string]: TProduct[];
};

export type { TNewCatalog };
