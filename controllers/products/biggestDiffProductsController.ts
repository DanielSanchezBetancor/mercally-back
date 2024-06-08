import { Request, Response } from "express";
import Price from "../../orm/prices/Price";
import Products from "../../orm/products/Products";

async function biggestDiffProductsController(_req: Request, res: Response) {
  const products = await new Price().getBiggestDifference();
  const productsWithData = await new Products().fillWithOriginalProduct(products);

  res.json(productsWithData);
}

export { biggestDiffProductsController };
