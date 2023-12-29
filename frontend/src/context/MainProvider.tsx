import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ProductType, UserType } from '../types/api';
import { MainContextType } from '../types/mainContext';
import MainContext from './MainContext';

type MainProviderProps = {
  children: React.ReactNode;
};

function MainProvider({ children }: MainProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [user, setUser] = useState<UserType>();

  const getUser = async (lastToken: string) => {
    try {
      const { data } = await axios.get('http://localhost:5000/users/id', { headers: { Authorization: `Bearer ${lastToken}` } });
      return data;
    } catch ({ response }: any) {
      return console.error(response.data.message);
    }
  };

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
    },
  };

  return (
    <MainContext.Provider value={ value }>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
