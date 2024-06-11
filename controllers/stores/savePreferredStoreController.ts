import { Request, Response } from "express";
import { Store } from "../../data/types/store";
import { UsersStores } from "../../orm/UsersStores/UsersStores";

const fakeUser = {
  idUser: 1,
  preferredStores: [1, 2],
  username: "user",
  password: "password",
  email: "dsanchez",
  idRole: 1,
  isPremium: false
};

async function savePreferredStoreController(req: Request<Store>, res: Response) {
  // console.log('req', req)
  console.log('req.body', req.body)
  console.log('req.params', req.params)
  console.log('req.query', req.query)
  if (!req.body) {
    return res.status(500).json({ error: "No body detected" });
  }

  const { id_store } = req.body;
  const idUser = 1;

  if (!id_store) {
    return res.status(500).json({ error: "No store detected" });
  }

  const user = fakeUser;
  const { preferredStores, isPremium } = user
  const userHasStore = user.preferredStores.includes(id_store);
  const action = userHasStore ? removeAction : saveAction;
  await action(idUser, id_store, preferredStores, isPremium);

  return res.status(200).json({});
}

async function saveAction(idUser: number, idStore: number, preferredStores: number[], isPremium: boolean) {
  if (isPremium || preferredStores.length < 3) {
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

export { savePreferredStoreController };

