import { mockExpress } from "../../mocks/mock-express";
import { mockUser, mockUserFullPreferredStores, mockUserPremium } from "../../mocks/mock-user";

const doAction = async (Request: any, Response: any) => {
  const { savePreferredStoreController } = await import("../../../controllers/stores/savePreferredStoreController");

  await savePreferredStoreController(Request, Response, jest.fn());
}

describe("Save Preferred Store Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no request is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await doAction(Request, Response);
    // Then
    expect(Response.send).toHaveBeenCalledWith("No store detected");
    expect(Response.status).toHaveBeenCalledWith(500);
  });
  it("should throw error if no ID is provided", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const newRequest = { ...Request, body: {} };
    // When
    await doAction(newRequest, Response);
    // Then
    expect(Response.send).toHaveBeenCalledWith("No store detected");
    expect(Response.status).toHaveBeenCalledWith(500);
  });
  it("should remove store if user already has it", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const userOrm = mockUser();
    const newRequest = { ...Request, body: { idStore: 1 } };
    // When
    await doAction(newRequest, Response);
    // Then
    expect(userOrm.removeStoreFromUser).toHaveBeenCalled();
    expect(Response.send).toHaveBeenCalled();
  });
  it("should add store if user is premium", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const userOrm = mockUserPremium();
    const newRequest = { ...Request, body: { idStore: 3 } };
    // When
    await doAction(newRequest, Response);
    // Then
    expect(userOrm.insertStoreToUser).toHaveBeenCalled();
    expect(Response.send).toHaveBeenCalled();
  });
  it("should add store if user has less than 3 stores", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const userOrm = mockUser();
    const newRequest = { ...Request, body: { idStore: 3 } };
    // When
    await doAction(newRequest, Response);
    // Then
    expect(userOrm.insertStoreToUser).toHaveBeenCalled();
    expect(Response.send).toHaveBeenCalled();
  });
  it("should not add store if user has 3 stores and it's not premium", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const userOrm = mockUserFullPreferredStores();
    const newRequest = { ...Request, body: { idStore: 4 } };
    // When
    await doAction(newRequest, Response);
    // Then
    expect(userOrm.insertStoreToUser).not.toHaveBeenCalled();
    expect(Response.send).toHaveBeenCalled();
  });
})