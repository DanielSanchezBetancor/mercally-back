import { Request, Response } from "express";
import { Stores } from "../../orm/stores/Stores";

const getStoresController = async (
  _req: Request<void>,
  res: Response) => {
  const stores = await new Stores().getAll();

  return res.status(200).send(stores);
}

export { getStoresController };

