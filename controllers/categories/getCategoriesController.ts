import { Request, Response } from "express";
import Categories from "../../orm/categories/Categories";

async function getCategoriesController(req: Request, res: Response) {
  const { offset, limit } = req.query;

  if (offset && limit) {
    const categories = await new Categories().getPaginated(Number(offset), Number(limit));

    return res.json(categories);
  }

  const categories = await new Categories().getAll();

  if (!categories) return res.json({});

  return res.json(categories);
}

export { getCategoriesController };