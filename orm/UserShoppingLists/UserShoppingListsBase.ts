import BaseQuery from "../base/BaseQuery";

type UserShoppingList = {
  id_user: number;
  id_shopping_list: number;
  is_active: boolean;
  is_owner: boolean;
  is_accepted: boolean;
}

class UserShoppingListsBase extends BaseQuery<UserShoppingList> {
  protected table = "users_shopping_lists";
  protected fields: UserShoppingList = {
    id_user: 0,
    id_shopping_list: 0,
    is_active: false,
    is_owner: false,
    is_accepted: false,
  };

  constructor() {
    super();
  }
}

export { UserShoppingListsBase, UserShoppingList };
