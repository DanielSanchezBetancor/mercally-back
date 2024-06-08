import BaseQuery from "../../../orm/base/BaseQuery";
import { getOriginalProductMock } from "./mock-products";

function mockBase() {
  const getByPkSpy = jest.spyOn(BaseQuery.prototype, "getByPk").mockImplementation(async (id: string | number) => {
    return getOriginalProductMock(Number(id));
  });

  return { getByPkSpy };
}

export default mockBase;