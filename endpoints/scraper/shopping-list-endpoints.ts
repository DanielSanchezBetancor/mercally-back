import { Express } from "express";
import { shoppingListByCodeController } from "../../controllers/shoppinglists/shoppingListByCodeController";
import { modifyListController } from "../../controllers/shoppinglists/modifyListController";
import { generateListCodeController } from "../../controllers/shoppinglists/generateListCodeController";
import { shoppingListRequestsController } from "../../controllers/shoppinglists/shoppingListRequestsController";
import { handleShoppingListRequestController } from "../../controllers/shoppinglists/handleShoppingListRequestController";
import { getShoppingListByUserController } from "../../controllers/shoppinglists/getShoppingListByUserController";
import { createShoppingListController } from "../../controllers/shoppinglists/createShoppingListController";
import { getShoppingListByIdController } from "../../controllers/shoppinglists/getShoppingListByIdController";
import { getShoppingListProductsByIdController } from "../../controllers/shoppinglists/getShoppingListProductsByIdController";
import { getShoppingListStoresPrices } from "../../controllers/shoppinglists/getShoppingListStoresPrices";

const shoppingListEndpoints = (app: Express) => {
  app.get("/shoppingListByCode", shoppingListByCodeController)
  app.get("/shoppingListRequests", shoppingListRequestsController)
  app.get("/getShoppingListByUser", getShoppingListByUserController) 
  app.get("/getShoppingListById", getShoppingListByIdController)
  app.get("/getShoppingListProductsById", getShoppingListProductsByIdController);
  app.get("/getShoppingListStoresPrices", getShoppingListStoresPrices)
  app.post("/generateListCode", generateListCodeController)
  app.post('/createShoppingList', createShoppingListController)
  app.put("/modifyList", modifyListController)
  app.put("/handleShoppingListRequest", handleShoppingListRequestController)
};

export { shoppingListEndpoints };
