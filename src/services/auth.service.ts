import User from "../common/entities/user.entity";
import { Repository } from 'typeorm';
import DBContext from "../database/database";
import { encrypt } from '../common/utils/hashing';

export class AuthService {
  constructor() {}

  async create(data: { email: string, password: string }) {
    data.password = await encrypt(data.password);
    return await DBContext.getRepository(User).save(data);
  }
}
