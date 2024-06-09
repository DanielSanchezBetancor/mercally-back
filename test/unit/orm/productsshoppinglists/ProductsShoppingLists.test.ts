import { ProductsShoppingLists } from "../../../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { mockProductsShoppingListsQuery } from "../../../mocks/orm/mock-products-shopping-lists";

describe("Products Shopping Lists Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should try to select quantity by product id and shopping list id", async () => {
    // Given
    const { querySpy } = mockProductsShoppingListsQuery({ quantity: "1" });
    const expectedProductId = "1";
    const expectedShoppingListId = 1;
    // When
    const quantity = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(expectedProductId, expectedShoppingListId);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT quantity FROM shopping_lists_products WHERE id_shopping_list = ${expectedShoppingListId} AND id_product = ${expectedProductId}`);
    expect(quantity).toBe("1");
  });
  it("should not throw error if no quantity is found", async () => {
    // Given
    const { querySpy } = mockProductsShoppingListsQuery();
    const expectedProductId = "1";
    const expectedShoppingListId = 1;

    const productsShoppingLists = new ProductsShoppingLists();
    // When
    const quantity = await productsShoppingLists.getQuantityByProductIdAndShoppingListId(expectedProductId, expectedShoppingListId);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT quantity FROM shopping_lists_products WHERE id_shopping_list = ${expectedShoppingListId} AND id_product = ${expectedProductId}`);
    expect(quantity).toBeUndefined();
  });
  it("should try to delete the product from the list", async () => {
    // Given
    const { querySpy } = mockProductsShoppingListsQuery();
    const expectedProductId = "1";
    const expectedShoppingListId = 1;

    const productsShoppingLists = new ProductsShoppingLists();
    // When
    await productsShoppingLists.deleteByProductIdAndShoppingListId(expectedProductId, expectedShoppingListId);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`DELETE FROM shopping_lists_products WHERE id_shopping_list = ${expectedShoppingListId} AND id_product = ${expectedProductId}`);
  });
  it("should try to update the product quantity", async () => {
    // Given
    const { querySpy } = mockProductsShoppingListsQuery();
    const expectedProductId = 1;
    const expectedShoppingListId = 1;
    const expectedQuantity = 1;

    const productsShoppingLists = new ProductsShoppingLists();
    // When
    await productsShoppingLists.updateQuantityByProductIdAndShoppingListId(expectedProductId, expectedShoppingListId, expectedQuantity);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`UPDATE shopping_lists_products SET quantity = ${expectedQuantity} WHERE id_shopping_list = ${expectedShoppingListId} AND id_product = ${expectedProductId}`);
  });
});
