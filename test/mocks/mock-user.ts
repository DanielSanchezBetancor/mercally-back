import { User } from "../../data/types/user";

const path = "../../../orm/user/user-orm";

const defaultUser: User = {
  idUser: 1,
  preferredStores: [1, 2],
  username: "user",
  password: "password",
  email: "dsanchez",
  idRole: 1,
  isPremium: false
}

const fullPreferredStores = {
  ...defaultUser,
  preferredStores: [1, 2, 3]
}

const premiumUser = {
  ...defaultUser,
  username: 'premium user',
  isPremium: true
}



function mockUser() {
  return doMock(defaultUser)
}

function mockUserPremium() {
  return doMock(premiumUser)
}

function mockUserFullPreferredStores() {
  return doMock(fullPreferredStores)
}

function doMock(user: User) {
  jest.mock(path, () => {
    return {
      getUser: jest.fn(() => (user)),
      removeStoreFromUser: jest.fn(),
      insertStoreToUser: jest.fn()
    }
  })

  const userOrm = jest.requireMock(path)
  spies(userOrm)

  return userOrm;
}

function spies(userOrm: any) {
  jest.spyOn(userOrm, "getUser")
  jest.spyOn(userOrm, "removeStoreFromUser")
  jest.spyOn(userOrm, "insertStoreToUser")
}

export { mockUser, mockUserPremium, mockUserFullPreferredStores };
