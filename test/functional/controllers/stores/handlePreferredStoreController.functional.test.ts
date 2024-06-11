import { UsersStores } from "../../../../orm/UsersStores/UsersStores";
import { buildTestDB, executeEndpoint } from "../../../utils";

describe("Save Preferred Store Controller Test Suite", () => {
  it("should throw if no store id is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`handlePreferredStore`, 'post', { id_store: null })
    // Then
    expect(data.status).toBe(500);
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('No store detected')
  })
  it("should try to save the preferred store", async () => {
    // Given
    const newIdStore = 999;
    const { usersStores } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint(`handlePreferredStore`, 'POST', { "id_store": newIdStore })
    const newValue = await new UsersStores().getAllByField("id_user", 1);
    // Then
    expect(data.status).toBe(200);
    expect(res).toBeDefined()
    expect(res).toEqual({})
    expect(newValue[usersStores.length].id_store).toBe(newIdStore);
  })
  it("should try to delete the preferred store if it exists", async () => {
    // Given
    const { usersStores } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint(`handlePreferredStore`, 'post', { id_store: 1 })
    const newValue = await new UsersStores().getAllByField("id_user", 1);
    // Then
    expect(data.status).toBe(200);
    expect(res).toBeDefined()
    expect(res).toEqual({})
    expect(newValue.length).toBe(usersStores.length - 1);
  })
});
