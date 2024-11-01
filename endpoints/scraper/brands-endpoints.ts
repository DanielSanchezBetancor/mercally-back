import { Express } from "express";
import { getBrandsController } from "../../controllers/brands/getBrandsController";

const brandsEndpoints = (app: Express) => {
  app.get("/getBrands", getBrandsController);
}

export { brandsEndpoints };