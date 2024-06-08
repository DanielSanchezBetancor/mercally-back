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
});