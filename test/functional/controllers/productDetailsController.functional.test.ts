import { buildTestDB, executeEndpoint } from "../../utils";

describe("Product Details Controller Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should throw error if no query is provided", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint(`productDetails`)
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
    const { data, res: productDetails } = await executeEndpoint(`productDetails?id_product=${keyword}`);
    // Then
    expect(data.status).toBe(200);
    expect(productDetails).toBeDefined()
    expect(productDetails.length).toBeGreaterThan(0)
    expect(productDetails[0]).toHaveProperty('name')
    expect(productDetails[0]).toHaveProperty('id_category')
    expect(productDetails[0]).toHaveProperty('id_brand')
    expect(productDetails[0]).toHaveProperty('id_store')
    expect(productDetails[0]).toHaveProperty('is_white_brand')
    expect(productDetails[0]).toHaveProperty('price')
    expect(productDetails[0]).toHaveProperty('price_per_unit')
  });
  it("should retrieve correct product", async () => {
    // Given
    const keyword = "2";
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
      .filter((product) => product.id_product === Number(keyword))
      .toSorted((a, b) => a.price - b.price)

    // When
    const { data, res: productDetails } = await executeEndpoint(`productDetails?id_product=${keyword}`);
    // Then
    expect(data.status).toBe(200);
    expect(productDetails).toEqual(expected);
  });
  it("should not throw error if no product is found", async () => {
    // Given
    const keyword = "9999";
    // When
    const { data, res: productDetails } = await executeEndpoint(`productDetails?id_product=${keyword}`);
    // Then
    expect(data.status).toBe(200);
    expect(productDetails).toBeDefined()
    expect(productDetails).toEqual({})
  });
  it("should retrieve correct products, ordered by the expensive ones", async () => {
    // Given
    const keyword = "2";
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
      .filter((product) => product.id_product === Number(keyword))
      .toSorted((a, b) => b.price - a.price)

    // When
    const { data, res: productDetails } = await executeEndpoint(`productDetails?id_product=${keyword}&order_by=expensive`);
    // Then
    expect(data.status).toBe(200);
    expect(productDetails).toEqual(expected);
  });
});