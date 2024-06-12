import BaseQuery from "../base/BaseQuery";

type User = {
  id: number;
  email: string;
  password: string;
}

class UsersBase extends BaseQuery<User> {
  protected table = 'users'
  protected fields: User = {
    id: 0,
    email: '',
    password: '',
  }

  constructor() {
    super();
  }
}

export { UsersBase, User };
