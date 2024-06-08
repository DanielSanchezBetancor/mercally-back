import { mockExpress } from "../../mocks/mock-express";
import { mockGetStores, mockStores } from "../../mocks/mock-stores";

const doAction = async (Request: any, Response: any) => {
  const { getStoreController } = await import("../../../controllers/stores/getStoreController");

  await getStoreController(Request, Response, jest.fn());
}

describe("Get Store Controller Test Suite", () => {
  it("should return stores", async () => {
    // Given
    const { Request, Response } = mockExpress();
    mockGetStores();
    // When
    await doAction(Request, Response);
    // Then
    expect(Response.send.mock.calls[0][0]).toStrictEqual(mockStores)
  });
});