import { ProductType, UserType } from './api';

export type MainContextType = {
  authorization: {
    isAuthorized: boolean,
    setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>,
  },
  api: {
    products: ProductType[],
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
    user: UserType | undefined,
    setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>,
  }
};
