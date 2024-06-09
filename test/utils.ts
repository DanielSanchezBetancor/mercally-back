import express, { Express } from "express";
import { productsEndpoints } from "../endpoints/scraper/products-endpoints";
import { PRICES, PRODUCTS, HISTORY_PRICES, SHOPPING_LIST } from "../scripts/dummies";
import init from "../scripts/init-seed";
import { shoppingListEndpoints } from "../endpoints/scraper/shopping-list-endpoints";

async function buildTestDB() {
  await init(PRODUCTS, PRICES, HISTORY_PRICES, SHOPPING_LIST)

  return { products: PRODUCTS, prices: PRICES, historyPrices: HISTORY_PRICES, shoppingList: SHOPPING_LIST }
}

function injectEndpoints(app: Express) {
  productsEndpoints(app);
  shoppingListEndpoints(app);

}

async function executeEndpoint(endpoint: string) {
  const randomPort = Math.floor(Math.random() * 1000) + 8000
  const app = express()
  injectEndpoints(app)
  const server = app.listen(randomPort, () => console.log(`Server running on port ${randomPort}`))

  const data = await fetch(`http://localhost:${randomPort}/${endpoint}`)
  const res = await data.json()

  server.close()

  return { data, res }
}

export { buildTestDB, executeEndpoint };

