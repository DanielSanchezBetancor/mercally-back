import { Express } from "express";
import { shoppingListByCodeController } from "../../controllers/shoppinglists/shoppingListByCodeController";

const shoppingListEndpoints = (app: Express) => {
  app.get("/shoppingListByCode", shoppingListByCodeController)
};

export { shoppingListEndpoints };
