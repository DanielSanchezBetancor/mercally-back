
import { UsersSettings } from "../../../../orm/UsersSettings/UsersSettings";
import { UserSettingKeys, THEMES } from "../../../../orm/UsersSettings/UsersSettingsBase";
import { mockQuery } from "../../../mocks/orm/mock-users-extras";

describe("Users Settings Test Suite", () => {
  it("should try to update table base on valid key", async () => {
    // Given
    const { querySpy } = mockQuery();
    // When
    await new UsersSettings().updateUserPreference(1, UserSettingKeys.THEME, THEMES.DARK);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`UPDATE users_settings SET setting_value = 'dark' WHERE id_user = 1 AND setting_key = 'theme'`);
  });
});