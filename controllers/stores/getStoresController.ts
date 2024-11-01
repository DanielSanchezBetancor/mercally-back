import { Request, Response } from "express";
import { Stores } from "../../orm/stores/Stores";

const getStoresController = async (
  req: Request<void>,
  res: Response) => {
  const { offset, limit } = req.query;

  if (offset && limit) {
    const stores = await new Stores().getPaginated(Number(offset), Number(limit));

    return res.json(stores);
  }

  const stores = await new Stores().getAll();

  return res.json(stores);
}

export { getStoresController };

