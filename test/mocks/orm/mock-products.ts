import { BiggestDifference } from "../../../orm/prices/Price";
import Products from "../../../orm/products/Products";

function fillBiggestDiffProduct(products: BiggestDifference[]) {
  const productsWithData = [];

  for (const product of products) {
    const originalProduct: Products['fields'] = {
      id: product.id_product,
      name: `Product ${product.id_product}`,
      is_white_brand: 0,
      id_category: 0
    }

    productsWithData.push({
      ...product,
      ...originalProduct,
    })
  }

  return productsWithData;
}


function mockProducts() {
  const ProductsMock = jest.spyOn(Products.prototype, "getByPk").mockImplementation(async (id: string | number) => {
    return {
      id: Number(id),
      name: `Product ${id}`,
      is_white_brand: 0,
      id_category: 0
    }
  });

  return ProductsMock;
}

export { fillBiggestDiffProduct, mockProducts };
