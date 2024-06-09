import { UserShoppingLists } from "../../../../orm/UserShoppingLists/UserShoppingLists";
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
})