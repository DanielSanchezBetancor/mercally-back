import { NextFunction, Request, Response } from "express";
import { getStores } from "../../orm/stores/stores-orm";

const getStoreController = async (
  req: Request<void>,
  res: Response,
  next: NextFunction) => {
  const stores = await getStores();

  return res.send(stores);
}

export { getStoreController };