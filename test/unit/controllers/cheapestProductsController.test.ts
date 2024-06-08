import { biggestDiffProductsController } from "../../../controllers/products/biggestDiffProductsController";
import { cheapestProductsController } from "../../../controllers/products/cheapestProductsController";
import { mockExpress } from "../../mocks/mock-express";
import { getCheapestProductsMock, mockPrices } from "../../mocks/orm/mock-prices";
import { fillWithOriginalProductMock, mockProducts } from "../../mocks/orm/mock-products";

describe("Cheapest Products Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw if no query is sended", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await cheapestProductsController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toStrictEqual({ error: "Missing query" });
  });
  it("should throw if no id_categories is sended", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {}
    });
    // When
    await cheapestProductsController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toStrictEqual({ error: "Missing id_categories" });
  });
  it("should return the cheapest products with the price average", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_categories: "1,2,3"
      }
    });
    const { cheapestProductsMock } = mockPrices();
    const { getByPkSpy } = mockProducts();
    const actual = fillWithOriginalProductMock(getCheapestProductsMock());
    // When
    await cheapestProductsController(Request, Response);
    // Then
    expect(cheapestProductsMock).toHaveBeenCalledTimes(1);
    expect(getByPkSpy).toHaveBeenCalledTimes(3);
    expect(Response.json.mock.calls[0][0]).toStrictEqual(actual);
  });
});