import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ProductType } from '../types/api';
import { ProductsContextType } from '../types/productsContext';
import ProductsContext from './ProductsContext';

type ProductsProviderProps = {
  children: React.ReactNode;
};

function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products');
      setProducts(res.data);
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  const value: ProductsContextType = {
    api: {
      products,
      setProducts,
    },
  };

  return (
    <ProductsContext.Provider value={ value }>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
