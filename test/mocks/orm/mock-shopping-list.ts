import { ResultSetHeader } from "mysql2";
import ShoppingLists from "../../../orm/ShoppingLists/ShoppingLists";
import { ShoppingList } from "../../../orm/ShoppingLists/ShoppingListsBase";

function getOriginalShoppingListMock(id: number): ShoppingList {
  return {
    id,
    code: `shopping-list-${id}`,
  }
}

function mockShoppingList(value?: ShoppingList) {
  const shoppingListSpy = jest.spyOn(ShoppingLists.prototype, "getAllByField").mockImplementation(async () => {
    const returnValue = value ? [value] : []
    return returnValue as unknown as ResultSetHeader & ShoppingList[];
  });

  return { shoppingListSpy };
}

export { getOriginalShoppingListMock, mockShoppingList };