import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import { Users } from '../../orm/users/Users';
import bcrypt from "bcrypt"

async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;
  const JWT_SECRET = getEnvVar('JWT_SECRET')

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const user = await new Users().getByEmail(email);
  if (!user) {
    return res.status(400).json({ error: 'User not found' });
  }

  const isSamePassword = await bcrypt.compare(password, user.password);

  if (!isSamePassword) {
    return res.status(400).json({ error: 'Password is incorrect' });
  }

  const expiresIn = new Date().valueOf().toString();

  await new Users().updateExpiration(user.id, expiresIn);
  const token = JWT.sign({ userId: user.id, expiresIn }, JWT_SECRET, {
    expiresIn: '1h'
  });

  res.status(200).json({ token });
}

export { loginController };