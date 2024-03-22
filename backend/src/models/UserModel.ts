import SequelizeUser from '../database/models/SequelizeUser';
import { IUser } from '../interfaces/users/IUser';
import { IUserModel } from '../interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findById(userId: number): Promise<IUser | null> {
    const user = await this.model.findByPk(userId);
    return user;
  }

  async findByUsername(username: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { username } });
    return user;
  }
}
