import { Product } from '../products/base';
import { ShoppingList } from '../ShoppingLists/ShoppingListsBase';
import { Store } from '../stores/base/StoresBase';
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

  async saveFavorite(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    await this.insert({
      id_shopping_list: shoppingListId,
      id_product: productId,
      id_store: idStore,
      quantity: 1
    });
  }

  async isFavorite(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    const [favorite] = await this.query<{ id: number }[]>(`SELECT * FROM ${this.table} WHERE id_shopping_list = ${shoppingListId} AND id_product = ${productId} AND id_store = ${idStore}`);

    return !!favorite.length;
  }

  async removeFavorite(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    await this.query(`DELETE FROM ${this.table} WHERE id_shopping_list = ${shoppingListId} AND id_product = ${productId} AND id_store = ${idStore}`);
  }
}

export { ProductsShoppingLists };
