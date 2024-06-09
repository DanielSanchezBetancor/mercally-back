import { Request, Response } from 'express';
import Products from '../../orm/products/Products';
import Price from '../../orm/prices/Price';

async function productDetailsController(req: Request, res: Response) {
  if (!req.query) return res.status(400).json({ error: 'Missing query' })

  const { id_product, order_by } = req.query;

  if (!id_product) {
    return res.status(500).json({ error: "No product detected" });
  }

  const searchProduct = Array.isArray(id_product) ? id_product[0] : id_product;

  if (typeof searchProduct !== "string") {
    return res.status(500).json({ error: "Invalid search" });
  }

  const product = await new Products().getByPk(searchProduct);

  if (!product) return res.json({});

  const productWithPrices = await new Price().getAllByField('id_product', searchProduct, order_by);

  const productWithPricesAndProduct = productWithPrices.map((price) => {
    return {
      ...product,
      ...price,
      price: Number(price.price),
      price_per_unit: Number(price.price_per_unit),
    }
  });

  return res.json(productWithPricesAndProduct);
}

export { productDetailsController };
