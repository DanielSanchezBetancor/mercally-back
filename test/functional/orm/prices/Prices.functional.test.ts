import Prices from "../../../../orm/prices/Price";
import { SortBy } from "../../../../orm/prices/base";
import { buildTestDB } from "../../../utils";

describe("Prices Test Suite", () => {
  it("should get correct order by for expensive", async () => {
    // Given
    const originalPrice = new Prices();
    // When
    const result = originalPrice.getOrderBy(SortBy.expensive);
    // Then
    expect(result).toBe('ORDER BY price DESC');
  });
  it("should get correct order by for cheapest", async () => {
    // Given
    const originalPrice = new Prices();
    // When
    const result = originalPrice.getOrderBy(SortBy.cheapest);
    // Then
    expect(result).toBe('ORDER BY price ASC');
  });
  it("should get price details by field", async () => {
    // Given
    const expectedProductId = 3;
    const { prices } = await buildTestDB();
    const originalProduct = new Prices();
    const expected = prices
      .filter((price) => price.id_product === expectedProductId)
      .toSorted((a, b) => Number(a.price) - Number(b.price))
      .map((price) => ({
        ...price,
        price: Number(price.price),
        price_per_unit: Number(price.price_per_unit),
      }))
    // When
    const result = await originalProduct.getAllByField("id_product", expectedProductId, undefined)
    // Then
    expect(result).toEqual(expected);
  });
  it("should get the price details by field and sort by expensive", async () => {
    // Given
    const originalPrice = new Prices();
    const { prices } = await buildTestDB();
    const expectedProductId = 3;
    const expected = prices
      .filter((price) => price.id_product === expectedProductId)
      .map((price) => ({
        ...price,
        price: Number(price.price),
        price_per_unit: Number(price.price_per_unit),
      }))
      .sort((a, b) => Number(b.price) - Number(a.price))
    // When
    const result = await originalPrice.getAllByField("id_product", expectedProductId, SortBy.expensive)
    // Then
    expect(result).toEqual(expected);
  });
});