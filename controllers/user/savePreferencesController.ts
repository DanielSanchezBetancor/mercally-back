import { Request, Response } from 'express';
import { Users } from '../../orm/users/Users';
import { UsersSettings } from '../../orm/UsersSettings/UsersSettings';
import { THEMES, UserSettingKeys } from '../../orm/UsersSettings/UsersSettingsBase';


type Preferences = {
  theme?: string;
  // newUsername?: string;
  password?: string;
  new_password?: string;
  new_email?: string;
}

//fake
const id_user = 1;

// Convendria algun tipo de update generico por Key?
// La mayoria de validaciones vendran despues en una tarea concentrada en el usuario
// Adicionalmente, habra otro desarrollo enfocado en la seguridad
async function savePreferencesController(req: Request, res: Response) {
  const preferences: Preferences | null = req.body;
  // El usuario debe estar logueado para poder cambiar sus preferencias

  if (preferences?.theme) {
    // Suponemos que el usuario siempre tendra este valor, o sea, que se lo rellenamos al crear el usuario?
    const newTheme = preferences.theme !== THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    await new UsersSettings().updateUserPreference(id_user, UserSettingKeys.THEME, newTheme);
  }

  // if (preferences?.newUsername) {
  //   await new Users().updateUsername(id_user, preferences.newUsername);
  // }

  if (preferences?.password) {
    // Verificar que la contraseña sea correcta
    if (preferences?.new_email) {
      // Deberiamos enviar un email de confirmacion?
      const currentEmail = await new Users().getEmail(id_user);
      const error = emailValidations(currentEmail, preferences.new_email);

      if (error) {
        return res.status(500).json(error)
      }

      await new Users().updateEmail(id_user, preferences.new_email);
    }

    if (preferences?.new_password) {
      const currentPassword = await new Users().getPassword(id_user);
      const error = passwordValidations(currentPassword, preferences.password, preferences.new_password);

      if (error) {
        return res.status(500).json(error)
      }

      await new Users().updatePassword(id_user, preferences.new_password);
    }
  }

  res.status(200).json({})
}

function passwordValidations(currentPassword: string, password: string, newPassword: string) {
  if (currentPassword !== password) {
    return { error: 'Password is incorrect' };
  }
  if (password === newPassword) {
    return { error: 'New password is the same as the old one' };
  }

  return null;
}

function emailValidations(currentEmail: string, email: string) {
  if (currentEmail === email) {
    return { error: 'New email is the same as the old one' };
  }

  return null;
}
export { savePreferencesController }