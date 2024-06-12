import { ResultSetHeader } from "mysql2";
import { UserShoppingLists } from "../../../orm/UserShoppingLists/UserShoppingLists";
import { UserShoppingList } from "../../../orm/UserShoppingLists/UserShoppingListsBase";

function getOriginalUserShoppingLists() {
  return {
    id_user: 1,
    id_shopping_list: 1,
    is_active: true,
    is_owner: true,
    is_accepted: true
  };
}

function mockUserShoppingLists() {
  const getActiveShoppingListIdSpy = jest.spyOn(UserShoppingLists.prototype, "getActiveShoppingListId").mockImplementation(async () => {
    return getOriginalUserShoppingLists().id_shopping_list;
  });

  const getPendingRequestsSpy = jest.spyOn(UserShoppingLists.prototype, "getPendingRequests").mockImplementation(async (_activeShoppingList: number) => {
    return [getOriginalUserShoppingLists()] as unknown as ResultSetHeader & UserShoppingList[];
  });

  const updateIsAcceptedByShoppingListIdSpy = jest.spyOn(UserShoppingLists.prototype, "updateIsAcceptedByShoppingListId").mockImplementation(async () => undefined)

  return { getActiveShoppingListIdSpy, getPendingRequestsSpy, updateIsAcceptedByShoppingListIdSpy };
}

export { getOriginalUserShoppingLists, mockUserShoppingLists };
