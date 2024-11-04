import { Request, Response } from 'express';
import { ProductsShoppingLists } from '../../orm/ProductsShoppingLists/ProductsShoppingLists';
import { UserShoppingLists } from '../../orm/UserShoppingLists/UserShoppingLists';

async function modifyListController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_product, id_store, erase } = req.body;

  if (!id_product || !id_store) {
    return res.status(500).json({ error: "No product detected" });
  }

  const productId = Array.isArray(id_product) ? id_product[0] : id_product;
  const storeId = Array.isArray(id_store) ? id_store[0] : id_store;

  // Aqui sacariamos el ID del usuario de la sesion
  const userId = 1;
  const activeShoppingListId = await new UserShoppingLists().getActiveShoppingListId(userId);
  const shoppingListHasProduct = await new ProductsShoppingLists().getProductQuantity(activeShoppingListId, Number(productId), Number(storeId));
  const action = erase === "1" ? eraseAction : insertOrUpdateAction;
  await action(shoppingListHasProduct, productId, activeShoppingListId, storeId);

  return res.status(200).json({})
}

async function eraseAction(shoppingListHasProduct: string | undefined, productId: string, activeShoppingListId: number, storeId: string) {
  if (Number(shoppingListHasProduct) === 1) {
    await new ProductsShoppingLists().deleteProductFromList(activeShoppingListId, Number(productId), Number(storeId));
  } else if (Number(shoppingListHasProduct) > 1) {
    await new ProductsShoppingLists().updateProductQuantity(activeShoppingListId, Number(productId), Number(storeId), Number(shoppingListHasProduct) - 1);
  }
}
async function insertOrUpdateAction(shoppingListHasProduct: string | undefined, productId: string, activeShoppingListId: number, storeId: string) {
  if (!shoppingListHasProduct) {
    await new ProductsShoppingLists().insert({ id_product: Number(productId), id_shopping_list: activeShoppingListId, quantity: 1, id_store: Number(storeId) });
  } else {
    await new ProductsShoppingLists().updateProductQuantity(activeShoppingListId, Number(productId), Number(storeId), Number(shoppingListHasProduct) + 1);
  }
}

export { modifyListController };