import { Request, Response } from 'express';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';
import { verifyAndDecodeToken } from '../../helpers/security';

async function shoppingListRequestsController(req: Request, res: Response) {
  const token = verifyAndDecodeToken(req);
  const { userId } = token!;
  const activeShoppingList = await new UserShoppingLists().getActiveShoppingListId(Number(userId));
  const requests = await new UserShoppingLists().getPendingRequests(activeShoppingList);

  res.json({ requests });
}

export { shoppingListRequestsController };