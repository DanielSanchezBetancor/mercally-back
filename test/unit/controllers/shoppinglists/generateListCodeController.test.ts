import { generateListCodeController } from "../../../../controllers/shoppinglists/generateListCodeController";
import { mockExpress } from "../../../mocks/mock-express";
import { mockShoppingList } from "../../../mocks/orm/mock-shopping-list";
import { getOriginalUserShoppingLists, mockUserShoppingLists } from "../../../mocks/orm/mock-user-shopping-lists";

describe("Generate List Code Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return a code", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const { getActiveShoppingListIdSpy } = mockUserShoppingLists();
    const { updateListCodeSpy } = mockShoppingList();
    const originalShoppingList = getOriginalUserShoppingLists()
    // When
    await generateListCodeController(Request, Response);
    // Then
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(updateListCodeSpy).toHaveBeenCalledTimes(1);
    expect(updateListCodeSpy).toHaveBeenCalledWith(originalShoppingList.id_shopping_list, expect.any(String));
    expect(Response.json.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(Response.json.mock.calls[0][0].code).not.toBeNull();
  });
});