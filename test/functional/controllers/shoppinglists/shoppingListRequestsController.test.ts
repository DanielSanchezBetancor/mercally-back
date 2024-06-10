import { shoppingListRequestsController } from "../../../../controllers/shoppinglists/shoppingListRequestsController";
import { mockShoppingList } from "../../../mocks/orm/mock-shopping-list";
import { buildTestDB, executeEndpoint } from "../../../utils";

describe("Shopping List Requests Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return all requests for user's active shopping list", async () => {
    // Given
    const { userShoppingList } = await buildTestDB();
    // When
    const { data, res: requests } = await executeEndpoint('shoppingListRequests');
    // Then
    expect(data.status).toBe(200);
    expect(requests).toEqual({ requests: [userShoppingList] });
  });
  // Cuando se haga la evolucion de usuario, comprobar el resto de tests
  it.skip("should return an error if the user is not authenticated", async () => {})
  it.skip("should not throw and return empty array if there are no requests", async () => {})
});