import { ResultSetHeader } from "mysql2";
import Price, { BiggestDifference } from "../../../orm/prices/Price";

function getMockPrices(): BiggestDifference[] {
  return [{
    difference: 1,
    id_product: 1,
    max_price: "1",
    min_price: "0"
  }, {
    difference: 1,
    id_product: 2,
    max_price: "1",
    min_price: "0"
  }, {
    difference: 1,
    id_product: 3,
    max_price: "1",
    min_price: "0"
  }];
}

function mockPrices() {
  const PriceMock = jest.spyOn(Price.prototype, "getBiggestDifference").mockImplementation(async () => {
    return getMockPrices() as unknown as ResultSetHeader & BiggestDifference[];
  });

  return PriceMock;
}

export { getMockPrices, mockPrices };
