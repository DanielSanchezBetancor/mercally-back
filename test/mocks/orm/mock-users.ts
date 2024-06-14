import { FieldPacket, ResultSetHeader } from "mysql2";
import { Users } from "../../../orm/users/Users";

function getOriginalUser() {
  return {
    id: 1,
    username: 'username',
    email: 'email',
    password: 'password'
  }
}

function mockUsers() {
  // const updateUsernameSpy = jest.spyOn(Users.prototype, 'updateUsername');
  const updateEmailSpy = jest.spyOn(Users.prototype, 'updateEmail').mockImplementation(async () => undefined)
  const updatePasswordSpy = jest.spyOn(Users.prototype, 'updatePassword').mockImplementation(async () => undefined)

  const getEmailSpy = jest.spyOn(Users.prototype, 'getEmail').mockImplementation(async () => 'email')
  const getPasswordSpy = jest.spyOn(Users.prototype, 'getPassword').mockImplementation(async () => 'password')

  return {
    // updateUsernameSpy,
    updateEmailSpy,
    updatePasswordSpy,
    getEmailSpy,
    getPasswordSpy
  }
}

function mockQuery() {
  const querySpy = jest.spyOn(Users.prototype, 'query').mockImplementation(async () => [
    [getOriginalUser()]
  ] as unknown as [ResultSetHeader, FieldPacket[]])

  return {
    querySpy
  }
}

export {
  mockUsers,
  mockQuery,
  getOriginalUser
}
