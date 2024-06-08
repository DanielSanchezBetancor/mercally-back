import { Product } from "../../data/types/product";
import { getConnection } from "./connection";

const insertProduct = async (product: Omit<Product, "idProduct">) => {
  const conn = getConnection();
  await conn.query('INSERT INTO products (brand, category, weight, product) VALUES (?, ?, ?, ?)', [product.brand, product.category, product.unit, product.product]);
}

export { insertProduct };