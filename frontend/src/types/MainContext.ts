import { ProductType } from './ProductTypes';

export type MainContextType = {
  products: ProductType[],
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
  queryData: ProductType[],
  setQueryData: React.Dispatch<React.SetStateAction<ProductType[]>>,
};
