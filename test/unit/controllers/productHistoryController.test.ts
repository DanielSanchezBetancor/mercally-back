import { productHistoryController } from "../../../controllers/products/productHistoryController";
import { mockExpress } from "../../mocks/mock-express";
import { getOriginalHistoryPriceMock, mockHistoryPrices } from "../../mocks/orm/mock-history-prices";

describe("Product History Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await productHistoryController(Request, Response);
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
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should throw error if stores are not provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: "1"
      }
    });
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should return error if from is not provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: "1",
        id_stores: "1"
      }
    });
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should return error if to is not provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: "1",
        id_stores: ["1"],
        from: "2021-01-01"
      }
    });
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should return error if from is not a string", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: "1",
        id_stores: ["1"],
        from: 1 as any,
        to: "2021-01-01"
      }
    });
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should return error if to is not a string", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: "1",
        id_stores: ["1"],
        from: "2021-01-01",
        to: 1 as any
      }
    });
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should return correct products", async () => {
    // Given
    const expectedProductId = "2"
    const query = {
      id_product: expectedProductId,
      id_stores: ["1"],
      from: "2021-01-01",
      to: "2021-01-02"
    }
    const { Request, Response } = mockExpress({
      query
    });
    const { getProductHistorySpy } = mockHistoryPrices();
    const expected = [getOriginalHistoryPriceMock(Number(expectedProductId))]
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toEqual(expected)
    expect(getProductHistorySpy).toHaveBeenCalledTimes(1);
    expect(getProductHistorySpy).toHaveBeenCalledWith(query.id_product, query.id_stores, query.from, query.to)
  });

  it("should not throw error if no product is found", async () => {
    // Given
    const query = {
      id_product: "99999",
      id_stores: ["1"],
      from: "2021-01-01",
      to: "2021-01-02"
    }
    const { Request, Response } = mockExpress({
      query
    });
    const { getProductHistorySpy } = mockHistoryPrices(true);
    // When
    await productHistoryController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toEqual([])
    expect(getProductHistorySpy).toHaveBeenCalledTimes(1);
    expect(getProductHistorySpy).toHaveBeenCalledWith(query.id_product, query.id_stores, query.from, query.to)
  });
});