import { executeEndpoint } from "../../utils"

describe("Cheapest Products Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw if no categories are send", async () => {
    // Given
    // When
    const res = await executeEndpoint('cheapestProducts')

    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('Missing id_categories')
  })
  it("should return the cheapest products with the average price", async () => {
    // Given
    // When
    const res = await executeEndpoint(`cheapestProducts?id_categories=1,2,3`)

    // Then
    expect(res).toBeDefined()
    expect(res).toHaveLength(3)
    expect(res[0]).toHaveProperty('avg_price')
    expect(res[0]).toHaveProperty('min_price')
    expect(res[0]).toHaveProperty('id_product')
    expect(res[0]).toHaveProperty('name')
    expect(res[0]).toHaveProperty('is_white_brand')
    expect(res[0]).toHaveProperty('id_category')
    expect(res[0]).toHaveProperty('avg_price')
    expect(res[1]).toHaveProperty('avg_price')
    expect(res[2]).toHaveProperty('avg_price')
    expect(res[0]).toHaveProperty('min_price')
    expect(res[1]).toHaveProperty('min_price')
    expect(res[2]).toHaveProperty('min_price')
  })
  it("should return empty string if no products are found", async () => {
    // Given
    // When
    const res = await executeEndpoint(`cheapestProducts?id_categories=999`)

    // Then
    expect(res).toBeDefined()
    expect(res).toHaveLength(0)
  })
})


