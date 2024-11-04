import { User } from "../users/UsersBase";
import { UserShoppingList, UserShoppingListRequest, UserShoppingListsBase } from "./UserShoppingListsBase";

class UserShoppingLists extends UserShoppingListsBase {
  constructor() {
    super();
  }

  async getActiveShoppingListId(userId: number) {
    const [activeShoppingList] = await this.query<UserShoppingList[]>(`SELECT id_shopping_list FROM ${this.table} WHERE id_user = ${userId} AND is_active = 1`);

    return activeShoppingList[0].id_shopping_list;
  }

  async getPendingRequests(activeShoppingList: number) {
    const [requests] = await this.query<UserShoppingList[]>(`SELECT * FROM ${this.table} WHERE id_shopping_list = ${activeShoppingList} and is_accepted = '${UserShoppingListRequest.PENDING}'`);

    return requests;
  }

  async updateIsAcceptedByShoppingListId(userId: number, idShoppingList: number, isAccepted: UserShoppingListRequest) {
    await this.query<UserShoppingList[]>(`UPDATE ${this.table} SET is_accepted = '${isAccepted}' WHERE id_user = ${userId} AND id_shopping_list = ${idShoppingList}`);
  }

  async getFavoriteListId(userId: User['id']) {
    const [favoriteList] = await this.query<{ id_shopping_list: number }[]>(`
      SELECT id_shopping_list
      FROM ${this.table}
      WHERE is_favorite_list = 1 
      AND id_user = ${userId}
    `);

    return favoriteList[0]?.id_shopping_list;
  }

  async updateActiveList(newActiveId: number, idUser: number) {
    await this.query<UserShoppingList[]>(`UPDATE ${this.table} SET is_active = 0 WHERE id_user = ${idUser}`);
    await this.query<UserShoppingList[]>(`UPDATE ${this.table} SET is_active = 1 WHERE id_user = ${idUser} AND id_shopping_list = ${newActiveId}`);
  }
}

export { UserShoppingLists };