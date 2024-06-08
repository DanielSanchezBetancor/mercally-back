import Products from "../../../../orm/products/Products";
import mockBase from "../../../mocks/orm/mock-base";
import { getBiggestDifferenceMock } from "../../../mocks/orm/mock-prices";
import { fillWithOriginalProductMock } from "../../../mocks/orm/mock-products";

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
});