import { Request, Response } from "express";
import Products from "../../orm/products/Products";
import { getStoresForUser } from "../../helpers/stores";
import { verifyAndDecodeToken } from "../../helpers/security";

async function searchController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { search, stores: userStores } = req.query;

  if (!search) {
    return res.status(500).json({ error: "No product detected" });
  }

  const token = verifyAndDecodeToken(req);
  const searchProduct = Array.isArray(search) ? search[ 0 ] : search;
  const arrayStores = Array.isArray(userStores) ? userStores : [ userStores ];
  const parsedStores = arrayStores.map(String);

  if (typeof searchProduct !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }

  if (searchProduct.length < 3) {
    return res.status(500).json({ error: "Search term too short" });
  }

  const storesForUser = await getStoresForUser(parsedStores, token)
  const stores = storesForUser.map(Number);

  const products = await new Products().search({
    ...req.query,
    stores,
    searchProduct
  });

  res.json(products);
}

export { searchController };
