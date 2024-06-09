import { Express } from "express";
import { shoppingListByCodeController } from "../../controllers/shoppinglists/shoppingListByCodeController";
import { modifyListController } from "../../controllers/shoppinglists/modifyListController";
import { generateListCodeController } from "../../controllers/shoppinglists/generateListCodeController";

const shoppingListEndpoints = (app: Express) => {
  app.get("/shoppingListByCode", shoppingListByCodeController)
  app.put("/modifyList", modifyListController)
  app.post("/generateListCode", generateListCodeController)
};

export { shoppingListEndpoints };
