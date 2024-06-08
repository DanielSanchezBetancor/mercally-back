import Products from "../../../../orm/products/Products";
import mockBase from "../../../mocks/orm/mock-base";
import { getBiggestDifferenceMock } from "../../../mocks/orm/mock-prices";
import { fillWithOriginalProductMock, getOriginalProductMock } from "../../../mocks/orm/mock-products";

describe("Products Test Suite", () => {
  it("should return empty array if no products are provided", async () => {
    // Given
    const originalProducts = new Products();
    // When
    const result = await originalProducts.fillWithOriginalProduct([]);
    // Then
    expect(result).toStrictEqual([]);
  });
  it("should fill with original product", async () => {
    // Given
    const originalProducts = new Products();
    const {
      getByPkSpy
    } = mockBase()
    const products = getBiggestDifferenceMock();
    const actual = fillWithOriginalProductMock(products);
    // When
    const result = await originalProducts.fillWithOriginalProduct(products);
    // Then
    expect(getByPkSpy).toHaveBeenCalledTimes(3);
    expect(result).toStrictEqual(actual);
  });
  it("should query the suggested product and return the products", async () => {
    // Given
    const search = "a";
    const originalProducts = new Products();
    const {
      querySpy
    } = mockBase()
    const actual = [getOriginalProductMock(0), getOriginalProductMock(1), getOriginalProductMock(2)]
    // When
    const result = await originalProducts.searchSuggestion(search);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`
      SELECT * 
      FROM products 
      JOIN prices ON prices.id_product = products.id
      WHERE name LIKE '%${search}%'
      ORDER BY price ASC
      LIMIT 10
    `);
    expect(result).toStrictEqual(actual);
  });
});