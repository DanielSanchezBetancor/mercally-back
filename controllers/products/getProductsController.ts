import { Request, Response } from "express";
import { getProducts } from "../../orm/products/products-orm";

async function getProductsController(req: Request, res: Response, _next: Function) {
  const products = await getProducts();

  return res.send(products);
}

export { getProductsController };
