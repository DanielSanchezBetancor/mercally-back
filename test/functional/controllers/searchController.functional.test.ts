import { executeEndpoint } from "../../utils";

describe("Search Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no query is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`search`)
    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('No product detected')
    expect(data.status).toBe(500)
  });
  it("should return products if data is provided", async () => {
    // Given
    // When
    const { res } = await executeEndpoint(`search?search=apple`)
    // Then
    expect(res).toBeDefined()
    expect(res.length).toBeGreaterThan(0)
    expect(res[0]).toHaveProperty('id_product')
    expect(res[0]).toHaveProperty('id_category')
    // Tengo que remontar la BD en local para que me funcione
    // expect(res[0]).toHaveProperty('id_brand')
    expect(res[0]).toHaveProperty('id_store')
    expect(res[0]).toHaveProperty('name')
    expect(res[0]).toHaveProperty('is_white_brand')
    expect(res[0]).toHaveProperty('price')
    expect(res[0]).toHaveProperty('price_per_unit')
  });
  it("should return error if search term is too short", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`search?search=pr`)
    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('Search term too short')
    expect(data.status).toBe(500)
  });
});