import HistoryPrices from "../../../../orm/HistoryPrices/HistoryPrices";
import { mockQueryHistoryPrice } from "../../../mocks/orm/mock-base";
import { getOriginalHistoryPriceMock } from "../../../mocks/orm/mock-history-prices";

describe("History Prices Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should query the table by field", async () => {
    // Given
    const originalPrice = new HistoryPrices();
    const {
      querySpy
    } = mockQueryHistoryPrice()
    const field = 'price_per_unit';
    const value = '1';
    const actual = getOriginalHistoryPriceMock(0)
    // When
    const result = await originalPrice.getAllByField(field, value, undefined);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT * FROM history_prices WHERE ${field} = '${value}' `);
    expect(result).toStrictEqual(actual);
  });
  it("should query for a product history", async () => {
    // Given
    const originalPrice = new HistoryPrices();
    const {
      querySpy
    } = mockQueryHistoryPrice()
    const productId = '1';
    const storesId = ['1'];
    const from = '2021-01-01';
    const to = '2021-01-02';
    const actual = getOriginalHistoryPriceMock(0)
    // When
    const result = await originalPrice.getProductHistory(productId, storesId, from, to);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`
      SELECT *
      FROM history_prices
      WHERE id_product = ${productId}
      AND id_store IN (${storesId.join(',')})
      AND date between '${from}' and '${to}'
    `);
    expect(result).toStrictEqual(actual);
  });
});