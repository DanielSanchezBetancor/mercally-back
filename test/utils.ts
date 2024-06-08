import express from "express";
import { productsEndpoints } from "../endpoints/scraper/products.endpoints";
import { mockEnv } from "./mocks/mock-env";

async function buildTestDB() {
  await import('../scripts/init-seed')
}

async function executeEndpoint(endpoint: string) {
  const app = express()
  productsEndpoints(app);
  const server = app.listen(9000, () => console.log('Server running on port 9000'))
  process = mockEnv()
  await buildTestDB()

  const data = await fetch(`http://localhost:9000/${endpoint}`)
  const res = await data.json()

  server.close()
  
  return res
}

export { buildTestDB, executeEndpoint }