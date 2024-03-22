import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) {}

  async findUserById(_req: Request, res: Response): Promise<Response> {
    const { id } = res.locals.user;
    const { status, data } = await this.userService.findById(id);
    return res.status(mapStatusHTTP(status)).json(data);
  }
}
