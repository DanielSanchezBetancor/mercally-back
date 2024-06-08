import { Express } from "express";
import { getProductsController } from "../../controllers/products/getProductsController";
import { getSuggestedProductController } from "../../controllers/products/getSuggestedProductController";
import { biggestDiffProductsController } from "../../controllers/products/biggestDiffProductsController";
import { cheapestProductsController } from "../../controllers/products/cheapestProductsController";

const productsEndpoints = (app: Express) => {
  app.get("/getProducts", getProductsController);
  app.get("/getSuggestedProduct/:idProduct", getSuggestedProductController);
  app.get("/biggestDiffProducts", biggestDiffProductsController);
  app.get("/cheapestProducts", cheapestProductsController);
};

export { productsEndpoints };
