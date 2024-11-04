import { Request, Response } from "express";
import Price from "../../orm/prices/Price";
import Products from "../../orm/products/Products";

async function cheapestProductsController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_categories, offset } = req.query;

  if (!id_categories) return res.status(400).json({ error: 'Missing id_categories' });

  const singleOffset = Array.isArray(offset) ? offset[0] : offset;
  const isUndefined = typeof singleOffset === "undefined";
  const isString = typeof singleOffset === "string";

  if (!isUndefined && !isString) {
    return res.status(400).json({ error: "Invalid offset" });
  }

  const offsetNumber = !!singleOffset ? parseInt(singleOffset) : 0;
  const idCategories = id_categories.toString().split(',').map(Number);
  const cheapestProducts = await new Price().getCheapestProducts(idCategories, offsetNumber);
  const productsWithData = await new Products().fillWithOriginalProduct(cheapestProducts);
  const products = await new Products().fillWithFavorites(productsWithData);

  res.json(products);
}

export { cheapestProductsController };
