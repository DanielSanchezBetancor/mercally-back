import { ShoppingList } from "../../orm/ShoppingLists/ShoppingListsBase"

type ShoppingListByUserResponse = {
  id: ShoppingList['id'],
  name: ShoppingList['name'],
  id_background: ShoppingList['id_background'],
  quantity: number
}

export {
  ShoppingListByUserResponse
}