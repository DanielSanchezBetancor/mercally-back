import { Request, Response } from "express";
import Categories from "../../orm/categories/Categories";

async function getCategoriesController(req: Request, res: Response) {
  const categories = await new Categories().getCategories();

  if (!categories) return res.json({});

  return res.json(categories);
}

export { getCategoriesController };