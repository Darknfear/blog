import 'dotenv/config';

export default {
  SALT: Number(process.env.SALT) || 10,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_TIME: process.env.JWT_TIME || '1d'
};
