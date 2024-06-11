import { UsersStores } from "../../../orm/UsersStores/UsersStores";

function mockUsersStores() {
  const insertSpy = jest.spyOn(UsersStores.prototype, "insert").mockImplementation()
  const deleteSpy = jest.spyOn(UsersStores.prototype, "delete").mockImplementation()

  return { insertSpy, deleteSpy };
}

export { mockUsersStores };
