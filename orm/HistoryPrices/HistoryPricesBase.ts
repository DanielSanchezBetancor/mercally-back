import BaseQuery from "../base/BaseQuery";
import { Price } from "../prices/base";

type HistoryPrice = Price & {
  date: string
}


type HistoryPricesFields = Omit<HistoryPrice, "id">

class HistoryPricesBase extends BaseQuery<HistoryPricesFields> {
  protected table = "history_prices"
  protected fields: HistoryPricesFields = {
    id_product: 0,
    id_store: 0,
    price: "0",
    price_per_unit: "0",
    date: "0"
  }

  constructor() {
    super();
  }
}

export { HistoryPrice, HistoryPricesFields };
export default HistoryPricesBase;
