import { HistoryPrice } from "../orm/HistoryPrices/HistoryPricesBase";
import { ProductsShoppingListFields } from "../orm/ProductsShoppingLists/ProductsShoppingListsBase";
import { ShoppingList } from "../orm/ShoppingLists/ShoppingListsBase";
import { UserShoppingList, UserShoppingListRequest } from "../orm/UserShoppingLists/UserShoppingListsBase";
import { THEMES, UserSetting, UserSettingKeys } from "../orm/UsersSettings/UsersSettingsBase";
import { UsersStoreFields } from "../orm/UsersStores/UsersStoresBase";
import { CategoryTableData } from "../orm/categories/CategoriesBase";
import { Price } from "../orm/prices/base";
import { Product } from "../orm/products/base";
import { Store } from "../orm/stores/base/StoresBase";
import { User } from "../orm/users/UsersBase";

/* Random data */
const STORE_NAMES = ['carrefour', 'mercadona', 'lidl', 'aldi', 'día']
const CATEGORY_NAMES = ['Fruits', 'Vegetables', 'Meat', 'Fish', 'Dairy']
const PRODUCT_NAMES = ['Manzana', 'Leche', ' Anacarados', 'Yogúr de fresa', 'Lechuga']
const BRANDS_NAMES = ['Anita', 'Nestlé', 'ColaCao', 'Eidetesa', 'Danone']
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
const SHOPPING_LIST_PRODUCTS: ProductsShoppingListFields[] = []
const USER_SHOPPING_LISTS: UserShoppingList[] = []
const USERS_STORES: UsersStoreFields[] = [
  {
    id_user: 1,
    id_store: 1,
  },
  {
    id_user: 1,
    id_store: 2,
  }
]
const STORES: Store[] = STORE_NAMES.map((name, id) => ({
  id: id + 1,
  name,
  logo_url: 'https://www.google.com',
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

PRODUCT_NAMES.forEach((produtName, index) => {
  STORES.forEach(store => {
    PRICES.push({
      id: PRICES.length + 1,
      id_product: index + 1,
      id_store: store.id,
      price: (Math.random() * 10).toFixed(2),
      price_per_unit: (Math.random() * 2).toFixed(2),
    })
    DATES.forEach(date => {
      HISTORY_PRICES.push({
        id: HISTORY_PRICES.length + 1,
        id_product: index,
        id_store: store.id,
        price: (Math.random() * 10).toFixed(2),
        price_per_unit: (Math.random() * 2).toFixed(2),
        date,
      })
    })
  })
  PRODUCTS.push({
    id: index,
    product_name: PRODUCT_NAMES[index],
    is_white_brand: randomBoolean(),
    id_category: 1,
    id_brand: randomNumber(BRANDS_NAMES.length) + 1,
  })
  SHOPPING_LIST_PRODUCTS.length < 3 && SHOPPING_LIST_PRODUCTS.push({
    id_shopping_list: 1,
    id_product: index + 1,
    quantity: index,
    id_store: randomNumber(STORES.length) + 1
  })
  SHOPPING_LISTS.push({
    id: 0,
    name: `List ${index + 1}`,
    id_background: index,
    code: `${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}${randomNumber(999999)}`,
  })
  USER_SHOPPING_LISTS.push({
    id_user: 1,
    id_shopping_list: index + 1,
    is_active: index === 0 ? 1 : 0,
    is_owner: randomBoolean() ? 1 : 0,
    is_accepted: randomBoolean() ? UserShoppingListRequest.ACCEPTED : UserShoppingListRequest.PENDING,
    is_favorite_list: 0
  })
})

const BRANDS = BRANDS_NAMES.map((name, id) => ({
  id: id + 1,
  name,
}))

SHOPPING_LISTS.push({
  id: 0,
  name: 'Favorites',
  id_background: 0,
  code: '123456',
})

USER_SHOPPING_LISTS.push({
  id_user: 1,
  id_shopping_list: USER_SHOPPING_LISTS.length + 1,
  is_active: 0,
  is_owner: 1,
  is_accepted: UserShoppingListRequest.ACCEPTED,
  is_favorite_list: 1
})

function randomBoolean() {
  return Math.random() < 0.5 ? 0 : 1
}

function randomNumber(max: number) {
  return Math.floor(Math.random() * max)
}

export {
  CATEGORIES,
  HISTORY_PRICES,
  PRICES,
  PRODUCTS,
  SHOPPING_LIST_PRODUCTS,
  SHOPPING_LISTS,
  STORES,
  USER,
  USER_PREFERENCES,
  USER_SHOPPING_LISTS,
  USERS_STORES,
  BRANDS
};

