import { Request, Response } from "express";
import { verifyAndDecodeToken } from "../../helpers/security";
import { UsersStores } from "../../orm/UsersStores/UsersStores";
import { Users } from "../../orm/users/Users";

async function handlePreferredStoreController(req: Request, res: Response) {
  if (!req.body) {
    return res.status(500).json({ error: "No body detected" });
  }

  const { id_store } = req.body;

  if (!id_store) {
    return res.status(500).json({ error: "No store detected" });
  }

  const token = verifyAndDecodeToken(req);
  const { userId } = token!;
  const userStores = await new UsersStores().getAllByField('id_user', userId);
  // Mandar por token?
  const { is_premium } = await new Users().getByPk(userId);
  const userHasStore = userStores.includes(id_store);
  const action = userHasStore ? removeAction : saveAction;
  await action(Number(userId), id_store, userStores.length, is_premium);

  return res.status(200).json({});
}

async function saveAction(idUser: number, idStore: number, preferredStoresSize: number, isPremium: boolean) {
  if (isPremium || preferredStoresSize < 3) {
    await new UsersStores().insert({
      id_user: idUser,
      id_store: idStore,
    });
  }
}

function removeAction(idUser: number, idStore: number) {
  return new UsersStores().delete({
    id_user: idUser,
    id_store: idStore,
  });
}

export { handlePreferredStoreController };

