import { buildTestDB, executeEndpoint } from "../../../utils";

describe("Shopping List By Code Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no code is provided", async () => {
    // Given
    // When
    const { data, res: shoppingListByCode } = await executeEndpoint(`shoppingListByCode`)
    // Then
    expect(shoppingListByCode).toBeDefined()
    expect(shoppingListByCode).toHaveProperty('error')
    expect(shoppingListByCode.error).toBe('No code detected')
    expect(data.status).toBe(500)
  });
  it("should return correct structure if code is provided", async () => {
    // Given
    const code = "123456";
    // When
    const { data, res: shoppingListByCode } = await executeEndpoint(`shoppingListByCode?code=${code}`);
    // Then
    expect(data.status).toBe(200);
    expect(shoppingListByCode).toBeDefined()
    expect(shoppingListByCode).toHaveProperty('id')
    expect(shoppingListByCode).toHaveProperty('code')
  });
  it("should retrieve correct shopping list", async () => {
    // Given
    const code = "123456";
    const { shoppingList } = await buildTestDB();

    // When
    const { data, res: shoppingListByCode } = await executeEndpoint(`shoppingListByCode?code=${code}`);
    // Then
    expect(data.status).toBe(200);
    expect(shoppingListByCode).toEqual(shoppingList);
  });
  it("should not throw error if no shopping list is found by the provided code", async () => {
    // Given
    const code = "shopping-list-1";
    // When
    const { data, res: shoppingListByCode } = await executeEndpoint(`shoppingListByCode?code=${code}`);
    // Then
    expect(data.status).toBe(200);
    expect(shoppingListByCode).toEqual({});
  });
});