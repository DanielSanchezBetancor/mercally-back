
import { getConnection } from "./connection";

// Esto debe cambiar a ProductsField de la tabla products | Es mas, ya QueryBase deberia tener un metodo insert
const insertProduct = async (product: {
  brand: string,
  category: string,
  unit: number,
  product: string
}) => {
  const conn = getConnection();
  await conn.query('INSERT INTO products (brand, category, weight, product) VALUES (?, ?, ?, ?)', [product.brand, product.category, product.unit, product.product]);
}

export { insertProduct };