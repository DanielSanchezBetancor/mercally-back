import BaseQuery from "../base/BaseQuery";

enum THEMES {
  DARK = "dark",
  LIGHT = "light",
}

enum UserSettingKeys {
  THEME = "theme",
}

type UserSettingValues = THEMES;

type UserSetting = {
  id_user: number;
  setting_key: UserSettingKeys;
  setting_value: UserSettingValues
}

class UsersSettingsBase extends BaseQuery<UserSetting> {
  protected table = 'users_settings'
  protected fields: UserSetting = {
    id_user: 0,
    setting_key: UserSettingKeys.THEME,
    setting_value: THEMES.LIGHT,
  }

  constructor() {
    super();
  }
}

export { UsersSettingsBase, UserSettingKeys, THEMES, UserSetting };