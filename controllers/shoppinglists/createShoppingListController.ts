import { Request, Response } from "express";
import ShoppingLists from "../../orm/ShoppingLists/ShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";
import { UserShoppingListRequest } from "../../orm/UserShoppingLists/UserShoppingListsBase";

const createShoppingListController = async (req: Request, res: Response) => {
  // Aqui comprobamos que el usuario esté autenticado y recogemos su ID
  const fakeUserId = 1
  const { name, id_background, id } = req.body;

  const isBackgroundNumber = typeof id_background === "number";

  if (!name || !isBackgroundNumber) {
    return res.status(400).json({ error: "Missing fields" });
  }


  if (id) {
    const idNumber = Number(id);

    handleUpdateList(idNumber, name, id_background);

    return res.status(200).send();
  }

  handleCreateList(fakeUserId, name, id_background);

  return res.status(200).send();
}

const handleUpdateList = async (id: number, name: string, id_background: number) => {
  const oldData = await new ShoppingLists().getByPk(id);

  await new ShoppingLists().update({
    ...oldData,
    id: id,
    name,
    id_background,

  }, { ...oldData });
}

const handleCreateList = async (id_user: number, name: string, id_background: number) => {
  const lastId = await new ShoppingLists().getLastId();

  // Hay que arreglar el ORM para que no tenga en cuenta los opcionales y los meta como null en DB. Controlar esto antes de sacar a producción
  // Dado que el `code` es una String vacia, podria permitir otros endpoints que no sean el de crear lista de la compra entrar sin tener el codigo
  await new ShoppingLists().insert({
    id: lastId + 1,
    code: '',
    name,
    id_background,
  });

  // This could be a SQL Trigger when inserting a new ShoppingList
  await new UserShoppingLists().insert({
    id_user,
    id_shopping_list: lastId + 1,
    is_accepted: UserShoppingListRequest.ACCEPTED,
    is_active: 0,
    is_owner: 1,
  });
}

export { createShoppingListController };