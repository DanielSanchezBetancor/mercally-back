import { ResultSetHeader } from "mysql2";
import Prices, { BiggestDifference, CheapestProduct } from "../../../orm/prices/Price";
import { Price } from "../../../orm/prices/base";

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

function getOriginalPriceMock(idProduct: number | string): Price {
  return {
    id: 1,
    id_product: Number(idProduct),
    id_store: 1,
    price: "1",
    price_per_unit: "1"
  };
}


function mockPrices() {
  const biggestDifferenceMock = jest.spyOn(Prices.prototype, "getBiggestDifference").mockImplementation(async () => {
    return getBiggestDifferenceMock() as unknown as ResultSetHeader & BiggestDifference[];
  })

  const cheapestProductsMock = jest.spyOn(Prices.prototype, "getCheapestProducts").mockImplementation(async () => {
    return getCheapestProductsMock() as unknown as ResultSetHeader & CheapestProduct[];
  });

  const getAllByFieldSpy = jest.spyOn(Prices.prototype, "getAllByField").mockImplementation(async (product_id, value, orderBy) => {
    return [getOriginalPriceMock(value), getOriginalPriceMock(value)] as unknown as ResultSetHeader & Price[];
  });

  return { biggestDifferenceMock, cheapestProductsMock, getAllByFieldSpy };
}

export { getBiggestDifferenceMock, mockPrices, getCheapestProductsMock, getOriginalPriceMock };
