import { FieldPacket, ResultSetHeader } from "mysql2";
import { UsersSettings } from "../../../orm/UsersSettings/UsersSettings";
import { THEMES, UserSettingKeys } from "../../../orm/UsersSettings/UsersSettingsBase";

function getOriginalUserSetting() {
  return {
    id_user: 1,
    key: UserSettingKeys.THEME,
    value: THEMES.DARK
  }
}

function mockUsersSettings() {
  const updateUserPreferenceSpy = jest.spyOn(UsersSettings.prototype, 'updateUserPreference').mockImplementation(async () => undefined)

  return {
    updateUserPreferenceSpy
  }
}

function mockQuery() {
  const querySpy = jest.spyOn(UsersSettings.prototype, 'query').mockImplementation(async () => [
    getOriginalUserSetting()
  ] as unknown as [ResultSetHeader, FieldPacket[]])

  return {
    querySpy
  }
}

export {
  mockUsersSettings,
  mockQuery,
  getOriginalUserSetting
}