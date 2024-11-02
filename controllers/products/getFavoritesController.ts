import { Request, Response } from "express";
import { ProductsShoppingLists } from "../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";
import Prices from "../../orm/prices/Price";
import Products from "../../orm/products/Products";

const getFavoritesController = async (req: Request, res: Response) => {
  const fakeUserId = 1;

  const favorites = await new UserShoppingLists().getFavoriteListId(fakeUserId);
  const productFromShoppingList = await new ProductsShoppingLists().getAllByField('id_shopping_list', favorites);
  const productsFromOriginalData = await new Products().fillWithOriginalProduct(productFromShoppingList);
  const productsWithPrices = await new Prices().fillWithOriginalPrice(productsFromOriginalData);
  const products = await new Products().fillWithFavorites(productsWithPrices);

  res.json(products);
}

export { getFavoritesController };
