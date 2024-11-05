import { Request, Response } from "express";
import ShoppingLists from "../../orm/ShoppingLists/ShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";
import { ProductsShoppingLists } from "../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { ShoppingListByUserResponse } from "../../data/types/shopping-list";

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
  const originalLists: ShoppingListByUserResponse[] = [];

  for (const userShoppingList of userShoppingLists) {
    const shoppingList = await new ShoppingLists().getByPk(userShoppingList.id_shopping_list);

    if (shoppingList) {
      const shoppingListProducts = await new ProductsShoppingLists().getAllByField('id_shopping_list', userShoppingList.id_shopping_list);
      originalLists.push({
        id: shoppingList.id,
        name: shoppingList.name,
        id_background: shoppingList.id_background,
        quantity: shoppingListProducts.length,
        is_active: userShoppingList.is_active,
      });
    }
  }

  return res.json(originalLists);
}

export {
  getShoppingListByUserController
}