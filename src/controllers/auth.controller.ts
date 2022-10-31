import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
export default class AuthController {
  private service: AuthService;
  constructor() {
    this.service = new AuthService();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    return res.json(await this.service.login({ email, password }));
  }

  async register(req: Request, res: Response) {
    // try {
    //   console.log(this);
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(this.service)
    const { email, password } = req.body;
    return res.json(await this.service.create({email, password}));
  }
}