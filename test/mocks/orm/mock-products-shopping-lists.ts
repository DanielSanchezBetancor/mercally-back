import { FieldPacket, ResultSetHeader } from "mysql2";
import { ProductsShoppingLists } from "../../../orm/ProductsShoppingLists/ProductsShoppingLists";

function mockProductsShoppingLists(shoppingListHasProduct?: string) {
  const deleteByProductIdAndShoppingListIdSpy = jest.spyOn(ProductsShoppingLists.prototype, "deleteByProductIdAndShoppingListId")
    .mockImplementation(async () => {
      return;
    });

  const updateQuantityByProductIdAndShoppingListIdSpy = jest.spyOn(ProductsShoppingLists.prototype, "updateQuantityByProductIdAndShoppingListId")
    .mockImplementation(async () => {
      return;
    });

  const insertSpy = jest.spyOn(ProductsShoppingLists.prototype, "insert").mockImplementation(async () => undefined as any);

  const getQuantityByProductIdAndShoppingListIdSpy = jest.spyOn(ProductsShoppingLists.prototype, "getQuantityByProductIdAndShoppingListId")
    .mockImplementation(async () => {
      return shoppingListHasProduct
    });



  return {
    deleteByProductIdAndShoppingListIdSpy,
    updateQuantityByProductIdAndShoppingListIdSpy,
    insertSpy,
    getQuantityByProductIdAndShoppingListIdSpy
  };
}

function mockProductsShoppingListsQuery(queryReturn?: any) {
  const querySpy = jest.spyOn(ProductsShoppingLists.prototype, "query").mockImplementation(async () => {
    return [[queryReturn]] as unknown as [ResultSetHeader, FieldPacket[]]
  });

  return { querySpy };
}

export { mockProductsShoppingLists, mockProductsShoppingListsQuery };