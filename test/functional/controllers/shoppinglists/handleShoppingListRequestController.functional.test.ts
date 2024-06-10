import { UserShoppingLists } from "../../../../orm/UserShoppingLists/UserShoppingLists";
import { UserShoppingListRequest } from "../../../../orm/UserShoppingLists/UserShoppingListsBase";
import { buildTestDB, executeEndpoint } from "../../../utils";

describe("Handle Shopping List Request Controller Test Suite", () => {
  it("should throw if no is accepted is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint("handleShoppingListRequest?id_shopping_list=1", 'PUT');
    // Then
    expect(data.status).toBe(500);
    expect(res).toBeDefined();
    expect(res).toHaveProperty("error");
    expect(res.error).toBe("No params detected");
  });
  it("should throw if no is id shopping list is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint("handleShoppingListRequest?accepted=1", 'PUT');
    // Then
    expect(data.status).toBe(500);
    expect(res).toBeDefined();
    expect(res).toHaveProperty("error");
    expect(res.error).toBe("No params detected");
  });
  it("should update the shopping list request with an accepted value", async () => {
    // Given
    const { userShoppingList } = await buildTestDB()
    // When
    const { data, res } = await executeEndpoint("handleShoppingListRequest?id_shopping_list=1&is_accepted=true", 'PUT');
    const newValue = await new UserShoppingLists().getAllByField("id_shopping_list", userShoppingList.id_shopping_list);
    // Then
    expect(data.status).toBe(200);
    expect(res).toBeDefined();
    expect(res).toEqual({})
    expect(newValue[0].is_accepted).not.toBe(userShoppingList.is_accepted)
    expect(newValue[0].is_accepted).toBe(UserShoppingListRequest.ACCEPTED);

  });
  it("should update the shopping list request with an accepted value", async () => {
    // Given
    const { userShoppingList } = await buildTestDB()
    // When
    const { data, res } = await executeEndpoint("handleShoppingListRequest?id_shopping_list=1&is_accepted=1", 'PUT');
    const newValue = await new UserShoppingLists().getAllByField("id_shopping_list", userShoppingList.id_shopping_list);
    // Then
    expect(data.status).toBe(200);
    expect(res).toBeDefined();
    expect(res).toEqual({})
    expect(newValue[0].is_accepted).not.toBe(userShoppingList.is_accepted)
    expect(newValue[0].is_accepted).toBe(UserShoppingListRequest.ACCEPTED);
  });
  it("should update the shopping list request with a rejected value", async () => {
    // Given
    const { userShoppingList } = await buildTestDB()
    // When
    const { data, res } = await executeEndpoint("handleShoppingListRequest?id_shopping_list=1&is_accepted=false", 'PUT');
    const newValue = await new UserShoppingLists().getAllByField("id_shopping_list", userShoppingList.id_shopping_list);
    // Then
    expect(data.status).toBe(200);
    expect(res).toBeDefined();
    expect(res).toEqual({})
    expect(newValue[0].is_accepted).not.toBe(userShoppingList.is_accepted)
    expect(newValue[0].is_accepted).toBe(UserShoppingListRequest.REJECTED);
  });
});