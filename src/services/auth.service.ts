import User from "../common/entities/user.entity";
import { Repository } from "typeorm";
import { genToken } from "../common/auth/jwt";
import DBContext from "../database/database";
import { encrypt, decrypt } from "../common/utils/hashing";

export class AuthService {
  private readonly userRepository: Repository<User>;
  constructor() {
    this.userRepository = DBContext.getRepository(User);
  }

  async create(data: { email: string; password: string }) {
    data.password = await encrypt(data.password);
    return await this.userRepository.save(data);
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;
    // const userRepository = DBContext.getRepository(User);
    const user = await this.userRepository.findOneBy({ email: email });
    if (!user) {
      throw new Error();
    }

    const isPassword = await decrypt(password, user.password);
    if (!isPassword) {
      throw new Error();
    }

    const token = genToken({ userId: user.id, email: user.email });
    return {
      accessToken: token,
    };
  }
}
