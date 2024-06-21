import { Express, NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import { Users } from "../orm/users/Users";

type Token = JWT.VerifyOptions & { userId: string, expiresIn: string };

// Convertir a accion Next??
function disableExpressHeaders(app: Express) {
  // Dont let the server expose the fact that it is powered by Express
  app.disable('x-powered-by');
  app.use((_req, res, next) => {
    // Erase DNS prefetching
    res.setHeader('X-DNS-Prefetch-Control', 'off');
    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    // Cuando tengamos HTTPS
    // res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    // Cross-site scripting protection
    res.setHeader('X-XSS-Protection', '1; mode=block');

    next();
  });
}

function verifyAndDecodeToken(req: Request): Token | undefined {
  const JWT_SECRET = getEnvVar('JWT_SECRET')

  const token = req.headers.authorization;

  if (token) {
    const trimToken = token.replace('Bearer ', '');
    return JWT.verify(trimToken, JWT_SECRET) as Token;
  }
}

async function protectedController(req: Request, res: Response, next: NextFunction) {
  // I think library Devs hates people who use their libraries
  try {
    const token = verifyAndDecodeToken(req);

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { userId, expiresIn } = token;

    if (!expiresIn) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    const expiresInUser = await new Users().getExpiration(Number(userId));

    if (expiresIn !== expiresInUser) {
      return res.status(403).json({ error: 'Token expired' });
    }

    return next();
  } catch (e: any) {
    switch (e.name) {
      case 'TokenExpiredError':
        return res.status(403).json({ error: 'Token expired' });
      case 'JsonWebTokenError':
        return res.status(403).json({ error: 'Invalid token' });
      default:
        return res.status(500).json({ error: 'Unexpected error' });
    }
  }

}

export {
  Token,
  disableExpressHeaders,
  protectedController,
  verifyAndDecodeToken
}