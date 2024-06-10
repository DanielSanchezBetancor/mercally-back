import { Request, Response } from "express";
import HistoryPrice from "../../orm/HistoryPrices/HistoryPrices";

async function productHistoryController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_product, id_stores, from, to } = req.query;

  if (!id_product || !id_stores) {
    return res.status(500).json({ error: "No product detected" });
  }

  const searchProduct = Array.isArray(id_product) ? id_product[0] : id_product;
  const fromTime = Array.isArray(from) ? from[0] : from;
  const toTime = Array.isArray(to) ? to[0] : to;
  // Comprobaciones
  // Si el usuario no esta registrado, pasamos de stores y cogemos los por defecto. Estos los comparamos con los que vienen para activar y desactivar
  // Si el usuario esta registrado, cogemos los que vienen y los comparamos con los que tiene el usuario. Los uqe no tenga los descartamos
  const idStoresArray = Array.isArray(id_stores) ? id_stores : [id_stores];
  const idStores = idStoresArray.map((id) => id.toString());

  if (typeof searchProduct !== "string" || !idStores.length || typeof fromTime !== 'string' || typeof toTime !== 'string') {
    return res.status(500).json({ error: "Invalid search" });
  }

  const fromParsedDate = new Date(fromTime)
  const formattedFrom = fromParsedDate.toISOString().slice(0, 10).replace('T', ' ');
  const toParsedDate = new Date(toTime)
  const formattedTo = toParsedDate.toISOString().slice(0, 10).replace('T', ' ');
  const registries = await new HistoryPrice().getProductHistory(searchProduct, idStores, formattedFrom, formattedTo);

  return res.json(registries);
}

export { productHistoryController };
