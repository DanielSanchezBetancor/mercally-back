import { Request, Response } from 'express';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';
import { UserShoppingListRequest } from '../../orm/UserShoppingLists/UserShoppingListsBase';
import { verifyAndDecodeToken } from '../../helpers/security';

async function handleShoppingListRequestController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_shopping_list, is_accepted } = req.query;

  if (!id_shopping_list || !is_accepted) {
    return res.status(500).json({ error: "No params detected" });
  }

  const idShoppingList = Array.isArray(id_shopping_list) ? id_shopping_list[0] : id_shopping_list;
  const isAccepted = Array.isArray(is_accepted) ? is_accepted[0] : is_accepted;

  if (typeof idShoppingList !== "string" || typeof isAccepted !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }

  const token = verifyAndDecodeToken(req);
  const { userId } = token!;
  const acceptedEnumValue = hasAccepted(isAccepted) ? UserShoppingListRequest.ACCEPTED : UserShoppingListRequest.REJECTED;
  await new UserShoppingLists().updateIsAcceptedByShoppingListId(Number(userId), Number(idShoppingList), acceptedEnumValue);

  return res.status(200).json({});
}

function hasAccepted(isAccepted: string) {
  if (isAccepted === 'true' || isAccepted === "1") return true;
  return false;
}

export { handleShoppingListRequestController };