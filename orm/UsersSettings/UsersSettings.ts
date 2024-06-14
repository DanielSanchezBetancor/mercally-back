import { UserSettingKeys, UsersSettingsBase } from './UsersSettingsBase';

class UsersSettings extends UsersSettingsBase {
  constructor() {
    super();
  }

  async updateUserPreference(id_user: number, key: UserSettingKeys, value: string) {
    // voy a suponer que en este paso si existe
    await this.query(`UPDATE ${this.table} SET setting_value = '${value}' WHERE id_user = ${id_user} AND setting_key = '${key}'`)
  }
}

export { UsersSettings };