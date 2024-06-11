import { HistoryPrice } from "../orm/HistoryPrices/HistoryPricesBase";
import { ProductsShoppingList } from "../orm/ProductsShoppingLists/ProductsShoppingListsBase";
import { ShoppingList } from "../orm/ShoppingLists/ShoppingListsBase";
import { UserShoppingList, UserShoppingListRequest } from "../orm/UserShoppingLists/UserShoppingListsBase";
import { UserStore } from "../orm/UsersStores/UsersStoresBase";
import { Price } from "../orm/prices/base";
import { Product } from "../orm/products/base";

const ID_PRODUCTS = [1, 2, 3, 4, 5]
const ID_STORES = [1, 2, 3]
const FRUITS = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Watermelon']
const PRICES: Price[] = []
const HISTORY_PRICES: HistoryPrice[] = []
const PRODUCTS: Product[] = []
const DATES: string[] = [
  '2021-01-01',
  '2021-01-02',
  '2021-01-03',
]
const SHOPPING_LIST: ShoppingList = {
  id: 1,
  code: '123456',
}
const SHOPPING_LIST_PRODUCTS: ProductsShoppingList[] = []
const USER_SHOPPING_LIST: UserShoppingList = {
  id_user: 1,
  id_shopping_list: 1,
  is_active: 1,
  is_accepted: UserShoppingListRequest.PENDING,
  is_owner: 1,
}
const USERS_STORES: UserStore[] = [
  {
    id_user: 1,
    id_store: 1,
  },
  {
    id_user: 1,
    id_store: 2,
  }
]

ID_PRODUCTS.forEach(idProduct => {
  ID_STORES.forEach(idStore => {
    PRICES.push({
      id: PRICES.length + 1,
      id_product: idProduct,
      id_store: idStore,
      price: (Math.random() * 10).toFixed(2),
      price_per_unit: (Math.random() * 2).toFixed(2),
    })
    DATES.forEach(date => {
      HISTORY_PRICES.push({
        id: HISTORY_PRICES.length + 1,
        id_product: idProduct,
        id_store: idStore,
        price: (Math.random() * 10).toFixed(2),
        price_per_unit: (Math.random() * 2).toFixed(2),
        date,
      })
    })
  })
  PRODUCTS.push({
    id: idProduct,
    name: FRUITS[idProduct - 1],
    is_white_brand: randomBoolean(),
    id_category: 1,
    id_brand: 1,
  })
  SHOPPING_LIST_PRODUCTS.length < 3 && SHOPPING_LIST_PRODUCTS.push({
    id_shopping_list: 1,
    id_product: idProduct,
    quantity: idProduct,
  })
})

function randomBoolean() {
  return Math.random() < 0.5 ? 0 : 1
}

export {
  PRICES,
  PRODUCTS,
  HISTORY_PRICES,
  SHOPPING_LIST,
  SHOPPING_LIST_PRODUCTS,
  USER_SHOPPING_LIST,
  USERS_STORES
};
