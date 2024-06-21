import BaseQuery from "../base/BaseQuery";

type User = {
  id: number;
  //username: string;
  email: string;
  password: string;
  is_premium: boolean;
  expiration?: string;
}

class UsersBase extends BaseQuery<User> {
  protected table = 'users'
  protected fields: User = {
    id: 0,
    // username: '',
    email: '',
    password: '',
    is_premium: false,
  }
  protected primaryKey: string = 'id'

  constructor() {
    super();
  }
}

export { UsersBase, User };
