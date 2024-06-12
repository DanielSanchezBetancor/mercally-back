import { UsersSettings } from "../../../../orm/UsersSettings/UsersSettings";
import { THEMES } from "../../../../orm/UsersSettings/UsersSettingsBase";
import { Users } from "../../../../orm/users/Users";
import { buildTestDB, executeEndpoint } from "../../../utils";

describe("Save Preferences Controller", () => {
  it("should not throw if nothing is sended", async () => {
    // Given
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', {});
    // Then
    expect(data.status).toBe(200);
    expect(res).toEqual({})
  });
  it("should update the theme", async () => {
    // Given
    const { userPreferences } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', { theme: "dark" });
    const newValue = await new UsersSettings().getAll();
    // Then
    expect(data.status).toBe(200);
    expect(res).toEqual({})
    expect(newValue[0].setting_value).not.toBe(userPreferences.setting_value);
    expect(newValue[0].setting_value).toBe(THEMES.DARK);
  });
  // it("should update the username", async () => {
  //   // Given
  //   const { user } = await buildTestDB();
  //   // When
  //   const { data, res } = await executeEndpoint('savePreferences', 'POST', { newUsername: "new-username" });
  //   const newValue = await new Users().getAllByField('id', user.id);
  //   // Then
  //   expect(data.status).toBe(200);
  //   expect(res).toEqual({})
  //   expect(newValue[0].username).toBe("new-username");
  // });
  it("should return error if email is the same", async () => {
    // Given
    const { user } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', { password: "password", new_email: user.email });
    // Then
    expect(data.status).toBe(500);
    expect(res).toHaveProperty("error");
    expect(res.error).toBe("New email is the same as the old one")
  });
  it("should update the email", async () => {
    // Given
    const { user } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', { password: "password", new_email: "new-email" });
    const newValue = await new Users().getAllByField('id', user.id);
    // Then
    expect(data.status).toBe(200);
    expect(res).toEqual({})
    expect(newValue[0].email).not.toBe(user.email)
    expect(newValue[0].email).toBe("new-email");
  });
  it("should return error if password is incorrect", async () => {
    // Given
    await buildTestDB();
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', { password: "wrong-password", new_password: "new-password" });
    // Then
    expect(data.status).toBe(500);
    expect(res).toHaveProperty("error");
    expect(res.error).toBe("Password is incorrect");
  });
  it("should return error if new password is the same as the old one", async () => {
    // Given
    const { user } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', { password: user.password, new_password: user.password });
    // Then
    expect(data.status).toBe(500);
    expect(res).toHaveProperty("error");
    expect(res.error).toBe("New password is the same as the old one");
  });
  it("should update the password", async () => {
    // Given
    const { user } = await buildTestDB();
    // When
    const { data, res } = await executeEndpoint('savePreferences', 'POST', { password: user.password, new_password: "new-password" });
    const newValue = await new Users().getAllByField('id', user.id);
    // Then
    expect(data.status).toBe(200);
    expect(res).toEqual({})
    expect(newValue[0].password).not.toBe(user.password)
    expect(newValue[0].password).toBe("new-password");
  });
});