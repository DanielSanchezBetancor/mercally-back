import { Request, Response } from "express";
import Price, { BiggestDifference } from "../../orm/prices/Price";
import Products from "../../orm/products/Products";
import { Stores } from "../../orm/stores/Stores";

async function biggestDiffProductsController(req: Request, res: Response) {
  const { offset } = req.query;
  
  const singleOffset = Array.isArray(offset) ? offset[0] : offset;
  const isUndefined = typeof singleOffset === "undefined";
  const isString = typeof singleOffset === "string";

  if (!isUndefined && !isString) {
    return res.status(400).json({ error: "Invalid offset" });
  }

  const offsetNumber = !!singleOffset ? parseInt(singleOffset) : 0;
  const products = await new Price().getBiggestDifference(offsetNumber);
  
  const productsWithData = await new Products().fillWithOriginalProduct<BiggestDifference>(products);
  const productsWithStores  = await new Stores().fillMinMaxWithOriginalStore<BiggestDifference>(productsWithData);

  res.json(productsWithStores);
}

export { biggestDiffProductsController };
