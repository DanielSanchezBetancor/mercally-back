import Logger from "@coding-flavour/logger"
import { getConnection } from "../orm/base/connection"
import { CategoryTableData } from "../orm/categories/base/CategoriesBase"
import Categories from "../orm/categories/Categories"
import HistoryPrice from "../orm/HistoryPrices/HistoryPrices"
import { HistoryPricesFields } from "../orm/HistoryPrices/HistoryPricesBase"
import Price, { PricesFields } from "../orm/prices/base"
import { ProductsFields } from "../orm/products/base"
import Products from "../orm/products/Products"
import { ProductsShoppingLists } from "../orm/ProductsShoppingLists/ProductsShoppingLists"
import { ProductsShoppingList } from "../orm/ProductsShoppingLists/ProductsShoppingListsBase"
import ShoppingLists from "../orm/ShoppingLists/ShoppingLists"
import { ShoppingList } from "../orm/ShoppingLists/ShoppingListsBase"
import { Store } from "../orm/stores/base/StoresBase"
import { Stores } from "../orm/stores/Stores"
import { Users } from "../orm/users/Users"
import { User } from "../orm/users/UsersBase"
import { UserShoppingLists } from "../orm/UserShoppingLists/UserShoppingLists"
import { UserShoppingList, UserShoppingListRequest } from "../orm/UserShoppingLists/UserShoppingListsBase"
import { UsersSettings } from "../orm/UsersSettings/UsersSettings"
import { UserSetting } from "../orm/UsersSettings/UsersSettingsBase"
import { UsersStores } from "../orm/UsersStores/UsersStores"
import { UserStore } from "../orm/UsersStores/UsersStoresBase"
import { CATEGORIES, HISTORY_PRICES, PRICES, PRODUCTS, SHOPPING_LIST_PRODUCTS, SHOPPING_LISTS, STORES, USER, USER_PREFERENCES, USER_SHOPPING_LISTS, USERS_STORES } from "./dummies"

// Lo suyo seria importar todos los 'base/orm' y recoger todos los 'tableNames' de cada uno, asi no acoplamos el script a las tablas
const tables = [
  'users',
  'users_settings',
  'users_stores',
  'stores',
  'products',
  'categories',
  'users_shopping_lists',
  'shopping_lists',
  'shopping_lists_products',
  'prices',
  'history_prices'
]
const logger = Logger()

async function dropTables(conn: ReturnType<typeof getConnection>) {
  logger.log('Dropping tables')
  for (const table of tables) {
    logger.log(`Dropping table ${table}`, { keepLevel: true })
    await conn.query(`DROP TABLE IF EXISTS ${table}`)
  }
  logger.log('Tables dropped', { subtractLevel: true })
}

async function createTables(conn: ReturnType<typeof getConnection>) {
  logger.log('Creating tables')
  logger.log('Creating table <user>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <users_settings>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS users_settings (
      id INTEGER AUTO_INCREMENT,
      id_user INTEGER NOT NULL,
      setting_key VARCHAR(255) NOT NULL,
      setting_value VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <users_stores>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS users_stores (
      id_user INTEGER NOT NULL,
      id_store INTEGER NOT NULL
    )
  `)
  logger.log('Creating table <stores>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS stores (
      id INTEGER AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      logo_url VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <products>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER AUTO_INCREMENT,
      product_name VARCHAR(255) NOT NULL,
      is_white_brand BOOLEAN NOT NULL,
      id_category INTEGER NOT NULL,
      id_brand INTEGER NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <categories>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <users_shopping_lists>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS users_shopping_lists (
      id_user INTEGER NOT NULL,
      id_shopping_list INTEGER NOT NULL,
      is_owner BOOLEAN NOT NULL,
      is_accepted ENUM('${Object.keys(UserShoppingListRequest).join("','")}') NOT NULL,
      is_active BOOLEAN NOT NULL
    )
  `)
  logger.log('Creating table <shopping_lists>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS shopping_lists (
      id INTEGER AUTO_INCREMENT,
      code VARCHAR(255),
      name VARCHAR(255) NOT NULL,
      id_background INTEGER NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <shopping_lists_products>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS shopping_lists_products (
      id_product INTEGER NOT NULL,
      id_shopping_list INTEGER NOT NULL,
      id_store INTEGER NOT NULL,
      quantity INTEGER NOT NULL
    )
  `)
  logger.log('Creating table <prices>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS prices (
      id INTEGER AUTO_INCREMENT,
      id_product INTEGER NOT NULL,
      id_store INTEGER NOT NULL,
      price FLOAT NOT NULL,
      price_per_unit FLOAT NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <history_prices>', { subtractLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS history_prices (
      id INTEGER AUTO_INCREMENT,
      id_product INTEGER NOT NULL,
      id_store INTEGER NOT NULL,
      price FLOAT NOT NULL,
      price_per_unit FLOAT NOT NULL,
      date DATETIME NOT NULL,
      PRIMARY KEY (id)
    )
  `)
  logger.log('Tables created', { keepLevel: true })
}

async function insertDummyData(
  products: ProductsFields[],
  prices: PricesFields[],
  historyPrices: HistoryPricesFields[],
  shoppingList: ShoppingList[],
  productsShoppingLists: ProductsShoppingList[],
  userShoppingLists: UserShoppingList[],
  usersStores: UserStore[],
  stores: Store[],
  userPreferences: UserSetting,
  user: User,
  categories: CategoryTableData[]
) {
  logger.log('Inserting dummy data')

  logger.log('Inserting User', { keepLevel: true })
  await new Users().insert(user)

  logger.log('Inserting User Preferences', { keepLevel: true })
  await new UsersSettings().insert(userPreferences)

  logger.log('Inserting Stores', { keepLevel: true })
  for (const store of stores) {
    await new Stores().insert(store)
  }

  logger.log('Inserting Categories', { keepLevel: true })
  for (const category of categories) {
    await new Categories().insert(category)
  }

  logger.log('Inserting Products', { keepLevel: true })
  for (const product of products) {
    await new Products().insert(product)
  }

  logger.log('Inserting Shopping Lists', { keepLevel: true })
  for (const shoppingListRow of shoppingList) {
    await new ShoppingLists().insert(shoppingListRow)
  }

  logger.log('Inserting Products Shopping Lists', { keepLevel: true })
  for (const productShoppingList of productsShoppingLists) {
    await new ProductsShoppingLists().insert(productShoppingList)
  }

  logger.log('Inserting Prices', { keepLevel: true })
  for (const price of prices) {
    await new Price().insert(price)
  }

  logger.log('Inserting History Prices', { keepLevel: true })
  for (const historyPrice of historyPrices) {
    await new HistoryPrice().insert(historyPrice)
  }

  logger.log('Inserting User Stores', { keepLevel: true })
  for (const userStore of usersStores) {
    await new UsersStores().insert(userStore)
  }

  logger.log('Inserting User Shopping Lists', { subtractLevel: true })
  for (const userShoppingList of userShoppingLists) {
    await new UserShoppingLists().insert(userShoppingList)
  }

  logger.log('Dummy data inserted', { subtractLevel: true })
}

async function createTableBaseTest() {
  const conn = getConnection()

  await conn.query(`DROP TABLE IF EXISTS base`)
  await conn.query(`
    CREATE TABLE IF NOT EXISTS base (
      id INTEGER AUTO_INCREMENT,
      PRIMARY KEY (id)
  )`)

  await conn.query(`
    INSERT INTO base (id) VALUES (1)`
  )
}
async function init(
  products = PRODUCTS,
  prices = PRICES,
  historyPrices = HISTORY_PRICES,
  shoppingList = SHOPPING_LISTS,
  productsShoppingLists = SHOPPING_LIST_PRODUCTS,
  userShoppingLists = USER_SHOPPING_LISTS,
  usersStores = USERS_STORES,
  stores = STORES,
  userPreferences = USER_PREFERENCES,
  user = USER,
  categories = CATEGORIES
) {
  logger.log('Initializing database with dummy data')
  const conn = getConnection()
  await dropTables(conn)
  await createTables(conn)
  await insertDummyData(
    products,
    prices,
    historyPrices,
    shoppingList,
    productsShoppingLists,
    userShoppingLists,
    usersStores,
    stores,
    userPreferences,
    user,
    categories
  )
  logger.log('Database initialized')
}

export { createTableBaseTest }
export default init
