import { searchController } from "../../../controllers/products/searchController";
import { mockExpress } from "../../mocks/mock-express";
import { getOriginalProductMock, mockProducts } from "../../mocks/orm/mock-products";

describe("Search Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await searchController(Request, Response);
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
    await searchController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should return correct products", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        search: "product"
      }
    });
    const { searchSpy } = mockProducts()
    // When
    await searchController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toBeInstanceOf(Array);
    expect(searchSpy).toHaveBeenCalledTimes(1);
    expect(Response.json.mock.calls[0][0]).toStrictEqual([getOriginalProductMock(0)])
  });
  it("should return error if search term is too short", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        search: "pr"
      }
    });
    // When
    await searchController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Search term too short")
  });
  it("should return error if search term is not a string", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        search: 1 as any
      }
    });
    // When
    await searchController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
});