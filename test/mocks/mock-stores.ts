import { ResultSetHeader } from "mysql2";
import { Stores } from "../../orm/stores/Stores";
import { Store } from "../../orm/stores/base/StoresBase";

function getOriginalStoreMock(id: number): Store {
  return {
    id,
    name: `Store ${id}`,
    logo_url: "original-store.com"
  }
}

function mockStores() {
  const getAllSpy = jest.spyOn(Stores.prototype, 'getAll').mockImplementation(async () => {
    return [getOriginalStoreMock(0), getOriginalStoreMock(1), getOriginalStoreMock(2)] as unknown as ResultSetHeader & Store[];
  })

  return {
    getAllSpy
  }
}

export {
  mockStores,
  getOriginalStoreMock
}