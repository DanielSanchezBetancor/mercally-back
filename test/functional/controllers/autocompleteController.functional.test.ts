import { buildTestDB, executeEndpoint } from "../../utils";

describe("Autocomplete Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no query is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`autocomplete`)
    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('No product detected')
    expect(data.status).toBe(500)
  });
  it("should throw error if search term is too short", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`autocomplete?query=pr`)
    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('Search term too short')
    expect(data.status).toBe(500)
  });
  it("should return correct structure if data is provided", async () => {
    // Given
    const keyword = "ana";
    // When
    const { data, res: autocomplete } = await executeEndpoint(`autocomplete?query=${keyword}`);
    // Then
    expect(data.status).toBe(200);
    expect(autocomplete).toBeDefined()
    expect(autocomplete).toHaveProperty('name')
  });
  it("should retrieve correct autocompletion", async () => {
    // Given
    const keyword = "ana";
    const { products } = await buildTestDB();
    const expected = { name: products.filter((product) => product.name.includes(keyword))[0].name }

    // When
    const { data, res: autocomplete } = await executeEndpoint(`autocomplete?query=${keyword}`);
    // Then
    expect(data.status).toBe(200);
    expect(autocomplete).toEqual(expected);
  });
  it("should not throw error if no product is found", async () => {
    // Given
    const keyword = "not-existing-product";
    // When
    const { data, res } = await executeEndpoint(`autocomplete?query=${keyword}`);
    // Then
    expect(data.status).toBe(200);
    expect(res).toBeDefined()
    expect(res).toEqual({})
  });
});