import express from "express";
import favicon from "./favicon";
import { scraperEndpoints } from "./endpoints/scraper/scraper-endpoints";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

scraperEndpoints(app);

app.listen(4000, () => {
  favicon();
});
