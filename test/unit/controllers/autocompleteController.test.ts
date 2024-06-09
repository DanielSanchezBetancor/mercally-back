import { autocompleteController } from "../../../controllers/products/autocompleteController";
import { mockExpress } from "../../mocks/mock-express";
import { mockProducts } from "../../mocks/orm/mock-products";

describe("Autocomplete Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await autocompleteController(Request, Response);
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
    await autocompleteController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should return correct products", async () => {
    // Given
    const expected = 'autocompleted-product';
    const { Request, Response } = mockExpress({
      query: {
        query: "product"
      }
    });
    const { autocompleteSpy } = mockProducts(expected)
    // When
    await autocompleteController(Request, Response);
    // Then
    expect(autocompleteSpy).toHaveBeenCalledTimes(1);
    expect(Response.json.mock.calls[0][0]).toBe<string>(expected)
  });
  it("should return error if search term is too short", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        query: "pr"
      }
    });
    // When
    await autocompleteController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Search term too short")
  });
  it("should return error if search term is not a string", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        query: 1 as any
      }
    });
    // When
    await autocompleteController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should not throw error if no product is found", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        query: "not-existing-product"
      }
    });
    const { autocompleteSpy } = mockProducts();
    // When
    await autocompleteController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toEqual({})
    expect(autocompleteSpy).toHaveBeenCalledTimes(1);
    expect(autocompleteSpy).toHaveBeenCalledWith('not-existing-product')
  });
});