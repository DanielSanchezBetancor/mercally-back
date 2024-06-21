import { Request, Response } from 'express';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';
import ShoppingLists from '../../orm/ShoppingLists/ShoppingLists';
import { verifyAndDecodeToken } from '../../helpers/security';

async function generateListCodeController(req: Request, res: Response) {
  const token = verifyAndDecodeToken(req)
  const { userId } = token!;
  const code = Math.random().toString(36).substring(2, 15);
  const activeShoppingList = await new UserShoppingLists().getActiveShoppingListId(Number(userId));
  await new ShoppingLists().updateListCode(activeShoppingList, code);

  res.status(200).json({ code });
}

export { generateListCodeController };
