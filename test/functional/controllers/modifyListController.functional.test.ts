import { ProductsShoppingLists } from "../../../orm/ProductsShoppingLists/ProductsShoppingLists";
import { buildTestDB, executeEndpoint } from "../../utils";

describe("Modify List Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no product id is provided", async () => {
    // Given
    // When
    const { data, res: modifyList } = await executeEndpoint(`modifyList`, 'PUT')
    // Then
    expect(data.status).toBe(500)
    expect(modifyList).toBeDefined()
    expect(modifyList).toHaveProperty('error')
    expect(modifyList.error).toBe('No product detected')
  });
  it("should delete the product from the list if only has 1 item", async () => {
    // Given
    const { shoppingListProducts } = await buildTestDB()
    const expectedId = shoppingListProducts[0].id_product
    // const expectedShoppingListId = shoppingListProducts[0].id_shopping_list
    const expectedShoppingListId = 1
    // When
    const oldValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedId), expectedShoppingListId)
    const { data } = await executeEndpoint(`modifyList?id_product=${expectedId}&erase=1`, 'PUT')
    const newValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedId), expectedShoppingListId)
    // Then
    expect(data.status).toBe(200);
    expect(oldValue).toBe(1);
    expect(newValue).toBeUndefined()
  });
  it("should update the product quantity if it has more than 1 item", async () => {
    // Given
    const { shoppingListProducts } = await buildTestDB()
    const expectedId = shoppingListProducts[1].id_product
    // const expectedShoppingListId = shoppingListProducts[1].id_shopping_list
    const expectedShoppingListId = 1
    const expectedQuantity = shoppingListProducts[1].quantity
    // When
    const oldValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedId), expectedShoppingListId)
    const { data } = await executeEndpoint(`modifyList?id_product=${expectedId}&erase=1`, 'PUT')
    const newValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedId), expectedShoppingListId)
    // Then
    expect(data.status).toBe(200);
    expect(oldValue).toBe(expectedQuantity);
    expect(newValue).toBe(expectedQuantity - 1)
  });
  it("should insert the product if it is not in the list and erase is not provided", async () => {
    // Given
    const expectedProductId = "999";
    const expectedIdShoppingList = 1
    // When
    const oldValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(expectedProductId, expectedIdShoppingList)
    const { data } = await executeEndpoint(`modifyList?id_product=${expectedProductId}`, 'PUT')
    const newValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(expectedProductId, expectedIdShoppingList)
    // Then
    expect(data.status).toBe(200);
    expect(oldValue).toBeUndefined();
    expect(newValue).toBe(1);
  });
  it("should update the product quantity if it is in the list and erase is provided as false", async () => {
    // Given
    const { shoppingListProducts } = await buildTestDB()
    const expectedId = shoppingListProducts[1].id_product
    // const expectedShoppingListId = shoppingListProducts[1].id_shopping_list
    const expectedShoppingListId = 1
    const expectedQuantity = shoppingListProducts[1].quantity
    // When
    const oldValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedId), expectedShoppingListId)
    const { data } = await executeEndpoint(`modifyList?id_product=${expectedId}&erase=0`, 'PUT')
    const newValue = await new ProductsShoppingLists().getQuantityByProductIdAndShoppingListId(String(expectedId), expectedShoppingListId)
    // Then
    expect(data.status).toBe(200);
    expect(oldValue).toBe(expectedQuantity);
    expect(newValue).toBe(expectedQuantity + 1)
  });
});