import express from "express";
import favicon from "./favicon";
import { scraperEndpoints } from "./endpoints/scraper/scraper-endpoints";
import cors from "cors";
import dotenv from 'dotenv';
import { storesEndpoints } from "./endpoints/scraper/stores-endpoints";
import { productsEndpoints } from "./endpoints/scraper/products-endpoints";

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

scraperEndpoints(app);
storesEndpoints(app);
productsEndpoints(app);

app.listen(4000, () => {
  favicon();
});
