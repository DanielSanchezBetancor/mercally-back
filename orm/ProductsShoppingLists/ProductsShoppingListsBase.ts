import BaseQuery from "../base/BaseQuery";

type ProductsShoppingList = {
  id_product: number;
  id_shopping_list: number;
  id_store: number;
  quantity: number;
};


class ProductsShoppingListsBase extends BaseQuery<ProductsShoppingList> {
  protected table = "shopping_lists_products";
  protected fields: ProductsShoppingList = {
    id_product: 0,
    id_shopping_list: 0,
    quantity: 0,
    id_store: 0,
  };

  constructor() {
    super();
  }
}

export { ProductsShoppingListsBase, ProductsShoppingList };
