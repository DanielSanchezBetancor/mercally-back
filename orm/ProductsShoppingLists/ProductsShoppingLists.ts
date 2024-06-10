import { ProductsShoppingListsBase } from './ProductsShoppingListsBase';

class ProductsShoppingLists extends ProductsShoppingListsBase {
  constructor() {
    super();
  }

  async getQuantityByProductIdAndShoppingListId(productId: string, shoppingListId: number) {
    const [quantity] = await this.query<{ quantity?: string }[]>(`SELECT quantity FROM ${this.table} WHERE id_shopping_list = ${shoppingListId} AND id_product = ${productId}`);

    return quantity[0]?.quantity;
  }

  async updateQuantityByProductIdAndShoppingListId(productId: number, shoppingListId: number, quantity: number) {
    await this.query(`UPDATE ${this.table} SET quantity = ${quantity} WHERE id_shopping_list = ${shoppingListId} AND id_product = ${productId}`);
  }

  async deleteByProductIdAndShoppingListId(productId: string, shoppingListId: number) {
    await this.query(`DELETE FROM ${this.table} WHERE id_shopping_list = ${shoppingListId} AND id_product = ${productId}`);
  }
}

export { ProductsShoppingLists };