import { Request, Response } from "express";
import { ProductsShoppingLists } from "../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";

const handleFavoriteController = async (req: Request, res: Response) => {
  const { id_product, id_store } = req.body;

  if (!id_product || !id_store) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // const user = req.user;
  const fakeUserId = 1;

  // if (!user) {
  //   return res.status(401).json({ error: "Unauthorized" });
  // }

  // const userId = user.id;

  // if (userId !== fakeUserId) {
  //   return res.status(401).json({ error: "Unauthorized" });
  // }

  const idFavoriteList = await new UserShoppingLists().getFavoriteListId(fakeUserId);

  if (!idFavoriteList) {
    return res.status(500).json({ error: "Favorite list not found" });
  }

  // await new ProductsShoppingLists().saveFavorite(idFavoriteList, id_product, id_store);
  const isFavorite = await new ProductsShoppingLists().isFavorite(idFavoriteList, id_product, id_store);

  if (isFavorite) {
    await new ProductsShoppingLists().removeFavorite(idFavoriteList, id_product, id_store);
  } else {
    await new ProductsShoppingLists().saveFavorite(idFavoriteList, id_product, id_store);
  }

  return res.status(200).send();
}

export { handleFavoriteController };

