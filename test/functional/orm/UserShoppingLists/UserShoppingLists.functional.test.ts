import { UserShoppingLists } from "../../../../orm/UserShoppingLists/UserShoppingLists";
import { UserShoppingListRequest } from "../../../../orm/UserShoppingLists/UserShoppingListsBase";
import { buildTestDB } from "../../../utils";

describe("User Shopping Lists Test Suite", () => {
  it("should get active shopping list by user id", async () => {
    // Given
    const { userShoppingList } = await buildTestDB();
    const expectedShoppingListId = userShoppingList.id_shopping_list;
    const userId = userShoppingList.id_user;
    // When
    const shoppingList = await new UserShoppingLists().getActiveShoppingListId(userId);
    // Then
    expect(shoppingList).toBe(expectedShoppingListId);
  });
  it("should request all requests for the active shopping list", async () => {
    // Given
    const { userShoppingList } = await buildTestDB();
    const expectedShoppingListId = userShoppingList.id_shopping_list;
    // When
    const requests = await new UserShoppingLists().getPendingRequests(expectedShoppingListId);
    // Then
    expect(requests).toEqual([userShoppingList]);
  });
  it("should update the accepted value for the shopping list", async () => {
    // Given
    const { userShoppingList } = await buildTestDB();
    const userId = userShoppingList.id_user;
    const shoppingListId = userShoppingList.id_shopping_list;
    // When
    await new UserShoppingLists().updateIsAcceptedByShoppingListId(userId, shoppingListId, UserShoppingListRequest.ACCEPTED);
    const newValue = await new UserShoppingLists().getAllByField('id_user', userId);
    // Then
    expect(newValue[0].is_accepted).toBe(UserShoppingListRequest.ACCEPTED);
  });
})