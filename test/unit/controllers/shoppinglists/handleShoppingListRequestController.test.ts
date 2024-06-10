import { handleShoppingListRequestController } from "../../../../controllers/shoppinglists/handleShoppingListRequestController";
import { UserShoppingListRequest } from "../../../../orm/UserShoppingLists/UserShoppingListsBase";
import { mockExpress } from "../../../mocks/mock-express";
import { mockUserShoppingLists } from "../../../mocks/orm/mock-user-shopping-lists";

describe("Handle Shopping List Request Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(400);
    expect(Response.json.mock.calls[0][0].error).toBe("Missing query")
  });
  it("should throw if no id shopping list is provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        is_accepted: "1"
      }
    });
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No params detected")
  });
  it("should throw if no is accepted is provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_shopping_list: "1"
      }
    });
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No params detected")
  });
  it("should throw error if query is invalid", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_shopping_list: 1 as any,
        is_accepted: "1"
      }
    });
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should throw error if query is invalid", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_shopping_list: "1",
        is_accepted: 1 as any
      }
    });
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should update the shopping list request with an accepted value", async () => {
    // Given
    const expectedIdShoppingList = "1";
    const { Request, Response } = mockExpress({
      query: {
        id_shopping_list: expectedIdShoppingList,
        is_accepted: "1"
      }
    });
    const { updateIsAcceptedByShoppingListIdSpy } = mockUserShoppingLists()
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json).toHaveBeenCalledWith({});
    expect(updateIsAcceptedByShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(updateIsAcceptedByShoppingListIdSpy).toHaveBeenCalledWith(1, Number(expectedIdShoppingList), UserShoppingListRequest.ACCEPTED);
  });
  it("should update the shopping list request with an accepted value", async () => {
    // Given
    const expectedIdShoppingList = "1";
    const { Request, Response } = mockExpress({
      query: {
        id_shopping_list: expectedIdShoppingList,
        is_accepted: "true"
      }
    });
    const { updateIsAcceptedByShoppingListIdSpy } = mockUserShoppingLists()
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json).toHaveBeenCalledWith({});
    expect(updateIsAcceptedByShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(updateIsAcceptedByShoppingListIdSpy).toHaveBeenCalledWith(1, Number(expectedIdShoppingList), UserShoppingListRequest.ACCEPTED);
  });
  it("should update the shopping list request with a rejected value", async () => {
    // Given
    const expectedIdShoppingList = "1";
    const { Request, Response } = mockExpress({
      query: {
        id_shopping_list: expectedIdShoppingList,
        is_accepted: "0"
      }
    });
    const { updateIsAcceptedByShoppingListIdSpy } = mockUserShoppingLists()
    // When
    await handleShoppingListRequestController(Request, Response);
    // Then
    expect(Response.json).toHaveBeenCalledWith({});
    expect(updateIsAcceptedByShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(updateIsAcceptedByShoppingListIdSpy).toHaveBeenCalledWith(1, Number(expectedIdShoppingList), UserShoppingListRequest.REJECTED);
  });
});