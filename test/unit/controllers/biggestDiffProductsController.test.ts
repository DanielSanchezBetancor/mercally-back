import { biggestDiffProductsController, fillWithOriginalProduct } from "../../../controllers/products/biggestDiffProductsController";
import { mockExpress } from "../../mocks/mock-express";
import { getMockPrices, mockPrices } from "../../mocks/orm/mock-prices";
import { fillBiggestDiffProduct, mockProducts } from "../../mocks/orm/mock-products";

describe("Biggest Diff Products Controller Test Suite", () => {
  it("should return the products with the biggest difference", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const Prices = mockPrices();
    const Products = mockProducts();
    const actual = fillBiggestDiffProduct(getMockPrices());
    // When
    await biggestDiffProductsController(Request, Response);
    // Then
    expect(Prices).toHaveBeenCalledTimes(1);
    expect(Products).toHaveBeenCalledTimes(3);
    expect(Response.json.mock.calls[0][0]).toStrictEqual(actual);
  });
  it("should fill with original product", async () => {
    // Given
    const products = getMockPrices();
    const Products = mockProducts();
    const actual = fillBiggestDiffProduct(products);
    // When
    const result = await fillWithOriginalProduct(products);
    // Then
    expect(Products).toHaveBeenCalledTimes(3);
    expect(result).toStrictEqual(actual);
  });
});