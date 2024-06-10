import { shoppingListRequestsController } from "../../../../controllers/shoppinglists/shoppingListRequestsController";
import { mockExpress } from "../../../mocks/mock-express";
import { getOriginalUserShoppingLists, mockUserShoppingLists } from "../../../mocks/orm/mock-user-shopping-lists";

describe("Shopping List Requests Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return all requests for user's active shopping list", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const { getActiveShoppingListIdSpy, getRequestsSpy } = mockUserShoppingLists();
    const originalShoppingList = getOriginalUserShoppingLists().id_shopping_list;
    // When
    await shoppingListRequestsController(Request, Response);
    // Then
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledWith(1);
    expect(getRequestsSpy).toHaveBeenCalledWith(originalShoppingList);
    expect(Response.json).toHaveBeenCalledWith({ requests: [getOriginalUserShoppingLists()] });
  });
});