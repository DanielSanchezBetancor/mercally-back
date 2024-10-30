import { Request, Response } from "express";
import ShoppingLists from "../../orm/ShoppingLists/ShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";

const getShoppingListByIdController = async (req: Request, res: Response) => {
  if (!req.query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: 'Missing id'
    });
  }

  const fakeUserId = 1;
  // Comprobar que el usuario tiene permisos para ver la lista

  const userShoppingLists = await new UserShoppingLists().getAllByField('id_shopping_list', Number(id));
  // It should be a single value
  const shoppingList = Array.isArray(userShoppingLists) ? userShoppingLists[0] : userShoppingLists;
  const originalList = await new ShoppingLists().getByPk(shoppingList.id_shopping_list);

  return res.json(originalList);
}

export {
  getShoppingListByIdController
}