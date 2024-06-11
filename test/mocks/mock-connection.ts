import { Pool } from "mysql2/promise";
import BaseQuery from "../../orm/base/BaseQuery"
import { getConnection } from "../../orm/base/connection";



function getMockClass(withMockConnection = false) {
  const mockQuery = { query: jest.fn() } as unknown as Pool
  const conn = withMockConnection ? () => mockQuery : getConnection
  const querySpy = jest.spyOn(mockQuery, 'query')

  class MockClass extends BaseQuery<{ id: number }> {
    protected table = 'base';
    protected fields = { id: 0 };

    constructor() {
      super(conn)
    }
  }

  return { MockClass, querySpy };
}

export { getMockClass }