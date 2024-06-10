import { Request, Response } from 'express';
import ShoppingLists from '../../orm/ShoppingLists/ShoppingLists';

async function shoppingListByCodeController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { code } = req.query;

  if (!code) {
    return res.status(500).json({ error: "No code detected" });
  }

  const listCode = Array.isArray(code) ? code[0] : code;

  if (typeof listCode !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }

  if (listCode.length < 3) {
    return res.status(500).json({ error: "Search term too short" });
  }

  const shoppingListRow = await new ShoppingLists().getAllByField('code', listCode);

  if (!shoppingListRow.length) {
    return res.json({})
  }

  const shoppingList = shoppingListRow[0];

  return res.json(shoppingList);
}

export { shoppingListByCodeController };
