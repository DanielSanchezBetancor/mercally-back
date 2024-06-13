import express from "express";
import favicon from "./favicon";
import { scraperEndpoints } from "./endpoints/scraper/scraper-endpoints";
import cors from "cors";
import dotenv from 'dotenv';
import { storesEndpoints } from "./endpoints/scraper/stores-endpoints";
import { productsEndpoints } from "./endpoints/scraper/products-endpoints";
import { shoppingListEndpoints } from "./endpoints/scraper/shopping-list-endpoints";
import { userEndpoints } from "./endpoints/scraper/user-endpoints";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

scraperEndpoints(app);
storesEndpoints(app);
productsEndpoints(app);
shoppingListEndpoints(app);
userEndpoints(app);

app.listen(4000, () => {
  favicon();
});
