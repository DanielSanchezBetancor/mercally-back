import { ProductsShoppingListFields } from "../../orm/ProductsShoppingLists/ProductsShoppingListsBase";
import { ShoppingList } from "../../orm/ShoppingLists/ShoppingListsBase";
import { UserShoppingList } from "../../orm/UserShoppingLists/UserShoppingListsBase";

type ShoppingListByUserResponse = {
  id: ShoppingList['id'],
  name: ShoppingList['name'],
  id_background: ShoppingList['id_background'],
  quantity: ProductsShoppingListFields['quantity'];
  is_active: UserShoppingList['is_active'];
}

export {
  ShoppingListByUserResponse
};
