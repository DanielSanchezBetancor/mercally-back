import { ResultSetHeader } from "mysql2";
import Price, { BiggestDifference, CheapestProduct } from "../../../orm/prices/Price";

function getBiggestDifferenceMock(): BiggestDifference[] {
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

function getCheapestProductsMock(): CheapestProduct[] {
  return [{
    min_price: "0",
    avg_price: "0",
    id_product: 1
  }, {
    min_price: "0",
    avg_price: "0",
    id_product: 2
  }, {
    min_price: "0",
    avg_price: "0",
    id_product: 3
  }];
}

function mockPrices() {
  const biggestDifferenceMock = jest.spyOn(Price.prototype, "getBiggestDifference").mockImplementation(async () => {
    return getBiggestDifferenceMock() as unknown as ResultSetHeader & BiggestDifference[];
  })
  const cheapestProductsMock = jest.spyOn(Price.prototype, "getCheapestProducts").mockImplementation(async () => {
    return getCheapestProductsMock() as unknown as ResultSetHeader & CheapestProduct[];
  });

  return { biggestDifferenceMock, cheapestProductsMock };
}

export { getBiggestDifferenceMock, mockPrices, getCheapestProductsMock };
