import { Request, Response } from "express";
import Price, { BiggestDifference } from "../../orm/prices/Price";
import Products from "../../orm/products/Products";

async function biggestDiffProductsController(_req: Request, res: Response) {
  const products = await new Price().getBiggestDifference();
  const productsWithData = await fillWithOriginalProduct(products);

  res.json(productsWithData);
}

async function fillWithOriginalProduct(products: BiggestDifference[]) {
  const productsWithData = [];

  for (const product of products) {
    const originalProduct = await new Products().getByPk(product.id_product);

    productsWithData.push({
      ...product,
      ...originalProduct,
    })
  }

  return productsWithData;
}

export { biggestDiffProductsController, fillWithOriginalProduct }