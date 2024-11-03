import { Request, Response } from "express";
import Products from "../../orm/products/Products";

async function searchController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const idStores = req.query.id_stores;
  // En principio liberemos esto para que se puedan hacer busquedas sin query, solo cuando no hay absolutamente nada
  // const storesParam = req.query.stores;
  // if (!searchParam) {
  //   return res.status(500).json({ error: "No product detected" });
  // } 

  /* Aqui tendriamos que comprobar lo siguiente:
  * 1. Si no hay usuario, ignoramos `stores` y pillamos los por defecto
  * 2. Si hay usuario, comparar `stores` con los que tiene el usuario, los uqe no tenga, ignorarlos
  */

  /* En principio no vamos a poner un limite minimo de caracteres para la busqueda
  *  El endpoint estaba planteado solo para ser ejecutado cuando en el Front se escribieran al menos 3 caracteres dado que era movil
  * Pero el usuario ahora puede hacer la busqueda con 1 o 2 caracteres en escritorio
  */
  // if (searchProduct && searchProduct.length < 3) {
  //   return res.status(500).json({ error: "Search term too short" });
  // }


  const fakeUserStores = [1, 2, 5];
  const cleanQueryStores = () => idStores!.toString().split(',').map(Number)

  const id_stores = idStores ? cleanQueryStores() :  fakeUserStores

  const searchedProducts = await new Products().search({
    ...req.query,
    id_stores,
  });

  const products = await new Products().fillWithFavorites(searchedProducts)

  res.json(products);
}

export { searchController };
