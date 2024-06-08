import { Express } from "express";
import { getStoreController } from "../../controllers/stores/getStoreController";
import { savePreferredStoreController } from "../../controllers/stores/savePreferredStoreController";

const storesEndpoints = (app: Express) => {
  app.get("/getStores", getStoreController);
  app.post("/savePreferredStore", savePreferredStoreController);
};

export { storesEndpoints };