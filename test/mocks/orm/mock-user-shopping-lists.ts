import { UserShoppingLists } from "../../../orm/UserShoppingLists/UserShoppingLists";

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

  return { getActiveShoppingListIdSpy };
}

export { getOriginalUserShoppingLists, mockUserShoppingLists };