import { getConnection } from "../orm/base/connection"
import Logger from "@coding-flavour/logger"

console.log("Hola?")
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
const logger = Logger('InitDB')
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

async function init() {
  logger.log('Initializing database')
  await dropTables()
  await createTables()
  logger.log('Database initialized')
}


(async () => {
  try {
    await init()
    process.exit(0)
  } catch (e) {
    logger.error('Error initializing database', { e })
    process.exit(1)
  }
})()
