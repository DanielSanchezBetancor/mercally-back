import { Users } from "../../../../orm/users/Users";
import { getOriginalUser, mockQuery } from "../../../mocks/orm/mock-users";

describe("Users Test Suite", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should try to update the email", async () => {
    // Given
    const { querySpy } =  mockQuery();
    // When
    await new Users().updateEmail(1, "email");
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`UPDATE users SET email = 'email' WHERE id = 1`);
  });
  it("should try to update the password", async () => {
    // Given
    const { querySpy } = mockQuery();
    // When
    await new Users().updatePassword(1, "password");
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`UPDATE users SET password = 'password' WHERE id = 1`);
  });
  it("should try to get the password", async () => {
    // Given
    const { querySpy } = mockQuery();
    const originalUser = getOriginalUser();
    // When
    const password = await new Users().getPassword(1);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT password FROM users WHERE id = 1`);
    expect(password).toBe(originalUser.password);
  });
  it("should try to get the email", async () => {
    // Given
    const { querySpy } = mockQuery();
    const originalUser = getOriginalUser();
    // When
    const email = await new Users().getEmail(1);
    // Then
    expect(querySpy).toHaveBeenCalledTimes(1);
    expect(querySpy).toHaveBeenCalledWith(`SELECT email FROM users WHERE id = 1`);
    expect(email).toBe(originalUser.email);
  });
});
