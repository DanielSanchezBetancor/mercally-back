import { Product } from '../products/base';
import { ShoppingList } from '../ShoppingLists/ShoppingListsBase';
import { Store } from '../stores/base/StoresBase';
import { ProductsShoppingListsBase } from './ProductsShoppingListsBase';

class ProductsShoppingLists extends ProductsShoppingListsBase {
  constructor() {
    super();
  }

  getCommonWhere(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    return `WHERE id_shopping_list = ${shoppingListId} AND id_product = ${productId} AND id_store = ${idStore}`;
  }

  async getProductQuantity(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    const [quantity] = await this.query<{ quantity?: string }[]>(`SELECT quantity FROM ${this.table} ${this.getCommonWhere(shoppingListId, productId, idStore)}`);

    return quantity[0]?.quantity;
  }

  async updateProductQuantity(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id'], quantity: number) {
    await this.query(`UPDATE ${this.table} SET quantity = ${quantity} ${this.getCommonWhere(shoppingListId, productId, idStore)}`);
  }

  async deleteProductFromList(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    await this.query(`DELETE FROM ${this.table} ${this.getCommonWhere(shoppingListId, productId, idStore)}`);
    
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
    const [favorite] = await this.query<{ id: number }[]>(`SELECT * FROM ${this.table} ${this.getCommonWhere(shoppingListId, productId, idStore)}`);
  
    return !!favorite.length;
  }

  async removeFavorite(shoppingListId: ShoppingList['id'], productId: Product['id'], idStore: Store['id']) {
    await this.query(`DELETE FROM ${this.table} ${this.getCommonWhere(shoppingListId, productId, idStore)}`);
  }
}

export { ProductsShoppingLists };
