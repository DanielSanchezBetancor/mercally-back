import { Express } from "express";
import { getProductsController } from "../../controllers/products/getProductsController";
import { getSuggestedProductController } from "../../controllers/products/getSuggestedProductController";
import { biggestDiffProductsController } from "../../controllers/products/biggestDiffProductsController";
import { cheapestProductsController } from "../../controllers/products/cheapestProductsController";
import { searchController } from "../../controllers/products/searchController";
import { searchSuggestionController } from "../../controllers/products/searchSuggestionController";
import { autocompleteController } from "../../controllers/products/autocompleteController";

const productsEndpoints = (app: Express) => {
  app.get("/getProducts", getProductsController);
  app.get("/getSuggestedProduct/:idProduct", getSuggestedProductController);
  app.get("/biggestDiffProducts", biggestDiffProductsController);
  app.get("/cheapestProducts", cheapestProductsController);
  app.get("/search", searchController)
  app.get("/searchSuggestion", searchSuggestionController)
  app.get("/autocomplete", autocompleteController)
};

export { productsEndpoints };
