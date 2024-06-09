import ShoppingLists from "../../../../orm/ShoppingLists/ShoppingLists";
import { getOriginalShoppingListMock, mockQuery } from "../../../mocks/orm/mock-shopping-list";
import { buildTestDB } from "../../../utils";

describe("Shopping Lists Test Suite", () => {
  it("should update a shopping list code", async () => {
    // Given
    const { shoppingList } = await buildTestDB();
    // When
    const oldCode = shoppingList.code;
    await new ShoppingLists().updateListCode(shoppingList.id, "new-code");
    const newCode = await new ShoppingLists().getAllByField('id', shoppingList.id);
    // Then
    expect(oldCode).not.toEqual(newCode[0].code);
    expect(newCode[0].code).toEqual('new-code');
  });
});