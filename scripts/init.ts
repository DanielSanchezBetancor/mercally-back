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
  logger.log('Creating tables', { keepLevel: true })
  await conn.query(`
    CREATE TABLE users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE users_settings (
      id INT PRIMARY KEY AUTO_INCREMENT,
      id_user INT NOT NULL,
      key VARCHAR(255) NOT NULL,
      value TEXT NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE users_stores (
      id_user INT NOT NULL,
      id_store INT NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE stores (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      logo_url VARCHAR(255) NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE products (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      is_white_brand BOOLEAN NOT NULL,
      id_category INT NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE users_shopping_lists (
      id_user INT NOT NULL,
      id_shopping_list INT NOT NULL,
      is_owner BOOLEAN NOT NULL,
      accepted BOOLEAN NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE shopping_lists (
      id INT PRIMARY KEY AUTO_INCREMENT,
      code VARCHAR(255)
    )
  `)
  await conn.query(`
    CREATE TABLE shopping_lists_products (
      id_shopping_list INT NOT NULL,
      id_product INT NOT NULL,
      quantity INT NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE prices (
      id_product INT NOT NULL,
      id_store INT NOT NULL,
      price FLOAT NOT NULL,
      price_per_unit FLOAT NOT NULL
    )
  `)
  await conn.query(`
    CREATE TABLE history_prices (
      id_product INT NOT NULL,
      id_store INT NOT NULL,
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
