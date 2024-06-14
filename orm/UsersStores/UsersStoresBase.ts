import BaseQuery from "../base/BaseQuery";

type UserStore = {
  id_user: number,
  id_store: number
}

class UsersStoresBase extends BaseQuery<UserStore> {
  protected table = 'users_stores';
  protected fields: UserStore = {
    id_user: 0,
    id_store: 0
  }
  constructor() {
    super()
  }
}

export { UserStore }
export { UsersStoresBase }