import { ProductsShoppingLists } from "../ProductsShoppingLists/ProductsShoppingLists";
import { UserShoppingLists } from "../UserShoppingLists/UserShoppingLists";
import Price from "../prices/Price";
import { SortBy } from "../prices/base";
import { Stores } from "../stores/Stores";
import ProductsBase, { Product } from "./base";

type SearchParams = {
  query?: string;
  id_stores: number[];
  searchProduct?: string;
  min_price?: number;
  max_price?: number;
  min_price_per_unit?: number;
  max_price_per_unit?: number;
  is_white_brand?: string;
  id_brands?: number[];
  limit?: number;
  sort_by?: SortBy;
}
type QueryResultItem = Products['fields'] & Price['fields'] & Stores['fields']

type UnknownWithProduct<T> = T & { id_product: number }
type UnknownWithStore<T> = T & { id_store: number }

class Products extends ProductsBase {
  constructor() {
    super();
  }

  async fillWithOriginalProduct<T>(products: UnknownWithProduct<T>[]) {
    const productsWithData: T[] & QueryResultItem[] = [];

    for (const product of products) {
      const originalProduct = await this.getByPk(product.id_product);

      productsWithData.push({
        ...product,
        ...originalProduct,
      })
    }

    return productsWithData;
  }

  async fillWithFavorites<T>(products: (UnknownWithProduct<T> & UnknownWithStore<T>)[]) {
    const favoriteUserListId = await new UserShoppingLists().getFavoriteListId(1);
    const favoriteUserList = await new ProductsShoppingLists().getAllByField('id_shopping_list', favoriteUserListId);

    const newProducts = products.reduce((acc, product) => {
      const isFavorite = favoriteUserList.some((favorite) => favorite.id_product === product.id_product && favorite.id_store === product.id_store);

      return [...acc, { ...product, is_favorite: isFavorite }];
    }, [] as (T & UnknownWithProduct<T> & UnknownWithStore<T>)[]);

    return newProducts;
  }

  async search({
    query,
    id_stores,
    min_price = 0,
    max_price = 0,
    min_price_per_unit = 0,
    max_price_per_unit = 0,
    is_white_brand,
    id_brands,
    limit = 30, //temp
    sort_by = SortBy.cheapest
  }: SearchParams) {
    const queryMaxPrice = max_price > 0 ? `AND pri.price <= ${max_price}` : '';
    const queryMaxPricePerUnit = max_price_per_unit > 0 ? `AND pri.price_per_unit <= ${max_price_per_unit}` : '';
    const queryIsWhiteBrand = is_white_brand === 'false' ? 'AND pro.is_white_brand = 0' : '';
    const queryIdBrand = id_brands ? `AND pro.id_brand IN (${id_brands})` : '';
    const orderBy = new Price().getOrderBy(sort_by).replace('price', 'pri.price');
    const searchProductName = query ? `pro.product_name LIKE '%${query}%'` : '1=1';

    const [products] = await this.query<QueryResultItem[]>(`
      SELECT 
      	pro.id as id_product,
        pro.product_name,
        pro.is_white_brand,
        s.id as id_store,
        s.name as store_name,
        pri.price,
        pri.price_per_unit
      FROM ${this.table} pro
      JOIN prices pri ON pri.id_product = pro.id
      JOIN stores s ON s.id = pri.id_store
      WHERE 
        ${searchProductName}
        AND pri.id_store IN (${id_stores})
        AND pri.price >= ${min_price}
        ${queryMaxPrice}
        AND pri.price_per_unit >= ${min_price_per_unit}
        ${queryMaxPricePerUnit}
        ${queryIsWhiteBrand}
        ${queryIdBrand}
      ${orderBy}
      LIMIT ${limit}
      `);

    return products;
  }

  async searchSuggestion(searchProduct: string) {
    const [products] = await this.query<QueryResultItem[]>(`
      SELECT * 
      FROM ${this.table} 
      JOIN prices ON prices.id_product = products.id
      WHERE name LIKE '%${searchProduct}%'
      ORDER BY price ASC
      LIMIT 10
    `);

    return products;
  }

  async autocomplete(searchProduct: string) {
    const [suggestedProduct] = await this.query<Product[] | undefined>(`
      SELECT product_name
      FROM ${this.table}
      WHERE product_name LIKE '%${searchProduct}%'
      LIMIT 1
    `);

    const suggestedProductName = suggestedProduct[0]?.product_name ?? '';

    return suggestedProductName;
  }
}

export type { QueryResultItem };
export default Products
