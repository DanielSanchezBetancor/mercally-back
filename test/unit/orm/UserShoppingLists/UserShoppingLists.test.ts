import { UserShoppingLists } from "../../../../orm/UserShoppingLists/UserShoppingLists";
import { UserShoppingListRequest } from "../../../../orm/UserShoppingLists/UserShoppingListsBase";
import { getOriginalUserShoppingListsMock, mockUserShoppingListsQuery } from "../../../mocks/orm/mock-user-shopping-lists-query";

describe("User Shopping Lists Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should try to get active shopping list by user id", async () => {
    // Given
    const originalShoppingListId = getOriginalUserShoppingListsMock(1)
    const { querySpy } = mockUserShoppingListsQuery();
    // When
    const shoppingList = await new UserShoppingLists().getActiveShoppingListId(1);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT id_shopping_list FROM users_shopping_lists WHERE id_user = 1 AND is_active = 1`);
    expect(shoppingList).toBe(originalShoppingListId.id_shopping_list);
  });
  it("should try to request all requests for the active shopping list", async () => {
    // Given
    const originalShoppingListId = getOriginalUserShoppingListsMock(1)
    const { querySpy } = mockUserShoppingListsQuery();
    // When
    const requests = await new UserShoppingLists().getRequests(originalShoppingListId.id_shopping_list);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT * FROM users_shopping_lists WHERE id_shopping_list = ${originalShoppingListId.id_shopping_list} and is_accepted = '${UserShoppingListRequest.PENDING}'`);
    expect(requests).toEqual([originalShoppingListId]);
  });
})