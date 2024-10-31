import BaseQuery from "../base/BaseQuery";

type UsersStoreFields = {
  id_user: number,
  id_store: number
}

class UsersStoresBase extends BaseQuery<UsersStoreFields> {
  protected table = 'users_stores';
  protected fields: UsersStoreFields = {
    id_user: 0,
    id_store: 0
  }
  constructor() {
    super()
  }
}

export { UsersStoreFields }
export { UsersStoresBase }