import { Express } from "express";
import { shoppingListByCodeController } from "../../controllers/shoppinglists/shoppingListByCodeController";
import { modifyListController } from "../../controllers/shoppinglists/modifyListController";
import { generateListCodeController } from "../../controllers/shoppinglists/generateListCodeController";
import { shoppingListRequestsController } from "../../controllers/shoppinglists/shoppingListRequestsController";
import { handleShoppingListRequestController } from "../../controllers/shoppinglists/handleShoppingListRequestController";
import { protectedController } from "../../helpers/security";

const shoppingListEndpoints = (app: Express) => {
  app.get("/shoppingListByCode", shoppingListByCodeController)
  app.put("/modifyList", protectedController, modifyListController)
  app.post("/generateListCode", protectedController, generateListCodeController)
  app.get("/shoppingListRequests", protectedController, shoppingListRequestsController)
  app.put("/handleShoppingListRequest", protectedController, handleShoppingListRequestController)
};

export { shoppingListEndpoints };
