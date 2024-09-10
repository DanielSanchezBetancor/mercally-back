import Products from "../products/Products";
import { Stores } from "../stores/Stores";
import PricesBase from "./base";

type BiggestDifference = {
  difference: number;
  id_product: number;
  max_price: string;
  min_price: string;
}

type CheapestProduct = {
  min_price: string;
  avg_price: string;
  id_product: number;
}

type QueryResultItem = Products['fields'] & Prices['fields'] & Stores['fields']

type A<T> = T & { id_product: number, id_store: number }

class Prices extends PricesBase {
  private maxLimit = 3;

  constructor() {
    super();
  }

  async getBiggestDifference(offset: number) {
    const [products] = await this.query<BiggestDifference[]>(`
      SELECT * FROM (
        SELECT 
          MAX(maxPrice.price) as max_price,
          MIN(minPrice.price) as min_price,
          ROUND(MAX(maxPrice.price) - MIN(minPrice.price), 2) as difference,
          maxPrice.id_product as id_product
        FROM 
          prices maxPrice,
          prices minPrice 
        WHERE maxPrice.id_product = minPrice.id_product
        GROUP BY maxPrice.id_product) as calculatedPrices 
      ORDER BY difference desc
      LIMIT ${this.maxLimit}
      OFFSET ${offset};
    `)

    return products;
  }

  async getCheapestProducts(id_categories: number[], offset: number) {
    const [products] = await this.query<CheapestProduct[]>(`
      SELECT 
        MIN(price) as min_price,
        AVG(price) as avg_price,
        id_product
      FROM 
        prices
      WHERE id_product IN (
        SELECT id_product FROM products WHERE id_category IN (${id_categories.join(", ")})
      )
      GROUP BY id_product
      ORDER BY min_price
      LIMIT ${this.maxLimit + 1}
      OFFSET ${offset};
    `)

    return products;
  }

  async getPricesByProductAndStore(id_product: number, id_store: number) {
    const [prices] = await this.query<Prices['fields'][]>(`
      SELECT * FROM prices WHERE id_product = ${id_product} AND id_store = ${id_store};
    `)

    return prices[0];
  }


  async fillWithOriginalPrice<T>(products: A<T>[]) {
    const productsWithData: T[] & QueryResultItem[] = [];

    for (const product of products) {
      const originalProduct = await this.getPricesByProductAndStore(product.id_product, product.id_store);

      productsWithData.push({
        ...product,
        ...originalProduct,
      })
    }

    return productsWithData;
  }
}

export type { BiggestDifference, CheapestProduct };
export default Prices