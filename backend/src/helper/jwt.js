import jwt from "jsonwebtoken";
import tokenEnvironment from "../configs/db/environment/serverEnvironments.js";

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      nombre: user.nombre,
      usuario: user.usuario,
      rol_id: user.rol_id,
    },
    tokenEnvironment.SECRET_TOKEN_KEY,
    { expiresIn: tokenEnvironment.TOKEN_EXPIRATION }
  );
}

export function generateRefreshToken(user) {
  return jwt.sign(
    {
      id: user.id,
    },
    tokenEnvironment.SECRET_REFRESH_KEY,
    { expiresIn: tokenEnvironment.RESFRESH_TOKEN_EXPIRATION }
  );
}
