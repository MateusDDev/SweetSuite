import { UserType } from './UserTypes';

export type LoginType = {
  username: string,
  password: string,
};

export type LoginContextType = {
  isAuthenticated: boolean,
  user: UserType | null,
  login: (credentials: LoginType) => Promise<void>,
};
