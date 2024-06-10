import ShoppingLists from "../../../../orm/ShoppingLists/ShoppingLists";
import { getOriginalShoppingListMock, mockShoppingList } from "../../../mocks/orm/mock-shopping-list";
import { executeEndpoint } from "../../../utils";

describe("Generate List Code Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return a code", async () => {
    // Given
    const originalShoppingList = getOriginalShoppingListMock(1)
    // When
    const { data, res: listCode } = await executeEndpoint("generateListCode", 'POST');
    const newValue = await new ShoppingLists().getAllByField('id', originalShoppingList.id);
    console.log('newValue', newValue)
    // Then
    expect(data.status).toBe(200);
    expect(listCode).toHaveProperty('code');
    expect(listCode.code).not.toBe(originalShoppingList.code);
    expect(listCode.code).toBe(newValue[0].code);
  });
});