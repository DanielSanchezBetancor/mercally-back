import { productDetailsController } from "../../../controllers/products/productDetailsController";
import { mockExpress } from "../../mocks/mock-express";
import { getOriginalPriceMock, mockPrices } from "../../mocks/orm/mock-prices";
import { getOriginalProductMock, mockProducts } from "../../mocks/orm/mock-products";

describe("Product Details Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await productDetailsController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(400);
    expect(Response.json.mock.calls[0][0].error).toBe("Missing query")
  });
  it("should throw error if no query is provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {}
    });
    // When
    await productDetailsController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should return correct products", async () => {
    // Given
    const expectedProductId = "2"
    const { Request, Response } = mockExpress({
      query: {
        id_product: expectedProductId
      }
    });
    const { getByPkSpy } = mockProducts('', getOriginalProductMock(Number(expectedProductId)))
    const { getAllByFieldSpy } = mockPrices()
    const originalPrice = getOriginalPriceMock(expectedProductId)
    const expected = [{
      ...getOriginalProductMock(Number(expectedProductId)),
      ...originalPrice,
      price: Number(originalPrice.price),
      price_per_unit: Number(originalPrice.price_per_unit),
    }, {
      ...getOriginalProductMock(Number(expectedProductId)),
      ...originalPrice,
      price: Number(originalPrice.price),
      price_per_unit: Number(originalPrice.price_per_unit),
    }]
    // When
    await productDetailsController(Request, Response);
    // Then
    expect(getByPkSpy).toHaveBeenCalledTimes(1);
    expect(getByPkSpy).toHaveBeenCalledWith(expectedProductId)
    expect(getAllByFieldSpy).toHaveBeenCalledTimes(1);
    expect(getAllByFieldSpy).toHaveBeenCalledWith('id_product', expectedProductId, undefined)
    expect(Response.json.mock.calls[0][0]).toEqual(expected)
  });
  it("should return error if search term is not a string", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: 1 as any
      }
    });
    // When
    await productDetailsController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should not throw error if no product is found", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: "99999"
      }
    });
    const { getByPkSpy } = mockProducts();
    // When
    await productDetailsController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toEqual([])
    expect(getByPkSpy).toHaveBeenCalledTimes(1);
    expect(getByPkSpy).toHaveBeenCalledWith('99999')
  });
  it("should return products with ordered flag", async () => {
    // Given
    const expectedProductId = "2"
    const expectedOrderedBy = "expensive"
    const { Request, Response } = mockExpress({
      query: {
        id_product: expectedProductId,
        order_by: expectedOrderedBy
      }
    });
    const { getByPkSpy } = mockProducts('', getOriginalProductMock(Number(expectedProductId)))
    const { getAllByFieldSpy } = mockPrices()
    const originalPrice = getOriginalPriceMock(expectedProductId)
    const expected = [{
      ...getOriginalProductMock(Number(expectedProductId)),
      ...originalPrice,
      price: Number(originalPrice.price),
      price_per_unit: Number(originalPrice.price_per_unit),
    }, {
      ...getOriginalProductMock(Number(expectedProductId)),
      ...originalPrice,
      price: Number(originalPrice.price),
      price_per_unit: Number(originalPrice.price_per_unit),
    }]
    // When
    await productDetailsController(Request, Response);
    // Then
    expect(getByPkSpy).toHaveBeenCalledTimes(1);
    expect(getByPkSpy).toHaveBeenCalledWith(expectedProductId)
    expect(getAllByFieldSpy).toHaveBeenCalledTimes(1);
    expect(getAllByFieldSpy).toHaveBeenCalledWith('id_product', expectedProductId, expectedOrderedBy)
    expect(Response.json.mock.calls[0][0]).toEqual(expected)
  });
});