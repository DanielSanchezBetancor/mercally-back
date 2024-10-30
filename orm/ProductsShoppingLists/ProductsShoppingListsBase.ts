import BaseQuery from "../base/BaseQuery";
import { Product } from "../products/base";
import { ShoppingList } from "../ShoppingLists/ShoppingListsBase";
import { Store } from "../stores/base/StoresBase";

type ProductsShoppingListFields = {
  id_product: Product['id'],
  id_shopping_list: ShoppingList['id'],
  id_store: Store['id'],
  quantity: number
}


class ProductsShoppingListsBase extends BaseQuery<ProductsShoppingListFields> {
  protected table = "shopping_lists_products";
  protected fields: ProductsShoppingListFields = {
    id_product: 0,
    id_shopping_list: 0,
    quantity: 0,
    id_store: 0,
  };

  constructor() {
    super();
  }
}

export { ProductsShoppingListsBase, ProductsShoppingListFields };
