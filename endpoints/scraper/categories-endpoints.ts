import { Express } from "express";
import { getCategoriesController } from "../../controllers/categories/getCategoriesController";

const categoriesEndpoints = (app: Express) => {
  app.get("/getCategories", getCategoriesController);
}

export { categoriesEndpoints };