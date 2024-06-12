import { savePreferencesController } from "../../../../controllers/user/savePreferencesController";
import { UserSettingKeys, THEMES } from "../../../../orm/UsersSettings/UsersSettingsBase";
import { mockExpress } from "../../../mocks/mock-express";
import { mockUsers } from "../../../mocks/orm/mock-users";
import { mockUsersSettings } from "../../../mocks/orm/mock-users-extras";

describe("Save Preferences Controller", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should not throw if nothing is sended", async () => {
    // Given
    const { Request, Response } = mockExpress();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(200);
  });
  it("should try to update the theme", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        theme: "dark"
      }
    });
    const { updateUserPreferenceSpy } = mockUsersSettings();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(200);
    expect(updateUserPreferenceSpy).toHaveBeenCalledTimes(1);
    expect(updateUserPreferenceSpy).toHaveBeenCalledWith(1, UserSettingKeys.THEME, THEMES.DARK);
  });
  // it("should try to update the username", async () => {
  //   // Given
  //   const { Request, Response } = mockExpress({
  //     body: {
  //       newUsername: "new-username"
  //     }
  //   });
  //   const { updateUsernameSpy } = mockUsers();
  //   // When
  //   await savePreferencesController(Request, Response);
  //   // Then
  //   expect(Response.status).toHaveBeenCalledWith(200);
  //   expect(updateUsernameSpy).toHaveBeenCalledTimes(1);
  //   expect(updateUsernameSpy).toHaveBeenCalledWith(1, "new-username");
  // });
  it("should return error if email is the same", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        password: "password",
        new_email: "email"
      }
    });
    const { getEmailSpy } = mockUsers();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.json.mock.calls[0][0].error).toBe('New email is the same as the old one');
    expect(getEmailSpy).toHaveBeenCalledTimes(1);
  });
  it("should try to update the email", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        password: "password",
        new_email: "new-email"
      }
    });
    const { getEmailSpy, updateEmailSpy } = mockUsers();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(200);
    expect(getEmailSpy).toHaveBeenCalledTimes(1);
    expect(updateEmailSpy).toHaveBeenCalledTimes(1);
    expect(updateEmailSpy).toHaveBeenCalledWith(1, "new-email");
  });
  it("should return error if password is incorrect", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        password: "incorrect-password",
        new_password: "new-password"
      }
    });
    const { getPasswordSpy } = mockUsers();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.json.mock.calls[0][0].error).toBe("Password is incorrect");
    expect(getPasswordSpy).toHaveBeenCalledTimes(1);
  });
  it("should return error if new password is the same as the old one", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        password: "password",
        new_password: "password"
      }
    });
    const { getPasswordSpy } = mockUsers();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(500);
    expect(Response.json.mock.calls[0][0]).toHaveProperty("error");
    expect(Response.json.mock.calls[0][0].error).toBe("New password is the same as the old one");
    expect(getPasswordSpy).toHaveBeenCalledTimes(1);
  });
  it("should try to update the password", async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        password: "password",
        new_password: "new-password"
      }
    });
    const { getPasswordSpy, updatePasswordSpy } = mockUsers();
    // When
    await savePreferencesController(Request, Response);
    // Then
    expect(Response.status).toHaveBeenCalledWith(200);
    expect(getPasswordSpy).toHaveBeenCalledTimes(1);
    expect(updatePasswordSpy).toHaveBeenCalledTimes(1);
    expect(updatePasswordSpy).toHaveBeenCalledWith(1, "new-password");
  });
});