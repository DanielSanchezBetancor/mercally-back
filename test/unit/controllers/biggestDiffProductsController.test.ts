import { biggestDiffProductsController } from "../../../controllers/products/biggestDiffProductsController";
import { mockExpress } from "../../mocks/mock-express";
import { getBiggestDifferenceMock, mockPrices } from "../../mocks/orm/mock-prices";
import { fillWithOriginalProductMock, mockProducts } from "../../mocks/orm/mock-products";

describe("Biggest Diff Products Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return the products with the biggest difference", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const { biggestDifferenceMock } = mockPrices();
    const Products = mockProducts();
    const actual = fillWithOriginalProductMock(getBiggestDifferenceMock());
    // When
    await biggestDiffProductsController(Request, Response);
    // Then
    expect(biggestDifferenceMock).toHaveBeenCalledTimes(1);
    expect(Products).toHaveBeenCalledTimes(3);
    expect(Response.json.mock.calls[0][0]).toStrictEqual(actual);
  });
  // Hay que moverlo a los tests de orm/products/Products.test.ts
  it.skip("should fill with original product", async () => {
    // Given
    const products = getBiggestDifferenceMock();
    const Products = mockProducts();
    const actual = fillWithOriginalProductMock(products);
    // When
    // const result = await fillWithOriginalProduct(products);
    // Then
    expect(Products).toHaveBeenCalledTimes(3);
    // expect(result).toStrictEqual(actual);
  });
});