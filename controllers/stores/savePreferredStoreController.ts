import { NextFunction, Request, Response } from "express";
import { Store } from "../../data/types/store";
import { getUser, insertStoreToUser, removeStoreFromUser } from "../../orm/user/user-orm";

async function savePreferredStoreController(req: Request<Store>, res: Response, _next: NextFunction) {
  if (!req.body) {
    return res.status(500).send("No store detected");
  }

  const { idStore } = req.body;
  const idUser = 1;

  if (!idStore) {
    return res.status(500).send("No store detected");
  }

  const user = await getUser(idUser);
  const { preferredStores, isPremium } = user
  const userHasStore = user.preferredStores.includes(idStore);

  if (userHasStore) {
    await removeStoreFromUser(idUser, idStore);

    return res.send();
  }

  if (isPremium || preferredStores.length < 3) {
    await insertStoreToUser(idUser, idStore);
  }

  return res.send();
}

export { savePreferredStoreController };
