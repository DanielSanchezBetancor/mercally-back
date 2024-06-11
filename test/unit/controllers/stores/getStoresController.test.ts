import { getStoresController } from "../../../../controllers/stores/getStoresController";
import { mockExpress } from "../../../mocks/mock-express";
import { getOriginalStoreMock, mockStores } from "../../../mocks/mock-stores";

describe("Get Stores Controller Test Suite", () => {
  it("should return all stores", async () => {
    // Given
    const { Request, Response } = mockExpress();
    const { getAllSpy } = mockStores();
    const expectedStores = { stores: [getOriginalStoreMock(0), getOriginalStoreMock(1), getOriginalStoreMock(2)] }
    // When
    await getStoresController(Request, Response);
    // Then
    expect(getAllSpy).toHaveBeenCalledTimes(1);
    expect(Response.send).toHaveBeenCalledWith(expectedStores);
  });
});