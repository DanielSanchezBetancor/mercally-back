import { User } from '../../data/types/user';
import { UsersBase } from './UsersBase';

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
    const [user] = await this.query<Pick<User, 'password'>[]>(`SELECT password FROM ${this.table} WHERE id = ${id}`);

    return user[0].password;
  }

  async getEmail(id: number) {
    const [user] = await this.query<Pick<User, 'email'>[]>(`SELECT email FROM ${this.table} WHERE id = ${id}`);

    return user[0].email;
  }
}

export { Users };
