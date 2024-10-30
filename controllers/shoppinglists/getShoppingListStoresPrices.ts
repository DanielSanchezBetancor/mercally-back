import { Request, Response } from "express";
import Prices from "../../orm/prices/Price";
import { ProductsShoppingLists } from "../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { Stores } from "../../orm/stores/Stores";
import { UsersStores } from "../../orm/UsersStores/UsersStores";

const getShoppingListStoresPrices = async (req: Request, res: Response) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: 'Missing id'
    });
  }

  const numberSingle = Array.isArray(id) ? id[0] : id;
  const numberId = Number(numberSingle);

  const fakeUserId = 1;
  const storesWithPrices: { [store: string]: number } = {};


  const productsByList = await new ProductsShoppingLists().getAllByField('id_shopping_list', numberId);
  const userSTores = await new UsersStores().getAllByField('id_user', fakeUserId);
  const stores = await new Stores().fillWithOriginalStore(userSTores);


  for (const product of productsByList) {
    for (const store of stores) {
      const price = await new Prices().getPricesByProductAndStore(product.id_product, store.id_store);
      if (!storesWithPrices[store.name]) storesWithPrices[store.name] = 0;
      storesWithPrices[store.name] = Number(price.price) + storesWithPrices[store.name];
    }
  }

  return res.json(storesWithPrices);
}

export { getShoppingListStoresPrices };

