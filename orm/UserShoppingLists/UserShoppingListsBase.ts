import BaseQuery from "../base/BaseQuery";

enum UserShoppingListRequest {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

type UserShoppingList = {
  id_user: number;
  id_shopping_list: number;
  is_active: number;
  is_owner: number;
  is_accepted: UserShoppingListRequest;
  is_favorite_list: number
}

class UserShoppingListsBase extends BaseQuery<UserShoppingList> {
  protected table = "users_shopping_lists";
  protected fields: UserShoppingList = {
    id_user: 0,
    id_shopping_list: 0,
    is_active: 0,
    is_owner: 0,
    is_accepted: UserShoppingListRequest.PENDING,
    is_favorite_list: 0
  };

  constructor() {
    super();
  }
}

export { UserShoppingListsBase, UserShoppingList, UserShoppingListRequest };
