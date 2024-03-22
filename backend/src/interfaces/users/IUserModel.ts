import { IUser } from './IUser';

export interface IUserModel {
  findById(userId: number): Promise<IUser | null>;
  findByUsername(username: string): Promise<IUser | null>
}
