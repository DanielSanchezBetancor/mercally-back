import BaseQuery from "../base/BaseQuery";

type PriceFields = {
  id?: number;
  id_product: number;
  id_store: number;
  price: string;
  price_per_unit: string;
}

class PriceBase extends BaseQuery<PriceFields> {
  protected table = 'prices';
  protected fields: PriceFields = {
    id_product: 0,
    id_store: 0,
    price: "0.00",
    price_per_unit: "0.00"
  };
  protected primaryKey = "id";

  constructor() {
    super();
  }


}

export default PriceBase
