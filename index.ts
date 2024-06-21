import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import { productsEndpoints } from "./endpoints/products/products-endpoints";
import { scraperEndpoints } from "./endpoints/scraper/scraper-endpoints";
import { shoppingListEndpoints } from "./endpoints/shoppinglists/shopping-list-endpoints";
import { storesEndpoints } from "./endpoints/stores/stores-endpoints";
import { userEndpoints } from "./endpoints/user/user-endpoints";
import favicon from "./favicon";
import { disableExpressHeaders } from "./helpers/security";

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
disableExpressHeaders(app);

scraperEndpoints(app);
storesEndpoints(app);
productsEndpoints(app);
shoppingListEndpoints(app);
userEndpoints(app);

app.listen(4000, () => {
  favicon();
});
