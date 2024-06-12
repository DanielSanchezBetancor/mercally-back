import Logger from "@coding-flavour/logger"
import { getConnection } from "../orm/base/connection"
import Price, { PricesFields } from "../orm/prices/base"
import Products from "../orm/products/Products"
import { PRICES, HISTORY_PRICES, PRODUCTS, SHOPPING_LIST, SHOPPING_LIST_PRODUCTS, USER_SHOPPING_LIST, USERS_STORES, STORES } from "./dummies"
import { ProductsFields } from "../orm/products/base"
import { HistoryPricesFields } from "../orm/HistoryPrices/HistoryPricesBase"
import HistoryPrice from "../orm/HistoryPrices/HistoryPrices"
import { ShoppingList } from "../orm/ShoppingLists/ShoppingListsBase"
import ShoppingLists from "../orm/ShoppingLists/ShoppingLists"
import { ProductsShoppingLists } from "../orm/ProductsShoppingLists/ProductsShoppingLists"
import { ProductsShoppingList } from "../orm/ProductsShoppingLists/ProductsShoppingListsBase"
import { UserShoppingList, UserShoppingListRequest } from "../orm/UserShoppingLists/UserShoppingListsBase"
import { UserShoppingLists } from "../orm/UserShoppingLists/UserShoppingLists"
import { UserStore } from "../orm/UsersStores/UsersStoresBase"
import { UsersStores } from "../orm/UsersStores/UsersStores"
import { Store } from "../orm/stores/base/StoresBase"
import { Stores } from "../orm/stores/Stores"

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
      name VARCHAR(255) NOT NULL,
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
      PRIMARY KEY (id)
    )
  `)
  logger.log('Creating table <shopping_lists_products>', { keepLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS shopping_lists_products (
      id_shopping_list INTEGER NOT NULL,
      id_product INTEGER NOT NULL,
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
  conn: ReturnType<typeof getConnection>,
  products: ProductsFields[],
  prices: PricesFields[],
  historyPrices: HistoryPricesFields[],
  shoppingList: ShoppingList,
  productsShoppingLists: ProductsShoppingList[],
  userShoppingLists: UserShoppingList,
  usersStores: UserStore[],
  stores: Store[]
) {
  logger.log('Inserting dummy data', { keepLevel: true })
  await conn.query(`
    INSERT INTO users (email, password) VALUES
      ('example@example.com', '123456')`)
  await conn.query(`
    INSERT INTO users_settings (id_user, setting_key, setting_value) VALUES
      (1, 'theme', 'dark')`)

  for (const store of stores) {
    await new Stores().insert(store)
  }

  await conn.query(`
    INSERT INTO categories (name) VALUES
      ('Fruit')`)

  for (const product of products) {
    await new Products().insert(product)
  }

  await new ShoppingLists().insert(shoppingList)


  for (const productShoppingList of productsShoppingLists) {
    await new ProductsShoppingLists().insert(productShoppingList)
  }

  for (const price of prices) {
    await new Price().insert(price)
  }

  for (const historyPrice of historyPrices) {
    await new HistoryPrice().insert(historyPrice)
  }

  for (const userStore of usersStores) {
    await new UsersStores().insert(userStore)
  }

  await new UserShoppingLists().insert(userShoppingLists)


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
  shoppingList = SHOPPING_LIST,
  productsShoppingLists = SHOPPING_LIST_PRODUCTS,
  userShoppingLists = USER_SHOPPING_LIST,
  usersStores = USERS_STORES,
  stores = STORES
) {
  logger.log('Initializing database with dummy data')
  const conn = getConnection()
  await dropTables(conn)
  await createTables(conn)
  await insertDummyData(conn, products, prices, historyPrices, shoppingList, productsShoppingLists, userShoppingLists, usersStores, stores)
  logger.log('Database initialized')
}

export { createTableBaseTest }
export default init
