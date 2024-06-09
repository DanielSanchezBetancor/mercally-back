import ShoppingLists from "../../../../orm/ShoppingLists/ShoppingLists";
import { getOriginalShoppingListMock, mockQuery } from "../../../mocks/orm/mock-shopping-list";

describe("Shopping Lists Test Suite", () => {
  it("should try to update a shopping list code", async () => {
    // Given
    const newCode = "new-code";
    const originalShoppingList = getOriginalShoppingListMock(0);
    const { querySpy } = mockQuery();
    // When
    await new ShoppingLists().updateListCode(originalShoppingList.id, newCode);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`UPDATE shopping_lists SET code = '${newCode}' WHERE id = ${originalShoppingList.id}`);
  });
});