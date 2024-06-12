import { Express } from "express";
import { getStoresController } from "../../controllers/stores/getStoresController";
import { handlePreferredStoreController } from "../../controllers/stores/handlePreferredStoreController";

const storesEndpoints = (app: Express) => {
  app.get("/getStores", getStoresController);
  app.post("/handlePreferredStore", handlePreferredStoreController);
};

export { storesEndpoints };