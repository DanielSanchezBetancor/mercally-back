import { User } from "../../data/types/user";

async function getUser(idUser: number): Promise<User> {
  return {
    idUser: 1,
    preferredStores: [1, 2],
    username: "user",
    password: "password",
    email: "dsanchez",
    idRole: 1,
    isPremium: false
  };
}

async function removeStoreFromUser(idUser: number, idStore: number) {
  return;
}
async function insertStoreToUser(idUser: number, idStore: number) {
  return;
}

export { getUser, removeStoreFromUser, insertStoreToUser };
