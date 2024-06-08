import ProductsBase from "./base";

type OverchargedUnknown = unknown & { id_product: number }

class Products extends ProductsBase {
  constructor() {
    super();
  }

  async fillWithOriginalProduct(products: OverchargedUnknown[]) {
    const productsWithData = [];

    for (const product of products) {
      const originalProduct = await this.getByPk(product.id_product);

      productsWithData.push({
        ...product,
        ...originalProduct,
      })
    }

    return productsWithData;
  }
}

export default Products
