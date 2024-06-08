import { ResultSetHeader } from "mysql2";
import { getConnection } from "../base/connection";

// Este fichero debe irse y unirse a Products
type Product = {
  brand: string,
  category: string,
  unit: number,
  product: string
}

type ProductPacket = ResultSetHeader & Product

async function getProducts() {
  const connection = getConnection();

  const [products] = await connection.query("SELECT * FROM products");

  return products;
}

async function getProductById(id: number) {
  const connection = getConnection();

  const [product] = await connection.query<ProductPacket[]>("SELECT * FROM products WHERE idProduct = ?", [id]);

  return product[0];
}

async function getProductByFilters(filters: { idProduct: number, category: string; product: string; cheap: boolean }) {
  const connection = getConnection();
  let query = "SELECT * FROM products";
  let isFirstWhere = true;
  const fields = []

  const setAnd = () => {
    if (isFirstWhere) {
      isFirstWhere = false;
      return "";
    }
    return " AND";
  }

  if (Object.values(filters).length > 0) {
    query += " WHERE";
  }

  if (filters.idProduct) {
    query += setAnd() + " idProduct != ? ";
    fields.push(filters.idProduct);
  }

  if (filters.category) {
    query += setAnd() + " category = ? ";
    fields.push(filters.category);
  }

  if (filters.product) {
    query += `${setAnd()} product LIKE '%${filters.product}%'`;
  }

  if (filters.cheap) {
    query += " ORDER BY price ASC";
  }

  const [products] = await connection.query<ProductPacket>(query, fields);

  return products;
}

export { getProducts, getProductById, getProductByFilters };
