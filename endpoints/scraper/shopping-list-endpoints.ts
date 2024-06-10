import { Express } from "express";
import { shoppingListByCodeController } from "../../controllers/shoppinglists/shoppingListByCodeController";
import { modifyListController } from "../../controllers/shoppinglists/modifyListController";
import { generateListCodeController } from "../../controllers/shoppinglists/generateListCodeController";
import { shoppingListRequestsController } from "../../controllers/shoppinglists/shoppingListRequestsController";
import { handleShoppingListRequestController } from "../../controllers/shoppinglists/handleShoppingListRequestController";

const shoppingListEndpoints = (app: Express) => {
  app.get("/shoppingListByCode", shoppingListByCodeController)
  app.put("/modifyList", modifyListController)
  app.post("/generateListCode", generateListCodeController)
  app.get("/shoppingListRequests", shoppingListRequestsController)
  app.put("/handleShoppingListRequest", handleShoppingListRequestController)
};

export { shoppingListEndpoints };
