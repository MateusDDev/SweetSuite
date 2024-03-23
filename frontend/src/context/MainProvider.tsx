import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { MainContextType } from '../types/MainContext';
import MainContext from './MainContext';
import { ProductType } from '../types/ProductTypes';
import { requestData } from '../services/request';

type MainProviderProps = {
  children: React.ReactNode;
};

function MainProvider({ children }: MainProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [queryData, setQueryData] = useState<ProductType[]>([]);
  const getProducts = async () => {
    try {
      const prods = await requestData('/products');
      setProducts(prods);
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProducts]);

  const value: MainContextType = {
    products,
    setProducts,
    queryData,
    setQueryData,
  };

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
