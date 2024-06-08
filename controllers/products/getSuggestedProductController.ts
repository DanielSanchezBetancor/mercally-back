import { Request, Response } from "express";
import { identifyAllPatterns } from "../../data/statics/category/category";
import { getProductByFilters, getProductById } from "../../orm/products/products-orm";

async function getSuggestedProductController(req: Request, res: Response, _next: Function) {
  const { idProduct: idProductQuery } = req.params;

  if (!idProductQuery) {
    return res.status(500).send("No product detected");
  }

  const idProduct = parseInt(idProductQuery);
  const userProduct = await getProductById(idProduct);
  const categoryProduct = identifyAllPatterns(userProduct.product);

  if (categoryProduct) {
    const suggestedProducts = await getSuggestedProduct(categoryProduct, idProduct);

    return res.send(suggestedProducts);
  }

  return res.status(404).send("Product not found");
}


async function getSuggestedProduct(categoryProduct: {
  category: string;
  wordMatched: string;
  priority: number;
}[], idProduct: number) {
  // En base a las prioridades de categorias, buscar productos similares
  const firstMatch = categoryProduct[0];
  const suggestedProducts = await getProductByFilters({
    idProduct,
    category: firstMatch.category,
    product: firstMatch.wordMatched,
    cheap: true
  });

  return Array.isArray(suggestedProducts) ? suggestedProducts[0] : suggestedProducts;
}

export { getSuggestedProductController };

