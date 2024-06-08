import { executeEndpoint } from "../../utils"

describe("Biggest Diff Products Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should return the products with the biggest difference", async () => {
    // Given
    // When
    const { res } = await executeEndpoint('biggestDiffProducts')

    // Then
    expect(res).toBeDefined()
    expect(res).toHaveLength(3)
    expect(res[0]).toHaveProperty('max_price')
    expect(res[0]).toHaveProperty('min_price')
    expect(res[0]).toHaveProperty('difference')
    expect(res[0]).toHaveProperty('id_product')
    expect(res[0]).toHaveProperty('name')
    expect(res[0]).toHaveProperty('is_white_brand')
    expect(res[0]).toHaveProperty('id_category')
    expect(res[0].difference).toBeGreaterThan(res[1].difference)
    expect(res[1].difference).toBeGreaterThan(res[2].difference)
  })
})


