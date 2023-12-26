import { ProductType } from './api';

export type ProductsContextType = {
  api: {
    products: ProductType[],
    setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>,
  }
};
