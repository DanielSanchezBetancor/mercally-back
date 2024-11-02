import { Request, Response } from 'express';
import Products from '../../orm/products/Products';

const autocompleteController = async (req: Request, res: Response) => {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { query } = req.query;

  if (!query) {
    return res.status(500).json({ error: "No product detected" });
  }

  const searchProduct = Array.isArray(query) ? query[0] : query;

  if (typeof searchProduct !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }

  if (searchProduct.length < 3) {
    return res.status(500).json({ error: "Search term too short" });
  }

  const autocomplete = await new Products().autocomplete(searchProduct);

  if (!autocomplete) return res.json({});

  return res.json(autocomplete);
}

export { autocompleteController };
