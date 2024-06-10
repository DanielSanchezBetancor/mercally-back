import { searchSuggestionController } from "../../../controllers/products/searchSuggestionController";
import { mockExpress } from "../../mocks/mock-express";
import { getOriginalProductMock, mockProducts } from "../../mocks/orm/mock-products";

describe("Search Suggestion Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await searchSuggestionController(Request, Response);
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
    await searchSuggestionController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should return correct products", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        query: "product"
      }
    });
    const { searchSuggestionSpy } = mockProducts()
    // When
    await searchSuggestionController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toBeInstanceOf(Array);
    expect(searchSuggestionSpy).toHaveBeenCalledTimes(1);
    expect(Response.json.mock.calls[0][0]).toStrictEqual([getOriginalProductMock(0)])
  });
  it("should return error if search term is not a string", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        query: 1 as any
      }
    });
    // When
    await searchSuggestionController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
});