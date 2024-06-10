import { Request, Response } from 'express';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';
import ShoppingLists from '../../orm/ShoppingLists/ShoppingLists';

async function generateListCodeController(_req: Request, res: Response) {
  // Aqui comprobamos que el usuario esté autenticado y recogemos su ID
  const fakeUserId = 1
  const code = Math.random().toString(36).substring(2, 15);
  const activeShoppingList = await new UserShoppingLists().getActiveShoppingListId(fakeUserId);

  await new ShoppingLists().updateListCode(activeShoppingList, code);

  res.status(200).json({ code });
}

export { generateListCodeController };
