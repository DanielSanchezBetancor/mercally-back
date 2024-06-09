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

class Prices extends PricesBase {
  private maxLimit = 3;

  constructor() {
    super();
  }

  async getBiggestDifference() {
    const [products] = await this.query<BiggestDifference[]>(`
      SELECT * FROM (
        SELECT 
          MAX(maxPrice.price) as max_price,
          MIN(minPrice.price) as min_price,
          MAX(maxPrice.price) - MIN(minPrice.price) as difference,
          maxPrice.id_product as id_product
        FROM 
          prices maxPrice,
          prices minPrice 
        WHERE maxPrice.id_product = minPrice.id_product
        GROUP BY maxPrice.id_product) as calculatedPrices 
      ORDER BY difference desc
      LIMIT ${this.maxLimit};
    `)

    return products;
  }

  async getCheapestProducts(id_categories: number[]) {
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
      LIMIT ${this.maxLimit};
    `)

    return products;
  }
}

export type { BiggestDifference, CheapestProduct }
export default Prices