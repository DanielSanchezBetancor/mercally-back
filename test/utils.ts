import express, { Express } from "express";
import { productsEndpoints } from "../endpoints/scraper/products-endpoints";
import { shoppingListEndpoints } from "../endpoints/scraper/shopping-list-endpoints";
import { HISTORY_PRICES, PRICES, PRODUCTS, SHOPPING_LIST, SHOPPING_LIST_PRODUCTS, USER_SHOPPING_LIST } from "../scripts/dummies";
import init from "../scripts/init-seed";
import { shoppingListEndpoints } from "../endpoints/scraper/shopping-list-endpoints";

async function buildTestDB() {
  await init(PRODUCTS, PRICES, HISTORY_PRICES, SHOPPING_LIST, SHOPPING_LIST_PRODUCTS, USER_SHOPPING_LIST)

  return {
    products: PRODUCTS,
    prices: PRICES,
    historyPrices: HISTORY_PRICES,
    shoppingList: SHOPPING_LIST,
    shoppingListProducts: SHOPPING_LIST_PRODUCTS,
    userShoppingList: USER_SHOPPING_LIST
  }
}

function injectEndpoints(app: Express) {
  productsEndpoints(app);
  shoppingListEndpoints(app);

}

async function executeEndpoint(endpoint: string, method: string = 'GET') {
  const randomPort = Math.floor(Math.random() * 1000) + 8000
  const app = express()
  injectEndpoints(app)
  const server = app.listen(randomPort, () => console.log(`Server running on port ${randomPort}`))

  const data = await fetch(`http://localhost:${randomPort}/${endpoint}`, { method })
  const res = await data.json()

  server.close()

  return { data, res }
}

export { buildTestDB, executeEndpoint };

