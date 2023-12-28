import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ProductType, UserType } from '../types/api';
import { MainContextType } from '../types/mainContext';
import MainContext from './MainContext';
import useLocalStorage from '../hooks/useLocalStore';

type ProductsProviderProps = {
  children: React.ReactNode;
};

function ProductsProvider({ children }: ProductsProviderProps) {
  const [token, setToken] = useState('');
  const [storedToken] = useLocalStorage('token', '');
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setToken(storedToken);
  }, [storedToken]);

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

  const value: MainContextType = {
    authorization: {
      token,
      setToken,
    },
    api: {
      products,
      setProducts,
      users,
      setUsers,
    },
  };

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

export default ProductsProvider;
