import { Request, Response } from "express";
import Brands from "../../orm/Brands/Brands";

async function getBrandsController(req: Request, res: Response) {
  const { offset, limit } = req.query;

  if (offset && limit) {
    const brands = await new Brands().getPaginated(Number(offset), Number(limit));

    return res.json(brands);
  }

  const brands = await new Brands().getAll();

  if (!brands) return res.json({});

  return res.json(brands);
}

export { getBrandsController };

