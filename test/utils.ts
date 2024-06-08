import express from "express";
import { productsEndpoints } from "../endpoints/scraper/products-endpoints";
import { PRICES, PRODUCTS } from "../scripts/dummies";
import init from "../scripts/init-seed";

async function buildTestDB() {
  await init(PRODUCTS, PRICES)

  return { products: PRODUCTS, prices: PRICES }
}

async function executeEndpoint(endpoint: string) {
  const randomPort = Math.floor(Math.random() * 1000) + 8000
  const app = express()
  productsEndpoints(app);
  const server = app.listen(randomPort, () => console.log(`Server running on port ${randomPort}`))

  const data = await fetch(`http://localhost:${randomPort}/${endpoint}`)
  const res = await data.json()

  server.close()

  return { data, res }
}

export { buildTestDB, executeEndpoint };

