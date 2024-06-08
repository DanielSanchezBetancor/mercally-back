import PriceBase from "./base";

type BiggestDifference = {
  difference: number;
  id_product: number;
  max_price: string;
  min_price: string;
}

class Price extends PriceBase {
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
}

export type { BiggestDifference }
export default Price