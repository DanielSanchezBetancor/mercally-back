
import { UsersSettings } from "../../../../orm/UsersSettings/UsersSettings";
import { UserSettingKeys, THEMES } from "../../../../orm/UsersSettings/UsersSettingsBase";
import { buildTestDB } from "../../../utils";

describe("Users Settings Test Suite", () => {
  it("should update table base on valid key", async () => {
    // Given
    const { userPreferences } = await buildTestDB()
    // When
    await new UsersSettings().updateUserPreference(1, UserSettingKeys.THEME, THEMES.DARK);
    const newValue = await new UsersSettings().getAll();
    // Then
    expect(newValue[0].setting_value).not.toBe(userPreferences.setting_value);
    expect(newValue[0].setting_value).toBe(THEMES.DARK);
  });
});