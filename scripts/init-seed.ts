import { getConnection } from "../orm/base/connection"
import { PRICES, PRODUCTS } from "./dummies"
import Logger from "@coding-flavour/logger"
import Price from "../orm/prices/base"
import Products from "../orm/products/Products"

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
const conn = getConnection()

async function dropTables() {
  logger.log('Dropping tables')
  for (const table of tables) {
    logger.log(`Dropping table ${table}`, { keepLevel: true })
    await conn.query(`DROP TABLE IF EXISTS ${table}`)
  }
  logger.log('Tables dropped', { subtractLevel: true })
}

async function createTables() {
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
      accepted BOOLEAN NOT NULL
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
      id_product INTEGER NOT NULL,
      id_store INTEGER NOT NULL,
      price FLOAT NOT NULL,
      price_per_unit FLOAT NOT NULL
    )
  `)
  logger.log('Creating table <history_prices>', { subtractLevel: true })
  await conn.query(`
    CREATE TABLE IF NOT EXISTS history_prices (
      id_product INTEGER NOT NULL,
      id_store INTEGER NOT NULL,
      price FLOAT NOT NULL,
      price_per_unit FLOAT NOT NULL,
      date DATETIME NOT NULL
    )
  `)
  logger.log('Tables created', { keepLevel: true })
}

async function insertDummyData() {
  logger.log('Inserting dummy data', { keepLevel: true })
  await conn.query(`
    INSERT INTO users (email, password) VALUES
      ('example@example.com', '123456')`)
  await conn.query(`
    INSERT INTO users_settings (id_user, setting_key, setting_value) VALUES
      (1, 'theme', 'dark')`)
  await conn.query(`
    INSERT INTO stores (name, logo_url) VALUES
      ('Mercadona', 'https://mercadona.es/logo.png')`)
  await conn.query(`
    INSERT INTO categories (name) VALUES
      ('Fruit')`)
  for (const product of PRODUCTS) {
    await new Products().insert(product)
  }
  await conn.query(`
    INSERT INTO shopping_lists (code) VALUES
      ('123456')`)
  await conn.query(`
    INSERT INTO shopping_lists_products (id_shopping_list, id_product, quantity) VALUES
      (1, 1, 5)`)
  for (const price of PRICES) {
    await new Price().insert(price)
  }
  await conn.query(`
    INSERT INTO history_prices (id_product, id_store, price, price_per_unit, date) VALUES
      (1, 1, 1.5, 0.3, '2021-01-01')`)
  await conn.query(`
    INSERT INTO users_stores (id_user, id_store) VALUES
      (1, 1)`)
  await conn.query(`
    INSERT INTO users_shopping_lists (id_user, id_shopping_list, is_owner, accepted) VALUES
      (1, 1, true, true)`)
  logger.log('Dummy data inserted', { subtractLevel: true })
}

async function init() {
  logger.log('Initializing database with dummy data')
  await dropTables()
  await createTables()
  await insertDummyData()
  logger.log('Database initialized')
}


export default init
