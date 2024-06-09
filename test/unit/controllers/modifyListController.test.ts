import { modifyListController } from "../../../controllers/shoppinglists/modifyListController";
import { mockExpress } from "../../mocks/mock-express";
import { mockProductsShoppingLists } from "../../mocks/orm/mock-products-shopping-lists";
import { getOriginalUserShoppingLists, mockUserShoppingLists } from "../../mocks/orm/mock-user-shopping-lists";

describe("Modify List Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await modifyListController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(400);
    expect(Response.json.mock.calls[0][0].error).toBe("Missing query")
  });
  it("should throw error if no query is provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {}
    });
    // When
    await modifyListController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("No product detected")
  });
  it("should throw error if query is invalid", async () => {
    // Given
    const { Request, Response } = mockExpress({
      query: {
        id_product: 1 as any
      }
    });
    // When
    await modifyListController(Request, Response);
    // Then
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0].error).toBe("Invalid search")
  });
  it("should try to delete the product from the list if only has 1 item", async () => {
    // Given
    const expectedProductId = "1";
    const shoppingListHasProduct = "1";
    const { Request, Response } = mockExpress({
      query: {
        id_product: expectedProductId,
        erase: "1"
      }
    });
    const { id_shopping_list } = getOriginalUserShoppingLists()
    const { getActiveShoppingListIdSpy } = mockUserShoppingLists();
    const { deleteByProductIdAndShoppingListIdSpy, getQuantityByProductIdAndShoppingListIdSpy } = mockProductsShoppingLists(shoppingListHasProduct);
    // When
    await modifyListController(Request, Response);
    // Then
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledWith(Number(expectedProductId));
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(expectedProductId, id_shopping_list);
    expect(deleteByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(deleteByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(expectedProductId, id_shopping_list);
  });
  it("should try to update the product quantity if it has more than 1 item", async () => {
    // Given
    const expectedProductId = "1";
    const shoppingListHasProduct = "2";
    const { Request, Response } = mockExpress({
      query: {
        id_product: expectedProductId,
        erase: "1"
      }
    });
    const { id_shopping_list } = getOriginalUserShoppingLists()
    const { getActiveShoppingListIdSpy } = mockUserShoppingLists();
    const { updateQuantityByProductIdAndShoppingListIdSpy, getQuantityByProductIdAndShoppingListIdSpy } = mockProductsShoppingLists(shoppingListHasProduct);
    // When
    await modifyListController(Request, Response);
    // Then
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledWith(Number(expectedProductId));
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(expectedProductId, id_shopping_list);
    expect(updateQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(updateQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(Number(expectedProductId), id_shopping_list, Number(shoppingListHasProduct) - 1);
  });
  it("should try to insert the product if it is not in the list and erase is not provided", async () => {
    // Given
    const expectedProductId = "1";
    const { Request, Response } = mockExpress({
      query: {
        id_product: expectedProductId
      }
    });
    const { id_shopping_list } = getOriginalUserShoppingLists()
    const { getActiveShoppingListIdSpy } = mockUserShoppingLists();
    const { insertSpy, getQuantityByProductIdAndShoppingListIdSpy } = mockProductsShoppingLists();
    // When
    await modifyListController(Request, Response);
    // Then
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledWith(Number(expectedProductId));
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(expectedProductId, id_shopping_list);
    expect(insertSpy).toHaveBeenCalledTimes(1);
    expect(insertSpy).toHaveBeenCalledWith({ id_product: Number(expectedProductId), id_shopping_list: id_shopping_list, quantity: 1 });
  });
  it("should try to update the product quantity if it is in the list and erase is provided as false", async () => {
    // Given
    const expectedProductId = "1";
    const shoppingListHasProduct = "2";
    const { Request, Response } = mockExpress({
      query: {
        id_product: expectedProductId,
        erase: "0"
      }
    });
    const { id_shopping_list } = getOriginalUserShoppingLists()
    const { getActiveShoppingListIdSpy } = mockUserShoppingLists();
    const { updateQuantityByProductIdAndShoppingListIdSpy, getQuantityByProductIdAndShoppingListIdSpy } = mockProductsShoppingLists(shoppingListHasProduct);
    // When
    await modifyListController(Request, Response);
    // Then
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getActiveShoppingListIdSpy).toHaveBeenCalledWith(Number(expectedProductId));
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(getQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(expectedProductId, id_shopping_list);
    expect(updateQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledTimes(1);
    expect(updateQuantityByProductIdAndShoppingListIdSpy).toHaveBeenCalledWith(Number(expectedProductId), id_shopping_list, Number(shoppingListHasProduct) + 1);
  });
});