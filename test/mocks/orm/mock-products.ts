import { FieldPacket, ResultSetHeader } from "mysql2";
import Products, { QueryResultItem } from "../../../orm/products/Products";
import { Product, ProductsFields } from "../../../orm/products/base";

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

function mockProducts(autocompleteValue?: string, getByPkValue?: Product | Product[]) {
  const getByPkSpy = jest.spyOn(Products.prototype, "getByPk").mockImplementation(async () => {
    return getByPkValue as unknown as ResultSetHeader & ProductsFields;
  })

  const searchSpy = jest.spyOn(Products.prototype, "search").mockImplementation(async () => {
    return [getOriginalProductMock(0)] as unknown as ResultSetHeader & QueryResultItem[];
  })

  const searchSuggestionSpy = jest.spyOn(Products.prototype, "searchSuggestion").mockImplementation(async () => {
    return [getOriginalProductMock(0)] as unknown as ResultSetHeader & QueryResultItem[];
  })

  const autocompleteSpy = jest.spyOn(Products.prototype, "autocomplete").mockImplementation(async (_searchValue: string) => {
    return autocompleteValue as unknown as ResultSetHeader & string;
  });

  const getAllByFieldSpy = jest.spyOn(Products.prototype, "getAllByField").mockImplementation(async () => {
    return [getOriginalProductMock(0)] as unknown as ResultSetHeader & QueryResultItem[];
  });

  const fillWithOriginalProductSpy = jest.spyOn(Products.prototype, "fillWithOriginalProduct").mockImplementation(async (products: OverchargedUnknown[]) => {
    return fillWithOriginalProductMock(products);
  })

  return { getByPkSpy, searchSpy, searchSuggestionSpy, autocompleteSpy, getAllByFieldSpy, fillWithOriginalProductSpy };
}



export { fillWithOriginalProductMock, mockProducts, getOriginalProductMock };

