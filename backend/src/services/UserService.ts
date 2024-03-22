import { ServiceResponse } from '../interfaces/ServiceResponse';
import UserModel from '../models/UserModel';
import { IUser } from '../interfaces/users/IUser';

export default class UserService {
  constructor(
    private userModel = new UserModel(),
  ) {}

  async findById(userId: number): Promise<ServiceResponse<IUser>> {
    const user = await this.userModel.findById(userId);

    if (!user) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'User not found' },
      };
    }

    return { status: 'SUCCESSFUL', data: user };
  }
}
