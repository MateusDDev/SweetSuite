import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ProductType, UserType } from '../types/api';
import { MainContextType } from '../types/mainContext';
import MainContext from './MainContext';
import useLocalStorage from '../hooks/useLocalStore';

type MainProviderProps = {
  children: React.ReactNode;
};

function MainProvider({ children }: MainProviderProps) {
  const [token] = useLocalStorage('token', '');
  const [user, setUser] = useState<UserType>();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [queryData, setQueryData] = useState<ProductType[]>([]);

  const getUser = async (lastToken: string) => {
    try {
      const { data } = await axios.get('http://localhost:5000/user/', { headers: { Authorization: `Bearer ${lastToken}` } });
      return data;
    } catch ({ response }: any) {
      return console.error(response.data.message);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getUser(token);
      setUser(data);
    };
    fetch();
  }, [token]);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProducts]);

  const value: MainContextType = {
    authorization: {
      user,
      setUser,
      getUser,
    },
    api: {
      products,
      setProducts,
      queryData,
      setQueryData,
    },
  };

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
