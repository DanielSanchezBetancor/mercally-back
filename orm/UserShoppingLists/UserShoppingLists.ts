import { UserShoppingList, UserShoppingListRequest, UserShoppingListsBase } from "./UserShoppingListsBase";

class UserShoppingLists extends UserShoppingListsBase {
  constructor() {
    super();
  }

  async getActiveShoppingListId(userId: number) {
    const [activeShoppingList] = await this.query<UserShoppingList[]>(`SELECT id_shopping_list FROM ${this.table} WHERE id_user = ${userId} AND is_active = 1`);

    return activeShoppingList[0].id_shopping_list;
  }

  async getRequests(activeShoppingList: number) {
    const [requests] = await this.query<UserShoppingList[]>(`SELECT * FROM ${this.table} WHERE id_shopping_list = ${activeShoppingList} and is_accepted = '${UserShoppingListRequest.PENDING}'`);

    return requests;
  }
}

export { UserShoppingLists };