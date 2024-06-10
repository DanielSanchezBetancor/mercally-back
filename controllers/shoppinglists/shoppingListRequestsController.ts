import { Request, Response } from 'express';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';

async function shoppingListRequestsController(req: Request, res: Response) {
  // Aqui comprobamos que el usuario esté autenticado y recogemos su ID
  const fakeUserId = 1
  const activeShoppingList = await new UserShoppingLists().getActiveShoppingListId(fakeUserId);
  const requests = await new UserShoppingLists().getPendingRequests(activeShoppingList);

  res.json({ requests });
}

export { shoppingListRequestsController };