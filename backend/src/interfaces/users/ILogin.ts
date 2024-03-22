import { JwtPayload } from 'jsonwebtoken';

export interface ILogin {
  username: string,
  password: string
}

export interface IToken {
  token: string,
}

export interface ILoginPayload extends JwtPayload {
  username: string
}
