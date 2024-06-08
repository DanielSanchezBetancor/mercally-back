import { buildTestDB, executeEndpoint } from "../../utils";

describe("Search Suggestion Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no query is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`searchSuggestion`)
    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('No product detected')
    expect(data.status).toBe(500)
  });
  it("should return correct structure if data is provided", async () => {
    // Given
    // When
    const { res } = await executeEndpoint(`searchSuggestion?query=a`)
    // Then
    expect(res).toBeDefined()
    expect(res.length).toBeGreaterThan(0)
    expect(res[0]).toHaveProperty('id_product')
    expect(res[0]).toHaveProperty('id_category')
    expect(res[0]).toHaveProperty('id_brand')
    expect(res[0]).toHaveProperty('id_store')
    expect(res[0]).toHaveProperty('name')
    expect(res[0]).toHaveProperty('is_white_brand')
    expect(res[0]).toHaveProperty('price')
    expect(res[0]).toHaveProperty('price_per_unit')
  });
  it("should retrieve correct suggestions", async () => {
    // Given
    const { products, prices } = await buildTestDB();
    const expected = prices
      .map((price) => {
        const product = products.find((product) => product.id === price.id_product);
        return {
          ...product,
          ...price,
          price: Number(price.price),
          price_per_unit: Number(price.price_per_unit),
        }
      })
      .toSorted((a, b) => a.price - b.price)
      .slice(0, 10)

    // When
    const { data, res: suggestions } = await executeEndpoint("searchSuggestion?query=a");
    // Then
    expect(data.status).toBe(200);
    expect(suggestions).toEqual(expected);
  });
});