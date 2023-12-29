import { ProductType, UserType } from './api';

export type MainContextType = {
  authorization: {
    user: UserType | undefined,
    setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>,
    getUser: (lastToken: string) => Promise<any>,
  }
  api: {
    products: ProductType[],
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
  }
};
