import { ProductType, UserType } from './api';

export type MainContextType = {
  authorization: {
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>,
  },
  api: {
    products: ProductType[],
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
    users: UserType[],
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>,
  }
};
