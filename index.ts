import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import { brandsEndpoints } from "./endpoints/scraper/brands-endpoints";
import { categoriesEndpoints } from "./endpoints/scraper/categories-endpoints";
import { productsEndpoints } from "./endpoints/scraper/products-endpoints";
import { scraperEndpoints } from "./endpoints/scraper/scraper-endpoints";
import { shoppingListEndpoints } from "./endpoints/scraper/shopping-list-endpoints";
import { storesEndpoints } from "./endpoints/scraper/stores-endpoints";
import { userEndpoints } from "./endpoints/scraper/user-endpoints";
import favicon from "./favicon";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

scraperEndpoints(app);
storesEndpoints(app);
productsEndpoints(app);
shoppingListEndpoints(app);
userEndpoints(app);
categoriesEndpoints(app);
brandsEndpoints(app);

app.listen(4000, () => {
  favicon();
});
