import { Express } from "express";
import { getStoresController } from "../../controllers/stores/getStoresController";
import { handlePreferredStoreController } from "../../controllers/stores/handlePreferredStoreController";
import { protectedController } from "../../helpers/security";

const storesEndpoints = (app: Express) => {
  app.get("/getStores", getStoresController);
  app.post("/handlePreferredStore", protectedController, handlePreferredStoreController);
};

export { storesEndpoints };