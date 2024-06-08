import { ResultSetHeader } from "mysql2";

function mockResultsetHeader() {
  const mock: ResultSetHeader = {
    constructor: {
      name: 'ResultSetHeader'
    },
    fieldCount: 0,
    affectedRows: 0,
    insertId: 0,
    info: "",
    serverStatus: 0,
    warningStatus: 0,
    changedRows: 0
  }

  return mock;
}

export { mockResultsetHeader };