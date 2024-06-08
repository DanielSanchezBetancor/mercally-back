import BaseQuery from "../base/BaseQuery";

type ProductsFields = {
  id?: number;
  name: string;
  is_white_brand: number;
  id_category: number;
}

class ProductsBase extends BaseQuery<ProductsFields> {
  protected table = 'products';
  protected fields: ProductsFields = {
    name: "",
    is_white_brand: 0,
    id_category: 0
  }
  protected primaryKey = "id";

  constructor() {
    super();
  }
}

export default ProductsBase
