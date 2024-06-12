import { Users } from "../../../../orm/users/Users";
import { buildTestDB } from "../../../utils";

describe("Users Test Suite", () => {
  it("should try to update the email", async () => {
    // Given
    const { user } = await buildTestDB()
    // When
    await new Users().updateEmail(user.id, "new-email");
    const newValue = await new Users().getAllByField('id', user.id);
    // Then
    expect(newValue[0].email).not.toBe(user.email)
    expect(newValue[0].email).toBe("new-email");
  });
  it("should try to update the password", async () => {
    // Given
    const { user } = await buildTestDB()
    // When
    await new Users().updatePassword(user.id, "new-password");
    const newValue = await new Users().getAllByField('id', user.id);
    // Then
    expect(newValue[0].password).not.toBe(user.password)
    expect(newValue[0].password).toBe("new-password");
  });
  it("should try to get the password", async () => {
    // Given
    const { user } = await buildTestDB()
    // When
    const password = await new Users().getPassword(user.id);
    // Then
    expect(password).toBe(user.password);
  });
  it("should try to get the email", async () => {
    // Given
    const { user } = await buildTestDB()
    // When
    const email = await new Users().getEmail(user.id);
    // Then
    expect(email).toBe(user.email);
  });
});
