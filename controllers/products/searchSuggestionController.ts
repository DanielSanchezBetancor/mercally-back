import { Request, Response } from "express";
import Products from "../../orm/products/Products";

async function searchSuggestionController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { query } = req.query;

  if (!query) {
    return res.status(500).json({ error: "No product detected" });
  }

  const searchProduct = Array.isArray(query) ? query[0] : query;

  if (typeof searchProduct !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }

  const suggestions = await new Products().searchSuggestion(searchProduct);

  return res.json(suggestions);
}

export { searchSuggestionController };
