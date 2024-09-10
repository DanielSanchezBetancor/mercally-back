import { Request, Response } from "express";
import ShoppingLists from "../../orm/ShoppingLists/ShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";
import { UserShoppingListRequest } from "../../orm/UserShoppingLists/UserShoppingListsBase";

const createShoppingListController = async (req: Request, res: Response) => {
  // Aqui comprobamos que el usuario esté autenticado y recogemos su ID
  const fakeUserId = 1
  const { name, id_background } = req.body;

  const isBackgroundNumber = typeof id_background === "number";

  if (!name || !isBackgroundNumber) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Hay que arreglar el ORM para que no tenga en cuenta los opcionales y los meta como null en DB. Controlar esto antes de sacar a producción
  // Dado que el `code` es una String vacia, podria permitir otros endpoints que no sean el de crear lista de la compra entrar sin tener el codigo
  const lastId = await new ShoppingLists().getLastId();
  await new ShoppingLists().insert({
    id: lastId.id + 1,
    code: '',
    name,
    id_background,
  });

  await new UserShoppingLists().insert({
    id_user: fakeUserId,
    id_shopping_list: 0,
    is_accepted: UserShoppingListRequest.ACCEPTED,
    is_active: 0,
    is_owner: 1,
  });

  return res.status(200).send();
}

export { createShoppingListController };