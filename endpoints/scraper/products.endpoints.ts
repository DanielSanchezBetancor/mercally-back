import { Express } from "express";
import { getProductsController } from "../../controllers/products/getProductsController";
import { getSuggestedProductController } from "../../controllers/products/getSuggestedProductController";
import { biggestDiffProductsController } from "../../controllers/products/biggestDiffProductsController";

const productsEndpoints = (app: Express) => {
  app.get("/getProducts", getProductsController);
  app.get("/getSuggestedProduct/:idProduct", getSuggestedProductController);
  app.get("/biggestDiffProducts", biggestDiffProductsController)
};

export { productsEndpoints };
