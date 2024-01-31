import { Express } from "express";
import { saveCatalog } from "../../controllers/scraper/scraper-controller";

const scraperEndpoints = (app: Express) => {
  app.post("/saveCatalog", saveCatalog);
};

export { scraperEndpoints};