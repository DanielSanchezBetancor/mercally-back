import { HistoryPrice } from "../orm/HistoryPrices/HistoryPricesBase";
import { ProductsShoppingList } from "../orm/ProductsShoppingLists/ProductsShoppingListsBase";
import { ShoppingList } from "../orm/ShoppingLists/ShoppingListsBase";
import { UserShoppingList, UserShoppingListRequest } from "../orm/UserShoppingLists/UserShoppingListsBase";
import { THEMES, UserSetting, UserSettingKeys } from "../orm/UsersSettings/UsersSettingsBase";
import { UserStore } from "../orm/UsersStores/UsersStoresBase";
import { CategoryTableData } from "../orm/categories/base/CategoriesBase";
import { Price } from "../orm/prices/base";
import { Product } from "../orm/products/base";
import { Store } from "../orm/stores/base/StoresBase";
import { User } from "../orm/users/UsersBase";

/* Random data */
const STORE_NAMES = ['carrefour', 'mercadona', 'lidl', 'aldi', 'día']
const CATEGORY_NAMES = ['Fruits', 'Vegetables', 'Meat', 'Fish', 'Dairy']
const ID_PRODUCTS = [1, 2, 3, 4, 5]
const ID_STORES = [1, 2, 3]
const FRUITS = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Watermelon']
/* Data tables */
const PRICES: Price[] = []
const HISTORY_PRICES: HistoryPrice[] = []
const PRODUCTS: Product[] = []
const DATES: string[] = [
  '2021-01-01',
  '2021-01-02',
  '2021-01-03',
]
const SHOPPING_LISTS: ShoppingList[] = []
const SHOPPING_LIST_PRODUCTS: ProductsShoppingList[] = []
const USER_SHOPPING_LISTS: UserShoppingList[] = []
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
const STORES: Store[] = ID_STORES.map(id => ({
  id,
  logo_url: '',
  name: STORE_NAMES[id - 1],
}))

const USER_PREFERENCES: UserSetting = {
  id_user: 1,
  setting_key: UserSettingKeys.THEME,
  setting_value: THEMES.LIGHT,
}
const USER: User = {
  id: 1,
  email: 'email',
  password: 'password',
}

const CATEGORIES: CategoryTableData[] = CATEGORY_NAMES.map((name, id) => ({
  id: id + 1,
  name,
}))

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
    product_name: FRUITS[idProduct - 1],
    is_white_brand: randomBoolean(),
    id_category: 1,
    id_brand: randomNumber(STORES.length) + 1,
  })
  SHOPPING_LIST_PRODUCTS.length < 3 && SHOPPING_LIST_PRODUCTS.push({
    id_shopping_list: 1,
    id_product: idProduct,
    quantity: idProduct,
    id_store: randomNumber(STORES.length) + 1,
  })
  SHOPPING_LISTS.push({
    id: idProduct,
    name: `List ${idProduct}`,
    id_background: idProduct,
    code: `${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}`,
  })
  USER_SHOPPING_LISTS.push({
    id_user: 1,
    id_shopping_list: idProduct,
    is_active: randomBoolean() ? 1 : 0,
    is_owner: randomBoolean() ? 1 : 0,
    is_accepted: randomBoolean() ? UserShoppingListRequest.ACCEPTED : UserShoppingListRequest.PENDING,
  })
})

function randomBoolean() {
  return Math.random() < 0.5 ? 0 : 1
}

function randomNumber(max: number) {
  return Math.floor(Math.random() * max)
}

export {
  CATEGORIES, HISTORY_PRICES,
  PRICES,
  PRODUCTS, SHOPPING_LIST_PRODUCTS, SHOPPING_LISTS, STORES, USER, USER_PREFERENCES, USER_SHOPPING_LISTS, USERS_STORES
};

