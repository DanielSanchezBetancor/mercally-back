import bcrypt from "bcrypt";
import { Request, Response } from 'express';
import { verifyAndDecodeToken } from '../../helpers/security';
import { UsersSettings } from '../../orm/UsersSettings/UsersSettings';
import { THEMES, UserSettingKeys } from '../../orm/UsersSettings/UsersSettingsBase';
import { Users } from '../../orm/users/Users';

type Preferences = {
  theme?: string;
  // newUsername?: string;
  password?: string;
  new_password?: string;
  new_email?: string;
}

async function savePreferencesController(req: Request, res: Response) {
  const preferences: Preferences | null = req.body;
  const token = verifyAndDecodeToken(req)

  if (!token) {
    return res.status(403).json({ error: 'Invalid token' });
  }

  if (!preferences) {
    return res.status(200).json({})
  }


  const { theme, password, new_password, new_email } = preferences;
  const { userId } = token;

  updateTheme(userId, theme);

  // Necesitamos esto?
  // if (newUsername) {
  //   await new Users().updateUsername(id_user, preferences.newUsername);
  // }

  if (password) {
    const error = await validatePassword(userId, password);

    if (error) {
      return res.status(500).json(error)
    }
    const emailError = updateEmail(Number(userId), new_email);

    if (emailError) {
      return res.status(500).json(emailError)
    }

    const passwordError = await updatePassword(userId, new_password);

    if (passwordError) {
      return res.status(500).json(passwordError)
    }
  }

  res.status(200).json({})
}

async function validatePassword(userId: string, password: string) {
  const user = await new Users().getByPk(userId);
  const isSamePassword = await bcrypt.compare(password, user.password);

  if (!isSamePassword) {
    return { error: 'Password is incorrect' };
  }
}

async function updateEmail(userId: number, newEmail?: string) {
  if (newEmail) {
    // Deberiamos enviar un email de confirmacion?
    const currentEmail = await new Users().getEmail(userId);

    if (currentEmail === newEmail) {
      return { error: 'New email is the same as the old one' };
    }

    await new Users().updateEmail(userId, newEmail);
  }
}

async function updatePassword(userId: string, newPassword?: string) {
  if (newPassword) {
    const currentPassword = await new Users().getPassword(Number(userId));
    const isSameAsOldPassword = await bcrypt.compare(newPassword, currentPassword);

    if (isSameAsOldPassword) {
      return { error: 'New password is the same as the old one' };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await new Users().updatePassword(Number(userId), hashedPassword);
  }
}

async function updateTheme(userId: string, theme?: string) {
  if (theme) {
    const newTheme = theme !== THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    await new UsersSettings().updateUserPreference(Number(userId), UserSettingKeys.THEME, newTheme);
  }
}

export { savePreferencesController };
