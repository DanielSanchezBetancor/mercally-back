import { Request, Response } from "express";
import { UserShoppingLists } from "../../orm/UserShoppingLists/UserShoppingLists";
import { ProductsShoppingLists } from "../../orm/ProductsShoppingLists/ProductsShoppingLists";
import Products from "../../orm/products/Products";
import Prices from "../../orm/prices/Price";
import { Stores } from "../../orm/stores/Stores";

async function getShoppingListProductsByIdController(req: Request, res: Response) {
  if (!req.query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: 'Missing id'
    });
  }

  const numberSingle = Array.isArray(id) ? id[0] : id;
  const numberId = Number(numberSingle);

  const fakeUserId = 1;
  // Comprobar que el usuario tiene permisos para ver la lista

  const productsByList = await new ProductsShoppingLists().getAllByField('id_shopping_list', numberId);
  const products = await new Products().fillWithOriginalProduct(productsByList);
  const productsWithPrices = await new Prices().fillWithOriginalPrice(products);
  const productWithStores = await new Stores().fillWithOriginalStore(productsWithPrices);

  return res.json(productWithStores);
}

export {
  getShoppingListProductsByIdController
}