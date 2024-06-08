import { FieldPacket, ResultSetHeader } from "mysql2";
import Products, { QueryResultItem } from "../../../orm/products/Products";
import { Product } from "../../../orm/products/base";

type OverchargedUnknown = unknown & { id_product: number }

function getOriginalProductMock(idProduct: number): Product {
  return {
    id: idProduct,
    name: `Product ${idProduct}`,
    is_white_brand: 0,
    id_category: 0,
    id_brand: 0
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

function mockProducts(value?: string) {
  const getByPkSpy = jest.spyOn(Products.prototype, "getByPk").mockImplementation(async (id: string | number) => {
    return getOriginalProductMock(Number(id));
  })

  const searchSpy = jest.spyOn(Products.prototype, "search").mockImplementation(async () => {
    return [getOriginalProductMock(0)] as unknown as ResultSetHeader & QueryResultItem[];
  })

  const searchSuggestionSpy = jest.spyOn(Products.prototype, "searchSuggestion").mockImplementation(async () => {
    return [getOriginalProductMock(0)] as unknown as ResultSetHeader & QueryResultItem[];
  })

  const autocompleteSpy = jest.spyOn(Products.prototype, "autocomplete").mockImplementation(async (_searchValue: string) => {
    return value as unknown as ResultSetHeader & string;
  });


  return { getByPkSpy, searchSpy, searchSuggestionSpy, autocompleteSpy };
}



export { fillWithOriginalProductMock, mockProducts, getOriginalProductMock };

