
import ShoppingListsBase from './ShoppingListsBase';

class ShoppingLists extends ShoppingListsBase {
  constructor() {
    super();
  }

  async updateListCode(shoppingListId: number, listCode: string) {
    await this.query(`UPDATE ${this.table} SET code = '${listCode}' WHERE id = ${shoppingListId}`);
  }
}

export default ShoppingLists;
