import { Request, Response } from "express";
import ShoppingLists from "../../orm/ShoppingLists/ShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";

const getShoppingListByUserController = async (req: Request, res: Response) => {
  if (!req.query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  // const {
  //   userId
  // } = req.query;
  // if (!userId) return res.status(400).json({
  //   error: 'Missing userId'
  // });
  const fakeUserId = 1;

  const userShoppingLists = await new UserShoppingLists().getAllByField('id_user', fakeUserId);
  const originalLists = [];

  for (const userShoppingList of userShoppingLists) {
    console.log(userShoppingList);
    const shoppingList = await new ShoppingLists().getByPk(userShoppingList.id_shopping_list);
    console.log(shoppingList);
    originalLists.push(shoppingList);
  }

  return res.json(originalLists);
}

export {
  getShoppingListByUserController
}