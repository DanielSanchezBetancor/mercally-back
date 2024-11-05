import { Request, Response } from "express";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";

const setActiveShoppingList = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const fakeUserId = 1;
  const idNumber = Number(id);

  await new UserShoppingLists().updateActiveList(idNumber, fakeUserId);

  return res.status(200).send();
}

export { setActiveShoppingList };