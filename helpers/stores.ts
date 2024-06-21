import { UsersStores } from "../orm/UsersStores/UsersStores";
import { Users } from "../orm/users/Users";
import { Token } from "./security";

const DEFAULT_STORES = [ '1', '2', '3' ];

async function getStoresForUser(idStores: string[], token?: Token) {
  if (!token) {
    return DEFAULT_STORES;
  }

  const { userId } = token;

  const user = await new Users().getByPk(userId);

  if (!user) {
    // This should never happen
    return DEFAULT_STORES;
  }

  const { is_premium } = user;

  if (is_premium) {
    return idStores;
  }

  const userStores = await new UsersStores().getAllByField('id_user', userId);

  if (!userStores) {
    return DEFAULT_STORES;
  }

  const parsedUserStores = userStores.map((store) => store.id_store);
  const filteredStores = idStores.filter((store) => parsedUserStores.includes(Number(store)));

  return filteredStores;
}

export { getStoresForUser };