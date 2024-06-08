import Products from "../../../orm/products/Products";

type OverchargedUnknown = unknown & { id_product: number }

function getOriginalProductMock(idProduct: number): Products['fields'] {
  return {
    id: idProduct,
    name: `Product ${idProduct}`,
    is_white_brand: 0,
    id_category: 0
  }
}

function fillWithOriginalProductMock(products: OverchargedUnknown[]) {
  const productsWithData = [];

  for (const product of products) {
    const originalProduct = getOriginalProductMock(product.id_product);

    productsWithData.push({
      ...product,
      ...originalProduct,
    })
  }

  return productsWithData;
}

function mockProducts() {
  const ProductsMock = jest.spyOn(Products.prototype, "getByPk").mockImplementation(async (id: string | number) => {
    return getOriginalProductMock(Number(id));
  })

  return ProductsMock;
}

export { fillWithOriginalProductMock, mockProducts, getOriginalProductMock };

