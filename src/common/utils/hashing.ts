import { hash, compare } from 'bcrypt';
import AuthConfig from '../../config/auth.config';

export const encrypt = async (password: string): Promise<string> => {
  const hashString = await hash(password, AuthConfig.SALT);
  return hashString;
}

export const decrypt = async (planStr: string, hashStr: string) =>
  await compare(planStr, hashStr);
