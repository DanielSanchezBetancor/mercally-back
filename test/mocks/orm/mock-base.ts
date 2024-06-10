import { FieldPacket, ResultSetHeader } from "mysql2";
import BaseQuery from "../../../orm/base/BaseQuery";
import { getOriginalProductMock } from "./mock-products";
import { getOriginalPriceMock } from "./mock-prices";
import { getOriginalHistoryPriceMock } from "./mock-history-prices";

function mockBase() {
  const getByPkSpy = jest.spyOn(BaseQuery.prototype, "getByPk").mockImplementation(async (id: string | number) => {
    return getOriginalProductMock(Number(id));
  });

  const querySpy = jest.spyOn(BaseQuery.prototype, "query").mockImplementation(async (_query: string) => {
    return [[getOriginalProductMock(0), getOriginalProductMock(1), getOriginalProductMock(2)]] as unknown as [ResultSetHeader, FieldPacket[]];
  });

  return { getByPkSpy, querySpy };
}

function mockAutosuggested(value?: string) {
  const autosuggestedSpy = jest.spyOn(BaseQuery.prototype, "query").mockImplementation(async (_query: string) => {
    return [[value]] as unknown as [ResultSetHeader, FieldPacket[]];
  });

  return { autosuggestedSpy };
}

function mockQueryPrice() {
  const querySpy = jest.spyOn(BaseQuery.prototype, "query").mockImplementation(async (_query: string) => {
    return [getOriginalPriceMock(0)] as unknown as [ResultSetHeader, FieldPacket[]];
  });

  return { querySpy };
}

function mockQueryHistoryPrice() {
  const querySpy = jest.spyOn(BaseQuery.prototype, "query").mockImplementation(async (_query: string) => {
    return [getOriginalHistoryPriceMock(0)] as unknown as [ResultSetHeader, FieldPacket[]];
  });

  return { querySpy };
}


export { mockAutosuggested, mockQueryPrice, mockQueryHistoryPrice }
export default mockBase;