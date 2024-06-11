import { handlePreferredStoreController } from "../../../../controllers/stores/handlePreferredStoreController";
import { mockExpress } from "../../../mocks/mock-express";
import { mockUsersStores } from "../../../mocks/orm/mock-users-stores";

describe("Save Preferred Store Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw if no body is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await handlePreferredStoreController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledTimes(1);
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json).toHaveBeenCalledTimes(1);
    expect(Response.json.mock.calls[0][0]).toStrictEqual({ error: "No body detected" });
  })
  it("should throw if no store id is provided", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {}
    });
    // When
    await handlePreferredStoreController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledTimes(1);
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json).toHaveBeenCalledTimes(1);
    expect(Response.json.mock.calls[0][0]).toStrictEqual({ error: "No store detected" });
  })
  it("should try to save the preferred store", async () => {
    // Given
    const newIdStore = 999;
    const { Request, Response } = mockExpress({
      body: {
        id_store: newIdStore
      }
    });
    const { insertSpy } = mockUsersStores();
    // When
    await handlePreferredStoreController(Request, Response);
    // Then
    expect(insertSpy).toHaveBeenCalledTimes(1);
    expect(insertSpy).toHaveBeenCalledWith({ id_store: newIdStore, id_user: 1 });
  })
  it("should try to delete the preferred store if it exists", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        id_store: 1
      }
    });
    const { deleteSpy } = mockUsersStores();
    // When
    await handlePreferredStoreController(Request, Response);
    // Then
    expect(deleteSpy).toHaveBeenCalledTimes(1);
    expect(deleteSpy).toHaveBeenCalledWith({ id_store: 1, id_user: 1 });
  })
});
