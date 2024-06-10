import Prices from "../../../../orm/prices/Price";
import { SortBy } from "../../../../orm/prices/base";
import { mockQueryPrice } from "../../../mocks/orm/mock-base";
import { getOriginalPriceMock } from "../../../mocks/orm/mock-prices";

describe("Prices Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should query the table by field", async () => {
    // Given
    const originalPrice = new Prices();
    const {
      querySpy
    } = mockQueryPrice()
    const field = 'price_per_unit';
    const value = '1';
    const actual = getOriginalPriceMock(0)
    const defaultSortBy = originalPrice.getOrderBy(SortBy.cheapest);
    // When
    const result = await originalPrice.getAllByField(field, value, undefined);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT * FROM prices WHERE ${field} = '${value}' ${defaultSortBy}`);
    expect(result).toStrictEqual(actual);
  })
  it("should query the table by field and order by price", async () => {
    // Given
    const originalPrice = new Prices();
    const {
      querySpy
    } = mockQueryPrice()
    const field = 'price_per_unit';
    const value = '1';
    const actual = getOriginalPriceMock(0)
    const sortBy = originalPrice.getOrderBy(SortBy.expensive);
    // When
    const result = await originalPrice.getAllByField(field, value, SortBy.expensive);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT * FROM prices WHERE ${field} = '${value}' ${sortBy}`);
    expect(result).toStrictEqual(actual);
  })
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
  it("should get correct order by for best ratio", async () => {
    // Given
    const originalPrice = new Prices();
    // When
    const result = originalPrice.getOrderBy(SortBy.bestRatio);
    // Then
    expect(result).toBe('ORDER BY price_per_unit ASC');
  });
})