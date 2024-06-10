import Products from "../../../../orm/products/Products";
import { buildTestDB } from "../../../utils";

describe("Products Test Suite", () => {
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
    const suggestions = await new Products().searchSuggestion("a");
    // Then
    expect(suggestions).toEqual(expected);
  });
  it("should query an autocomplete product", async () => {
    // Given
    const search = "app";
    const originalProducts = new Products();
    const actual = { name: "Apple" }
    // When
    const result = await originalProducts.autocomplete(search);
    // Then
    expect(result).toStrictEqual(actual);
  });
  it("should not throw if no product is found", async () => {
    // Given
    const originalProducts = new Products();
    // When
    const result = await originalProducts.autocomplete("non-existing-product");
    // Then
    expect(result).not.toBeDefined();
  });
});