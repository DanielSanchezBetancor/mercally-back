import { Request, Response } from 'express';
import { ProductsShoppingLists } from '../../orm/ProductsShoppingLists/ProductsShoppingLists';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';

async function modifyListController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_product, erase } = req.query;

  if (!id_product) {
    return res.status(500).json({ error: "No product detected" });
  }

  const productId = Array.isArray(id_product) ? id_product[0] : id_product;

  if (typeof productId !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }
  // Aqui sacariamos el ID del usuario de la sesion
  const userId = 1;
  const activeShoppingListId = await new UserShoppingLists().getActiveShoppingListId(userId);
  const shoppingListHasProduct = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(productId, activeShoppingListId);
  const action = erase === "1" ? eraseAction : insertOrUpdateAction;
  await action(shoppingListHasProduct, productId, activeShoppingListId);


  return res.status(200).json({})
}

async function eraseAction(shoppingListHasProduct: string | undefined, productId: string, activeShoppingListId: number) {
  if (Number(shoppingListHasProduct) === 1) {
    await new ProductsShoppingLists().deleteByProductIdAndShoppingListId(productId, activeShoppingListId);
  } else if (Number(shoppingListHasProduct) > 1) {
    await new ProductsShoppingLists().updateQuantityByProductIdAndShoppingListId(Number(productId), activeShoppingListId, Number(shoppingListHasProduct) - 1);
  }
}
async function insertOrUpdateAction(shoppingListHasProduct: string | undefined, productId: string, activeShoppingListId: number) {
  if (!shoppingListHasProduct) {
    await new ProductsShoppingLists().insert({ id_product: Number(productId), id_shopping_list: activeShoppingListId, quantity: 1 });
  } else {
    await new ProductsShoppingLists().updateQuantityByProductIdAndShoppingListId(Number(productId), activeShoppingListId, Number(shoppingListHasProduct) + 1);
  }
}

export { modifyListController };