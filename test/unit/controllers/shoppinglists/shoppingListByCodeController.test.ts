import { shoppingListByCodeController } from "../../../../controllers/shoppinglists/shoppingListByCodeController";
import { mockExpress } from "../../../mocks/mock-express";
import { getOriginalShoppingListMock, mockShoppingList } from "../../../mocks/orm/mock-shopping-list";

describe("Shopping List By Code Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await shoppingListByCodeController(Request, Response);
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
    await shoppingListByCodeController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No code detected")
  });
  it("should return correct shopping list", async () => {
    // Given
    const expected = getOriginalShoppingListMock(0);
    const { Request, Response } = mockExpress({
      query: {
        code: expected.code
      }
    });
    const { shoppingListSpy } = mockShoppingList(expected)
    // When
    await shoppingListByCodeController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(shoppingListSpy).toHaveBeenCalledTimes(1);
    expect(Response.json.mock.calls[0][0]).toStrictEqual(expected)
  });
  it("should return empty array if no shopping list is found", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        code: "shopping-list-1"
      }
    });
    const { shoppingListSpy } = mockShoppingList()
    // When
    await shoppingListByCodeController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toStrictEqual({});
    expect(shoppingListSpy).toHaveBeenCalledTimes(1);
  });
});