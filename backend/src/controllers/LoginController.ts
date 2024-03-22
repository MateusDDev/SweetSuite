import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LoginController {
  constructor(
    private loginService = new LoginService(),
  ) {}

  async login(req: Request, res: Response): Promise<Response> {
    const loginCredendials = req.body;

    const { status, data } = await this.loginService.login(loginCredendials);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
