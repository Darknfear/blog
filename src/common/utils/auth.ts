import * as jwt from 'jsonwebtoken';
import AuthEnv from "../../config/auth.config"; 

export const genToken = (payload: { userId: string, email: string }) => {
  const token = jwt.sign({ payload }, AuthEnv.JWT_SECRET, {
    expiresIn: "1d",
    encoding: "",
  });
  return token;
}

export const refreshToken = () => {}

export const verifyToken = () => {}
