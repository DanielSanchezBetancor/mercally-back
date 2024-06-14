import { buildTestDB, executeEndpoint } from "../../../utils";

describe("Get Stores Controller Test Suite", () => {
  it("should return all stores", async () => {
    // Given
    const { stores: expectedStores } = await buildTestDB();
    // When
    const { data, res: actualStores } = await executeEndpoint('getStores')
    // Then
    expect(data.status).toBe(200);
    expect(actualStores).toBeDefined()
    expect(actualStores).toHaveProperty('stores')
    expect(actualStores.stores).toEqual(expectedStores)
  });
});