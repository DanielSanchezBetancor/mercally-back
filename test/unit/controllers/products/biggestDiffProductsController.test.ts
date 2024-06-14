import { biggestDiffProductsController } from "../../../../controllers/products/biggestDiffProductsController";
import { mockExpress } from "../../../mocks/mock-express";
import { mockPrices, getBiggestDifferenceMock } from "../../../mocks/orm/mock-prices";
import { mockProducts, fillWithOriginalProductMock } from "../../../mocks/orm/mock-products";

describe("Biggest Diff Products Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return the products with the biggest difference", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const { biggestDifferenceMock } = mockPrices();
    const { fillWithOriginalProductSpy } = mockProducts();
    const actual = fillWithOriginalProductMock(getBiggestDifferenceMock());
    // When
    await biggestDiffProductsController(Request, Response);
    // Then
    expect(biggestDifferenceMock).toHaveBeenCalledTimes(1);
    expect(fillWithOriginalProductSpy).toHaveBeenCalledTimes(1);
    expect(fillWithOriginalProductSpy).toHaveBeenCalledWith(getBiggestDifferenceMock())
    expect(Response.json.mock.calls[0][0]).toStrictEqual(actual);
  });
});