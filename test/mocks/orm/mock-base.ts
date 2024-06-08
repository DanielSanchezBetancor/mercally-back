import { FieldPacket, ResultSetHeader } from "mysql2";
import BaseQuery from "../../../orm/base/BaseQuery";
import { getOriginalProductMock } from "./mock-products";

function mockBase() {
  const getByPkSpy = jest.spyOn(BaseQuery.prototype, "getByPk").mockImplementation(async (id: string | number) => {
    return getOriginalProductMock(Number(id));
  });

  const querySpy = jest.spyOn(BaseQuery.prototype, "query").mockImplementation(async (_query: string) => {
    return [[getOriginalProductMock(0), getOriginalProductMock(1), getOriginalProductMock(2)]] as unknown as [ResultSetHeader, FieldPacket[]];
  });

  return { getByPkSpy, querySpy };
}

export default mockBase;