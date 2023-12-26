import { createContext } from 'react';
import { ProductsContextType } from '../types/productsContext';

const ProductsContext = createContext({} as ProductsContextType);

export default ProductsContext;
