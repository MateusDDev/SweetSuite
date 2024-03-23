import * as bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import { ILogin, ILoginPayload, IToken } from '../interfaces/ILogin';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';

export default class LoginService {
  constructor(
    private userModel = new UserModel(),
    private jwtService = JWT,
  ) {}

  private static validPassword(password: string, hash: string): boolean {
    if (!bcrypt.compareSync(password, hash)) return false;

    return true;
  }

  private static validUsername(username: string): boolean {
    if (username.length < 4) return false;

    return true;
  }

  async login({ username, password }: ILogin): Promise<ServiceResponse<IToken>> {
    if (!username || !password) {
      return { status: 'BAD_REQUEST', data: { message: 'All fields must be filled' },
      };
    }

    const user = await this.userModel.findByUsername(username);
    if (
      !user
        || !LoginService.validPassword(password, user.password)
        || !LoginService.validUsername(username)
    ) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid username or password' } };
    }

    const payload: ILoginPayload = {
      id: user.id,
    };

    const token = this.jwtService.sign(payload);

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
