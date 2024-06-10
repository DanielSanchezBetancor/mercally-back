import HistoryPrices from "../../../../orm/HistoryPrices/HistoryPrices";
import { buildTestDB } from "../../../utils";

function transformDatesFromDB(date: string) {
  return new Date(date).toISOString();
}

describe("History Prices Test Suite", () => {
  it("should get price details by field", async () => {
    // Given
    const expectedProductId = 3;
    const { historyPrices } = await buildTestDB();
    const originalProduct = new HistoryPrices();
    const expected = historyPrices
      .filter((price) => price.id_product === expectedProductId)
      .map((price) => ({
        ...price,
        price: Number(price.price),
        price_per_unit: Number(price.price_per_unit),
        date: new Date(price.date).toISOString(),
      }))
    // When
    const result = await originalProduct.getAllByField("id_product", expectedProductId, undefined)
    // Dates are coming from DB without quotes, so we need to transform it
    const resultWithTransformedDates = result.map((price) => ({
      ...price,
      date: transformDatesFromDB(price.date),
    }));
    // Then
    expect(resultWithTransformedDates).toEqual(expected);
  });
  it("should get the history details for a product", async () => {
    // Given
    const originalProduct = new HistoryPrices();
    const { historyPrices } = await buildTestDB();
    const expectedProductId = "3";
    const stores = [1, 2, 4]
    const expected = historyPrices
      .filter(price => price.id_product === Number(expectedProductId))
      .filter(price => price.date >= '2021-01-01' && price.date <= '2021-01-02')
      .filter(price => stores.includes(price.id_store))
      .map(price => ({
        ...price,
        price: Number(price.price),
        price_per_unit: Number(price.price_per_unit),
        date: new Date(price.date).toISOString()
      }));
    // When
    const result = await originalProduct.getProductHistory(expectedProductId, stores.map(String), '2021-01-01', '2021-01-02')
    // Dates are coming from DB without quotes, so we need to transform it
    const resultWithTransformedDates = result.map((price) => ({
      ...price,
      date: transformDatesFromDB(price.date),
    }));
    // Then
    expect(resultWithTransformedDates).toEqual(expected);
  });
  it("should not throw error if no product history is found", async () => {
    // Given
    const originalProduct = new HistoryPrices();
    // When
    const result = await originalProduct.getProductHistory("9999", ["1"], '2021-01-01', '2021-01-02')
    // Then
    expect(result).toEqual([]);
  });
});