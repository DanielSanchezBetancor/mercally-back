import { buildTestDB, executeEndpoint } from "../../utils";

describe("Product History Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no query is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`productHistory`)
    // Then
    expect(res).toBeDefined()
    expect(res).toHaveProperty('error')
    expect(res.error).toBe('No product detected')
    expect(data.status).toBe(500)
  });
  it("should return correct structure if data is provided", async () => {
    // Given
    const keyword = "2";
    // When
    const { data, res: historyProduct } = await executeEndpoint(`productHistory?id_product=${keyword}&id_stores=1&from=2021-01-01&to=2021-01-02`);
    // Then
    expect(data.status).toBe(200);
    expect(historyProduct).toBeDefined()
    expect(historyProduct.length).toBeGreaterThan(0)
    expect(historyProduct[0]).toHaveProperty('id')
    expect(historyProduct[0]).toHaveProperty('id_product')
    expect(historyProduct[0]).toHaveProperty('id_store')
    expect(historyProduct[0]).toHaveProperty('price')
    expect(historyProduct[0]).toHaveProperty('price_per_unit')
    expect(historyProduct[0]).toHaveProperty('date')
  });
  it("should retrieve correct history", async () => {
    // Given
    const keyword = "2";
    const stores = [1, 2, 4]
    const { historyPrices } = await buildTestDB();
    const expected = historyPrices
      .filter(price => price.id_product === Number(keyword))
      .filter(price => price.date >= '2021-01-01' && price.date <= '2021-01-02')
      .filter(price => stores.includes(price.id_store))
      .map(price => ({
        ...price,
        price: Number(price.price),
        price_per_unit: Number(price.price_per_unit),
        date: new Date(price.date).toISOString()
      }));

    // When
    const { data, res: historyProduct } = await executeEndpoint(`productHistory?id_product=${keyword}&id_stores=${stores.join(',')}&from=2021-01-01&to=2021-01-02`);
    // Then
    expect(data.status).toBe(200);
    expect(historyProduct).toEqual(expected);
  });
  it("should not throw error if no product history is found", async () => {
    // Given
    const keyword = "9999";
    // When
    const { data, res: historyProduct } = await executeEndpoint(`productHistory?id_product=${keyword}&id_stores=1&from=2021-01-01&to=2021-01-02`);
    // Then
    expect(data.status).toBe(200);
    expect(historyProduct).toBeDefined()
    expect(historyProduct).toEqual([])
  });
});