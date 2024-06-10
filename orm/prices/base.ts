import BaseQuery from "../base/BaseQuery";

type Price = {
  id: number;
  id_product: number;
  id_store: number;
  price: string;
  price_per_unit: string;
}

type PricesFields = Omit<Price, "id">;

enum SortBy {
  cheapest = 'cheapest',
  bestRatio = 'bestRatio',
  expensive = 'expensive',
}

class PricesBase extends BaseQuery<PricesFields> {
  protected table = 'prices';
  protected primaryKey = "id";
  protected fields: PricesFields = {
    id_product: 0,
    id_store: 0,
    price: "0.00",
    price_per_unit: "0.00"
  };

  constructor() {
    super();
  }

  getOrderBy(sortBy: SortBy) {
    switch (sortBy) {
      case SortBy.cheapest:
        return 'ORDER BY price ASC'
      case SortBy.bestRatio:
        return 'ORDER BY price_per_unit ASC'
      case SortBy.expensive:
        return 'ORDER BY price DESC'
      default:
        return 'ORDER BY price ASC'
    }
  }
}

export { SortBy, Price, PricesFields };
export default PricesBase
