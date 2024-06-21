import { User, UsersBase } from './UsersBase';

class Users extends UsersBase {
  constructor() {
    super();
  }

  // async updateUsername(id: number, username: string) {
  //   await this.query(`UPDATE ${this.table} SET username = '${username}' WHERE id = ${id}`)
  // }

  async updateEmail(id: number, email: string) {
    await this.query(`UPDATE ${this.table} SET email = '${email}' WHERE id = ${id}`)
  }

  async updatePassword(id: number, password: string) {
    await this.query(`UPDATE ${this.table} SET password = '${password}' WHERE id = ${id}`)
  }

  async getPassword(id: number) {
    const [ user ] = await this.query<Pick<User, 'password'>[]>(`SELECT password FROM ${this.table} WHERE id = ${id}`);

    return user[ 0 ].password;
  }

  async getEmail(id: number) {
    const [ user ] = await this.query<Pick<User, 'email'>[]>(`SELECT email FROM ${this.table} WHERE id = ${id}`);

    return user[ 0 ].email;
  }

  async getByEmail(email: string) {
    const [ user ] = await this.query<User[]>(`SELECT * FROM ${this.table} WHERE email = '${email}'`);

    return user[ 0 ];
  }

  async updateExpiration(id: number, expiration: string) {
    await this.query(`UPDATE ${this.table} SET expiration = '${expiration}' WHERE id = ${id}`)
  }

  async getExpiration(id: number) {
    const [ user ] = await this.query<Pick<User, 'expiration'>[]>(`SELECT expiration FROM ${this.table} WHERE id = ${id}`);

    return user[ 0 ].expiration;
  }
  
}

export { Users };
