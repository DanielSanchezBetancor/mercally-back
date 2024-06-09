import { ProductsShoppingLists } from "../../../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { buildTestDB } from "../../../utils";

describe("Products Shopping Lists Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should select quantity by product id and shopping list id", async () => {
    // Given
    const { shoppingListProducts } = await buildTestDB();
    const expectedProductId = shoppingListProducts[0].id_product;
    const expectedShoppingListId = 1;
    const expectedQuantity = shoppingListProducts[0].quantity;
    // When
    const quantity = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedProductId), expectedShoppingListId);
    // Then
    expect(quantity).toBe(expectedQuantity);
  });
  it("should not throw error if no quantity is found", async () => {
    // Given
    // When
    const quantity = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId("999", 1);
    // Then
    expect(quantity).toBeUndefined();

  });
  it("should delete the product from the list", async () => {
    // Given
    const { shoppingListProducts } = await buildTestDB();
    const expectedProductId = shoppingListProducts[0].id_product;
    const expectedShoppingListId = 1;
    // When
    const oldValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedProductId), expectedShoppingListId);
    await new ProductsShoppingLists().deleteByProductIdAndShoppingListId(String(expectedProductId), expectedShoppingListId);
    const newValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedProductId), expectedShoppingListId);
    // Then
    expect(oldValue).toBe(1);
    expect(newValue).toBeUndefined();
  });
  it("should update the product quantity", async () => {
    // Given
    const { shoppingListProducts } = await buildTestDB();
    const expectedProductId = shoppingListProducts[1].id_product;
    const expectedShoppingListId = 1;
    const expectedQuantity = shoppingListProducts[1].quantity;
    // When
    const oldValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedProductId), expectedShoppingListId);
    await new ProductsShoppingLists().updateQuantityByProductIdAndShoppingListId(expectedProductId, expectedShoppingListId, expectedQuantity - 1);
    const newValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedProductId), expectedShoppingListId);
    // Then
    expect(oldValue).toBe(expectedQuantity);
    expect(newValue).toBe(expectedQuantity - 1);
  });
});
