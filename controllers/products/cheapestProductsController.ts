import { Request, Response } from "express";
import Price from "../../orm/prices/Price";
import Products from "../../orm/products/Products";

async function cheapestProductsController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_categories } = req.query;

  if (!id_categories) return res.status(400).json({ error: 'Missing id_categories' });

  const idCategories = id_categories.toString().split(',').map(Number);
  const products = await new Price().getCheapestProducts(idCategories);
  const productsWithData = await new Products().fillWithOriginalProduct(products);

  res.json(productsWithData);
}


export { cheapestProductsController };
