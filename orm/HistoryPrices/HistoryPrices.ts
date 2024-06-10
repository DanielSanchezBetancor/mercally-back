import HistoryPricesBase, { HistoryPrice } from "./HistoryPricesBase";

class HistoryPrices extends HistoryPricesBase {
  constructor() {
    super();
  }

  async getProductHistory(productId: string, storesId: string[], from: string, to: string) {
    const [data] = await this.query<HistoryPrice[]>(`
      SELECT *
      FROM ${this.table}
      WHERE id_product = ${productId}
      AND id_store IN (${storesId.join(',')})
      AND date between '${from}' and '${to}'
    `);

    return data;
  }

}

export default HistoryPrices;
