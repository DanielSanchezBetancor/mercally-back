import { UserShoppingList, UserShoppingListsBase } from "./UserShoppingListsBase";

class UserShoppingLists extends UserShoppingListsBase {
  constructor() {
    super();
  }

  async getActiveShoppingListId(userId: number) {
    const [activeShoppingList] = await this.query<UserShoppingList[]>(`SELECT id_shopping_list FROM ${this.table} WHERE id_user = ${userId} AND is_active = 1`);

    return activeShoppingList[0].id_shopping_list;
  }
}

export { UserShoppingLists };